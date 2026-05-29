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

export default function NoClasses() {
    const { currentSlide } = useContext(SliderContext);
    const isActive = currentSlide === 3;

  return (
    <SlideSection index={3} className="bg-[#271B4C] text-white">
        <motion.div
            className="box-border flex h-dvh flex-col items-center justify-center gap-5 px-4 py-6 sm:gap-10 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-0"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ staggerChildren: 0.12, delayChildren: 0.03 }}
        >
            <motion.div className="w-full max-w-3xl lg:max-w-4xl" variants={headline} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="bg-[#2d2b55] px-4 py-3 text-4xl text-white sm:px-6 sm:py-6 sm:text-7xl lg:px-0 lg:text-8xl xl:text-[6rem] 2xl:text-[8rem]">
                    <span className="line-through decoration-[#ff6892] ml-2">Class</span>
                </h1>
                <p className="mt-2 text-lg leading-snug sm:mt-3 sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
                    <TypewriterText
                        text="NO CLASSES! Use type, enum and trait to keep your code simple"
                        active={isActive}
                    />
                </p>
            </motion.div>

            <motion.div className="w-full max-w-4xl xl:max-w-5xl" variants={codePreview} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                <span className="mb-3 flex gap-2 flex-row justify-between">
                    <h1 className="text-2xl font-bold text-white sm:text-4xl">Example</h1>
                    <code className="w-fit rounded-3xl border-2 border-[#5ad27a]/60 bg-[#2d2b55] px-4 p-1.5 text-sm text-[#9effff] sm:text-lg">.omi</code>
                </span>
                <motion.div
                    className="flex max-h-[58dvh] w-full flex-col justify-center overflow-y-auto rounded-2xl bg-[#2d2b55] px-4 py-5 text-xs shadow-[0px_10px_20px_0px_rgba(0,0,0,0.5)] sm:max-h-none sm:overflow-visible sm:px-6 sm:py-8 sm:text-lg lg:px-8 lg:text-3xl"
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
                            <span className="text-[#b1ff96]">type </span>
                            <span className="text-[#a3ffff]">User </span>
                            <span>= {"{"}</span>
                        </div>
                        <div className="ml-6">
                            <span>name</span>
                            <span className="text-[#ff6892]">{"<"}</span>
                            <span className="text-[#a3ffff]">string</span>
                            <span className="text-[#ff6892]">{">"}</span>
                            <span>,</span>
                        </div>
                        <div className="ml-6">
                            <span>age</span>
                            <span className="text-[#ff6892]">{"<"}</span>
                            <span className="text-[#a3ffff]">int</span>
                            <span className="text-[#ff6892]">{">"}</span>
                        </div>
                        <div>
                            <span>{"}"}</span>
                        </div>
                            
                        <div className="mt-6">
                            <span className="text-[#b1ff96]">trait </span>
                            <span className="text-[#a3ffff]">Serializable </span>
                            <span>= {"{"}</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-[#b1ff96]">func</span>
                            <span className="text-[#ff6892]">{"<"}</span>
                            <span className="text-[#a3ffff]">string</span>
                            <span className="text-[#ff6892]">{">"} </span>
                            <span>to_json</span>
                            <span>{"("}</span>
                            <span>{")"}</span>
                            <span>,</span>
                        </div>
                        <div>
                            <span>{"}"}</span>
                        </div>

                        <div className="mt-6">
                            <span className="text-[#b1ff96]">enum </span>
                            <span className="text-[#a3ffff]">Result</span>
                            <span className="text-[#ff6892]">{"<"}</span>
                            <span className="text-[#a3ffff]">T</span>
                            <span>, </span>
                            <span className="text-[#a3ffff]">E</span>
                            <span className="text-[#ff6892]">{">"} </span>
                            <span>= {"{"}</span>
                        </div>
                        <div className="ml-6">
                            <span>Ok</span>
                            <span>{"("}</span>
                            <span className="text-[#a3ffff]">T</span>
                            <span>{")"}</span>
                            <span>,</span>
                        </div>
                        <div className="ml-6">
                            <span>Err</span>
                            <span>{"("}</span>
                            <span className="text-[#a3ffff]">E</span>
                            <span>{")"}</span>
                        </div>
                        <div>
                            <span>{"}"}</span>
                        </div>
                    </code>
                </motion.div>
            </motion.div>
        </motion.div>
    </SlideSection>
  )
}
