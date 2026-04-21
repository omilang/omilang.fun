import { useContext } from "react";
import { Button } from "./ui/button";
import SlideSection from "./slider/slide-section";
import { motion } from "motion/react";
import { SliderContext } from "./slider/slider-context";
import TypewriterText from "./slider/typewriter-text";
import { links } from "@/config/links";
import { images } from "@/config/images";

const content = {
    hidden: { opacity: 0, x: -24, y: 12, filter: "blur(6px)" },
    show: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
};

const preview = {
    hidden: { opacity: 0, x: 34, y: 8, rotate: 1.1, scale: 0.985, filter: "blur(6px)" },
    show: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" },
};

export default function VSCode() {
  const { currentSlide } = useContext(SliderContext);
  const isActive = currentSlide === 6 || currentSlide === 7;
    const isTextActive = currentSlide === 6 || currentSlide === 7;

  return (
    <SlideSection index={6} keepVisibleOnSlides={[7]} className="bg-[#526FFF]">
        <motion.div
            className="flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-0"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ staggerChildren: 0.12 }}
        >
            <motion.div className="w-full max-w-3xl text-white lg:max-w-2xl lg:text-left" variants={content} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="py-4 text-5xl sm:text-7xl lg:px-0 lg:py-6 lg:text-8xl">
                    <TypewriterText text="Using VS Code?" active={isTextActive} />
                </h1>
                <p className="mt-3 text-xl leading-snug sm:text-3xl lg:text-5xl">
                    <TypewriterText
                      text="Download our extension for convenient work!"
                      active={isTextActive}
                    />
                </p>
                <motion.a href={links.EXTENSION} initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.32, delay: 0.12 }} className="mt-6 block">
                    <Button className="rounded-2xl bg-[#4353a5] px-10 py-4 text-lg hover:bg-[#4b5ebb] sm:px-18 sm:py-6 sm:text-2xl">
                        Get extension
                    </Button>
                </motion.a>
            </motion.div>

            <motion.img src={images.IMAGE.VSCODE} alt="" className="h-auto w-full max-w-3xl rounded-2xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)]" variants={preview} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}/>
        </motion.div>
    </SlideSection>
  )
}
