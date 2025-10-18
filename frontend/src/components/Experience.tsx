import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Intern",
      company: "Xoriant Solutions Pvt. Ltd., Pune",
      period: "Jan 2025 - Present",
      description: "Trained for Microsoft Fabric Analytics Certification and utilized Microsoft Fabric solutions for data engineering and analytics",
      responsibilities: [
        "Trained for Microsoft Fabric Analytics Certification",
        "Utilized Microsoft Fabric solutions and implemented solutions based on experiences such as Data Engineering, Data Warehouse, Data Factory, Power BI, and Real-Time Intelligence",
        "Exploring PySpark and SQL optimization for large-scale data processing",
        "Automate ETL workflows and streamline data ingestion from multiple sources"
      ],
      technologies: ["Microsoft Fabric", "PySpark Notebooks", "SQL Analytics Endpoint", "Power Query", "Power BI", "Excel"],
    },
    {
      title: "Data Engineer (AI Developer)",
      company: "Synthesys Solutions",
      period: "April 2025 - Present",
      description: "Working as an AI Developer, gaining expertise in Elasticsearch, cluster management, and various AI tools and technologies",
      responsibilities: [
        "Gained knowledge about Elasticsearch and learned how to create and form clusters using nodes",
        "Conducted POCs (Proof of Concepts) for various AI implementations",
        "Explored different types of agentic tools and applications such as Lovable.Dev, Cursor, Windsurf, Kilocode, and Cline",
        "Worked with open source LLM models using Ollama to create chatbots",
        "Understood concepts like embedding, Quadrant Vector DB, and different kinds of vector databases"
      ],
      technologies: ["Elasticsearch", "Ollama", "Lovable.Dev", "Cursor", "Windsurf", "Kilocode", "Cline", "Vector Databases", "LLM Models", "Chatbot Development"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional journey in data analytics
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-12 last:mb-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4 md:justify-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/50 animate-pulse" />
                </div>

                <div className="ml-8 md:ml-auto group">
                  <div className="glass p-6 rounded-2xl hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start text-sm text-foreground/80">
                            <span className="text-accent mr-2 mt-1">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
