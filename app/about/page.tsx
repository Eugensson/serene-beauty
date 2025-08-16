import { Metadata } from "next";
import * as motion from "motion/react-client";

import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <AboutContent />
    </motion.section>
  );
};

export default About;
