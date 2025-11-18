import { Code2, Music, Wrench, Boxes, Cpu, Guitar, MicVocal, LibraryBig } from 'lucide-react'
import { motion } from 'framer-motion'

const techSkills = [
  { label: 'React / Next.js', icon: Code2 },
  { label: 'TypeScript', icon: Boxes },
  { label: 'Node.js', icon: Cpu },
  { label: 'Tailwind CSS', icon: Wrench },
]

const creativeSkills = [
  { label: 'Guitar', icon: Guitar },
  { label: 'Band / Live', icon: Music },
  { label: 'Songwriting', icon: LibraryBig },
  { label: 'Performance', icon: MicVocal },
]

function SkillPill({ Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-blue-100/90 backdrop-blur">
      <Icon className="w-4 h-4 text-blue-300" />
      <span className="text-sm">{label}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-950 text-blue-100 py-20">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold tracking-tight">
          Skills
        </motion.h2>
        <p className="mt-2 text-blue-200/90">Technical and creative abilities side by side.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <h3 className="font-semibold text-white mb-4">Technical</h3>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((s) => (
                <SkillPill key={s.label} Icon={s.icon} label={s.label} />
              ))}
            </div>

            {/* Progress bars */}
            <div className="mt-6 space-y-4">
              {['Frontend', 'Backend', 'UI/UX', 'Performance'].map((name, i) => (
                <div key={name}>
                  <div className="flex justify-between text-sm text-blue-200/80">
                    <span>{name}</span>
                    <span>{70 + i * 5}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${70 + i * 5}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <h3 className="font-semibold text-white mb-4">Creative</h3>
            <div className="flex flex-wrap gap-3">
              {creativeSkills.map((s) => (
                <SkillPill key={s.label} Icon={s.icon} label={s.label} />
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-blue-200/80">
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">Blue Stratocaster enthusiast</div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">John Mayer inspired tones</div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">Stage-ready rig</div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">Studio recording</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
