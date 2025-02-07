import Image from "next/image";

interface OverlappingImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function OverlappingImage({
  src,
  alt,
  width = 318,
  height = 387,
}: OverlappingImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center w-[${
        width + 50
      }px] h-[${height + 50}px]`}
    >
      {/* Main image container */}
      <Image
        src={"/card-gradient.svg"}
        alt="card gradient"
        width={width / 1.5}
        height={height / 1.5}
        className="absolute -top-5 right-16"
      />
      <Image
        src={"/card-gradient.svg"}
        alt="card gradient"
        width={width / 1.5}
        height={height / 1.5}
        className="absolute -bottom-5 left-16"
      />
      {/* Image */}
      <div className="relative bg-accent rounded-[40px]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-[40px] object-cover opacity-70"
        />
      </div>
    </div>
  );
}
