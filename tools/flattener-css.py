import json, re
from pathlib import Path

# === Load and flatten design tokens ===
def load_json(path): return json.load(path.open())

def flatten_tokens(data, path=[]):
    tokens = {"default": {}, "dark": {}}
    for key, val in data.items():
        current_path = path + [key]
        if isinstance(val, dict):
            if "value" in val and ("-default" in key or "-dark" in key):
                name = "--" + "-".join(path + [key.replace("-default", "").replace("-dark", "")])
                tokens["default" if key.endswith("-default") else "dark"][name] = val["value"]
            if "default" in val and "value" in val["default"]:
                tokens["default"]["--" + "-".join(current_path)] = val["default"]["value"]
            if "dark" in val and "value" in val["dark"]:
                tokens["dark"]["--" + "-".join(current_path)] = val["dark"]["value"]
            child = flatten_tokens(val, current_path)
            tokens["default"].update(child["default"])
            tokens["dark"].update(child["dark"])
    return tokens

# === Extract custom radii
def extract_custom_radii(data):
    tailwind_defaults = {
        "none": "0rem", "xs": "0.125rem", "sm": "0.25rem", "md": "0.375rem",
        "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "3xl": "1.5rem",
        "4xl": "2rem", "full": "999px"
    }
    def to_px(val): return float(val.replace("rem", "")) * 16 if "rem" in val else float(val.replace("px", ""))
    def is_diff(v1, v2): return abs(to_px(v1) - to_px(v2)) > 5
    rounded = data.get("rounded", {})
    output = {}
    for k, v in rounded.items():
        if "value" in v:
            match = re.match(r"([\d.]+)\s*\*?\s*{rem}", v["value"])
            if match:
                rem = f"{float(match.group(1))}rem"
                if k not in tailwind_defaults or is_diff(rem, tailwind_defaults[k]):
                    output[k] = rem
    return output

# === Color converters
def hex_to_hsl(hex_color):
    hex_color = hex_color.lstrip("#")[:6]
    if not re.match(r"^[0-9a-fA-F]{6}$", hex_color): return "0 0% 0%"
    try:
        r, g, b = [int(hex_color[i:i+2], 16) / 255.0 for i in (0, 2, 4)]
    except ValueError:
        return "0 0% 0%"
    max_c, min_c = max(r, g, b), min(r, g, b)
    l = (max_c + min_c) / 2
    if max_c == min_c: return f"0 0% {round(l*100)}%"
    d = max_c - min_c
    s = d / (2 - max_c - min_c) if l > 0.5 else d / (max_c + min_c)
    if max_c == r: h = ((g - b) / d + (6 if g < b else 0)) % 6
    elif max_c == g: h = (b - r) / d + 2
    else: h = (r - g) / d + 4
    return f"{round(h*60)} {round(s*100)}% {round(l*100)}%"

def rgba_to_hsl(rgba):
    m = re.match(r"rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)", rgba)
    if not m: return "0 0% 0%"
    try:
        r, g, b = [int(m.group(i)) / 255.0 for i in range(1, 4)]
        a = float(m.group(4))
    except ValueError:
        return "0 0% 0%"
    max_c, min_c = max(r,g,b), min(r,g,b)
    l = (max_c + min_c) / 2
    if max_c == min_c: h = s = 0
    else:
        d = max_c - min_c
        s = d / (2 - max_c - min_c) if l > 0.5 else d / (max_c + min_c)
        if max_c == r: h = ((g - b)/d + (6 if g < b else 0)) % 6
        elif max_c == g: h = (b - r)/d + 2
        else: h = (r - g)/d + 4
        h *= 60
    return f"{round(h)} {round(s*100)}% {round(l*100)}% / {round(a*100)}%"

def resolve(val, global_tokens):
    if isinstance(val, str):
        if val.startswith("{") and val.endswith("}"):
            ref = val.strip("{}")
            raw = global_tokens.get(ref, "#000000")
            return rgba_to_hsl(raw) if raw.startswith("rgba(") else hex_to_hsl(raw)
        elif val.startswith("rgba("): return rgba_to_hsl(val)
        elif val.startswith("#"): return hex_to_hsl(val)
    return val

# === Build theme.css with hsl() wrapping
def build_tailwind_theme_css(tokens, radii, global_tokens):
    lines = ["@theme {"]
    lines.append("  /* === Radius Tokens === */")
    for k, v in radii.items():
        lines.append(f"  --radius-{k}: {v};")
    lines.append("\n  /* === Color Tokens === */")
    for k, v in sorted(tokens["default"].items()):
        lines.append(f"  --color-{k.lstrip('-')}: hsl({resolve(v, global_tokens)});")
    lines.append("}")
    lines.append("@theme .dark {")
    lines.append("  /* === Color Tokens (Dark Mode) === */")
    for k, v in sorted(tokens["dark"].items()):
        lines.append(f"  --color-{k.lstrip('-')}: hsl({resolve(v, global_tokens)});")
    lines.append("}")
    return "\n".join(lines)

# === Load files using rglob
global_path = next(Path(".").rglob("Global.json"))
theme_files = sorted(Path(".").rglob("theme.*.json"))
radius_files = sorted(Path(".").rglob("radius.*.json"))

# === Load global tokens
global_tokens = {}
def recurse_global(d, path="color"):
    for k, v in d.items():
        key = f"{path}.{k}"
        if isinstance(v, dict) and "value" in v: global_tokens[key] = v["value"]
        elif isinstance(v, dict): recurse_global(v, key)
recurse_global(load_json(global_path)["color"])

# === Generate output
output_dir = Path("output")
output_dir.mkdir(exist_ok=True)

for theme_path in theme_files:
    theme_name = theme_path.stem.replace("theme.", "").lower()
    tokens = flatten_tokens(load_json(theme_path))

    for radius_path in radius_files:
        radius_name = radius_path.stem.replace("radius.", "").lower()
        radii = extract_custom_radii(load_json(radius_path))

        css = build_tailwind_theme_css(tokens, radii, global_tokens)

        out_folder = output_dir / f"{theme_name}-{radius_name}"
        out_folder.mkdir(parents=True, exist_ok=True)
        (out_folder / "theme.css").write_text(css)

        print(f"✅ {theme_name}-{radius_name}/theme.css")
