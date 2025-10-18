import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Fabric Analytics Engineer",
      issuer: "Microsoft",
      date: "2024",
      skills: ["Data Engineering", "Microsoft Fabric", "Analytics"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "WordPress Development",
      issuer: "Professional Certification",
      date: "2024",
      skills: ["WordPress", "CMS", "Web Development"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Figma UI/UX Design",
      issuer: "Professional Certification",
      date: "2024",
      skills: ["Figma", "UI Design", "UX Design"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Google Analytics",
      issuer: "Google",
      date: "2024",
      skills: ["Analytics", "Data Tracking", "Insights"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Generative AI Fundamentals",
      issuer: "Professional Certification",
      date: "2024",
      skills: ["AI", "Machine Learning", "Generative Models"],
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">{cert.issuer}</p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold mb-2 text-muted-foreground">Skills Learned:</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group-hover:bg-primary/10 transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="ml-2 w-3 h-3" />
                    </Button>
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

export default Certifications;
