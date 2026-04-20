import { useContext } from "react";
import SlideSection from "./slider/slide-section";
import { motion } from "motion/react";
import { SliderContext } from "./slider/slider-context";
import { links } from "@/config/links";

export default function Footer() {
  const { currentSlide } = useContext(SliderContext);
  const isActive = currentSlide === 7;

  return (
  <SlideSection index={7} dockBottom className="text-white flex justify-between p-4 bg-[#271B4C] border-t-4 border-[#5a64ff]">
        <motion.span
          initial={{ opacity: 0, x: -14, filter: "blur(4px)" }}
          animate={isActive ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: -14, filter: "blur(4px)" }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          © 2026
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 14, filter: "blur(4px)" }}
          animate={isActive ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: 14, filter: "blur(4px)" }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
            <span>by </span>
            <a href={links.QUALSU} className="transition-colors duration-300 text-[#5ad27a] hover:text-[#4baf66]">Qualsu</a>
        </motion.span>
    </SlideSection>
  )
}
