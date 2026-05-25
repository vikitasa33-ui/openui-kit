# OpenUI Kit

> A lightweight, accessible, zero-dependency UI component library built with pure HTML, CSS, and JavaScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Components](https://img.shields.io/badge/Components-20%2B-purple)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)

---

## ✨ Features

- **Zero dependencies** — No npm, no build tools, no frameworks required
- **20+ components** — Buttons, cards, forms, alerts, badges, avatars, tooltips, progress bars, and more
- **Accessible** — ARIA attributes and keyboard navigation built in
- **Dark theme** — Beautiful dark UI with CSS custom properties (easy to customize)
- **Cross-browser** — Works on Chrome, Firefox, Safari, Edge, and modern mobile browsers
- **Responsive** — Mobile-first design that adapts to any screen size

---

## 🚀 Quick Start

```html
<!-- 1. Add the stylesheet -->
<link rel="stylesheet" href="css/openui.css" />

<!-- 2. Add fonts (optional but recommended) -->
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

<!-- 3. Add the script before </body> -->
<script src="js/openui.js"></script>
```

That's it! No npm install, no webpack, no configuration.

---

## 📦 Components

| Component | Description |
|-----------|-------------|
| **Buttons** | Primary, secondary, outline, ghost, danger, success, sizes, pill, icon, loading |
| **Badges** | Status labels, dot indicators, count badges |
| **Cards** | Default, highlighted, with badges |
| **Alerts** | Info, success, warning, danger (click to dismiss) |
| **Forms** | Inputs, textarea, select, checkbox, radio, toggle switch |
| **Progress** | Progress bars with color variants + spinners + dot loaders |
| **Tooltips** | Top, bottom, dark variants |
| **Avatars** | Sizes, colors, avatar groups |

---

## 🧩 Usage Examples

### Button
```html
<button class="btn btn-primary">Click me</button>
<button class="btn btn-outline btn-lg">Large Outline</button>
<button class="btn btn-primary btn-loading">Loading...</button>
```

### Badge
```html
<span class="badge badge-success">Active</span>
<span class="badge badge-danger">Error</span>
```

### Alert
```html
<div class="alert alert-success">✅ Saved successfully!</div>
<div class="alert alert-warning">⚠️ Please review before submitting.</div>
```

### Toggle Switch
```html
<label class="toggle">
  <input type="checkbox" checked />
  <span class="toggle-slider"></span>
  <span>Enable notifications</span>
</label>
```

### Progress Bar
```html
<div class="progress">
  <div class="progress-bar" style="width: 75%"></div>
</div>
```

---

## 🎨 Customization

All colors and styles are controlled via CSS custom properties. Override them in your stylesheet:

```css
:root {
  --accent: #your-brand-color;
  --color-bg: #your-background;
  --font-body: 'Your Font', sans-serif;
}
```

---

## 🌐 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome 80+ | ✅ |
| Firefox 78+ | ✅ |
| Safari 14+ | ✅ |
| Edge 80+ | ✅ |
| iOS Safari 14+ | ✅ |
| Android Chrome | ✅ |

Cross-browser testing powered by **[BrowserStack Open Source](https://www.browserstack.com/open-source)**.

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) first.

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-component`
3. Commit your changes: `git commit -m 'Add: new component'`
4. Push: `git push origin feature/my-component`
5. Open a Pull Request

---

## 📄 License

MIT © 2024 — Free to use in personal and commercial projects.

---

## 🌐 Browser Testing

This project is tested with BrowserStack.

## 💙 Acknowledgements

Thanks to the open source community and [BrowserStack](https://www.browserstack.com) for supporting open source projects with free cross-browser testing.
