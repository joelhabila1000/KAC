import { Heart, CreditCard, Smartphone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Donate = () => {
  const handleDonate = () => {
    // This would typically open a payment processor
    window.open("https://www.paypal.com/donate", "_blank");
  };

  const donationMethods = [
    {
      icon: CreditCard,
      title: "Online Giving",
      description: "Secure online donations via credit/debit card",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Give on-the-go through our mobile app",
    },
    {
      icon: Building,
      title: "In-Person",
      description: "Place your offering during Sunday service",
    },
  ];

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-primary to-primary-glow relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent mb-6 shadow-[var(--shadow-gold)]">
            <Heart className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Support Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6" />
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Your generosity helps us spread the Gospel, support our community, and maintain our ministry. 
            Every gift makes a difference in fulfilling God's purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {donationMethods.map((method, index) => (
            <Card
              key={method.title}
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 animate-scale-in hover:bg-primary-foreground/15 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <method.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-primary-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleDonate}
            size="lg"
            className="bg-gradient-to-r from-secondary to-accent text-accent-foreground hover:opacity-90 shadow-[var(--shadow-gold)] text-lg px-12 py-6 font-bold"
          >
            Give Now
          </Button>
          <p className="text-primary-foreground/70 text-sm mt-4">
            "Give, and it will be given to you..." — Luke 6:38
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;
