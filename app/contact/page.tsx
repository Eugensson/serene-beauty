import { Metadata } from "next";
import * as motion from "motion/react-client";

import { ContactContent } from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <ContactContent />
    </motion.section>
  );
};

export default Contact;
