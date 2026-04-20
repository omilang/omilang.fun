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
            className="flex justify-between h-screen items-center px-12"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ staggerChildren: 0.12, delayChildren: 0.03 }}
        >
            <motion.div className="max-w-187.5" variants={headline} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="bg-[#2d2b55] text-white text-9xl py-6">
                    <span className="text-[#9EFFFF]">Syntax</span>()
                </h1>
                <p className="text-5xl mt-3 leading-snug">
                                        <TypewriterText
                                            text="The language has incorporated pieces from everything possible, from Basic to C++"
                                            active={isActive}
                                        />
                </p>
            </motion.div>

            <motion.div variants={codePreview} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                <span className="flex justify-between items-center mb-3">
                    <h1 className="text-4xl font-bold">Example</h1>
                    <code className="text-lg p-1.5 bg-[#224041]/80 text-green-200 border-2 border-green-600 rounded-3xl px-4">.omi</code>
                </span>
                <motion.div
                    className="shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.5)] bg-[#2d2b55] w-200 h-100 text-3xl px-8 rounded-2xl flex justify-center flex-col"
                    initial={{ opacity: 0, x: 24, scale: 0.99, filter: "blur(6px)" }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                >
                    <div className="flex gap-3 mb-6">
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
