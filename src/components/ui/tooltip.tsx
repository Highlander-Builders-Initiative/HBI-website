"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";
import { createPortal } from "react-dom";

export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  className?: string;
  triggerClassName?: string;
  placement?: "top" | "bottom";
  container?: HTMLElement | null;
}

export function Tooltip({
  children,
  content,
  className,
  triggerClassName,
  placement = "top",
  container,
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const [isClient, setIsClient] = React.useState(false);
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const [portalEl, setPortalEl] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // Resolve portal container once client-side and when inputs change
  React.useEffect(() => {
    if (!isClient) return;
    const resolved =
      container ??
      (triggerRef.current?.closest("dialog") as HTMLElement | null) ??
      document.body;
    setPortalEl(resolved);
  }, [container, isClient]);

  const handleMouseEnter = () => {
    if (triggerRef.current) {
      // Resolve portal target if not explicitly provided
      const resolvedContainer =
        container ??
        (triggerRef.current.closest("dialog") as HTMLElement | null) ??
        document.body;
      setPortalEl(resolvedContainer);

      const triggerRect = triggerRef.current.getBoundingClientRect();
      if (resolvedContainer && resolvedContainer !== document.body) {
        // Position relative to the dialog container (which has transforms)
        const parentRect = resolvedContainer.getBoundingClientRect();
        setPosition({
          top:
            placement === "top"
              ? triggerRect.top - parentRect.top - 8
              : triggerRect.bottom - parentRect.top + 8,
          left: triggerRect.left - parentRect.left + triggerRect.width / 2,
        });
      } else {
        // Position relative to the viewport
        setPosition({
          top:
            placement === "top" ? triggerRect.top - 8 : triggerRect.bottom + 8,
          left: triggerRect.left + triggerRect.width / 2,
        });
      }
    }
    setIsVisible(true);
  };

  const handleMouseLeave = () => setIsVisible(false);

  const isInDialog = portalEl && portalEl !== document.body;
  const tooltipElement =
    isVisible && isClient ? (
      <div
        className={twMerge(
          placement === "top"
            ? `${isInDialog ? "absolute" : "fixed"} -translate-x-1/2 -translate-y-full transform`
            : `${isInDialog ? "absolute" : "fixed"} -translate-x-1/2 transform`,
          "rounded-md border border-neutral-500 bg-black/70 px-1.5 py-0.5 text-center text-xs text-white backdrop-blur-xs",
          "pointer-events-none z-[9999] max-w-64 break-words whitespace-pre-wrap",
          className,
        )}
        style={{
          top: placement === "top" ? position.top + 4 : position.top - 4,
          left: position.left,
        }}
      >
        {content}
        {/* Arrow */}
        {placement === "top" ? (
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-t-4 border-r-4 border-l-4 border-transparent border-t-neutral-500"></div>
        ) : (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-r-4 border-b-4 border-l-4 border-transparent border-b-neutral-500"></div>
        )}
      </div>
    ) : null;

  return (
    <>
      <div
        ref={triggerRef}
        className={twMerge("relative", triggerClassName)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isClient && createPortal(tooltipElement, portalEl ?? document.body)}
    </>
  );
}
