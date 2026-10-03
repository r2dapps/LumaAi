# Compatibility

**WebGPU:** Required for the normal WebLLM local model path. Browser/GPU support and performance vary.

**IndexedDB:** Used for durable structured local state, with localStorage recovery data.

**Speech:** Web Speech input is browser dependent. On-device recognition using `processLocally`, `available()` and `install()` is experimental.

**PWA:** Chromium browsers can expose the in-page `beforeinstallprompt` flow. iOS/iPadOS uses the Safari Share → Add to Home Screen flow instead.

**Offline:** The PWA shell can be cached by the service worker after first visit. WebLLM model and required runtime artifacts must separately be cached before offline local inference can work.
