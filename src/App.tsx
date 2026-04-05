import { images } from "./config/images";
import { links } from "./config/links";
import { pages } from "./config/pages";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_10%_15%,#785ad255_0%,#785ad200_38%),radial-gradient(circle_at_85%_25%,#5ad27a40_0%,#5ad27a00_35%),linear-gradient(145deg,#0e1022,#151935)] text-slate-50">
      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-12 sm:px-8">
        <div
          className="pointer-events-none absolute -left-16 top-16 h-48 w-48 rounded-full bg-[#785ad26b] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-[55%] h-60 w-60 rounded-full bg-[#5ad27a54] blur-3xl"
          aria-hidden="true"
        />

        <header className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2">
            <img src={images.ICON} alt="Omi logo" className="h-8 w-8 object-cover" />
            <span className="text-xs font-semibold tracking-[0.18em] text-slate-100">OMI LANGUAGE</span>
          </div>

          <h1 className="mt-4 text-4xl font-black leading-tight text-balance sm:text-6xl">
            Create simple scripts with Omi.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Omi is a strongly typed, interpreted programming language written and run in Python.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={pages.CODE}
              className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-[#5ad27a] to-[#8ee8a7] px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_10px_24px_#5ad27a40] transition hover:-translate-y-0.5"
            >
              View Example
            </a>
            <a
              href={links.GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-[#785ad280] bg-[#785ad220] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a
              href={links.DOCS}
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5"
            >
              Documentation
            </a>
          </div>
        </header>

        <main className="relative z-10">
          <section id="features" className="mt-12 grid gap-4 md:grid-cols-3" aria-label="Omi features">
            <article className="rounded-2xl border border-white/15 bg-linear-to-br from-[#1a1f3e88] to-[#12163199] p-5 backdrop-blur">
              <span className="text-lg font-bold flex flex-row items-center gap-2">
                <img src={images.ICONS.PYTHON} className="w-5 h-5" alt="python" />
                Speed by Python
              </span>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                The language is written and runs in Python, whose interpreter is already very slow, so our language works even worse!
              </p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-linear-to-br from-[#1a1f3e88] to-[#12163199] p-5 backdrop-blur">
              <span className="text-lg font-bold flex flex-row items-center gap-2">
                <img src={images.ICONS.CLAUDE} className="w-5 h-5" alt="claude" />
                99% Vibe code
              </span>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                All code is written by our staff consisting of Claude, ChatGPT, Codex and Gemini
              </p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-linear-to-br from-[#1a1f3e88] to-[#12163199] p-5 backdrop-blur">
              <span className="text-lg font-bold flex flex-row items-center gap-2">
                <img src={images.ICONS.MINUS} className="w-5 h-5" alt="minus in circle" />
                Useless to use
              </span>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                We don't know why it exists, just for fun. If you find applications, write to mail@qual.su please
              </p>
            </article>
          </section>

          <section
            id="code"
            className="mt-9 rounded-3xl border border-white/15 bg-linear-to-br from-[#171b3cb8] to-[#101328e0] p-5 shadow-[0_22px_42px_#090b1a66]"
            aria-label="Omi code example"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-bold">Example</h2>
              <span className="inline-flex items-center justify-center rounded-full border border-[#5ad27a80] bg-[#5ad27a2e] px-2.5 py-1 text-xs font-bold text-green-100">
                .omi
              </span>
            </div>

            <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/15 bg-[#0f132a]/90 p-4">
              <code className="block whitespace-pre font-mono text-sm leading-7 text-slate-100">
                <span className="text-[#a78bfa]">func</span>
                <span className="text-[#fda4af]">{"<int>"}</span>{" "}
                <span className="text-[#67e8f9]">factorial</span>(<span className="text-[#67e8f9]">n</span>
                <span className="text-[#fda4af]">{"<int>"}</span>):
                {"\n"}
                {"  "}
                <span className="text-[#a78bfa]">if</span> <span className="text-[#67e8f9]">n</span> {"<="} <span className="text-[#fda4af]">1</span>: <span className="text-[#a78bfa]">return</span> <span className="text-[#fda4af]">1</span>
                {"\n"}
                {"  "}
                <span className="text-[#a78bfa]">return</span> <span className="text-[#67e8f9]">n</span> {" * "}<span className="text-[#67e8f9]">factorial</span>(<span className="text-[#67e8f9]">n</span> - <span className="text-[#fda4af]">1</span>)
                {"\n"}
                <span className="text-[#a78bfa]">end</span>
                {"\n\n"}
                <span className="text-[#86efac]">// Factorial from 1 to 6</span>
                {"\n"}
                <span className="text-[#a78bfa]">for</span> <span className="text-[#67e8f9]">i</span> = <span className="text-[#fda4af]">1</span> <span className="text-[#a78bfa]">to</span> <span className="text-[#fda4af]">6</span>:
                {"\n"}
                {"  "}
                <span className="text-[#67e8f9]">print</span>(<span className="text-[#67e8f9]">factorial</span>(<span className="text-[#67e8f9]">i</span>))
                {"\n"}
                <span className="text-[#a78bfa]">end</span>
              </code>
            </pre>
          </section>
        </main>

        <footer className="relative z-10 mt-10 border-t border-white/10 pt-5 text-sm text-slate-300">
          <span className="flex justify-between">
            <span>&copy; 2026</span>
            <p>
              <span>by </span>
              <a
                href={links.QUALSU}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#5ad27a] transition hover:text-[#8ee8a7]"
              >
                Qualsu
              </a>
            </p>
          </span>
        </footer>
      </div>
    </div>
  )
}