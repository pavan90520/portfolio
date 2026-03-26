const SKILL_CATEGORIES = [
  {
    title: "Core Skills",
    skills: ["Machine Learning", "Artificial Intelligence", "Python"]
  },
  {
    title: "AI / ML Stack",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "BERT"]
  },
  {
    title: "Backend & Deployment",
    skills: ["FastAPI", "MLflow", "AWS", "GCP", "Azure"]
  },
  {
    title: "Computer Vision & NLP",
    skills: ["OpenCV", "CNNs", "Transfer Learning", "NLP Pipelines"]
  }
];

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-20 tracking-tight">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="flex flex-col">
              <h4 className="text-xl font-bold text-white mb-6 tracking-tight border-b border-white/10 pb-4">{category.title}</h4>
              <ul className="flex flex-col gap-3">
                {category.skills.map(skill => (
                  <li key={skill} className="text-zinc-400 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
