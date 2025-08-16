"use client";

import Image from "next/image";
import { useContext } from "react";
import { motion } from "motion/react";

import { CursorContext, CursorContextType } from "@/components/cursor-context";

import { TREATMENT_LIST } from "@/constants";

export const TreatmentContent = () => {
  const context = useContext<CursorContextType | undefined>(CursorContext);

  if (!context) {
    throw new Error("CursorContext not provided");
  }

  const { mouseEnterHandler, mouseLeaveHandler } = context;

  return (
    <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
      <div className="w-full h-full flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0"
        >
          <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
            Indulge in our Luxurious Treatments
          </h2>
          <p className="lead max-w-[600px] mx-auto xl:mx-0">
            Tailored skincare solutions for a healthy complexion, offering
            customized care for radiant skin
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mx-auto xl:mx-0">
            {TREATMENT_LIST.map(({ title, description }, index) => (
              <li
                key={index}
                className="flex-1 flex flex-col justify-center items-center xl:items-start"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-4 h-4 bg-accent rounded-tl-[28px]  rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]" />
                  <h3 className="text-2xl capitalize">{title}</h3>
                </div>
                <p className="pl-6 text-[13px]">{description}</p>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn mx-auto xl:mx-0"
            aria-label="Discover more"
          >
            Discover more
          </button>
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
          className="hidden xl:flex w-[350px] h-[485px] relative"
        >
          <Image
            src="/assets/treatments/img.jpg"
            fill
            quality={100}
            alt="A salon specialist applies a mask to the face"
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};
