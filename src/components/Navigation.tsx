import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  const navItems = [{
    label: 'About',
    id: 'about'
  }, {
    label: 'Services',
    id: 'services'
  }, {
    label: 'Portfolio',
    id: 'portfolio'
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-300 text-slate-800">
            Coach Andrei Santos
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                {item.label}
              </button>)}
            <button onClick={() => scrollToSection('contact')} className="btn-hero-primary">
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2">
                  {item.label}
                </button>)}
              <button onClick={() => scrollToSection('contact')} className="btn-hero-primary w-full mt-4">
                Get In Touch
              </button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;