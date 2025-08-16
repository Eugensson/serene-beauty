import { Metadata } from "next";
import * as motion from "motion/react-client";

import { TreatmentContent } from "@/components/treatment-content";

export const metadata: Metadata = {
  title: "Treatments",
};

const Treatments = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <TreatmentContent />
    </motion.section>
  );
};

export default Treatments;
