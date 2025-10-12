import Image from "next/image";

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
        <p className="font-wdxl pt-2 sm:pt-0 text-md sm:text-2xl">COMING WINTER 2025</p>
      </div>
    </main>
  );
}
