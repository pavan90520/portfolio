import { Terminal, Briefcase, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="flex-1">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Let's build together</h3>
          <p className="text-xl text-zinc-400 mb-12 max-w-lg font-light">
            I'm actively looking for roles where I can build AI systems that actually reach users and solve real-world problems.
          </p>
          
          <div className="flex flex-col gap-6">
            <a href="mailto:govindpavan14@gmail.com" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Mail size={20} />
              </div>
              <span className="text-lg">govindpavan14@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 text-zinc-400 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <span className="text-lg">+353 874955922</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-400 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <span className="text-lg">Apartment 2, The Elm, Dundrum, Dublin, D16 PK68</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col justify-center">
          <h4 className="text-2xl font-bold text-white mb-8 tracking-tight">Connect</h4>
          <div className="flex flex-col gap-4 mb-12">
            <a href="https://github.com/pavan90520" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5">
              <Terminal size={24} />
              <span className="font-medium">GitHub Profile</span>
            </a>
            <a href="http://www.linkedin.com/in/pavan-kumar-govind-1a812a287" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5">
              <Briefcase size={24} />
              <span className="font-medium">LinkedIn Profile</span>
            </a>
          </div>
          
          <h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-semibold">What I care about</h4>
          <ul className="text-zinc-400 space-y-2 text-sm">
            <li>• Building AI systems that actually reach users</li>
            <li>• Turning ideas into production-ready systems</li>
            <li>• Reliable and scalable ML pipelines</li>
            <li>• Solving real-world problems with AI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
