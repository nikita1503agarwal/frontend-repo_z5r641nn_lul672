import { motion } from 'framer-motion'

const sampleProjects = [
  {
    title: 'Realtime Chat App',
    tags: ['React', 'WebSocket', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    description: 'Realtime messaging with typing indicators and presence.',
    featured: true,
  },
  {
    title: 'Music Visualizer',
    tags: ['Canvas', 'Audio API'],
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
    description: 'Audio‑reactive visuals and smooth transitions.',
    featured: false,
  },
  {
    title: 'Portfolio Generator',
    tags: ['Next.js', 'Design'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    description: 'Elegant, animated portfolio starter.',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 text-blue-100 py-20">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold tracking-tight">
          Projects Overview
        </motion.h2>
        <p className="mt-2 text-blue-200/90">A selection of work across tech and creative projects.</p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-blue-200/90">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-blue-200/90">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
