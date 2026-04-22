import { useContext } from "react";
import SlideSection from "./slider/slide-section";
import { motion } from "motion/react";
import { SliderContext } from "./slider/slider-context";
import TypewriterText from "./slider/typewriter-text";

const headline = {
    hidden: { opacity: 0, x: -36, y: 8, rotate: -1, filter: "blur(6px)" },
    show: { opacity: 1, x: 0, y: 0, rotate: 0, filter: "blur(0px)" },
};

const codePreview = {
    hidden: { opacity: 0, x: 36, y: 12, scale: 0.98, filter: "blur(4px)" },
    show: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
};

export default function Syntax() {
    const { currentSlide } = useContext(SliderContext);
    const isActive = currentSlide === 1;

  return (
    <SlideSection index={1} className="bg-[#5ad27a]">
        <motion.div
            className="box-border flex h-dvh flex-col items-center justify-start gap-5 px-4 py-6 sm:justify-center sm:gap-10 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-0"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ staggerChildren: 0.12, delayChildren: 0.03 }}
        >
            <motion.div className="w-full max-w-3xl lg:max-w-4xl" variants={headline} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="bg-[#2d2b55] px-4 py-3 text-4xl text-white sm:px-6 sm:py-6 sm:text-7xl lg:px-0 lg:text-8xl xl:text-[6rem] 2xl:text-[8rem]">
                    <span className="text-[#9EFFFF]">Syntax</span>()
                </h1>
                <p className="mt-2 text-lg leading-snug sm:mt-3 sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
                    <TypewriterText
                        text="The language has incorporated pieces from everything possible, from Basic to C++"
                        active={isActive}
                    />
                </p>
            </motion.div>

            <motion.div className="w-full max-w-4xl xl:max-w-5xl" variants={codePreview} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                <span className="mb-3 flex gap-2 flex-row justify-between">
                    <h1 className="text-2xl font-bold sm:text-4xl">Example</h1>
                    <code className="w-fit rounded-3xl border-2 border-green-600 bg-[#224041]/80 px-4 p-1.5 text-sm text-green-200 sm:text-lg">.omi</code>
                </span>
                <motion.div
                    className="shadow-[0px_10px_20px_0px_rgba(0,0,0,0.5)] flex max-h-[52dvh] w-full flex-col justify-center overflow-y-auto rounded-2xl bg-[#2d2b55] px-4 py-5 text-xs sm:max-h-none sm:overflow-visible sm:px-6 sm:py-8 sm:text-lg lg:px-8 lg:text-3xl"
                    initial={{ opacity: 0, x: 24, scale: 0.99, filter: "blur(6px)" }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                >
                    <div className="mb-6 flex gap-3">
                        <span className="bg-red-400 rounded-full w-5 h-5 inline-block"/>
                        <span className="bg-yellow-400 rounded-full w-5 h-5 inline-block"/>
                        <span className="bg-green-400 rounded-full w-5 h-5 inline-block"/>
                    </div>

                    <code className="text-white flex flex-col">
                        <div>
                            <span className="text-[#b1ff96]">func</span>
                            <span className="text-[#ff6892]">{"<"}</span>
                            <span className="text-[#a3ffff]">int</span>
                            <span className="text-[#ff6892]">{">"} </span>
                            <span className="text-[#a3ffff]">factorial</span>
                            <span>{"("}</span>
                            <span className="text-[#a3ffff]">n</span>
                            <span className="text-[#ff6892]">{"<"}</span>
                            <span className="text-[#a3ffff]">int</span>
                            <span className="text-[#ff6892]">{">"}</span>
                            <span>{")"}</span>
                            <span>:</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-[#b1ff96]">if </span>
                            <span className="text-[#a3ffff]">n </span>
                            <span>{"<="} </span>
                            <span className="text-[#ff6892]">1</span>
                            <span>: </span>
                            <span className="text-[#b1ff96]">return </span>
                            <span className="text-[#ff6892]">1</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-[#b1ff96]">return </span>
                            <span className="text-[#a3ffff]">n </span>
                            <span>* </span>
                            <span className="text-[#a3ffff]">factorial</span>
                            <span>{"("}</span>
                            <span className="text-[#a3ffff]">n </span>
                            <span>- </span>
                            <span className="text-[#ff6892]">1</span>
                            <span>{")"}</span>
                        </div>
                        <div className="text-[#b1ff96]">
                            <span>end</span>
                        </div>
                            
                        <div className="mt-6">
                            <span>
                                // Factorial from 1 to 6
                            </span>
                        </div>
                        <div>
                            <span className="text-[#b1ff96]">for </span>
                            <span className="text-[#a3ffff]">i </span>
                            <span>= </span>
                            <span className="text-[#ff6892]">1 </span>
                            <span className="text-[#a3ffff]">to </span>
                            <span className="text-[#ff6892]">6</span>
                            <span>:</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-[#a3ffff]">print</span>
                            <span>{"("}</span>
                            <span className="text-[#a3ffff]">factorial</span>
                            <span>{"("}</span>
                            <span className="text-[#a3ffff]">i</span>
                            <span>{"))"}</span>
                        </div>
                        <div>
                            <span className="text-[#b1ff96]">end</span>
                        </div>
                    </code>
                </motion.div>
            </motion.div>
        </motion.div>
    </SlideSection>
  )
}
