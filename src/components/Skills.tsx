const skillCategories = [
  {
    title: "Design",
    skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Design Systems", "Prototipagem", "User Research"],
  },
  {
    title: "Desenvolvimento",
    skills: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "Outros",
    skills: ["Git", "Agile/Scrum", "SEO", "Performance", "Acessibilidade", "Motion Design"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Competências
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              As minhas <span className="text-gradient italic">ferramentas</span>
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="group p-8 bg-gradient-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6 group-hover:text-gradient transition-all duration-300">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-center gap-3 font-body text-secondary-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-20 text-center">
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Sempre em aprendizagem contínua, explorando novas tecnologias e 
              metodologias para entregar as melhores soluções aos meus clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
