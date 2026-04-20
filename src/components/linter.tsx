import { useContext } from "react";
import SlideSection from "./slider/slide-section";
import { motion } from "motion/react";
import { SliderContext } from "./slider/slider-context";
import TypewriterText from "./slider/typewriter-text";

const intro = {
    hidden: { opacity: 0, x: -24, y: 10, scale: 0.985, filter: "blur(5px)" },
    show: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
};

const panels = {
    hidden: { opacity: 0, x: 30, y: 6, filter: "blur(5px)" },
    show: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
};

export default function Linter() {
  const { currentSlide } = useContext(SliderContext);
  const isActive = currentSlide === 3;

  return (
    <SlideSection index={3} className="bg-[#D9D9D9]">
        <motion.div
            className="flex justify-between h-screen items-center px-12"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ staggerChildren: 0.14, delayChildren: 0.02 }}
        >
            <motion.div className="max-w-170" variants={intro} transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="bg-[#2d2b55] text-white text-9xl py-6 pl-4 flex flex-row items-center gap-3">
                    <img src="/icons/config.png" alt="" className="w-40 h-40"/>
                    <span>Linter</span>
                </h1>
                <p className="text-5xl mt-3 leading-snug">
                                        <TypewriterText
                                            text="Omi has a built-in linter to maintain a consistent code style"
                                            active={isActive}
                                        />
                </p>
            </motion.div>

            <motion.div variants={panels} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
                <span className="flex justify-between items-center mb-3">
                    <h1 className="text-4xl font-bold">Config</h1>
                    <code className="text-lg p-1.5 bg-zinc-800/70 text-zinc-200 border-2 border-zinc-600 rounded-3xl px-4 min-w-31 text-center">
                        <TypewriterText text=".omilint" active={isActive} />
                    </code>
                </span>
                <img src="/code/config.png" alt="" className="h-64 shadow-xl"/>

                                <motion.h1 className="text-4xl font-bold underline mb-3 mt-6" initial={{ opacity: 0, y: 10 }} animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.3, delay: 0.12 }}>
                                    Terminal
                                </motion.h1>
                                <motion.img src="/code/terminal.png" alt="" className="h-24 shadow-xl" initial={{ opacity: 0, y: 14, scale: 0.98 }} animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 14, scale: 0.98 }} transition={{ duration: 0.36, delay: 0.16, ease: "easeOut" }} />
                        </motion.div>
                </motion.div>
    </SlideSection>
  )
}
