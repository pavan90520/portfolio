export default function Experience() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-20 tracking-tight">Experience & Education</h3>
        
        <div className="w-full relative border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-12 pb-16">
          <div className="absolute w-4 h-4 rounded-full bg-white/20 -left-2.5 top-0 border-4 border-[#121212]" />
          <h4 className="text-2xl font-bold text-white mb-1">Student Intern</h4>
          <p className="text-zinc-400 mb-2 font-mono text-sm">Vodafone | Dec 2022 – Mar 2023 | Hyderabad</p>
          <ul className="list-disc list-inside text-zinc-400 leading-relaxed mb-6 space-y-2 mt-4">
            <li>Monitored real-time network performance using Nokia and Huawei tools</li>
            <li>Maintained uptime and SLA targets across production systems</li>
            <li>Managed full incident lifecycle using HP Service Manager</li>
            <li>Logged, triaged, and resolved network issues in high-traffic environments</li>
          </ul>
          <div className="bg-white/5 p-4 rounded-lg border border-white/5">
            <span className="text-white font-medium mr-2">Key Insight:</span>
            <span className="text-zinc-400 text-sm">This experience taught me how production systems fail, directly influencing how I design robust AI systems today.</span>
          </div>
        </div>

        <div className="w-full relative border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-12 pb-16 mt-8">
          <div className="absolute w-4 h-4 rounded-full bg-white/20 -left-2.5 top-0 border-4 border-[#121212]" />
          <h4 className="text-2xl font-bold text-white mb-1">MSc Artificial Intelligence</h4>
          <p className="text-zinc-400 mb-6 font-mono text-sm">National College of Ireland | Jan 2024 – Jan 2025</p>

          <h4 className="text-2xl font-bold text-white mb-1 mt-12">B.Tech Computer Science</h4>
          <p className="text-zinc-400 mb-2 font-mono text-sm">JNTUH College of Engineering Hyderabad | Aug 2019 – Jul 2023</p>
        </div>

        <div className="w-full relative border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-12 mt-8">
          <div className="absolute w-4 h-4 rounded-full bg-white/20 -left-2.5 top-0 border-4 border-[#121212]" />
          <h4 className="text-2xl font-bold text-white mb-1">GenAI Powered Data Analytics</h4>
          <p className="text-zinc-400 mb-6 font-mono text-sm">Tata Group (via Forage) | 2025</p>

          <h4 className="text-2xl font-bold text-white mb-1 mt-12">Machine Learning Methods and Tools</h4>
          <p className="text-zinc-400 mb-2 font-mono text-sm">IBM SkillsBuild | 2025</p>
        </div>

      </div>
    </section>
  );
}
