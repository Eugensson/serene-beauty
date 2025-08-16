import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/logo.svg"
        alt="Serene Beauty Logo"
        width={120}
        height={44}
        priority
      />
    </Link>
  );
};
