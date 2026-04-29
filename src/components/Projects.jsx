"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, LineChart, Globe, Layers } from "lucide-react";

const projects = [
  {
    title: "FIFA World Cup Analytics",
    subtitle: "Historical Analysis (1930 - 2014)",
    description: "A comprehensive Tableau dashboard exploring 80+ years of football history. Visualizing championship trends, team performances, and host nation statistics.",
    tags: ["Tableau", "Excel", "Data Storytelling"],
    metrics: ["80+ Years Data", "Global Reach", "Interactive Maps"],
    icon: Trophy,
    color: "from-amber-400 to-orange-600",
    link: "https://public.tableau.com/shared/6YGC2GMHB?:display_count=n&:origin=viz_share_link",
    repo: "https://github.com/Yash990-bit/fifa_analytics"
  },
  {
    title: "Stock Market Dashboard",
    subtitle: "Tech Giants Volatility Analysis",
    description: "Historical performance and trend analysis for Apple, Google, Nvidia, Tesla, and Meta. Featuring moving averages and volume-weighted insights.",
    tags: ["Tableau", "Finance", "Predictive Viz"],
    metrics: ["Real-time Trends", "Moving Averages", "Volume Analysis"],
    icon: LineChart,
    color: "from-cyan-400 to-blue-600",
    link: "https://public.tableau.com/views/StockMarketAnalysis_Dashboard_17772303325680/Dashboard1?:language=en-GB&:sid=&:redirect=auth&publish=yes&showOnboarding=true&:display_count=n&:origin=viz_share_link",
    repo: "https://github.com/Yash990-bit/StockMarket_Analytics"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-cyan-400 mb-4">Featured Work</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight">ANALYTICAL <span className="text-gray-500">EXHIBITION</span></h3>
          </div>
          <p className="max-w-md text-gray-500 text-sm md:text-base leading-relaxed">
            These projects represent a fusion of technical data engineering and artistic visualization, 
            designed to reveal patterns that are often hidden in raw data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity blur-2xl -z-10 rounded-3xl" 
                     style={{ backgroundImage: `linear-gradient(to right, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }}></div>
                
                <div className="glass-card rounded-2xl p-8 md:p-12 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${project.color} shadow-lg shadow-black/20`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex gap-4">
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-white transition-colors">
                        <Github className="w-6 h-6" />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-white transition-colors">
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-2">{project.subtitle}</h4>
                  <h5 className="text-3xl font-black mb-6">{project.title}</h5>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold text-gray-600">{metric.split(' ').slice(1).join(' ')}</span>
                        <span className="text-sm font-bold text-gray-300">{metric.split(' ')[0]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-400 border border-white/5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
