"use client";

import { useEffect } from "react";

const MODEL_VIEWER_SRC =
  "https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js";

/**
 * Injects the <model-viewer> web component (an ES module) once, globally.
 * Loading it here means every product page can use the element without
 * re-registering the custom element.
 */
export function ModelViewerLoader() {
  useEffect(() => {
    if (customElements.get("model-viewer")) return;
    if (document.querySelector('script[data-model-viewer="true"]')) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src = MODEL_VIEWER_SRC;
    script.dataset.modelViewer = "true";
    document.head.appendChild(script);
  }, []);

  return null;
}
