import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        {/* Brand */}
        <Link
          href="/"
          className="font-instrument text-md font-medium tracking-tight"
        >
          Highlander Builders Initiative
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-5 text-sm">
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
      </div>
    </header>
  );
}
