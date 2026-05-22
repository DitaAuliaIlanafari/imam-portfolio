"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            Education
          </p>
          <h2 className="text-3xl font-bold mb-12">Academic Background</h2>

          <div className="space-y-6">
            {portfolioData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center shrink-0 mt-1">
                  <GraduationCap size={18} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-400 text-sm mb-1">{edu.school}</p>
                  <p className="text-white/40 text-xs mb-3">{edu.period}</p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
