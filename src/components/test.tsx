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
            className="flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-0"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ staggerChildren: 0.13 }}
        >
            <motion.div className="w-full max-w-3xl lg:max-w-4xl" variants={heading} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="flex w-full flex-row items-center gap-3 bg-[#2d2b55] px-4 py-4 text-5xl text-[#FFA448] sm:text-7xl lg:px-4 lg:py-6 lg:text-9xl">
                    <motion.img
                        src="/icons/test.png"
                        alt=""
                        className="mr-2 h-16 w-16 sm:mr-4 sm:h-24 sm:w-24 lg:h-40 lg:w-40"
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <span>Test</span>
                </h1>
                <p className="mt-3 text-xl leading-snug sm:text-3xl lg:text-5xl">
                    <TypewriterText
                        text="Autotests! They also come with Omi and are configured using .test.omi files"
                        active={isActive}
                    />
                </p>
            </motion.div>

                <motion.div className="w-full max-w-4xl xl:max-w-5xl" variants={details} transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}>
                <span className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl font-bold sm:text-4xl">Example</h1>
                    <code className="min-w-36 w-fit rounded-3xl border-2 border-[#99612a] bg-[#b87635] px-4 p-1.5 text-center text-sm text-orange-100 sm:text-lg">
                        <TypewriterText text=".test.omi" active={isActive} />
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
                            <span className="text-[#a3ffff]">suite </span>
                            <span className="text-[#b1ff96]">"Math"</span>
                            <span>:</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-[#a3ffff]">test </span>
                            <span className="text-[#b1ff96]">"addition"</span>
                            <span>:</span>
                        </div>
                        <div className="ml-12">
                            <span className="text-[#a3ffff]">expect </span>
                            <span>(</span>
                            <span className="text-[#ff6892]">1 </span>
                            <span>+ </span>
                            <span className="text-[#ff6892]">1</span>
                            <span>) </span>
                            <span>== </span>
                            <span className="text-[#ff6892]">2</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-[#a3ffff]">end</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-[#a3ffff]">test </span>
                            <span className="text-[#b1ff96]">"subtraction"</span>
                            <span>:</span>
                        </div>
                        <div className="ml-12">
                            <span className="text-[#a3ffff]">expect</span>
                            <span>(</span>
                            <span className="text-[#ff6892]">5 </span>
                            <span>- </span>
                            <span className="text-[#ff6892]">3</span>
                            <span>) </span>
                            <span>== </span>
                            <span className="text-[#ff6892]">2</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-[#a3ffff]">end</span>
                        </div>
                        <div className="">
                            <span className="text-[#a3ffff]">end</span>
                        </div>
                    </code>

                    <div className="mt-6 rounded-xl bg-black/20 p-2 text-white">
                        <p className="text-lg sm:text-xl">Terminal</p>
                        <hr className="my-2"/>
                        <code className="text-sm sm:text-lg lg:text-2xl">
                            <div>
                                <span className="text-[#a3ffff]">$ omi </span>
                                <span>test math.omi </span>
                            </div>
                            <div>
                                <span className="text-[#a3ffff]">Running tests: /home/script/math.test.omi</span>
                            </div>
                            <div>
                                <span className="text-[#a3ffff]">[SUITE] </span>
                                <span>Math</span>
                            </div>
                            <div className="ml-6">
                                <span className="text-[#b1ff96]">[PASS] </span>
                                <span>addition (0.001s)</span>
                            </div>
                            <div className="ml-6">
                                <span className="text-[#b1ff96]">[PASS] </span>
                                <span>subtraction (0.001s)</span>
                            </div>
                            <div className="mt-6">
                                <span className="text-[#b1ff96]">Summary: 2 passed, 0 failed, 0 skipped (0.002s total)</span>
                            </div>
                        </code>
                    </div>
                </div>
                </motion.div>
                </motion.div>
    </SlideSection>
  )
}
