import { Calendar, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServiceTimes = () => {
  const services = [
    {
      icon: Calendar,
      title: "Sunday Service",
      time: "11:00 AM - 1:00 PM CST",
      description: "Join us for powerful worship and inspiring messages",
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      time: "Wednesdays at 7:00 PM CST",
      description: "Dive deeper into God's Word with our community",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Service Times
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="animate-scale-in shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent mb-6 shadow-[var(--shadow-gold)]">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-xl font-semibold text-primary mb-3">
                  {service.time}
                </p>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
