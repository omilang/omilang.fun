import { useContext } from "react";
import SlideSection from "./slider/slide-section";
import { motion } from "motion/react";
import { SliderContext } from "./slider/slider-context";
import TypewriterText from "./slider/typewriter-text";

const heading = {
    hidden: { opacity: 0, y: 26, scale: 0.97, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

const details = {
    hidden: { opacity: 0, x: 26, y: 8, rotate: 0.8, filter: "blur(4px)" },
    show: { opacity: 1, x: 0, y: 0, rotate: 0, filter: "blur(0px)" },
};

export default function Test() {
  const { currentSlide } = useContext(SliderContext);
  const isActive = currentSlide === 4;

  return (
    <SlideSection index={4} className="bg-[#FFA448]">
        <motion.div
            className="flex justify-between h-screen items-center px-12"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ staggerChildren: 0.13 }}
        >
            <motion.div className="max-w-145" variants={heading} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="bg-[#2d2b55] text-[#FFA448] text-9xl py-6 pl-4 flex flex-row items-center gap-3">
                    <img src="/icons/test.png" alt="" className="w-40 h-40"/>
                    <span className="ml-3">Test</span>
                </h1>
                <p className="text-5xl mt-3 leading-snug">
                                        <TypewriterText
                                            text="Autotests are also present, with fine tuning in .test.omi files"
                                            active={isActive}
                                        />
                </p>
            </motion.div>

                        <motion.div variants={details} transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}>
                <span className="flex justify-between items-center mb-3">
                    <h1 className="text-4xl font-bold">Example</h1>
                    <code className="text-lg p-1.5 bg-[#b87635] text-orange-100 border-2 border-[#99612a] rounded-3xl px-4 min-w-36 text-center">
                        <TypewriterText text=".test.omi" active={isActive} />
                    </code>
                </span>
                <img src="/code/test.png" alt="" className="h-64 shadow-xl"/>

                                <motion.h1 className="text-4xl font-bold underline mb-3 mt-6" initial={{ opacity: 0, y: 12 }} animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }} transition={{ duration: 0.32, delay: 0.14 }}>
                                    Terminal
                                </motion.h1>
                                <motion.img src="/code/terminal_2.png" alt="" className="h-55.5 shadow-xl" initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.38, delay: 0.18, ease: "easeOut" }} />
                        </motion.div>
                </motion.div>
    </SlideSection>
  )
}
