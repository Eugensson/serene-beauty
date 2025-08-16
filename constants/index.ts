import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { name: "Youtube", href: "https://www.youtube.com", icon: FaYoutube },
  { name: "Facebook", href: "https://www.facebook.com", icon: FaFacebook },
  { name: "Twitter", href: "https://x.com", icon: FaXTwitter },
  { name: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
];

export const STAT_LIST = [
  { countNum: 13, countText: "", text: "Years on Market" },
  { countNum: 35, countText: "k+", text: "Happy Clients" },
  { countNum: 97, countText: "%", text: "Natural Ingredients" },
];

export const animations = {
  initial: { top: "0%" },
  animate: { top: "-100%" },
  exit: { top: ["100%", "0%"] },
};
