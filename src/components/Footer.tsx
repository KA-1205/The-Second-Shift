import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="The Second Shift Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                The Second Shift
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering women to return stronger and re-skill faster.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pitch" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Pitch Deck
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Try Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@thesecondshift.test"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 The Second Shift by Team SkillSurge. Built with 💜 for women returners.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
