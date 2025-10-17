import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import eventWorship from "@/assets/event-worship.jpg";
import eventBibleStudy from "@/assets/event-bible-study.jpg";
import eventRevival from "@/assets/event-revival.jpg";

const Events = () => {
  const events = [
    {
      image: eventWorship,
      title: "Praise & Worship Night",
      date: "Friday, December 20, 2024",
      time: "7:00 PM - 9:00 PM CST",
      location: "Main Sanctuary",
      description: "Join us for an evening of powerful worship and praise as we lift our voices to glorify God.",
    },
    {
      image: eventRevival,
      title: "Monthly Revival",
      date: "Sunday, December 29, 2024",
      time: "6:00 PM - 8:00 PM CST",
      location: "Main Sanctuary",
      description: "Experience spiritual renewal and breakthrough in this special revival service.",
    },
    {
      image: eventBibleStudy,
      title: "New Year Prayer Vigil",
      date: "Tuesday, December 31, 2024",
      time: "10:00 PM - 1:00 AM CST",
      location: "Main Sanctuary",
      description: "Welcome the new year with prayer, worship, and thanksgiving to God for His faithfulness.",
    },
  ];

  return (
    <section id="events" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">
            Join us for these special gatherings and spiritual experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={event.title}
              className="overflow-hidden animate-scale-in shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              
              <CardContent className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                  {event.description}
                </p>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
