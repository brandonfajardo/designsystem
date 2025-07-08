# Aurora Design Tokens

This folder contains **Aurora-specific design tokens** exported from Tokens Studio and managed under version control.

These tokens define the visual identity of the Aurora product/system — including colors, radii, spacing, and theme values.

---

## 📁 Contents

This folder may contain:

- `Global.json` – core Aurora values (colors, etc.)
- `theme.Aurora.json` – theme mappings (semantic structure)
- `radius.*.json` – radius variants (e.g. Sharp, Rounded)
- Other dimension or typography files

---

## 🔄 Sync Behavior

This folder is automatically synced from Tokens Studio using Azure DevOps two-way sync.

Changes here may originate from:
- Designers exporting tokens from Figma
- Version updates pushed by design system maintainers

---

## 🎯 Purpose

Tokens in this folder are used to:
- Drive consistent styling across Aurora apps
- Generate Tailwind-compatible `theme.css` outputs
- Feed into future pipelines and CDN publication

---

## 🚫 Do Not

- Manually flatten or modify token references here
- Add outputs like `theme.css` or `tailwind.config.js` — those go in build outputs
- Move or rename files without updating the pipeline reference

---

## 📍 Notes

- Refer to the root `README.md` for overall process and pipeline instructions.
- This folder is the canonical location for Aurora's token source of truth.
