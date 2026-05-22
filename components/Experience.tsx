"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            Experience
          </p>
          <h2 className="text-3xl font-bold mb-12">Work History</h2>

          <div className="relative border-l border-white/10 pl-8 space-y-10">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[2.85rem] top-1 w-5 h-5 rounded-full bg-indigo-600 border-2 border-[#0f0f0f] flex items-center justify-center">
                  <Briefcase size={10} />
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-colors duration-200">
                  <div className="flex flex-wrap gap-2 justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-400 text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {exp.description}
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
