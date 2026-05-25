"use client";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

const links = ["About", "Experience", "Skills", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/10" : ""}`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-indigo-400 tracking-tight text-lg">
          PORTFOLIO
        </span>

        <ul className="hidden md:flex gap-8 text-sm text-white/60">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white/60 hover:text-indigo-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f]/95 backdrop-blur-md border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="block text-white/60 hover:text-indigo-400 transition-colors duration-200 text-sm py-1"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
