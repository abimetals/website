"use client";

import { useEffect } from "react";

export default function FilloutEmbed({
  filloutId = "1zoaTZHvJYus",
}: {
  filloutId?: string;
}) {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://server.fillout.com/embed/v1/"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="fillout-embed w-full leading-none [&_iframe]:!block [&_iframe]:!align-top"
      data-fillout-id={filloutId}
      data-fillout-embed-type="standard"
      data-fillout-inherit-parameters
      data-fillout-dynamic-resize
    />
  );
}
