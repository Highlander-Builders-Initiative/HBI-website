import Image from "next/image";

interface PolaroidProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function Polaroid({
  src,
  alt,
  width = 400,
  height = 400,
}: PolaroidProps) {
  return (
    <div className="inline-block bg-[#e8e8e8] p-5 pb-16 shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
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
    </div>
  );
}
