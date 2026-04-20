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
            className="flex justify-between h-screen items-center px-12"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div className="shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.25)] bg-[#282c34] w-188 h-80 text-3xl px-8 rounded-2xl flex justify-center flex-col" variants={preview} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex gap-3 mb-8">
                <span className="bg-red-400 rounded-full w-5 h-5 inline-block"/>
                <span className="bg-yellow-400 rounded-full w-5 h-5 inline-block"/>
                <span className="bg-green-400 rounded-full w-5 h-5 inline-block"/>
            </div>

            <code className="text-white flex flex-col">
              <div>
                <span className="text-[#bb73d2]">@import </span>
                <span className="text-[#98C379]">"omi:python" </span>
                <span className="text-[#bb73d2]">as </span>
                <span className="text-[#da6a73]">py</span>
              </div>
              <div className="mt-6">
                <span className="text-[#bb73d2]">var</span>
                <span className="text-[#54b2be]">{"<"}</span>
                <span className="text-[#da6a73]">py</span>
                <span className="text-zinc-300">.</span>
                <span className="text-[#54b2be]">lib</span>
                <span className="text-[#54b2be]">{">"} </span>
                <span className="text-[#da6a73]">math </span>
                <span className="text-[#54b2be]">= </span>
                <span className="text-[#da6a73]">py</span>
                <span className="text-zinc-300">.</span>
                <span className="text-[#54b2be]">import</span>
                <span className="text-zinc-300">(</span>
                <span className="text-[#98C379]">"math"</span>
                <span className="text-zinc-300">)</span>
              </div>
              <div>
                <span className="text-[#bb73d2]">var</span>
                <span className="text-[#54b2be]">{"<"}</span>
                <span className="text-[#da6a73]">int</span>
                <span className="text-[#54b2be]">{">"} </span>
                <span className="text-[#da6a73]">root </span>
                <span className="text-[#54b2be]">= </span>
                <span className="text-[#da6a73]">py</span>
                <span className="text-zinc-300">.</span>
                <span className="text-[#54b2be]">call</span>
                <span className="text-zinc-300">(</span>
                <span className="text-[#da6a73]">math</span>
                <span className="text-zinc-300">, </span>
                <span className="text-[#98C379]">"sqrt"</span>
                <span className="text-zinc-300">, </span>
                <span className="text-[#d19a59]">81</span>
                <span>)</span>
              </div>
              <div>
                <span className="text-[#da6a73]">println</span>
                <span className="text-zinc-300">(</span>
                <span className="text-[#da6a73]">root</span>
                <span className="text-zinc-300">) </span>
                <span className="text-[#727272] italic">// 9</span>
              </div>
            </code>
          </motion.div>

          <motion.div className="max-w-250 text-right text-white" variants={content} transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="bg-[#282C34] text-9xl p-6">
                    <span className="text-[#98C379]">omi:</span>
                    <span className="text-[#5E84CD]">pyt</span>
                    <span className="text-[#F0E16B]">hon</span>
                </h1>
                <p className="text-5xl mt-3 leading-snug">
                    <TypewriterText
                      text="Through the built-in python module you can connect and use python libraries"
                      active={isActive}
                    />
                </p>
            </motion.div>
        </motion.div>
    </SlideSection>
  )
}
