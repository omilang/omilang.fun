import { images } from "@/config/images";
import Header from "./header";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";

export default function Main() {
  return (
    <main className="h-screen">
        <Header/>
        <div className="flex justify-between px-12 items-center h-screen">
            <section>
                <h1 className="text-white text-8xl leading-snug">
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
                </h1>

                <p className="text-[#5AD27A] text-3xl flex items-center mt-4">
                    »I'm writing in Omi, btw <img src={images.ICONS.ZEVAET} alt="" className="w-8 h-8 ml-2"/>« 
                </p>

                <div className="flex items-center gap-4 mt-8">
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
                </div>
            </section>
            <img src="/code/landing.png" alt="Omi Code" className="max-h-125 h-full shadow-2xl"/>
        </div>
    </main>
  )
}
