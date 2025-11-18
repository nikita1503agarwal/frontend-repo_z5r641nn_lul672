import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 text-blue-100 py-20">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold tracking-tight">
          Contact
        </motion.h2>
        <p className="mt-2 text-blue-200/90">Let’s build something great together.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-10">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-blue-200/80">Name</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2.5 text-blue-100 placeholder:text-blue-300/40 focus:border-blue-500/50 focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-blue-200/80">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2.5 text-blue-100 placeholder:text-blue-300/40 focus:border-blue-500/50 focus:outline-none" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-blue-200/80">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2.5 text-blue-100 placeholder:text-blue-300/40 focus:border-blue-500/50 focus:outline-none" placeholder="Tell me about your project..." />
            </div>
            <button className="mt-6 inline-flex rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 hover:translate-y-[-2px] transition">
              Send Message
            </button>
          </form>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-white">Links</h3>
              <ul className="mt-2 text-blue-200/90">
                <li><a className="hover:text-white" href="mailto:you@example.com">you@example.com</a></li>
                <li><a className="hover:text-white" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a className="hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a className="hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-white">Availability</h3>
              <p className="mt-2 text-blue-200/90 text-sm">Open to freelance, session work, and collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
