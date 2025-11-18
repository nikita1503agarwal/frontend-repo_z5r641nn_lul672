import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.25),transparent_60%)]" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative container mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-blue-200 backdrop-blur">
            Portfolio • Modern • Creative
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">Your Name</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-4 text-blue-200/90 text-lg leading-relaxed max-w-xl">
            Developer • Musician • Problem Solver. I build engaging web experiences and play guitar with passion.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:translate-y-[-2px] hover:shadow-blue-500/40">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-blue-100/90 backdrop-blur hover:bg-white/10 transition">
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Decorative card stack */}
        <div className="hidden lg:block pointer-events-none">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="relative">
            <div className="absolute -inset-8 bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />
            <div className="grid grid-cols-2 gap-6">
              <div className="h-48 rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-blue-200">Tech</div>
              <div className="h-64 rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-blue-200">Music</div>
              <div className="col-span-2 h-40 rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-blue-200">Creative Energy</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950" />
    </section>
  )
}
