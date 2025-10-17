import { Church, Mail, MapPin, Phone, Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-secondary to-accent p-2 rounded-full">
                <Church className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Kingdom Assurance</h3>
                <p className="text-xs text-primary-foreground/80">Church</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              A Bible-believing ministry dedicated to spreading Kingdom Assuring messages and ensuring souls are Kingdom ready.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#mission" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Service Times</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-semibold text-secondary">Sunday Service</p>
                <p className="text-primary-foreground/80">11:00 AM - 1:00 PM CST</p>
              </li>
              <li>
                <p className="font-semibold text-secondary">Bible Study</p>
                <p className="text-primary-foreground/80">Wednesdays at 7:00 PM CST</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Faith Avenue<br />
                  Houston, TX 77001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:+18324613173" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +1 (832) 461-3173
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="mailto:info@kingdomassurance.church" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@kingdomassurance.church
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Kingdom Assurance Church. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors group"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
