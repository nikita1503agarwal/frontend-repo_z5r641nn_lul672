import { motion } from 'framer-motion'

const featured = [
  {
    title: 'AI Productivity Suite',
    goals: 'Automate repetitive workflows and improve team velocity.',
    stack: ['React', 'FastAPI', 'MongoDB', 'Tailwind'],
    result: 'Cut manual ops by 60% with real‑time dashboards.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Guitar Tone Lab',
    goals: 'Experiment with impulse responses and signal chains.',
    stack: ['Web Audio', 'Canvas'],
    result: 'Interactive tone shaping with shareable presets.',
    image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Featured() {
  return (
    <section id="featured" className="relative bg-slate-950 text-blue-100 py-20">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold tracking-tight">
          Featured Projects
        </motion.h2>
        <p className="mt-2 text-blue-200/90">Deeper dives into my most impactful work.</p>

        <div className="mt-8 space-y-8">
          {featured.map((f, i) => (
            <div key={f.title} className="grid lg:grid-cols-2 gap-6 items-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img src={f.image} alt={f.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{f.title}</h3>
                <div className="mt-3 grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-blue-300/80">Goals</div>
                    <div className="mt-1 text-blue-100/90">{f.goals}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-blue-300/80">Tech Stack</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {f.stack.map((s) => (
                        <span key={s} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-blue-200/90">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-blue-300/80">Results</div>
                    <div className="mt-1 text-blue-100/90">{f.result}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="inline-flex rounded-xl bg-blue-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-500/30 hover:translate-y-[-2px] transition">Request a Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
