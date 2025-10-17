import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#mission" },
    { label: "Services", href: "#services" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    // { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("#home")}>
            <div className="bg-gradient-to-br from-secondary to-accent p-2 rounded-full shadow-[var(--shadow-gold)]">
                <img src="/kpc.webp" alt="Kingdom Assurance logo" className="w-10 h-10 rounded-full object-cover" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg leading-tight text-white">
                Kingdom <br></br> 
                Assurance <br></br>
                Church
              </h1>
              {/* <p className="text-xs text-white/80">Church</p> */}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`${isScrolled ? 'text-gold' : 'text-white'} hover:text-secondary transition-colors font-medium`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-secondary to-accent text-accent-foreground hover:opacity-90 shadow-[var(--shadow-gold)] font-semibold"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-gold'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text- hover:text-primary transition-colors font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              {/* <Button
                onClick={() => scrollToSection("#donate")}
                className="bg-gradient-to-r from-secondary to-accent text-accent-foreground hover:opacity-90 shadow-[var(--shadow-gold)] font-semibold"
              >
                Donate
              </Button> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
