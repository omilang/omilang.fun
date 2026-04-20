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
            <motion.div className="max-w-180" variants={heading} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="bg-[#2d2b55] text-[#FFA448] text-[175px] pl-4 flex flex-row items-center gap-3">
                    <img src="/icons/test.png" alt="" className="w-40 h-40"/>
                    <span className="ml-3">Test</span>
                </h1>
                <p className="text-5xl mt-3 leading-snug">
                <TypewriterText
                    text="Autotests! They also come with Omi and are configured using .test.omi files"
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

                <div className="shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.5)] bg-[#2d2b55] h-175 w-250 text-3xl px-8 rounded-2xl flex justify-center flex-col">
                    <div className="flex gap-3 mb-6">
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

                    <div className="mt-6 text-white bg-black/20 p-2 rounded-xl">
                        <p className="text-xl">Terminal</p>
                        <hr className="my-2"/>
                        <code className="text-2xl">
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
