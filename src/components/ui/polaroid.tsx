"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { useRef, useState } from "react";
import { Cursor } from "@/components/ui/cursor";
import { AnimatePresence, motion } from "motion/react";

const sharpieFont = localFont({
  src: "../../fonts/sharpie/Sharpie.ttf",
});

const sfFont = localFont({
  src: "../../fonts/sfpro/SF.ttf",
  weight: "100 900",
});

interface PolaroidProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  text?: string;
}

interface Region {
  x: number; // percentage from left
  y: number; // percentage from top
  radius: number; // percentage
  name: string;
  role: string;
}

const regions: Region[] = [
  { x: 18, y: 45, radius: 10, name: "Vinay", role: "Growth & Strategy" },
  { x: 34, y: 45, radius: 10, name: "Noah", role: "Treasurer" },
  { x: 44, y: 38, radius: 10, name: "Kobe", role: "Growth & Strategy" },
  { x: 58, y: 43, radius: 10, name: "Henry", role: "President" },
  { x: 80, y: 42, radius: 10, name: "Ivan", role: "Vice President" },
];

export default function Polaroid({
  src,
  alt,
  width = 400,
  height = 400,
  text,
}: PolaroidProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [currentLabel, setCurrentLabel] = useState("The Board");
  const targetRef = useRef<HTMLDivElement>(null);

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);

      if (isInside) {
        // Calculate relative position within image (as percentage)
        const relativeX = ((x - rect.left) / rect.width) * 100;
        const relativeY = ((y - rect.top) / rect.height) * 100;

        // If in bottom 20%, show "The Board"
        if (relativeY > 80) {
          setCurrentLabel("The Board");
        } else {
          // Find closest region overall
          let closestRegion: Region | undefined = undefined;
          let minDistance = Infinity;

          for (const region of regions) {
            const dx = relativeX - region.x;
            const dy = relativeY - region.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < minDistance) {
              minDistance = distance;
              closestRegion = region;
            }
          }

          if (closestRegion) {
            setCurrentLabel(`${closestRegion.name} (${closestRegion.role})`);
          }
        }
      }
    }
  };

  return (
    <div className="inline-block bg-[#e8e8e8] p-5 pb-4 shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        springConfig={{
          bounce: 0.001,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.15,
        }}
        onPositionChange={handlePositionChange}
      >
        <motion.div className="flex items-center justify-center rounded-full border border-neutral-500 bg-neutral-700/50 p-1 backdrop-blur-xs">
          <AnimatePresence>
            {isHovering ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="inline-flex w-full items-center justify-center"
              >
                <div
                  className={`inline-flex items-center text-xs text-white ${sfFont.className}`}
                >
                  {currentLabel}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </Cursor>
      <div ref={targetRef} className="relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-auto w-full"
        />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_2px_1px_rgba(0,0,0,0.12)]"></div>
      </div>
      {text && (
        <div
          className={`mt-6 text-center text-4xl text-gray-800 ${sharpieFont.className}`}
        >
          {text}
        </div>
      )}
    </div>
  );
}
