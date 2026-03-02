"use client";

import { useEffect } from "react";

export function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/openclawagency/30min?hide_event_type_details=1&hide_gdpr_banner=1"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
