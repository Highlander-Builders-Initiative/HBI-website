"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FORM_URL = "https://forms.gle/YeqQe2s54oTN2DyZ8";

export default function ApplyRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Open the form in a new tab
    window.open(FORM_URL, "_blank", "noopener,noreferrer");
    // Send this tab back home
    router.replace("/");
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-wdxl text-5xl">Opening application…</p>
        <p className="mt-2">
          If nothing happens,{" "}
          <a
            className="rounded-md underline decoration-neutral-300 decoration-2 hover:bg-neutral-100 hover:decoration-neutral-400"
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            click here
          </a>
          .
        </p>
        <Link href="/">
          <Button variant="fancy-outline" className="mt-2 px-3 py-1">
            Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
