export default function About() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">About Me</h3>
        <p className="text-xl md:text-2xl text-zinc-300 mb-8 font-light leading-relaxed">
          I don't just build AI models. <span className="text-white font-medium">I build AI that works in the real world.</span>
        </p>
        <p className="text-lg text-zinc-400 mb-6 leading-relaxed max-w-3xl">
          I'm an MSc Artificial Intelligence graduate from National College of Ireland, focused on taking ideas from notebooks into production systems that solve real problems.
        </p>
        <p className="text-lg text-zinc-400 mb-6 leading-relaxed max-w-3xl">
          Over the past few years, I've built and deployed end-to-end AI solutions across multiple domains including healthcare, agriculture, NLP, and computer vision. My focus is always the same: making AI practical, reliable, and usable in real-world environments.
        </p>
        <p className="text-lg text-zinc-400 mb-6 leading-relaxed max-w-3xl">
          Before my MSc, I worked at Vodafone in a Network Operations Centre, where I learned how real production systems behave under pressure. That experience shaped how I design AI systems today with reliability, monitoring, and failure handling in mind.
        </p>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
          I'm currently based in Dublin and actively looking for AI/ML or Data Science roles where I can build applied AI products that reach real users.
        </p>
      </div>
    </section>
  );
}
