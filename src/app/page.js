import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Yash Raghubanshi | DVA Portfolio",
  description: "Data Visualization & Analytics portfolio featuring FIFA and Stock Market analytics.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
      
      {/* Decorative Blur Orbs */}
      <div className="fixed top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] -z-10 rounded-full animate-pulse" />
      <div className="fixed bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] -z-10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </main>
  );
}
