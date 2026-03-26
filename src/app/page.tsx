import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white relative">
      <div className="relative z-10 w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>
      
      {/* Content Sections */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-white/5 bg-[#121212] relative z-20">
        <p>© {new Date().getFullYear()} Pavan Kumar Govind. All rights reserved. Built with Next.js & Framer Motion.</p>
      </footer>
    </main>
  );
}
