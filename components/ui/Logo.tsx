import Image from "next/image";
import Link from "next/link";

export default function Logo({
  size = "default",
}: {
  size?: "default" | "large";
}) {
  const dimensions = size === "large" ? { width: 176, height: 75 } : { width: 148, height: 63 };

  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image
        src="/logo.png"
        alt="AIVIQONE"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className="h-auto w-auto max-w-[calc(100vw-5.5rem)]"
      />
    </Link>
  );
}