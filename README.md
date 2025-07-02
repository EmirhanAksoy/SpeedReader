![apple-touch-icon](https://github.com/user-attachments/assets/9c346701-76ca-4fae-ba81-20e290aae902)



https://github.com/user-attachments/assets/cf0dc547-f416-4e2c-b71c-3d9675a051b9



## 📖 Speed Reader Chrome Extension

Speed Reader is a Chrome extension that helps you read web content faster by displaying words one-by-one in a pop-up modal with adjustable speed. Ideal for speed-reading practice and focused reading experiences.

---

### 🚀 Features

* 🖱 **Activate by hovering** over any text element (paragraphs, divs, headings, list items, etc.)
* 📊 **Smart word count detection** - only shows button for text with enough content (configurable, default 30 words)
* 🔘 **Click "Start Reading"** to begin word-by-word display
* 🔢 **Adjustable speed** via multipliers (`1x` to `5x`)
* ⏸ **Pause / Resume** reading with button or `Space` key
* ❌ **Cancel** reading with button or `Esc` key
* 📊 **Live progress indicator** (e.g., `14 / 80`)
* 🖱 **Draggable and resizable** modal window
* ⚙️ **Configurable settings** - minimum word count, enable/disable functionality
* ⌨️ **Quick toggle** with `Ctrl + Shift + R` keyboard shortcut
* 🏷️ **Supports multiple HTML tags**: paragraphs, divs, spans, headings (h1-h6), list items, table cells, articles, sections, blockquotes, and code blocks

---

### 📁 Project Structure

```
speed-reader-extension/
├── manifest.json
├── content.js
├── style.css
├── options.html
├── options.js
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

1. Visit any web page with text content (e.g., Wikipedia, blogs, news sites)
2. Hover over text elements with sufficient content → a **"Start Reading"** button appears
   * Works with paragraphs, divs, headings, list items, and other text elements
   * Only appears for text with at least 30 words (configurable in settings)
3. Click the button → the speed-reader modal will appear
4. Use:

   * **Speed dropdown** to adjust pace (1x to 5x)
   * **Pause/Resume** button or `Space` key
   * **Cancel** button or `Esc` key
5. Drag or resize the modal freely on screen

**Configuration:**
* Right-click the extension icon and select "Options" to configure settings
* Use `Ctrl + Shift + R` to quickly enable/disable the extension on any page

---

### 🧪 Keyboard Shortcuts

| Action           | Shortcut           |
| ---------------- | ------------------ |
| Pause/Resume     | `Space`            |
| Cancel           | `Escape`           |
| Toggle Extension | `Ctrl + Shift + R` |

---

### 📦 To Package for Release

1. Zip the contents of the extension folder (`manifest.json`, etc.)
2. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
3. Click **Publish New Item**
4. Upload your `.zip` file and follow the steps

---

### 📜 License

MIT License – Free to use, modify, and share.
