<div align="center">

# 🌟 Luma — Private Local AI Companion

**A 100% private, client-side AI companion powered by WebGPU and local in-browser inference.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: Web / PWA](https://img.shields.io/badge/Platform-Web%20%7C%20PWA-teal.svg)](#progressive-web-app-pwa)
[![Inference: WebGPU](https://img.shields.io/badge/Inference-WebGPU%20%2F%20WebLLM-purple.svg)](https://webllm.mlc.ai/)
[![Privacy: 100% Local](https://img.shields.io/badge/Privacy-100%25%20Client--Side-brightgreen.svg)](#privacy--architecture)

[Features](#-key-features) • [Quick Start](#-quick-start) • [PWA Installation](#-progressive-web-app-pwa) • [Architecture](#-privacy--architecture) • [Roadmap](#-roadmap)

</div>

---

## 📖 Overview

**Luma** is a private, intelligent companion application designed to run state-of-the-art open language models directly inside your web browser. Utilizing **WebGPU** via WebLLM, Luma processes conversations entirely on your local hardware—delivering instant responses without cloud servers, subscription fees, or data collection.

Conversations, companion personas, memories, and voice preferences remain completely private and stored locally on your device.

---

## ✨ Key Features

- **🔒 100% Client-Side & Private**: All model inference and data storage happen locally in your browser. Zero telemetry, zero external logging, and no accounts required.
- **⚡ WebGPU Accelerated**: Near-native inference speeds using your device's GPU through the browser's WebGPU API.
- **🧠 Persistent Companion Memory**: Stores long-term user facts, preferences, and relationship milestones locally in your browser so Luma remembers details across conversations.
- **🎙️ Speech & Voice Interaction**: Hands-free conversation with real-time speech-to-text input and natural browser text-to-speech playback.
- **📱 Installable Progressive Web App (PWA)**: Works as a standalone desktop or mobile application with offline shell caching via Service Worker.
- **🎨 Sleek, Modern Interface**: ChatGPT-inspired clean UI supporting both dark and light modes, responsive mobile layouts, and custom companion avatars.
- **🎛️ Model Flexibility**: Seamlessly select and run supported open-weights models (such as Llama, Gemma, Qwen, and Phi variants) with local caching.

---

## 📂 Repository Structure

```
LumaAi/
├── index.html               # Main application entry point & UI shell
├── sw.js                    # Service Worker for PWA shell caching & offline support
├── manifest.webmanifest     # PWA manifest configuration
├── icons/                   # Application icons & touch targets
│   ├── icon-192.png
│   ├── icon-512.png
│   └── apple-touch-icon.png
├── docs/                    # Project documentation & guides
│   ├── PWA.md               # Progressive Web App setup & install guide
│   └── ROADMAP.md           # Companion intelligence & feature roadmap
├── archive/                 # Historical prototypes & standalone variants
│   └── Luma_Companion_SEO.html
├── .gitignore               # Standard repository ignore rules
└── README.md                # Project documentation
```

---

## 🚀 Quick Start

Because Luma uses **WebGPU** and **Service Workers**, it must be served over `http://localhost` or a secure `https://` origin.

### 1. Clone the Repository
```bash
git clone https://github.com/r2dapps/LumaAi.git
cd LumaAi
```

### 2. Start a Local Server
You can use any static web server:

**Using Node / npx:**
```bash
npx serve .
```

**Using Python 3:**
```bash
python -m http.server 8080
```

**Using VS Code:**
- Install the **Live Server** extension.
- Right-click `index.html` and choose **Open with Live Server**.

### 3. Open in a WebGPU-Compatible Browser
Navigate to `http://localhost:8080` (or the port shown by your server) in a supported browser:
- **Google Chrome** (v113+)
- **Microsoft Edge** (v113+)
- **Brave Browser**
- **Safari 18+** / macOS Sequoia / iOS 18+

---

## 📱 Progressive Web App (PWA)

Luma is packaged as a Progressive Web App (PWA) with a lightweight offline shell:

- **Desktop (Chrome/Edge/Brave)**: Click the install icon in the address bar or the in-app install prompt to install Luma as a native desktop window.
- **Android**: Tap the in-app "Install" banner or use Chrome's **Add to Home screen** option.
- **iOS / iPadOS**: Open the app in Safari, tap the **Share** button, and select **Add to Home Screen**.

> 💡 *Note: Model weights are managed and cached by the browser's WebLLM cache (Cache API / Origin Private File System) so that multi-gigabyte models are not redundantly duplicated.*

For detailed PWA configuration notes, see [docs/PWA.md](docs/PWA.md).

---

## 🛡️ Privacy & Architecture

| Component | Handling | Location |
| :--- | :--- | :--- |
| **Model Inference** | WebLLM / WebGPU execution | Local GPU / VRAM |
| **Chat History** | IndexedDB / LocalStorage | User's browser profile |
| **Memory & Facts** | Companion Memory Store | Local device only |
| **Model Weights** | Browser Cache Storage / OPFS | Local disk |
| **Telemetry / Tracking** | None | 0% external calls |

---

## 🗺️ Roadmap

Luma's active development plan focuses on deepening companion intelligence, natural conversation initiative, and local speech synthesis.

Refer to the full engineering roadmap in [docs/ROADMAP.md](docs/ROADMAP.md):
- **Phase 1**: Companion Intelligence (Persistent memory, contextual memory summarization, persona consistency).
- **Phase 2**: Human-like Behavior (Initiative topics, relationship progression, contextual nicknames).
- **Phase 3**: Enhanced Voice (Local Whisper/WebGPU STT, streaming TTS, custom voice personalities).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
