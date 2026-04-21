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
            className="flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-0"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ staggerChildren: 0.14, delayChildren: 0.02 }}
        >
            <motion.div className="w-full max-w-3xl lg:max-w-4xl" variants={intro} transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="flex flex-row items-center gap-3 bg-[#2d2b55] px-4 py-4 text-5xl text-white sm:text-7xl lg:px-4 lg:py-6 lg:text-9xl">
                    <motion.img
                        src="/icons/config.png"
                        alt=""
                        className="h-16 w-16 sm:h-24 sm:w-24 lg:h-40 lg:w-40"
                        initial={{ rotate: 0 }}
                        animate={isActive ? { rotate: 180 } : { rotate: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <span>Linter</span>
                </h1>
                <p className="mt-3 text-xl leading-snug sm:text-3xl lg:text-5xl">
                    <TypewriterText
                        text="Omi has a built-in linter to maintain a consistent code style"
                        active={isActive}
                    />
                </p>
            </motion.div>

            <motion.div className="w-full max-w-4xl xl:max-w-5xl" variants={panels} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
                <span className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl font-bold sm:text-4xl">Config</h1>
                    <code className="min-w-31 w-fit rounded-3xl border-2 border-zinc-600 bg-zinc-800/70 px-4 p-1.5 text-center text-sm text-zinc-200 sm:text-lg">
                        <TypewriterText text=".omilint" active={isActive} />
                    </code>
                </span>
                <div className="shadow-[0px_10px_20px_0px_rgba(0,0,0,0.5)] flex w-full flex-col justify-center rounded-2xl bg-[#2d2b55] px-4 py-6 text-sm sm:px-6 sm:py-8 sm:text-lg lg:px-8 lg:text-3xl">
                    <div className="mb-6 flex gap-3">
                        <span className="bg-red-400 rounded-full w-5 h-5 inline-block"/>
                        <span className="bg-yellow-400 rounded-full w-5 h-5 inline-block"/>
                        <span className="bg-green-400 rounded-full w-5 h-5 inline-block"/>
                    </div>

                    <code className="text-white">
                        <div>
                            <span>{"["}</span>
                            <span className="text-[#b1ff96]">general</span>
                            <span>{"]"}</span>
                        </div>
                        <div>
                            <span className="text-[#ff6892]">level </span>
                            <span>= </span>
                            <span>warning</span>
                        </div>
                        <div>
                            <span>{"["}</span>
                            <span className="text-[#b1ff96]">rules</span>
                            <span>{"]"}</span>
                        </div>
                        <div>
                            <span className="text-[#ff6892]">undefined-var </span>
                            <span>= </span>
                            <span className="text-[#a3ffff]">true</span>
                        </div>
                        <div>
                            <span className="text-[#ff6892]">unused-var </span>
                            <span>= </span>
                            <span className="text-[#a3ffff]">true</span>
                        </div>
                    </code>

                    <div className="mt-6 rounded-xl bg-black/20 p-2 text-white">
                        <p className="text-lg sm:text-xl">Terminal</p>
                        <hr className="my-2"/>
                        <code className="text-sm sm:text-lg lg:text-2xl">
                            <div>
                                <span className="text-[#a3ffff]">$ omi </span>
                                <span>run math.omi </span>
                                <span className="text-[#a3ffff]">--lint</span>
                            </div>
                            <div>
                                <span className="text-[#b1ff96]">✓ No lint issues found.</span>
                            </div>
                        </code>
                    </div>
                </div>
                </motion.div>
            </motion.div>
    </SlideSection>
  )
}
