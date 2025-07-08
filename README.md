# 🧱Design System Repository

This repository contains the source of truth for design systems used across Pacific Programming and Tech Inc. It includes platform-agnostic design tokens, theme definitions, transformation tools, and documentation to support product consistency and scalability.

---

## 🔧 Structure

- `tokens/` – Design tokens exported from Tokens Studio, organized by product/system (e.g. Aurora, Luminis)
- `scripts/` – Python tools for transforming token files (e.g. flattening into theme.css)
- `docs/` _(optional)_ – Design decisions, token definitions, usage guides (planned)

Each product team contributes to and consumes the design system from this shared foundation.

---

## 🚀 Workflow

1. Design tokens are authored in **Figma** and managed using **Tokens Studio**
2. Tokens are synced via Git into system-specific folders (`tokens/aurora`, `tokens/luminis`)
3. Output transformations (like generating `theme.css`) are handled via Python scripts or CI pipelines
4. Each product team consumes the flattened output or raw JSON tokens in their projects

---

## 📌 Best Practices

- ✅ Use branches for feature-specific updates (e.g. `feature/tokens-aurora`)
- ✅ Keep Tokens Studio files untouched unless updating via sync
- ✅ Use `scripts/` for transforming tokens — do not commit outputs
- ❌ Do not manually edit JSON exports or overwrite synced folders

---

## 🧠 Maintainers

- **Design Systems Team** – Token governance, naming conventions, platform support
- **Frontend Platform Team** – Token consumption and automation integration
- **Product Squads** – System-specific ownership and implementation (e.g. Aurora, Luminis)

---

## 📈 Roadmap (Planned)

- Output preview and token visualization tools
- Linting and validation for synced tokens
- CDN integration for shared theme outputs
- Documentation for system-wide component styles and guidelines
