"use client";

import { motion } from "motion/react";
import { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { TopBar } from "@/components/top-bar";
import { MobileNav } from "@/components/mobile-nav";
import { CursorContext, CursorContextType } from "@/components/cursor-context";

export const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const context = useContext<CursorContextType | undefined>(CursorContext);

  if (!context) {
    throw new Error("CursorContext not provided");
  }

  const { mouseEnterHandler, mouseLeaveHandler } = context;

  return (
    <motion.header className="pb-6 xl:pb-12.5 fixed z-40 w-full bg-accent-100 xl:bg-transparent">
      <TopBar />
      <div className="container mx-auto flex justify-between items-center px-6">
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Logo />
        </motion.div>
        <div
          className="cursor-pointer xl:hidden"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed top-0 bottom-0 right-0 z-50 w-[300px] xl:hidden bg-primary"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </motion.header>
  );
};
