"use client";

import Image from "next/image";
import { useContext } from "react";
import { motion } from "motion/react";

import { ModalVideo } from "@/components/modal-video";
import { CursorContext, CursorContextType } from "@/components/cursor-context";

export const HomeContent = () => {
  const context = useContext<CursorContextType | undefined>(CursorContext);

  if (!context) {
    throw new Error("CursorContext not provided");
  }

  const { mouseEnterHandler, mouseLeaveHandler } = context;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row items-center h-full">
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2, duration: 1, ease: "easeInOut" },
          }}
          className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]"
        >
          <motion.h1
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h1 mb-6 capitalize"
          >
            Natural Beauty <br /> starts here
          </motion.h1>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lead max-w-xl mx-auto"
          >
            Tailored skincare solutions for a healthy complexion, offering
            customized care for radiant skin
          </motion.p>
          <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
            <motion.button
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              type="button"
              className="btn btn-lg"
              aria-label="Book an appointment"
            >
              Book an appointment
            </motion.button>
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <ModalVideo />
            </motion.div>
          </div>
        </motion.div>
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, bottom: "-100%" }}
            animate={{
              opacity: 1,
              bottom: 0,
              transition: { delay: 2.4, duration: 1.2, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="hidden xl:flex fixed bottom-0"
          >
            <Image
              src="/assets/home/img.png"
              alt="Beautiful face"
              width={690}
              height={520}
              quality={100}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
