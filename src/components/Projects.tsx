import { ExternalLink, Terminal } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "RAG Systems (Retrieval-Augmented Generation)",
    description: "Built end-to-end RAG pipelines for domain-specific LLM applications. Improved response accuracy using retrieval-based context injection, focused on real-world usability.",
    tags: ["LLMs", "NLP", "Python"],
  },
  {
    id: 2,
    title: "Healthcare AI – Pneumonia Detection",
    description: "Developed CNN-based model for pneumonia detection from chest X-rays. Used transfer learning for improved performance, designed for practical healthcare use cases.",
    tags: ["CNN", "Computer Vision", "Transfer Learning"],
  },
  {
    id: 3,
    title: "Computer Vision Systems",
    description: "Built real-time face recognition system for attendance automation and a face mask detection system working with live video streams and real-time inference.",
    tags: ["OpenCV", "Real-time Inference", "Python"],
  },
  {
    id: 4,
    title: "NLP – Hate Speech Detection",
    description: "Built hate speech detection model using BERT. Optimized for performance and efficiency, designed for large-scale text processing.",
    tags: ["BERT", "NLP", "Machine Learning"],
  },
  {
    id: 5,
    title: "Agriculture AI",
    description: "Crop yield prediction using ML models and leaf disease detection using ANN. Applied AI in real-world agricultural scenarios.",
    tags: ["ANN", "Data Science", "Agriculture"],
  },
  {
    id: 6,
    title: "MLOps & Production Systems",
    description: "Deployed ML models using FastAPI. Experiment tracking with MLflow, automated workflows using RPA + AI, building production-ready AI systems.",
    tags: ["FastAPI", "MLflow", "MLOps"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-20 tracking-tight">Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{project.title}</h4>
              <p className="text-zinc-400 mb-8 leading-relaxed font-light flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs text-zinc-300 bg-white/5 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
