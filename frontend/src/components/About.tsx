import { Brain, Users, Target, Lightbulb, TrendingUp, MessageSquare } from "lucide-react";

const About = () => {
  const softSkills = [
    { icon: Brain, name: "Analytical Thinking", description: "Data-driven decision making" },
    { icon: Users, name: "Team Collaboration", description: "Effective team player" },
    { icon: Target, name: "Problem Solving", description: "Creative solutions" },
    { icon: Lightbulb, name: "Quick Learner", description: "Adaptable to new technologies" },
    { icon: TrendingUp, name: "Detail-Oriented", description: "Precision in analysis" },
    { icon: MessageSquare, name: "Communication", description: "Clear data storytelling" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate about transforming raw data into meaningful insights
            </p>
          </div>

          <div className="mb-12 animate-fade-in-up">
            <div className="glass p-8 rounded-2xl text-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <img src="/Images/profilephoto.jpg" alt="Profile Photo" className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-primary/20" />
              <h3 className="text-2xl font-bold mb-4 gradient-text-accent">Hi, I'm Omkar Dhamdhere</h3>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                A passionate Data Engineer & AI Developer dedicated to transforming complex data into actionable insights.
                With expertise in SQL, Power BI, Python, and Java, I build robust solutions that drive business decisions and innovation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-8 rounded-2xl animate-slide-in-left hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 gradient-text-accent">Professional Summary</h3>
              <p className="text-foreground/80 leading-relaxed">
                As a dedicated Data Engineer & AI Developer, I specialize in extracting actionable insights from complex datasets.
                With expertise in SQL, Power BI, and Python, I transform raw data into compelling visualizations
                and reports that drive business decisions. My background in Java development complements my
                analytical skills, enabling me to build robust data solutions.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl animate-slide-in-right hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 gradient-text-accent">What I Bring</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Strong foundation in database management and query optimization
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Proficiency in creating interactive dashboards and reports
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Experience in full-stack application development
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Continuous learner with multiple industry certifications
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group glass p-6 rounded-xl text-center hover:bg-primary/10 transition-all duration-300 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm mb-2">{skill.name}</h4>
                  <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
