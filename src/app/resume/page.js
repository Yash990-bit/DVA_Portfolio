import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { Mail, Phone, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Yash Raghubanshi | AI/ML & Full-Stack Resume",
  description: "Resume of Yash Raghubanshi - AI/ML Engineer and Full-Stack Developer.",
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-cyan-200">
      <div className="max-w-4xl mx-auto bg-white shadow-xl shadow-zinc-200/50 rounded-2xl overflow-hidden border border-zinc-200/50 relative">
        
        {/* Back to Portfolio Button */}
        <Link href="/" className="absolute top-6 right-8 text-zinc-400 hover:text-cyan-600 flex items-center gap-2 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        {/* Header */}
        <header className="px-8 md:px-12 pt-16 pb-8 border-b border-zinc-100">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
            Yash Raghubanshi
          </h1>
          
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-zinc-600 mb-6">
            <a href="tel:+917307597720" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <Phone className="w-4 h-4" /> +91 73075 97720
            </a>
            <a href="mailto:yash.raghubanshi2024@nst.rishihood.edu.in" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <Mail className="w-4 h-4" /> yash.raghubanshi2024@nst.rishihood.edu.in
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-bold text-zinc-700">
            <a href="https://linkedin.com/in/yash-raghubanshi-ba9ba630b" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <FaLinkedin className="w-4 h-4 text-[#0A66C2]" /> LinkedIn
            </a>
            <a href="https://github.com/Yash990-bit" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <FaGithub className="w-4 h-4 text-black" /> Github
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <SiCodeforces className="w-4 h-4 text-red-500" /> Codeforces
            </a>
            <a href="https://leetcode.com/u/yash_ragh_08/" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <SiLeetcode className="w-4 h-4 text-amber-500" /> Leetcode
            </a>
            <Link href="/" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <ExternalLink className="w-4 h-4" /> Personal Portfolio
            </Link>
          </div>
        </header>

        {/* Content Body */}
        <div className="px-8 md:px-12 py-10 space-y-12">
          
          {/* Professional Summary */}
          <section>
            <h2 className="text-xl font-black text-zinc-900 uppercase tracking-widest mb-4 border-b-2 border-cyan-500 inline-block pb-1">
              Professional Summary
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              Aspiring AI/ML Engineer with a strong foundation in Full-Stack development and frontend technologies, focused on building scalable and user-friendly applications. Solved 170+ LeetCode problems with a 900+ Codeforces rating, demonstrating strong skills in Data Structures, Algorithms, and problem-solving.
            </p>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-black text-zinc-900 uppercase tracking-widest mb-6 border-b-2 border-cyan-500 inline-block pb-1">
              Projects
            </h2>
            
            <div className="space-y-8">
              {/* Project 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-zinc-900">ChunkScope</h3>
                  <div className="flex items-center gap-4 text-sm font-medium text-zinc-500">
                    <span>April 2026</span>
                    <span className="text-zinc-300">|</span>
                    <div className="flex gap-3">
                      <a href="#" className="flex items-center gap-1 hover:text-cyan-600"><FaGithub /> Github</a>
                      <a href="#" className="flex items-center gap-1 hover:text-cyan-600"><ExternalLink className="w-3 h-3" /> Demo</a>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside text-zinc-700 space-y-1.5 leading-relaxed text-sm">
                  <li>Built a RAG-based system to optimize chunking and retrieval strategies (Vector, BM25, Hybrid) for improved LLM performance.</li>
                  <li>Developed using Next.js, React, FastAPI, and OpenAI APIs with real-time visualization of chunks and outputs.</li>
                  <li>Improved LLM accuracy and reduced hallucinations through optimized RAG pipeline and evaluation metrics.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-zinc-900">Revora — Agentic AI-Powered Sales Automation Platform</h3>
                  <div className="flex items-center gap-4 text-sm font-medium text-zinc-500">
                    <span>March 2026</span>
                    <span className="text-zinc-300">|</span>
                    <div className="flex gap-3">
                      <a href="#" className="flex items-center gap-1 hover:text-cyan-600"><FaGithub /> Github</a>
                      <a href="#" className="flex items-center gap-1 hover:text-cyan-600"><ExternalLink className="w-3 h-3" /> Demo</a>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside text-zinc-700 space-y-1.5 leading-relaxed text-sm">
                  <li>Built a backend system for automated lead generation and outreach, integrating APIs like Hunter.</li>
                  <li>Developed using FastAPI, SQLAlchemy, and JWT authentication for secure campaign management and Gmail automation.</li>
                  <li>Reduced manual effort and enabled scalable sales workflows through automated lead acquisition and outreach.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-zinc-900">Multi-Disease Detection System</h3>
                  <div className="flex items-center gap-4 text-sm font-medium text-zinc-500">
                    <span>January 2026</span>
                    <span className="text-zinc-300">|</span>
                    <div className="flex gap-3">
                      <a href="#" className="flex items-center gap-1 hover:text-cyan-600"><FaGithub /> Github</a>
                      <a href="#" className="flex items-center gap-1 hover:text-cyan-600"><ExternalLink className="w-3 h-3" /> Demo</a>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside text-zinc-700 space-y-1.5 leading-relaxed text-sm">
                  <li>Built a Multi-Disease Detection System to predict Liver, Heart, and Diabetes risks using ML models (Pandas, NumPy, Scikit-learn).</li>
                  <li>Developed a full-stack application using Streamlit, React (Vite + Tailwind) with FastAPI and SQLAlchemy backend.</li>
                  <li>Enabled accurate and real-time health risk assessment, supporting data-driven medical insights.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-xl font-black text-zinc-900 uppercase tracking-widest mb-6 border-b-2 border-cyan-500 inline-block pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div>
                <span className="font-bold text-zinc-900">Computer Languages:</span> 
                <span className="text-zinc-700 block mt-1">Machine Learning, Python, TypeScript, HTML, CSS, JavaScript, SQL</span>
              </div>
              <div>
                <span className="font-bold text-zinc-900">Data Tools:</span> 
                <span className="text-zinc-700 block mt-1">NumPy</span>
              </div>
              <div className="md:col-span-2">
                <span className="font-bold text-zinc-900">Software Packages:</span> 
                <span className="text-zinc-700 block mt-1">Pandas, Figma, Tailwind CSS, Prisma ORM, React, Node.js, Excel, Express JS, MySQL, MongoDB</span>
              </div>
              <div>
                <span className="font-bold text-zinc-900">Additional Courses:</span> 
                <span className="text-zinc-700 block mt-1">Data Structure</span>
              </div>
              <div>
                <span className="font-bold text-zinc-900">Soft Skills:</span> 
                <span className="text-zinc-700 block mt-1">Research, Teamwork</span>
              </div>
              <div className="md:col-span-2">
                <span className="font-bold text-zinc-900">Others:</span> 
                <span className="text-zinc-700 block mt-1">Git and Github, Firebase, Postman, Spreadsheet, LangChain, OpenAI API, API testing, GenAI, LangGraph</span>
              </div>
            </div>
          </section>

          {/* Extracurricular Activities */}
          <section>
            <h2 className="text-xl font-black text-zinc-900 uppercase tracking-widest mb-6 border-b-2 border-cyan-500 inline-block pb-1">
              Extracurricular Activities
            </h2>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 text-sm leading-relaxed">
              <li>Helped with Logistics and Organising Committee in DAMRU Fest.</li>
              <li>Member of Organizing Committee in Go for Gold, assisted with planning and coordination.</li>
              <li>Played as Team Member in Cricket, BOSM Sports Fest, BITS Pilani.</li>
              <li>Achieved Silver Medal in Cricket at DTU Sports Fest.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
