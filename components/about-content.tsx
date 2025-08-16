"use client";

import Image from "next/image";
import { useContext } from "react";
import { motion } from "motion/react";

import { STAT_LIST } from "@/constants";
import { StatsItem } from "@/components/stats-item";
import { CursorContext, CursorContextType } from "@/components/cursor-context";

export const AboutContent = () => {
  const context = useContext<CursorContextType | undefined>(CursorContext);

  if (!context) {
    throw new Error("CursorContext not provided");
  }

  const { mouseEnterHandler, mouseLeaveHandler } = context;

  return (
    <div className="container mx-auto flex items-center pb-12 xl:pt-32 xl:pb-0">
      <div className="w-full h-full flex flex-col xl:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="relative w-[304px] h-[423px] xl:w-[350px] xl:h-[485px] mb-8 xl:mx-0"
        >
          <Image
            src="/assets/about/img.jpg"
            alt="The face of women"
            fill
            quality={100}
            priority
            className="object-contain"
          />
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
          className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0"
        >
          <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
            Committed to Your Skin&apos;s Health and Beauty
          </h2>
          <p className="lead max-w-[600px] mx-auto xl:max-w-none">
            Tailored skincare solutions for a healthy complexion, offering
            customized care for radiant skin
          </p>
          <ul className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
            {STAT_LIST.map(({ countNum, countText, text }, index) => (
              <li key={index}>
                <StatsItem
                  countNum={countNum}
                  countText={countText}
                  text={text}
                />
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn mx-auto xl:mx-0"
            aria-label="Contact us"
          >
            Contact us
          </button>
        </motion.div>
      </div>
    </div>
  );
};
