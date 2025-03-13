import Image from "next/image";

export default function OptimizedImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/png;base64,..."
      quality={85}
      priority={isAboveFold}
    />
  );
}
