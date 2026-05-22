"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            About Me
          </p>
          <h2 className="text-3xl font-bold mb-8">Who I Am</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-white/60 leading-relaxed text-lg">
              {portfolioData.bio}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Focus", value: "Full Stack" },
                { label: "Stack", value: "React · Node · PG" },
                { label: "Background", value: "Law + Tech" },
                { label: "Status", value: "Open to Work" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-indigo-500/40 transition-colors duration-200"
                >
                  <p className="text-white/40 text-xs mb-1">{label}</p>
                  <p className="text-white font-medium text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
