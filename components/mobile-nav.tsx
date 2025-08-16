"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

import { Social } from "@/components/social";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";

interface MobileNavProps {
  setMobileNav: (value: boolean) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ setMobileNav }) => {
  const pathname = usePathname();

  return (
    <nav className="h-full relative flex flex-col justify-between p-8">
      <div
        className="cursor-pointer text-accent"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>
      <ul className="flex flex-col gap-y-10 text-white text-xl">
        {NAV_LINKS.map(({ name, href }) => (
          <li
            key={name}
            className={cn(
              "uppercase max-w-max mx-auto",
              pathname === href && "border-b-2 border-accent"
            )}
            onClick={() => setMobileNav(false)}
          >
            <Link href={href} aria-label={`Navigate to ${name}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Social containerStyles="flex justify-center items-center gap-x-6 text-white" />
    </nav>
  );
};
