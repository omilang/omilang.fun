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
          className="h-32 w-2 bg-[#5266e6] inline-block"
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
            className="flex justify-between h-screen items-center px-12"
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
          transition={{ staggerChildren: 0.12 }}
        >
            <motion.div className="shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.5)] bg-[#16191d] w-220 h-100 text-3xl rounded-2xl flex justify-center flex-col" variants={preview} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <code className="flex flex-col text-9xl">
                <div>
                  <span className="text-white/50">55</span>
                </div>
                <div className="bg-white/15 inline-flex">
                  <span className="text-white/50 mr-18">56</span>
                  <span>
                    <TypedSignature active={isActive} />
                  </span>
                </div>
                <div>
                  <span className="text-white/50">57</span>
                </div>
            </code>
          </motion.div>
          
          <motion.div className="max-w-2xl text-right text-white" variants={content} transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}>
                <h1 className="bg-[#16191d] text-9xl py-6">
                    <span className="text-[#ff6892]">{"<"}</span>
                    <span className="text-[#a3ffff]">typed</span>
                    <span className="text-[#ff6892]">{">"}</span>
                </h1>
                <p className="text-5xl mt-3 leading-snug">
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
