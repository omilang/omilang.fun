import { useContext } from "react";
import SlideSection from "./slider/slide-section";
import { motion } from "motion/react";
import { SliderContext } from "./slider/slider-context";
import TypewriterText from "./slider/typewriter-text";

const preview = {
  hidden: { opacity: 0, x: -26, y: 10, rotate: -1.2, filter: "blur(6px)" },
  show: { opacity: 1, x: 0, y: 0, rotate: 0, filter: "blur(0px)" },
};

const content = {
  hidden: { opacity: 0, x: 26, y: 12, scale: 0.985, filter: "blur(4px)" },
  show: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
};

export default function Python() {
  const { currentSlide } = useContext(SliderContext);
  const isActive = currentSlide === 5;

  return (
    <SlideSection index={5} className="bg-[#1A1925]">
        <motion.div
            className="flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-0"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div className="shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)] flex w-full max-w-4xl flex-col justify-center rounded-2xl bg-[#282c34] px-4 py-6 text-sm sm:px-6 sm:py-8 sm:text-lg lg:max-w-5xl lg:px-8 lg:text-3xl" variants={preview} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-8 flex gap-3">
                <span className="bg-red-400 rounded-full w-5 h-5 inline-block"/>
                <span className="bg-yellow-400 rounded-full w-5 h-5 inline-block"/>
                <span className="bg-green-400 rounded-full w-5 h-5 inline-block"/>
            </div>

            <code className="text-white flex flex-col">
              <div>
                <span className="text-[#bb73d2]">@import </span>
                <span className="text-[#98C379]">"omi:python" </span>
                <span className="text-[#bb73d2]">as </span>
                <span className="text-[#e5c07b]">py</span>
              </div>
              <div className="mt-6">
                <span className="text-[#bb73d2]">var</span>
                <span className="text-[#54b2be]">{"<"}</span>
                <span className="text-[#e5c07b]">py.lib</span>
                <span className="text-[#54b2be]">{">"} </span>
                <span className="text-[#da6a73]">math </span>
                <span className="text-[#54b2be]">= </span>
                <span className="text-[#e5c07b]">py</span>
                <span className="text-zinc-300">.</span>
                <span className="text-[#4bafef]">import</span>
                <span className="text-[#d19a59]">(</span>
                <span className="text-[#98C379]">"math"</span>
                <span className="text-[#d19a59]">)</span>
              </div>
              <div>
                <span className="text-[#bb73d2]">var</span>
                <span className="text-[#54b2be]">{"<"}</span>
                <span className="text-[#e5c07b]">float</span>
                <span className="text-[#54b2be]">{">"} </span>
                <span className="text-[#da6a73]">root </span>
                <span className="text-[#54b2be]">= </span>
                <span className="text-[#e5c07b]">py</span>
                <span className="text-zinc-300">.</span>
                <span className="text-[#4bafef]">call</span>
                <span className="text-[#d19a59]">(</span>
                <span className="text-[#da6a73]">math</span>
                <span className="text-zinc-300">, </span>
                <span className="text-[#98C379]">"sqrt"</span>
                <span className="text-zinc-300">, </span>
                <span className="text-[#d19a59]">81</span>
                <span className="text-[#d19a59]">)</span>
              </div>
              <div>
                <span className="text-[#4bafef]">println</span>
                <span className="text-[#d19a59]">(</span>
                <span className="text-[#da6a73]">root</span>
                <span className="text-[#d19a59]">) </span>
                <span className="text-[#727272]">// 9.0</span>
              </div>
            </code>
          </motion.div>

            <motion.div className="w-full max-w-3xl text-white lg:max-w-5xl lg:text-right" variants={content} transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}>
              <h1 className="bg-[#282C34] px-4 py-4 text-4xl sm:text-7xl lg:px-0 lg:py-6 lg:text-6xl xl:text-[6rem] 2xl:text-[8rem]">
                    <span className="text-[#98C379]">omi:</span>
                    <span className="text-[#5E84CD]">pyt</span>
                    <span className="text-[#F0E16B]">hon</span>
                </h1>
              <p className="mt-3 text-xl leading-snug sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
                    <TypewriterText
                      text="To avoid unnecessary overriding, you always specify the value type"
                      active={isActive}
                    />
                </p>
            </motion.div>
        </motion.div>
    </SlideSection>
  )
}
