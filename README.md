
## 📖 Speed Reader Chrome Extension

Speed Reader is a Chrome extension that helps you read web content faster by displaying words one-by-one in a pop-up modal with adjustable speed. Ideal for speed-reading practice and focused reading experiences.

---

### 🚀 Features

* 🖱 **Activate by hovering** over any paragraph
* 🔘 **Click "Start Reading"** to begin word-by-word display
* 🔢 **Adjustable speed** via multipliers (`1x` to `5x`)
* ⏸ **Pause / Resume** reading with button or `Space` key
* ❌ **Cancel** reading with button or `Esc` key
* 📊 **Live progress indicator** (e.g., `14 / 80`)
* 🖱 **Draggable and resizable** modal window

---

### 📁 Project Structure

```
speed-reader-extension/
├── manifest.json
├── content.js
├── style.css
└── icons/
    ├── icon16.png
    ├── icon32.png
    ├── icon192.png
    └── icon512.png
```

---

### 🧩 How to Install Locally

1. Clone or download the repo
2. Open Chrome and go to: `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **“Load unpacked”**
5. Select the `speed-reader-extension/` folder

---

### 🛠 How to Use

1. Visit any web page with paragraphs (e.g., Wikipedia)
2. Hover over a paragraph → a **"Start Reading"** button appears
3. Click the button → the speed-reader modal will appear
4. Use:

   * **Speed dropdown** to adjust pace (1x to 5x)
   * **Pause/Resume** button or `Space` key
   * **Cancel** button or `Esc` key
5. Drag or resize the modal freely on screen

---

### 🧪 Keyboard Shortcuts

| Action       | Shortcut |
| ------------ | -------- |
| Pause/Resume | `Space`  |
| Cancel       | `Escape` |

---

### 📦 To Package for Release

1. Zip the contents of the extension folder (`manifest.json`, etc.)
2. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
3. Click **Publish New Item**
4. Upload your `.zip` file and follow the steps

---

### 📜 License

MIT License – Free to use, modify, and share.
