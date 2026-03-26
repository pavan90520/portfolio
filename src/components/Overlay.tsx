"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% scroll (Fades out by 15%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Section 2: 30% scroll (Fades in at 20%, max at 30-40%, out by 45%)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.45], [50, 0, 0, -50]);

  // Section 3: 60% scroll (Fades in at 50%, max at 60-70%, out by 75%)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.75], [50, 0, 0, -50]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full" style={{ height: "500vh", pointerEvents: "none" }}>
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4">Pavan Kumar Govind</h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-[0.1em] uppercase">I build AI that actually ships</p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 lg:left-32 top-1/2 -translate-y-1/2"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-2xl leading-tight">
            RAG · NLP <br/><span className="text-zinc-500">Computer Vision · FastAPI</span>
          </h2>
          <div className="w-16 h-1 bg-white/30 rounded-full" />
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-8 md:right-24 lg:right-32 top-1/2 -translate-y-1/2 text-right flex flex-col items-end pointer-events-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-2xl leading-tight">
            MSc Artificial Intelligence <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600 block text-2xl md:text-4xl mt-4">Open to roles in Ireland</span>
          </h2>
          <div className="w-16 h-1 bg-white/30 rounded-full mb-8" />
          
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm">
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
