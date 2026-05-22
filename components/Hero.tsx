"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GitFork, ExternalLink, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 text-xs md:text-sm font-medium tracking-widest uppercase mb-3">
            Hello, I&apos;m
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-3">
            {portfolioData.name}
          </h1>
          <p className="text-base md:text-xl text-white/60 mb-2">
            {portfolioData.title}
          </p>
          <p className="text-xs md:text-sm text-indigo-400/80 mb-6 md:mb-8">
            {portfolioData.subtitle}
          </p>

          <div className="flex gap-3 justify-center md:justify-start flex-wrap">
            <a
              href="#contact"
              className="px-5 py-2 md:px-6 md:py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Hire Me
            </a>
            <a
              href="#about"
              className="px-5 py-2 md:px-6 md:py-2.5 border border-white/20 hover:border-indigo-400 text-white/70 hover:text-white rounded-full text-sm font-medium transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-6 md:mt-8 justify-center md:justify-start">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-indigo-400 transition-colors duration-200"
            >
              <GitFork size={18} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-indigo-400 transition-colors duration-200"
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-white/40 hover:text-indigo-400 transition-colors duration-200"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Placeholder Avatar */}
        <motion.div
          className="relative shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/10 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center">
            <span className="text-5xl sm:text-6xl md:text-8xl font-bold text-indigo-400/60 select-none">
              {portfolioData.name.charAt(0)}
            </span>
          </div>
          <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-2xl -z-10" />
          <div
            className="absolute inset-[-12px] rounded-full border border-indigo-500/10 border-dashed animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
