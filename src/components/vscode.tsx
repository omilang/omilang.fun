import { useContext } from "react";
import { Button } from "./ui/button";
import SlideSection from "./slider/slide-section";
import { motion } from "motion/react";
import { SliderContext } from "./slider/slider-context";
import TypewriterText from "./slider/typewriter-text";

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
            className="flex justify-between h-screen items-center px-12"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ staggerChildren: 0.12 }}
        >
            <motion.div className="max-w-200 text-white" variants={content} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="text-9xl py-6">
                    <TypewriterText text="Using VS Code?" active={isTextActive} />
                </h1>
                <p className="text-5xl mt-3 leading-snug">
                    <TypewriterText
                      text="Download our extension for convenient work!"
                      active={isTextActive}
                    />
                </p>
                <motion.a href="" initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.32, delay: 0.12 }}>
                    <Button className="bg-[#4353a5] hover:bg-[#4b5ebb] px-18 py-6 rounded-2xl text-2xl mt-6">
                        Get extension
                    </Button>
                </motion.a>
            </motion.div>

            <motion.img src="/code/vscode.png" alt="" className="h-100 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.25)]" variants={preview} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}/>
        </motion.div>
    </SlideSection>
  )
}
