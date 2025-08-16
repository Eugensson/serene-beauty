"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="container mx-auto flex items-center gap-8">
        {NAV_LINKS.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={cn(
                "uppercase",
                pathname === href && "border-b-2 border-accent"
              )}
              aria-label={`Navigate to ${name}`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
