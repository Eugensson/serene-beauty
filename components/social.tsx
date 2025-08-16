import Link from "next/link";

import { SOCIAL_LINKS } from "@/constants";

interface SocialProps {
  containerStyles?: string;
}

export const Social: React.FC<SocialProps> = ({ containerStyles }) => {
  return (
    <ul className={containerStyles}>
      {SOCIAL_LINKS.map(({ name, href, icon: Icon }, index) => (
        <li key={index}>
          <Link
            href={href}
            className="text-white"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Link to ${name}`}
          >
            <Icon size={20} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
