import { motion } from 'framer-motion'
import { Guitar, Play, Youtube, Music2 } from 'lucide-react'

export default function Music() {
  return (
    <section id="music" className="relative bg-slate-950 text-blue-100 py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-start justify-between gap-8 flex-col lg:flex-row">
          <div className="max-w-2xl">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold tracking-tight">
              Music Life
            </motion.h2>
            <p className="mt-3 text-blue-200/90">
              Guitarist for Abi and the Aviators. I play a blue Stratocaster chasing expressive tones inspired by John Mayer.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Guitar, title: 'Blue Stratocaster', desc: 'My main axe — versatile, expressive, stage-ready.' },
                { icon: Music2, title: 'Abi and the Aviators', desc: 'Energetic live shows and melodic songwriting.' },
              ].map((x) => (
                <div key={x.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <x.icon className="w-5 h-5 text-blue-300" />
                  <h3 className="mt-2 font-semibold text-white">{x.title}</h3>
                  <p className="text-sm text-blue-200/90">{x.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[520px]">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2Vv-BfVoq4g?rel=0"
                title="Performance sample"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20" />
            </div>
            <div className="mt-3 text-sm text-blue-300/80">Optional: replace with your own video or audio.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
