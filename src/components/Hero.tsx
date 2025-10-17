import { Button } from "@/components/ui/button";
import { Cross, Heart, BookOpen, Church, Sparkles, Crown } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kingdom Assurance Church interior"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <Cross className="absolute top-[15%] left-[10%] w-12 h-12 text-secondary/20 animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }} />
        <Heart className="absolute top-[25%] right-[15%] w-10 h-10 text-secondary/15 animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }} />
        <BookOpen className="absolute bottom-[30%] left-[8%] w-14 h-14 text-secondary/20 animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }} />
        <Church className="absolute top-[40%] right-[10%] w-16 h-16 text-secondary/15 animate-float" style={{ animationDelay: '3s', animationDuration: '9s' }} />
        <Sparkles className="absolute bottom-[20%] right-[20%] w-10 h-10 text-secondary/20 animate-float" style={{ animationDelay: '4s', animationDuration: '7s' }} />
        <Crown className="absolute top-[60%] left-[15%] w-12 h-12 text-secondary/15 animate-float" style={{ animationDelay: '5s', animationDuration: '8s' }} />
        <Cross className="absolute bottom-[15%] left-[25%] w-8 h-8 text-secondary/10 animate-float" style={{ animationDelay: '1.5s', animationDuration: '6.5s' }} />
        <Heart className="absolute top-[70%] right-[25%] w-10 h-10 text-secondary/15 animate-float" style={{ animationDelay: '2.5s', animationDuration: '7.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
            Kingdom Assurance Church
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-light italic">
              "Seek first the kingdom of God and His righteousness,<br />
              and all these things shall be added to you."
            </p>
            <p className="text-lg md:text-xl text-secondary font-semibold">
              — Matthew 6:33
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-gradient-to-r from-secondary to-accent text-accent-foreground hover:opacity-90 shadow-[var(--shadow-gold)] text-lg px-8 py-6 font-bold"
            >
              Join Us This Sunday
            </Button>
            <Button
              onClick={() => document.querySelector("#mission")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
