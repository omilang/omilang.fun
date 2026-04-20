import { images } from "@/config/images";
import Header from "./header";
import { ChevronDown, Copy } from "lucide-react";
import { Button } from "./ui/button";
import SlideSection from "./slider/slide-section";
import { motion } from "motion/react";

const heroItem = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Main() {
  return (
    <SlideSection index={0} className="bg-[#271B4C]" animateOnMount>
        <Header/>
          <div className="flex justify-between px-12 items-center h-screen">
            <motion.section
                initial="hidden"
                animate="show"
                transition={{ staggerChildren: 0.12, delayChildren: 0.12 }}
            >
                <motion.h1 className="text-white text-8xl leading-snug" variants={heroItem} transition={{ duration: 0.45, ease: "easeOut" }}>
                    <span className="block">
                        Type, test
                    </span>
                    <span>
                        and lint
                    </span>
                    <span className="flex items-center">
                        <span className="inline">with</span>
                        <img src={images.LOGO} alt="Omi Logo" className="inline-block align-baseline h-18 ml-6"/>
                    </span>
                </motion.h1>

                <motion.p className="text-[#5AD27A] text-3xl flex items-center mt-4" variants={heroItem} transition={{ duration: 0.45, ease: "easeOut" }}>
                    »I'm writing in Omi, btw <img src={images.ICONS.ZEVAET} alt="" className="w-8 h-8 ml-2"/>« 
                </motion.p>

                <motion.div className="flex items-center gap-4 mt-8" variants={heroItem} transition={{ duration: 0.45, ease: "easeOut" }}>
                    <div className="flex-1 max-w-2xl flex-row flex items-center gap-4">
                        <div className="bg-[#2d2b55] text-white text-xl flex items-center justify-between p-3 px-4 rounded-xl max-w-96 w-full">
                            <code className="truncate">
                                <span className="text-[#9effff]">$ pip </span>
                                install omilang
                            </code>
                            <Copy className="text-[#9effff] hover:scale-110 duration-300 ml-4"/>
                        </div>
                        <Button variant={"secondary"} className="p-6 px-8 rounded-xl text-lg">
                            Docs
                        </Button>
                    </div>
                </motion.div>
            </motion.section>
            <motion.div
                className="shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.25)] bg-[#2d2b55] w-200 h-100 text-3xl px-8 rounded-2xl flex justify-center flex-col"
                initial={{ opacity: 0, x: 24, scale: 0.99, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            >
                <div className="flex gap-3 mb-8">
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
          <div className="bg-white rounded-full relative -top-20 flex justify-center w-30 items-center p-1 animate-bounce">
            <span>Scroll</span>
            <ChevronDown/>
          </div>
        </div>
    </SlideSection>
  )
}
