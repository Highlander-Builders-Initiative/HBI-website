"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuMenu, LuX } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerH, setHeaderH] = useState(0);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Measure header height so the overlay panel starts below it
  useEffect(() => {
    const update = () => setHeaderH(headerRef.current?.offsetHeight ?? 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <header className="w-full">
      <div
        ref={headerRef}
        className="mx-auto flex max-w-screen-xl items-center justify-between p-4"
      >
        {/* Brand */}
        <Link
          href="/"
          className="font-instrument text-md font-medium tracking-tight"
        >
          Highlander Builders Initiative
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 text-sm sm:flex">
          <Link
            href="/about"
            className="font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline"
          >
            About
          </Link>
          <Link
            href="/campus"
            className="font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline"
          >
            Campus
          </Link>
          <Link
            href="/portfolio"
            className="font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline"
          >
            Portfolio
          </Link>
          <Link
            href="/team"
            className="font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline"
          >
            Team
          </Link>
          <Link href="/apply">
            <Button
              variant="fancy-outline"
              className="font-instrument text-md h-8 rounded-full px-4"
            >
              Apply
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <LuX className="h-6 w-6 text-neutral-400" />
          ) : (
            <LuMenu className="h-6 w-6 text-neutral-400" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown (overlay panel below header) */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-x-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 sm:hidden"
          >
            <div className="mx-auto border-y border-dashed border-neutral-200 px-4 pt-3 pb-6">
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/about"
                    className="font-instrument block text-lg text-neutral-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/campus"
                    className="font-instrument block text-lg text-neutral-900"
                  >
                    Campus
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="font-instrument block text-lg text-neutral-900"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="font-instrument block text-lg text-neutral-900"
                  >
                    Team
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <Link href="/apply">
                  <Button
                    variant="fancy-outline"
                    className="font-instrument h-9 rounded-full px-4"
                  >
                    Apply
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
