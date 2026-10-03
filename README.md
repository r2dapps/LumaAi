<div align="center">

# 🌟 Luma — Private Local AI Companion (v13)

**A browser-first, 100% private AI companion powered by WebGPU and local in-browser inference.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: Web / PWA](https://img.shields.io/badge/Platform-Web%20%7C%20PWA-teal.svg)](#-progressive-web-app-pwa)
[![Inference: WebGPU](https://img.shields.io/badge/Inference-WebGPU%20%2F%20WebLLM-purple.svg)](https://webllm.mlc.ai/)
[![Privacy: 100% Local](https://img.shields.io/badge/Privacy-100%25%20Client--Side-brightgreen.svg)](PRIVACY.md)
[![Compatibility](https://img.shields.io/badge/Compatibility-WebGPU%20%7C%20IndexedDB-orange.svg)](COMPATIBILITY.md)

[Overview](#-overview) • [GitHub Pages Deployment](#-github-pages-deployment) • [Quick Start](#-quick-start) • [Features & Phases](#-feature-coverage--phases) • [Model Lifecycle](#-model-lifecycle) • [Architecture](#-privacy--architecture)

</div>

---

## 📖 Overview

**Luma** is a browser-first, private AI companion. Companion state, conversations, memories, settings, and model metadata stay entirely within the browser. No application account, subscription, or centralized server database is required.

Utilizing **WebGPU** via WebLLM, Luma processes conversations locally on your hardware. Multi-gigabyte model weights are managed directly by WebLLM's browser cache (Cache API / Origin Private File System) without duplicating storage in the service worker shell.

---

## 🚀 GitHub Pages Deployment

1. **Push to Root**: Push the contents of this repository to the repository root (or the configured GitHub Pages publishing branch/root).
2. **Enable Pages**: In your repository settings under **Pages**, select branch `main` and root `/`.
3. **First-Time Online Visit**: Open your HTTPS Pages URL once while online so the PWA shell and runtime dependencies are cached.
4. **Complete Companion Setup**: Choose your companion persona, nickname, and greeting.
5. **Download Model**: Use **Settings → Model** to download a supported WebLLM model (e.g., Llama, Gemma, Qwen, Phi).
6. **Load & Chat**: Load the downloaded model and begin conversing.
7. **Offline Ready**: Reload and test offline; local inference runs completely without an active internet connection once weights and runtime assets are cached.

---

## 💻 Quick Start (Local Development)

Because Luma uses **WebGPU** and **Service Workers**, it must be served over `http://localhost` or a secure `https://` origin.

### 1. Clone the Repository
```bash
git clone https://github.com/r2dapps/LumaAi.git
cd LumaAi
```

### 2. Start a Local Server
**Using Node / npx:**
```bash
npx serve .
```

**Using Python 3:**
```bash
python -m http.server 8080
```

### 3. Open in a WebGPU Browser
Navigate to `http://localhost:8080` (or `http://localhost:3000`) in a supported browser:
- **Google Chrome** (v113+)
- **Microsoft Edge** (v113+)
- **Brave Browser**
- **Safari 18+** / macOS Sequoia / iOS 18+

---

## ✨ Feature Coverage & Phases

- **Phase 1–2 (Companion Intelligence & Memory)**: Persistent long-term facts, contextual memory summarization, relationship progression, custom vocabulary, and personality consistency (preventing persona drift).
- **Phase 3 (Local-First Speech & Audio)**: Browser-native local speech recognition, voice personalities, push-to-talk & continuous listening controls, and streaming sentence TTS.
- **Phase 4 (Model Management & Fallbacks)**: In-app model catalogue, download/cache manager, hardware benchmarks, context length controls, and experimental WASM fallback.
- **Phase 5 (Chat Interactions & Rich Rendering)**: Markdown formatting, syntax-highlighted code blocks, tables, LaTeX math, image rendering, and message export.
- **Phase 6 (Customization)**: Custom themes (dark/light), typography, custom companion avatars, and tone parameters.
- **Phase 7 (Durable Local Storage)**: Structured IndexedDB storage with automatic localStorage recovery.
- **Phase 8 (LAN / PC Mode)**: Optional LAN routing to Ollama / OpenAI-compatible local servers.
- **Phase 9 (PWA & Distribution)**: Installable standalone PWA shell with background update checks and offline execution.

---

## 🧠 Model Lifecycle

Downloaded models are cleanly decoupled from the model catalogue:
- **Actions**: Each model supports **Download**, **Load**, **Unload**, and **Delete** actions.
- **Single Active Instance**: Exactly one WebLLM model is loaded into VRAM/RAM at a time to prevent resource exhaustion.
- **Persistent Registry**: Luma persists a local model registry in IndexedDB so browser restarts never erase download records.

---

## 🎙️ Local-First Voice

The local-only speech setting never silently falls back to remote recognition:
- **Speech Recognition**: Uses browser-native on-device SpeechRecognition where available (`processLocally`, `available()`, and language pack installation).
- **Speech Synthesis**: Hardware device speech synthesis powers instant read-aloud and sentence-level streaming TTS while the model generates text.

---

## 🌐 LAN / PC Mode

Data settings include optional **Ollama** or **OpenAI-compatible** LAN routing:
- Connect directly to local servers running on your home network or PC.
- Configure your local server's CORS policy.
- *Note:* HTTPS origins (like GitHub Pages) enforce browser mixed-content restrictions and cannot directly call `http://` LAN endpoints; use an HTTPS endpoint or run Luma via a local HTTP origin.

---

## ⚙️ Experimental WASM Fallback

An optional Wllama / llama.cpp browser fallback can be configured with custom GGUF URLs. Useful for devices lacking WebGPU support. For production offline use, self-host the GGUF model and WASM runtime assets.

---

## 🛡️ Privacy & Architecture

| Component | Handling | Storage Location |
| :--- | :--- | :--- |
| **Model Inference** | WebLLM / WebGPU execution | Local GPU / VRAM |
| **Chat History & State** | IndexedDB with localStorage fallback | User's browser profile |
| **Companion Memories** | Local companion memory store | Device storage only |
| **Model Weights** | Browser Cache Storage / OPFS | Local disk (WebLLM cache) |
| **Telemetry / Tracking** | None | 0% external calls |

Detailed privacy guarantees can be found in [PRIVACY.md](PRIVACY.md). For hardware and platform specifics, see [COMPATIBILITY.md](COMPATIBILITY.md) and [CROSS_TEST_REPORT.md](CROSS_TEST_REPORT.md).

---

## 📂 Repository Layout

```
LumaAi/
├── index.html               # Main v13 application shell & WebLLM client
├── sw.js                    # Service worker for v13 shell caching & offline support
├── manifest.webmanifest     # PWA manifest configuration
├── robots.txt               # Web crawler instructions
├── .nojekyll                # GitHub Pages Jekyll bypass
├── icons/                   # High-resolution application icons
│   ├── icon-192.png
│   ├── icon-512.png
│   └── apple-touch-icon.png
├── docs/                    # Architectural docs & setup guides
│   ├── PWA.md               # Progressive Web App details
│   └── ROADMAP.md           # Engineering roadmap
├── archive/                 # Historical prototypes & standalone builds
│   └── Luma_Companion_SEO.html
├── COMPATIBILITY.md         # Hardware & browser support specifications
├── CROSS_TEST_REPORT.md     # Cross-device & browser verification test log
├── PRIVACY.md               # Privacy statement & data boundary rules
├── THIRD-PARTY-NOTICES.md   # Third-party notices and licenses
├── LICENSE                  # MIT License
├── .gitignore               # Standard git ignore rules
└── README.md                # Project documentation
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Third-party runtime dependencies and notices are documented in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
