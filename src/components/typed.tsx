export default function Typed() {
  return (
    <section className="bg-[#6E52C2] h-screen">
        <div className="flex justify-between h-screen items-center px-12">
            <img src="/code/typed.png" alt="" className="h-96 shadow-xl"/>

            <div className="max-w-175 text-right text-white">
                <h1 className="bg-[#2d2b55] text-9xl py-6">
                    <span className="text-[#56B6C2]">{"<"}</span>
                    <span className="text-[#D96A72]">typed</span>
                    <span className="text-[#56B6C2]">{">"}</span>
                </h1>
                <p className="text-5xl mt-3 leading-snug">
                    To avoid unnecessary overriding, you always specify the value type
                </p>
            </div>
        </div>
    </section>
  )
}
