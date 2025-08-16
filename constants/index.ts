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

export const TREATMENT_LIST = [
  {
    title: "Classic facial",
    description:
      "Deep cleansing, exfoliation and hydration for a refreshed andrevitalized complexion.",
  },
  {
    title: "Chemical peel",
    description: "Exfoliating treatment to improve skin texture and tone.",
  },
  {
    title: "Eyebrow waxing/shaping",
    description:
      "Deep cleansing, exfoliation and hydration for a refreshed and revitalized complexion.",
  },
  {
    title: "HydraFacial",
    description: "Multi-step treatment for instance hydration and glow.",
  },
];

export const animations = {
  initial: { top: "0%" },
  animate: { top: "-100%" },
  exit: { top: ["100%", "0%"] },
};
