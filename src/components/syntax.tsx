export default function Syntax() {
  return (
    <section className="bg-[#5ad27a] h-screen">
        <div className="flex justify-between h-screen items-center px-12">
            <div className="max-w-187.5">
                <h1 className="bg-[#2d2b55] text-white text-9xl py-6">
                    <span className="text-[#9EFFFF]">Syntax</span>()
                </h1>
                <p className="text-5xl mt-3 leading-snug">
                    The language has incorporated pieces from everything possible, from Basic to C++
                </p>
            </div>

            <div>
                <span className="flex justify-between items-center mb-3">
                    <h1 className="text-4xl font-bold">Example</h1>
                    <code className="text-lg p-1.5 bg-[#224041]/80 text-green-200 border-2 border-green-600 rounded-3xl px-4">.omi</code>
                </span>
                <img src="/code/example.png" alt="" className="h-96 shadow-xl"/>
            </div>
        </div>
    </section>
  )
}
