import { images } from "@/config/images";
import Header from "./header";
import { ChevronDown, Copy } from "lucide-react";
import { Button } from "./ui/button";
import SlideSection from "./slider/slide-section";
import { motion } from "motion/react";
import { useState, useEffect, useContext, useRef } from "react";
import { SliderContext } from "./slider/slider-context";
import { links } from "@/config/links";
import toast from "react-hot-toast";

const heroItem = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const cmd = "pip install omilang"

export default function Main() {
  const { currentSlide } = useContext(SliderContext);
  
  const [hasScrolled, setHasScrolled] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('mainScrollViewed') === 'true';
    }
    return false;
  });
  
  const [showScroll, setShowScroll] = useState(false);
  const listenerAddedRef = useRef(false);

  useEffect(() => {
    if (hasScrolled) {
      return;
    }

    const timer = setTimeout(() => {
      if (currentSlide === 0) {
        setShowScroll(true);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [hasScrolled, currentSlide]);

  useEffect(() => {
    if (hasScrolled || !showScroll) {
      return;
    }

    const handleScroll = () => {
      setShowScroll(false);
      setHasScrolled(true);
      sessionStorage.setItem('mainScrollViewed', 'true');
      
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      document.removeEventListener('wheel', handleScroll);
      listenerAddedRef.current = false;
    };

    if (!listenerAddedRef.current) {
      window.addEventListener('scroll', handleScroll, { once: true });
      window.addEventListener('wheel', handleScroll, { once: true });
      document.addEventListener('wheel', handleScroll, { once: true });
      listenerAddedRef.current = true;
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      document.removeEventListener('wheel', handleScroll);
    };
  }, [hasScrolled, showScroll]);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(cmd)
        toast.success("Command copied to clipboard!", {
            style: {
                fontSize: "14px",
                color: "#fff",
                background: "#2d2b55",
            },
            iconTheme: {
                primary: '#2d2b55',
                secondary: '#9effff',
            },
        });
    }
  }

  return (
    <SlideSection index={0} className="bg-[#271B4C]" animateOnMount>
        <Header/>
          <div className="flex h-screen flex-col items-start justify-center gap-10 px-4 pt-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:pt-10">
            <motion.section
                className="w-full max-w-3xl text-left lg:max-w-4xl"
                initial="hidden"
                animate="show"
                transition={{ staggerChildren: 0.12, delayChildren: 0.12 }}
            >
                <motion.h1 className="text-white text-5xl md:text-6xl 2xl:text-8xl leading-snug" variants={heroItem} transition={{ duration: 0.45, ease: "easeOut" }}>
                    <span className="block">
                        Type, test
                    </span>
                    <span>
                        and lint
                    </span>
                    <span className="flex items-center">
                        <span className="inline">with</span>
                        <img src={images.LOGO} alt="Omi Logo" className="inline-block align-baseline h-11 md:h-16 ml-3 md:ml-6"/>
                    </span>
                </motion.h1>

                <motion.p className="text-[#5AD27A] text-lg md:text-2xl 2xl:text-3xl flex items-center mt-4" variants={heroItem} transition={{ duration: 0.45, ease: "easeOut" }}>
                    »I'm writing in Omi, btw <img src={images.ICONS.ZEVAET} alt="" className="w-6 md:w-8 h-6 md:h-8 ml-2"/>« 
                </motion.p>

                <motion.div className="mt-8 flex items-start gap-4 mr-0 lg:mr-3" variants={heroItem} transition={{ duration: 0.45, ease: "easeOut" }}>
                  <div className="flex w-full max-w-2xl flex-row items-start gap-4  sm:items-center">
                        <div className="bg-[#2d2b55] text-white text-sm md:text-xl flex items-center justify-between p-2 md:p-3 px-3 md:px-4 rounded-xl max-w-96 w-full">
                            <code className="truncate">
                                <span className="text-[#9effff]">$ pip </span>
                                install omilang
                            </code>
                            <Copy className="text-[#9effff] hover:scale-110 duration-300 ml-2 md:ml-4 w-4 md:w-5 h-4 md:h-5" onClick={handleCopy}/>
                        </div>
                        <a href={links.DOCS}>
                            <Button variant={"secondary"} className="p-4 md:p-6 px-8 rounded-xl text-lg">
                                Docs
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </motion.section>

            <motion.div
                className="shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)] bg-[#2d2b55] w-full max-w-200 h-64 md:h-92 2xl:h-100 text-sm md:text-2xl 2xl:text-3xl px-4 md:px-8 rounded-2xl flex justify-center flex-col"
                initial={{ opacity: 0, x: 24, scale: 0.99, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            >
                <div className="flex gap-3 mb-4 sm:mb-8">
                    <span className="bg-red-400 rounded-full w-5 h-5 inline-block"/>
                    <span className="bg-yellow-400 rounded-full w-5 h-5 inline-block"/>
                    <span className="bg-green-400 rounded-full w-5 h-5 inline-block"/>
                </div>

                <code className="text-white flex flex-col">
                    <div>
                        <span className="text-[#a3ffff]">$ omi </span>
                        <span>run request.omi </span>
                        <span className="text-[#a3ffff]">--lint</span>
                    </div>
                    <div>
                        <span className="text-[#b1ff96]">✓ No lint issues found.</span>
                    </div>
                    <div>
                        <span>{"{"}</span>
                        <div className="ml-6">
                            <span className="text-[#b1ff96]">"userId"</span>
                            <span>: </span>
                            <span className="text-[#ff6892]">1</span>
                            <span>,</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-[#b1ff96]">"id"</span>
                            <span>: </span>
                            <span className="text-[#ff6892]">1</span>
                            <span>,</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-[#b1ff96]">"title"</span>
                            <span>: </span>
                            <span className="text-[#b1ff96]">"deletus aut autem"</span>
                            <span>,</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-[#b1ff96]">"completed"</span>
                            <span>: </span>
                            <span>true</span>
                            <span>,</span>
                        </div>
                        <span>{"}"}</span>
                    </div>
                </code>
            </motion.div>
          </div>

        <div className="flex justify-center">
          <motion.div 
            className="bg-white rounded-full relative -top-20 flex justify-center w-30 items-center p-1 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: showScroll && !hasScrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: showScroll && !hasScrolled ? 'auto' : 'none' }}
          >
            <span>Scroll</span>
            <ChevronDown/>
          </motion.div>
        </div>
    </SlideSection>
  )
}
