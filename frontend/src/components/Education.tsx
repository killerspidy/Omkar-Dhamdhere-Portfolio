import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Savitribai Phule Pune University Pune, India",
      period: "2022-2024",
      grade: "CGPA- 8.25",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Dr. Babasaheb Ambedkar Marathwada University Aurangabad, India",
      period: "2019-2022",
      grade: "Percentage- 77.33%",
      icon: GraduationCap,
    },
    {
      degree: "12th",
      institution: "Vidyadham Jr Collage Aurangabad",
      period: "2018-2019",
      grade: "Percentage- 60.15%",
      icon: Award,
    },
    {
      degree: "10th",
      institution: "Sant Meera School Aurangabad",
      period: "2016-2017",
      grade: "Percentage- 81.80%",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Academic background and achievements
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent via-primary to-accent opacity-30" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-background shadow-lg shadow-accent/50" />

                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)] md:text-right'}`}>
                    <div className="glass p-6 rounded-2xl hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 group">
                      <div className={`flex items-start gap-4 mb-4 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <edu.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                          <p className="text-accent font-medium mb-1">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-sm font-semibold text-primary">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
