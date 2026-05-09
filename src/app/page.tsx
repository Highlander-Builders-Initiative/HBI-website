import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-x-3 top-14 bottom-10 -z-10 overflow-hidden rounded-xl sm:top-16">
        <Image
          src="/landscape.webp"
          alt="UCR landscape"
          fill
          className="object-cover grayscale"
          unoptimized
        />
        {/* Neutral overlay */}
        <div className="absolute inset-0 rounded-xl bg-neutral-700 opacity-85 inset-shadow-sm/6 sm:bg-neutral-50" />
      </div>

      <main className="flex min-h-[85vh] items-center justify-center p-3">
        <div className="text-center">
          {/* Show text at sm and above */}
          <div className="hidden sm:block">
            <h1 className="font-sf text-5xl font-semibold text-black md:text-6xl">
              HIGHLANDER BUILDERS INITIATIVE
            </h1>
          </div>

          {/* Show image below sm */}
          <div className="block sm:hidden">
            <Image
              src="/coin.webp"
              alt="Highlander Builders Initiative coin"
              width={512}
              height={512}
              unoptimized
              className="mx-auto h-auto w-[40vw]"
            />
          </div>
          <p className="font-wdxl pt-2 text-xl text-neutral-50 sm:pt-0 sm:text-2xl sm:text-black">
            LAUNCHING SPRING 2026
          </p>
          <Link href="/apply" target="_blank">
            <Button
              variant="fancy-outline"
              className="mt-2 rounded-full px-4 py-1.5"
            >
              Start your application
            </Button>
          </Link>
        </div>

        {/* Bottom-right socials row */}
        <div className="absolute right-4 bottom-2 flex items-center gap-2">
          <Link
            href="https://www.instagram.com/hbi.ucr"
            target="_blank"
            className="font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline"
          >
            insta
          </Link>
          <span className="text-neutral-300">/</span>
          <Link
            href="https://discord.gg/QYCQwTTvfS"
            target="_blank"
            className="font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline"
          >
            discord
          </Link>
          <span className="text-neutral-300">/</span>
          <Link
            href="https://www.linkedin.com/company/hbi"
            target="_blank"
            className="font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline"
          >
            linkedin
          </Link>
          <span className="text-neutral-300">/</span>
          <Link
            href="mailto:contact@highlander.builders"
            className="font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline"
          >
            email
          </Link>
          <span className="text-neutral-300">/</span>
          <Link
            href="https://highlanderlink.ucr.edu/organization/hbi"
            target="_blank"
            className="font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline sm:hidden"
          >
            hl
          </Link>
          <Link
            href="https://highlanderlink.ucr.edu/organization/hbi"
            target="_blank"
            className="font-instrument hidden text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline sm:block"
          >
            highlanderlink
          </Link>
        </div>
      </main>
    </>
  );
}
