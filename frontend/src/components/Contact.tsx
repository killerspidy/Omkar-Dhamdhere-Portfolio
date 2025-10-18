import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "dhamdhereomkar28@gmail.com",
      href: "mailto:dhamdhereomkar28@gmail.com",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7775946848",
      href: "tel:+917775946848",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Omkar Dhamdhere",
      href: "https://www.linkedin.com/in/omkar-dhamdhere-a46927206/",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@omkardhamdhere",
      href: "https://github.com/omkardhamdhere",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-2">
              Let's discuss how I can help with your data analytics needs
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Based in Pune, India</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group glass p-6 rounded-2xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${method.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 text-sm text-muted-foreground">{method.label}</h3>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors break-all">
                      {method.value}
                    </p>
                  </div>
                  <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>

          <div className="glass p-8 rounded-2xl text-center animate-fade-in-up">
            <p className="text-lg text-foreground/80 mb-6">
              I'm always interested in hearing about new opportunities, collaborations, or just having a chat about data analytics and technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:dhamdhereomkar28@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Send an Email
              </a>
              <a
                href="https://www.linkedin.com/in/omkar-dhamdhere-a46927206/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full glass border-2 border-accent/50 font-semibold hover:bg-accent/10 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
