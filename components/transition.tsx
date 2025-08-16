"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import { animations } from "@/constants";

export const Transition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="hidden xl:flex xl:w-screen xl:h-screen fixed z-50 top-0 left-0 right-0 pointer-events-none">
            <motion.div
              variants={animations}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              className="w-full h-full bg-[#e2cfbd] relative"
            />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};
