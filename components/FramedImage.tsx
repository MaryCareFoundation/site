import Image from "next/image";
interface FramedImageProps {
  src: string;
  alt: string;
}
export default function FramedImage({ src, alt }: FramedImageProps) {
  return (
    <div className="relative min-h-[400px] w-[408px] flex items-center justify-center">
      <Image
        src={"/gallery/gradient-rough.svg"}
        alt="Decorative background"
        width={650}
        height={650}
        className="absolute left-2  top-24"
      />

      <div className="aspect-square max-sm:max-w-[200px] max-h-[317px] bg-accent max-w-[308px] overflow-hidden rounded-[90px]">
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          className="object-cover w-full h-full opacity-70"
        />
      </div>
    </div>
  );
}
