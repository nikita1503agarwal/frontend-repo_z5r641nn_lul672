import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="relative bg-slate-950 text-blue-100 py-20">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold tracking-tight">
          Education
        </motion.h2>
        <p className="mt-2 text-blue-200/90">Focused on analytical thinking and computer science foundations.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { title: 'Maths', desc: 'Strong foundations in calculus, algebra, and problem solving.' },
            { title: 'Further Maths', desc: 'Advanced topics and mathematical reasoning.' },
            { title: 'Computer Science', desc: 'Data structures, algorithms, and software engineering.' },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-sm">
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-blue-200/90 text-sm">{s.desc}</p>
              <div className="mt-4 h-1.5 w-full rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold text-white">Achievements & Certificates</h3>
          <p className="mt-2 text-blue-200/90 text-sm">Add awards, certifications, or standout coursework here.</p>
        </div>
      </div>
    </section>
  )
}
