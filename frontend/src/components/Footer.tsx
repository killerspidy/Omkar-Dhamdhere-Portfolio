import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 glass">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Omkar Dhamdhere.</span>
            <span className="hidden md:inline">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="text-sm">
            <span className="gradient-text font-semibold">Data Engineer & AI Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
