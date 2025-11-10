import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Links() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-x-3 top-14 bottom-3 -z-10 overflow-hidden rounded-xl sm:top-16">
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
          <h1 className="font-sf text-4xl leading-[1] font-semibold text-neutral-100 sm:text-5xl sm:text-black">
            HIGHLANDER <br /> BUILDERS <br /> INITIATIVE
          </h1>
          <p className="font-wdxl pt-2 text-xl text-neutral-50 sm:pt-0 sm:text-2xl sm:text-black">
            LAUNCHING WINTER 2025
          </p>
          <div className="mt-2 flex justify-center gap-1.5 sm:gap-1">
            <Link href="https://instagram.com/hbi.ucr" target="_blank">
              <Button variant="fancy-outline" className="rounded-full p-1">
                <FaInstagram className="size-4 sm:size-5" />
              </Button>
            </Link>

            <Link href="https://discord.gg/QYCQwTTvfS" target="_blank">
              <Button variant="fancy-outline" className="rounded-full p-1">
                <FaDiscord className="size-4 sm:size-5" />
              </Button>
            </Link>

            <Link
              href="https://highlanderlink.ucr.edu/organization/hbi"
              target="_blank"
            >
              <Button variant="fancy-outline" className="rounded-full p-1">
                <div className="aspect-square w-4 sm:w-5">
                  <Image
                    src="/icons/highlander-link.webp"
                    alt="HighlanderLink"
                    width={16}
                    height={16}
                    className="quality-100 h-full w-full object-contain"
                    unoptimized
                  />
                </div>
              </Button>
            </Link>

            <Link href="mailto:contact@highlander.builders" target="_blank">
              <Button variant="fancy-outline" className="rounded-full p-1">
                <IoIosMail className="size-4 sm:size-5" />
              </Button>
            </Link>
          </div>
          <Link href="/apply" target="_blank">
            <Button
              variant="fancy-outline"
              className="mt-2 rounded-full px-4 py-1.5 sm:text-lg"
            >
              Start your application
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}
