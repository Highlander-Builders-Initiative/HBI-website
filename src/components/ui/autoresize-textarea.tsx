"use client";

import React, { useRef, useEffect, type TextareaHTMLAttributes } from "react";

interface AutoResizeTextareaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "onChange"
  > {
  value: string;
  onChange: (value: string) => void;
}

export function AutoResizeTextarea({
  className,
  value,
  onChange,
  ...props
}: AutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const next = textarea.scrollHeight;
      // Respect CSS max-height if present
      let applied = next;
      try {
        const cs = window.getComputedStyle(textarea);
        const maxH = parseFloat(cs.maxHeight || "0");
        if (!Number.isNaN(maxH) && maxH > 0) {
          applied = Math.min(next, maxH);
        }
      } catch {}
      // Apply measured (or capped) height
      textarea.style.height = `${applied}px`;
      // Enforce CSS min-height as a floor in case scrollHeight is 0 on mount/transition
      try {
        const cs = window.getComputedStyle(textarea);
        const minH = parseFloat(cs.minHeight || "0");
        const current = parseFloat(textarea.style.height || "0");
        if (!Number.isNaN(minH) && minH > 0 && current < minH) {
          textarea.style.height = `${minH}px`;
        }
      } catch {}
      // If content exceeds the applied height (i.e., we hit max-height), allow vertical scrolling
      textarea.style.overflowY = next > applied ? "auto" : "hidden";
    }
  };

  useEffect(() => {
    resizeTextarea();
  }, [value]);

  // Also resize once after mount (next frame) to capture accurate layout when inside dialogs/portals
  useEffect(() => {
    const id = requestAnimationFrame(resizeTextarea);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <textarea
      {...props}
      value={value}
      ref={textareaRef}
      rows={1}
      onChange={(e) => {
        onChange(e.target.value);
        resizeTextarea();
      }}
      onFocus={resizeTextarea}
      className={`max-h-80 min-h-4 resize-none ${className ?? ""}`}
    />
  );
}
