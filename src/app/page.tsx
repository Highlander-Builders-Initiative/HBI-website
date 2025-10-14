import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tooltip } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-x-3 top-16 bottom-10 -z-10 overflow-hidden rounded-xl">
        <Image
          src="/landscape.webp"
          alt="UCR landscape"
          fill
          className="object-cover grayscale"
          unoptimized
        />
        {/* Neutral overlay */}
        <div className="absolute inset-0 rounded-xl bg-neutral-50 opacity-85 inset-shadow-sm/6" />
      </div>

      <main className="flex min-h-[85vh] items-center justify-center p-3">
        <div className="text-center">
          {/* Show text at sm and above */}
          <div className="hidden sm:block">
            <h1 className="font-sf text-5xl font-semibold md:text-6xl">
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
          <p className="font-wdxl pt-2 text-xl sm:pt-0 sm:text-2xl">
            LAUNCHING WINTER 2025
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
            href="mailto:contact@highlander.builders"
            className="font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline"
          >
            email
          </Link>
          <span className="text-neutral-300">/</span>
          <Tooltip content="Coming soon" className="w-24">
            <Link
              href="#"
              className="font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline"
            >
              highlanderlink
            </Link>
          </Tooltip>
        </div>
      </main>
    </>
  );
}
