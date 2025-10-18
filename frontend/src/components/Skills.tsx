import { Database, Code, BarChart3, Terminal, Palette, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Databases & Query",
      skills: [
        { name: "SQL", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "Elasticsearch", level: 80 },
        { name: "Vector Databases", level: 75 },
      ],
    },
    {
      icon: Code,
      title: "Programming",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 85 },
        { name: "PySpark", level: 80 },
        { name: "C/C++", level: 75 },
      ],
    },
    {
      icon: Palette,
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Bootstrap 5", level: 80 },
        { name: "React", level: 85 },
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      skills: [
        { name: "Microsoft Fabric", level: 90 },
        { name: "Power BI", level: 90 },
        { name: "Excel", level: 85 },
        { name: "SQL Analytics Endpoint", level: 85 },
        { name: "Power Query", level: 80 },
      ],
    },
    {
      icon: Terminal,
      title: "Development Tools",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Ollama", level: 80 },
        { name: "Lovable.Dev", level: 75 },
        { name: "Cursor", level: 75 },
        { name: "Windsurf", level: 75 },
        { name: "Kilocode", level: 75 },
        { name: "Cline", level: 75 },
      ],
    },
    {
      icon: Wrench,
      title: "AI & ML",
      skills: [
        { name: "LLM Models", level: 80 },
        { name: "Chatbot Development", level: 80 },
        { name: "Embedding", level: 75 },
        { name: "Agentic Tools", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technical proficiencies across data analysis and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="glass p-6 rounded-2xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
