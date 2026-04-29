"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Grid and Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="container mx-auto px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for Analysis
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
            DECODING DATA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
              VISUALIZING VALUE
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Specializing in transforming complex datasets into interactive visual narratives. 
            From global football history to stock market volatility, I bridge the gap between 
            raw numbers and actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="group relative px-8 py-4 bg-cyan-500 text-black font-bold rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 inline-block">
              <span className="relative z-10 flex items-center gap-2">
                Explore Dashboards <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
            
            <a href="/resume" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-sm hover:bg-white/10 transition-all inline-block">
              Resume
            </a>
          </div>
        </motion.div>

        {/* Floating Stats or Icons */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-50">
          {[
            { icon: Users, label: "Audience Analysis" },
            { icon: TrendingUp, label: "Market Volatility" },
            { icon: Database, label: "Data Engineering" },
            { icon: BarChart3, label: "Predictive Insights" }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-2">
                <Icon className="w-6 h-6 text-gray-500" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-600">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

// Helper to handle missing icons in mapping
function BarChart3(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}
