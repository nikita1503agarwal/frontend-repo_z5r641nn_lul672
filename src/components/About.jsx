import { motion } from 'framer-motion'

export default function About() {
  const items = [
    { title: 'Passions', desc: 'Web performance, clean architecture, sound design, tone chasing.' },
    { title: 'Personality', desc: 'Curious, calm under pressure, collaborative, and detail oriented.' },
    { title: 'What I Do', desc: 'Full‑stack apps, UI engineering, and guitar in Abi and the Aviators.' },
  ]

  return (
    <section id="about" className="relative bg-slate-950 text-blue-100 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-blue-200/90 leading-relaxed max-w-2xl">
              I’m a developer and guitarist who loves crafting expressive interfaces and memorable live performances.
              My work blends technical excellence with musical creativity.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {items.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur shadow-sm hover:shadow-blue-500/10 transition">
                  <h3 className="font-semibold text-white">{card.title}</h3>
                  <p className="mt-1 text-sm text-blue-200/90">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-3xl blur-xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-blue-300/60">Profile Image</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
