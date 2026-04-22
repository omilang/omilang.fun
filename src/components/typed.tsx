import { useContext, useEffect, useMemo, useState } from "react";
import SlideSection from "./slider/slide-section";
import { motion } from "motion/react";
import { SliderContext } from "./slider/slider-context";
import TypewriterText from "./slider/typewriter-text";

const preview = {
  hidden: { opacity: 0, x: -34, scale: 0.96, rotate: -1.2, filter: "blur(6px)" },
  show: { opacity: 1, x: 0, scale: 1, rotate: 0, filter: "blur(0px)" },
};

const content = {
  hidden: { opacity: 0, x: 22, y: 14, filter: "blur(4px)" },
  show: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
};

const signature = "func<int>";

function TypedSignature({ active }: { active: boolean }) {
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    if (!active) {
      const resetTimer = window.setTimeout(() => {
        setVisibleLength(0);
      }, 0);

      return () => window.clearTimeout(resetTimer);
    }

    if (visibleLength >= signature.length) return;

    const timeout = window.setTimeout(() => {
      setVisibleLength((current) => Math.min(current + 1, signature.length));
    }, visibleLength === 0 ? 140 : 85);

    return () => window.clearTimeout(timeout);
  }, [active, visibleLength]);

  const renderedChars = useMemo(
    () => signature.slice(0, visibleLength).split(""),
    [visibleLength],
  );

  return (
    <span className="inline-flex items-end gap-0.5">
      {renderedChars.map((char, index) => {
        const color =
          char === "<" || char === ">"
            ? "text-[#ff6892]"
            : (char === "i" || char === "n" || char === "t") && index >= 5
              ? "text-[#a3ffff]"
              : "text-[#b1ff96]";

        return (
          <span key={`${char}-${index}`} className={color}>
            {char}
          </span>
        );
      })}
      {active ? (
        <motion.span
          className="h-[1em] w-1 lg:w-2 bg-[#5266e6] inline-block mr-3"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 1,
            delay: 0.7,
            repeat: Infinity,
            times: [0, 0.49, 0.5, 1],
            ease: "linear",
          }}
        />
      ) : null}
    </span>
  );
}

export default function Typed() {
  const { currentSlide } = useContext(SliderContext);
  const isActive = currentSlide === 2;

  return (
    <SlideSection index={2} className="bg-[#6E52C2]">
        <motion.div
          className="flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-0"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ staggerChildren: 0.12 }}
        >
            <motion.div className="shadow-[0px_10px_20px_0px_rgba(0,0,0,0.5)] flex w-full max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl flex-col justify-center rounded-2xl bg-[#16191d] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 text-sm sm:text-lg lg:text-2xl 2xl:text-xl" variants={preview} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <code className="flex flex-col text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl">
                <div>
                  <span className="text-white/50">55</span>
                </div>
                <div className="bg-white/15 inline-flex">
                  <span className="text-white/50 mr-8 sm:mr-6 2xl:mr-12">56</span>
                  <span>
                    <TypedSignature active={isActive} />
                  </span>
                </div>
                <div>
                  <span className="text-white/50">57</span>
                </div>
            </code>
          </motion.div>
          
          <motion.div className="w-full max-w-3xl text-white lg:max-w-4xl lg:text-right" variants={content} transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="bg-[#16191d] px-4 py-4 text-5xl sm:text-7xl lg:px-0 lg:py-6 lg:text-8xl xl:text-[6rem] 2xl:text-[8rem]">
                  <span className="text-[#ff6892]">{"<"}</span>
                  <span className="text-[#a3ffff]">typed</span>
                  <span className="text-[#ff6892]">{">"}</span>
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
