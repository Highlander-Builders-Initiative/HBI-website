import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[95vh] items-center justify-center px-6">
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
        <p className="font-wdxl text-md pt-2 sm:pt-0 sm:text-2xl">
          LAUNCHING WINTER 2025
        </p>
        <Link href="/apply">
          <Button variant="fancy-outline" className="mt-2 px-4 py-1.5">
            Start your application
          </Button>
        </Link>
      </div>
    </main>
  );
}
