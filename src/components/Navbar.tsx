import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { isAuthenticated, logout } from '@/lib/auth';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <img 
                src={logo} 
                alt="The Second Shift Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              The Second Shift
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="link-animated text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="link-animated text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/features" className="link-animated text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/team" className="link-animated text-foreground hover:text-primary transition-colors">
              Team
            </Link>
            <Link to="/pitch" className="link-animated text-foreground hover:text-primary transition-colors">
              Pitch
            </Link>
            <Link to="/contact" className="link-animated text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {loggedIn ? (
              <>
                <Button
                  onClick={() => navigate('/dashboard')}
                  variant="ghost"
                  className="text-foreground"
                >
                  Dashboard
                </Button>
                <Button onClick={handleLogout} variant="outline">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => navigate('/login')} variant="ghost">
                  Login
                </Button>
                <Button
                  onClick={() => navigate('/login')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Try Demo
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border animate-fade-in">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/features"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/team"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/pitch"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pitch
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              {loggedIn ? (
                <>
                  <Button
                    onClick={() => {
                      navigate('/dashboard');
                      setIsMenuOpen(false);
                    }}
                    className="w-full"
                    variant="outline"
                  >
                    Dashboard
                  </Button>
                  <Button onClick={handleLogout} className="w-full" variant="ghost">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
                    className="w-full"
                    variant="outline"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Try Demo
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
