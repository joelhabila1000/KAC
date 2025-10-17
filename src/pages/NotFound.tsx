import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Church } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-muted to-background">
      <div className="text-center px-4 max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent mb-6 shadow-[var(--shadow-gold)] animate-scale-in">
          <Church className="w-10 h-10 text-accent-foreground" />
        </div>
        
        <h1 className="font-serif text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for seems to have wandered off. 
          Let us guide you back home.
        </p>
        
        <Button
          onClick={() => window.location.href = "/"}
          size="lg"
          className="bg-gradient-to-r from-secondary to-accent text-accent-foreground hover:opacity-90 shadow-[var(--shadow-gold)] font-semibold"
        >
          <Home className="w-4 h-4 mr-2" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
