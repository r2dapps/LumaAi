# Luma PWA package

Serve this folder from localhost or HTTPS. Use `index.html` as the app entry point.

The manifest and service worker provide the PWA shell/install experience. The browser's own WebLLM cache continues to own the model weights, so the service worker does not duplicate multi-GB AI model files.

Android/Chromium: when the browser exposes `beforeinstallprompt`, Luma shows an in-app Install button/banner.

iPhone/iPad: open the app in Safari, tap Share, then Add to Home Screen. iOS does not expose the Chromium `beforeinstallprompt` event.
