"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { motion } from "motion/react";

import { CursorContext, CursorContextType } from "@/components/cursor-context";

export const ContactContent = () => {
  const context = useContext<CursorContextType | undefined>(CursorContext);

  if (!context) {
    throw new Error("CursorContext not provided");
  }

  const { mouseEnterHandler, mouseLeaveHandler } = context;

  return (
    <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
      <div className="h-full flex flex-col xl:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex-1 flex flex-col justify-center"
        >
          <h3 className="h3 mb-8 text-center xl:text-left">Contact info</h3>
          <ul className="flex flex-col items-center xl:items-start gap-12">
            <li className="flex items-start gap-4">
              <div className="relative w-[36px] h-[36px]">
                <Image src="/assets/contact/pin.svg" fill alt="Pin icon" />
              </div>
              <div className="pt-1 flex-1">
                <h4 className="h4 mb-2">Address</h4>
                <p className="leading-relaxed">
                  Rathausstraße 23,
                  <br />
                  10178 Berlin, Germany
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="relative w-[36px] h-[36px]">
                <Image src="/assets/contact/phone.svg" fill alt="Phone icon" />
              </div>
              <div className="pt-1 flex-1">
                <h4 className="h4 mb-2">Phone number</h4>
                <p className="pt-1 flex-1">
                  Phone:
                  <Link href="tel:+990887380388">+49 123 456 7890</Link>
                </p>
                <p className="pt-1 flex-1">
                  Fax:
                  <Link href="tel:+990887380388">+49 123 456 7890</Link>
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="relative w-[36px] h-[36px]">
                <Image src="/assets/contact/email.svg" fill alt="Email icon" />
              </div>
              <div className="pt-1 flex-1">
                <h4 className="h4 mb-2">Email address</h4>
                <div className="flex flex-col gap-1">
                  <Link
                    href="mailto:info@serenebeauty.com"
                    rel="noreferrer noopener"
                    aria-label="Send an email to Serene Beauty at info@serenebeauty.com"
                  >
                    info@serenebeauty.com
                  </Link>
                  <Link
                    href="mailto:support@serenebeauty.com"
                    rel="noreferrer noopener"
                    aria-label="Send an email to Serene Beauty at support@serenebeauty.com"
                  >
                    support@serenebeauty.com
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex-1"
        >
          <div className="bg-[#f0cfbc] w-full max-w-[580px] gap-4 p-5 mx-auto xl:mx-0">
            <h3 className="h3 mb-8 text-center">Get in touch</h3>
            <form className="flex flex-col gap-4">
              <input type="text" className="input" placeholder="Full name" />
              <input
                type="text"
                className="input"
                placeholder="Email address"
              />
              <input type="text" className="input" placeholder="Phone number" />
              <textarea className="textarea" placeholder="Your message" />
              <button
                type="submit"
                className="btn self-start"
                aria-label="Send message"
              >
                Send message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
