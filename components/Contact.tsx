"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, GitFork, ExternalLink } from "lucide-react";
const socials = [
  {
    label: "Email",
    icon: <Mail size={20} />,
    href: `mailto:${portfolioData.email}`,
    display: portfolioData.email,
  },
  {
    label: "Instagram",
    icon: <GitFork size={20} />,
    href: portfolioData.instagram,
    display: "imam_harits24",
  },
  {
    label: "LinkedIn",
    icon: <ExternalLink size={20} />,
    href: portfolioData.linkedin,
    display: "linkedin.com/in/imamharitsnasruddin",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-white/50 mb-12 max-w-md mx-auto">
            Open to full-time opportunities, freelance projects, or just a
            friendly chat about tech.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {socials.map(({ label, icon, href, display }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-200 group"
              >
                <span className="text-indigo-400">{icon}</span>
                <div className="text-left">
                  <p className="text-xs text-white/40">{label}</p>
                  <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                    {display}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <p className="mt-20 text-white/20 text-sm">
          © {new Date().getFullYear()} {portfolioData.name}.
        </p>
      </div>
    </section>
  );
}
