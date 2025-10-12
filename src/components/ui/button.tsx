"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "fancy" | "fancy-outline";
};

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 hover:cursor-pointer select-none";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    // Solid foreground button
    default: "bg-foreground text-background hover:opacity-90",
    // Light outline button
    outline:
      "border border-gray-300 text-foreground bg-background hover:bg-gray-100",
    // Solid with subtle multi-stop vertical shading + inner split lines + thin border & shadow
    fancy: [
      "relative",
      // Base colors
      "bg-foreground text-background",
      // Vertical subtle lighten->clear->dark overlay (overall slightly lighter look)
      "bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0)_50%,rgba(0,0,0,0.12))]",
      // Thicker inner top/bottom lines via inset shadows (2px)
      "shadow-[inset_0_2px_0_rgba(255,255,255,0.22),inset_0_-2px_0_rgba(0,0,0,0.30),0_1px_2px_rgba(0,0,0,0.06)]",
      // Hairline border
      "border border-neutral-800/30",
      // Hover nuance
      "hover:opacity-87",
    ].join(" "),
    // Outline version with same overlays on a light surface
    "fancy-outline": [
      "relative",
      "text-foreground bg-background",
      // Darker top that fades to lighter bottom (subtle)
      "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08),rgba(0,0,0,0)_55%,rgba(255,255,255,0.20))]",
      // Thicker inner lines: brighter top and darker 2px bottom for contrast
      "shadow-[inset_0_2px_0_rgba(255,255,255,0.60),inset_0_-2px_0_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]",
      "border border-neutral-300/90",
      "hover:bg-gray-100",
    ].join(" "),
  };
  return (
    <button
      className={twMerge(base, variants[variant], className)}
      {...props}
    />
  );
}
