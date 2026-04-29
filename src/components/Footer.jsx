"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 border-t border-white/5 bg-black">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-4xl font-black mb-8 leading-tight">
              READY TO <span className="text-cyan-400 underline decoration-cyan-400/30 underline-offset-8">VISUALIZE</span> <br />
              YOUR NEXT STORY?
            </h3>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Whether you have a complex dataset or a vision for a dashboard, let's collaborate to bring your data to life.
            </p>
            <a 
              href="mailto:yash.raghubanshi2024@nst.rishihood.edu.in" 
              className="inline-flex items-center gap-2 text-xl font-bold hover:text-cyan-400 transition-colors group"
            >
              yash.raghubanshi2024@nst.rishihood.edu.in 
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col md:items-end justify-between">
            <div className="flex gap-6 mb-8">
              {[
                { icon: FaGithub, link: "https://github.com/Yash990-bit" },
                { icon: FaLinkedin, link: "https://www.linkedin.com/in/yash-raghubanshi-ba9ba630b/" },
                { icon: FaInstagram, link: "https://www.instagram.com/whyash7/" },
                { icon: Mail, link: "mailto:yash.raghubanshi2024@nst.rishihood.edu.in" }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={i} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black transition-all"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>

            <div className="text-left md:text-right">
              <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest font-bold">Location</p>
              <p className="text-white text-lg font-bold">India / Remote</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-4">
          <p className="text-gray-600 text-xs uppercase tracking-widest font-bold">
            &copy; {currentYear} YASH RAGHUBANSHI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
