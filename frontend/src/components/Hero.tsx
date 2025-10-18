import { Mail, Linkedin, Github, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Building intelligent data solutions and AI systems";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTQgMTZ2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem00LTR2Nmgydi02aC0yem0tOCA0djJoMnYtMmgtMnptLTQgNHYyaDJ2LTJoLTJ6bS00IDR2Mmgydi0yaC0yem0tNCA0djJoMnYtMmgtMnptLTQgNHYyaDJ2LTJoLTJ6bS00IDR2Mmgydi0yaC0yem00LTRoMnYtMmgtMnYyem00LTRoMnYtMmgtMnYyem00LTRoMnYtMmgtMnYyem00LTRoMnYtMmgtMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <MapPin className="w-4 h-4" />
              <span>Pune, India</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="gradient-text">Omkar Dhamdhere</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Data Engineer & AI Developer
            </p>
          </div>

          <div className="h-20 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-foreground/80 font-light min-h-[2rem]">
              {displayText}
              <span className="animate-glow">|</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              variant="default"
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300"
              asChild
            >
              <a href="mailto:dhamdhereomkar28@gmail.com">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Email Me
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group glass hover:bg-accent/10 border-accent/50"
              asChild
            >
              <a href="https://www.linkedin.com/in/omkar-dhamdhere-a46927206/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group glass hover:bg-accent/10 border-accent/50"
              asChild
            >
              <a href="https://github.com/omkardhamdhere" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group glass hover:bg-accent/10 border-accent/50"
              asChild
            >
              <a href="/Omkar DhamdhereResumeupdated.pdf" download="Omkar_Dhamdhere_Resume.pdf">
                <Download className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Download CV
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group glass hover:bg-accent/10 border-accent/50"
              asChild
            >
              <a href="tel:+917775946848">
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Call
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
