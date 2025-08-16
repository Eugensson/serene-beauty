"use client";

import { useMediaQuery } from "react-responsive";
import { useState, useEffect, createContext } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export type CursorContextType = {
  mouseEnterHandler: () => void;
  mouseLeaveHandler: () => void;
};

interface CursorState {
  size: number;
  background: string;
}

export const CursorContext = createContext<CursorContextType | undefined>(
  undefined
);

interface CursorProviderProps {
  children: React.ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursor, setCursor] = useState<CursorState>({
    size: 30,
    background: "#473936",
  });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const smallViewportIsActive = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 290, mass: 0.45 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!smallViewportIsActive) {
        mouseX.set(e.clientX - cursor.size / 2);
        mouseY.set(e.clientY - cursor.size / 2);
      } else {
        setCursor({ size: 0, background: "none" });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursor, mouseX, mouseY, smallViewportIsActive]);

  const mouseEnterHandler = () => {
    setCursor({ size: 90, background: "#00423a" });
    setIsHovering(true);
  };

  const mouseLeaveHandler = () => {
    setCursor({ size: 30, background: "#473936" });
    setIsHovering(false);
  };

  return (
    <CursorContext.Provider value={{ mouseEnterHandler, mouseLeaveHandler }}>
      <motion.div
        className="fixed z-[99] rounded-full pointer-events-none transition-all duration-300"
        style={{
          left: springX,
          top: springY,
          width: cursor.size,
          height: cursor.size,
          backgroundColor: cursor.background,
          mixBlendMode: isHovering ? "difference" : "normal",
          transition: "width 0.2s ease-in-out, height 0.2s ease-in-out",
        }}
      />
      {children}
    </CursorContext.Provider>
  );
};
