"use client";

import { motion } from "framer-motion";
import { Database, BarChart, Cpu, Layout, FileSpreadsheet, Code } from "lucide-react";

const skills = [
  { name: "Tableau", level: 95, icon: BarChart, color: "text-blue-400" },
  { name: "SQL", level: 85, icon: Database, color: "text-emerald-400" },
  { name: "Python", level: 80, icon: Code, color: "text-yellow-400" },
  { name: "Power BI", level: 75, icon: Cpu, color: "text-amber-400" },
  { name: "Excel", level: 90, icon: FileSpreadsheet, color: "text-green-500" },
  { name: "UI/UX for Data", level: 85, icon: Layout, color: "text-purple-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-zinc-950/50">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-cyan-400 mb-4">Technical Stack</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-6">ENGINEERING <span className="text-gray-500">INSIGHTS</span></h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            My toolkit is optimized for high-performance data processing and elegant visual delivery. 
            I focus on accuracy, scalability, and intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-xl relative overflow-hidden group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-white/5 ${skill.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">{skill.name}</h4>
                </div>

                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r from-transparent to-cyan-500`}
                  />
                </div>
                
                <div className="mt-4 flex justify-between text-[10px] uppercase font-bold tracking-widest text-gray-500">
                  <span>Proficiency</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>

                {/* Decorative background number */}
                <span className="absolute -bottom-4 -right-4 text-9xl font-black text-white/5 select-none pointer-events-none transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2">
                  {idx + 1}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
