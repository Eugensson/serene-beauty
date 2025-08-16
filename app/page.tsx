import { Metadata } from "next";
import * as motion from "motion/react-client";

import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Home | Serene Beauty",
};

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <HomeContent />
    </motion.section>
  );
};

export default Home;
