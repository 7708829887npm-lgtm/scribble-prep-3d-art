import { Button } from "@/components/ui/button";
import { FileText, Sparkles, Download } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10" />
      
      <div className="container relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Transform Your Assignments</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          Create Beautiful
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Handwritten Assignments
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Type your text and watch it transform into stunning handwritten notes with realistic 3D paper effects. Export to PDF in seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
          >
            <FileText className="mr-2 h-5 w-5" />
            Start Writing
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-lg px-8 py-6"
          >
            <Download className="mr-2 h-5 w-5" />
            See Examples
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: "Realistic Handwriting", desc: "Multiple font styles to choose from" },
            { title: "3D Paper Effect", desc: "Beautiful depth and shadows" },
            { title: "Instant PDF Export", desc: "Download ready-to-submit files" }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
