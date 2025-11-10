import Image from "next/image";
import localFont from "next/font/local";

const sharpieFont = localFont({
  src: "../../fonts/sharpie/Sharpie.ttf",
});

interface PolaroidProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  text?: string;
}

export default function Polaroid({
  src,
  alt,
  width = 400,
  height = 400,
  text,
}: PolaroidProps) {
  return (
    <div className="inline-block bg-[#e8e8e8] p-5 pb-4 shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
      <div className="relative">
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
