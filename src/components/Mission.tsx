import { Globe, BookHeart, Heart } from "lucide-react";

const Mission = () => {
  const missions = [
    {
      icon: Globe,
      title: "Spreading the Word",
      description: "Taking the Gospel to all nations, sharing God's love and salvation with every soul we encounter.",
    },
    {
      icon: BookHeart,
      title: "Growing in Faith",
      description: "Deepening our relationship with Christ through prayer, worship, and studying His holy Word.",
    },
    {
      icon: Heart,
      title: "Serving with Love",
      description: "Demonstrating Christ's compassion by serving our community and those in need with open hearts.",
    },
  ];

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kingdom Assurance Church is a Bible-believing ministry dedicated to vigorously preaching and teaching Kingdom Assuring messages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {missions.map((mission, index) => (
            <div
              key={mission.title}
              className="text-center p-8 rounded-lg hover:bg-muted transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-6 shadow-[var(--shadow-elegant)] group-hover:shadow-[var(--shadow-gold)] transition-all duration-300 group-hover:scale-110">
                <mission.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {mission.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
