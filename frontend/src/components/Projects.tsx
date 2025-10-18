import { useState } from "react";
import { Code, Database, Smartphone, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Music Player Application",
      category: "mobile",
      description: "Feature-rich Android music player with Firebase integration for user authentication and data management.",
      image: "music-app",
      responsibilities: [
        "Designed and developed complete Android application using Java",
        "Implemented user authentication with Firebase",
        "Created intuitive UI/UX for seamless music playback",
        "Integrated local storage for offline music access",
        "Built playlist management and favorites system",
      ],
      technologies: ["Java", "Android Studio", "Firebase", "XML", "Material Design"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Anime Merchandise E-commerce",
      category: "web",
      description: "Full-featured e-commerce platform for anime merchandise with separate admin and user interfaces.",
      image: "anime-shop",
      responsibilities: [
        "Developed complete CRUD operations for products and orders",
        "Created admin dashboard for inventory management",
        "Implemented user authentication and profile management",
        "Built shopping cart and checkout functionality",
        "Designed responsive UI with modern animations",
      ],
      technologies: ["Firebase", "JavaScript", "HTML", "CSS", "Firebase Auth", "Firestore"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Power BI Analytics Dashboard",
      category: "data",
      description: "Interactive business intelligence dashboard for comprehensive data analysis and visualization.",
      image: "powerbi-dashboard",
      responsibilities: [
        "Connected multiple data sources for unified analysis",
        "Created interactive visualizations and KPI metrics",
        "Implemented DAX calculations for advanced analytics",
        "Designed drill-through reports for detailed insights",
        "Optimized performance for large datasets",
      ],
      technologies: ["Power BI", "DAX", "SQL", "MS Fabric", "Data Modeling"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Code },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "web", label: "Web", icon: Code },
    { id: "data", label: "Data Analytics", icon: Database },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcase of development work and data solutions
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "default" : "outline"}
                onClick={() => setFilter(cat.id)}
                className={`group ${filter === cat.id ? 'bg-primary text-primary-foreground' : 'glass'}`}
              >
                <cat.icon className="w-4 h-4 mr-2" />
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image placeholder with gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem00IDE2djJoMnYtMmgtMnptNC00djJoMnYtMmgtMnptNC00djJoMnYtMmgtMnptNC00djJoMnYtMmgtMnptNC00djZoMnYtNmgtMnptLTggNHYyaDJ2LTJoLTJ6bS00IDR2Mmgydi0yaC0yem0tNCA0djJoMnYtMmgtMnptLTQgNHYyaDJ2LTJoLTJ6bS00IDR2Mmgydi0yaC0yem00LTRoMnYtMmgtMnYyem00LTRoMnYtMmgtMnYyem00LTRoMnYtMmgtMnYyem00LTRoMnYtMmgtMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
                  <Code className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold mb-2 text-muted-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="flex items-start text-xs text-foreground/70">
                          <span className="text-primary mr-2">▹</span>
                          <span className="line-clamp-1">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold mb-2 text-muted-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-lg text-muted-foreground">No projects found in this category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
