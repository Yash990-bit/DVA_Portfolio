"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/20 border-b border-white/5"
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <BarChart3 className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform" />
        <span className="text-xl font-bold tracking-tighter glow-text">
          YASH<span className="text-cyan-400">.DVA</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <Link href="#hero" className="hover:text-white transition-colors">Overview</Link>
        <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
        <Link href="#skills" className="hover:text-white transition-colors">Stack</Link>
        <Link href="#contact" className="hover:text-white transition-colors">Connect</Link>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com/Yash990-bit" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <FaGithub className="w-5 h-5" />
        </a>
        <button className="hidden sm:block px-5 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase hover:bg-cyan-500/20 transition-all rounded-sm">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
}
