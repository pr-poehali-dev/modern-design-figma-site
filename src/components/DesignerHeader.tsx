
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DesignerHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Проверяем, прокручена ли страница
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Навигационные ссылки
  const navLinks = [
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Процесс', href: '#process' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <a href="#" className="text-designer-secondary dark:text-designer-accent font-montserrat font-bold text-xl md:text-2xl">
            <span className="text-designer-primary">D</span>esign<span className="text-designer-primary">Studio</span>
          </a>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-montserrat text-designer-secondary dark:text-designer-accent text-sm font-medium hover:text-designer-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-designer-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button className="bg-designer-primary hover:bg-designer-primary/90 text-white font-medium rounded-lg">
              Связаться
            </Button>
          </nav>

          {/* Мобильное меню кнопка */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-montserrat text-designer-secondary dark:text-designer-accent py-2 text-sm font-medium hover:text-designer-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-designer-primary hover:bg-designer-primary/90 text-white font-medium rounded-lg w-full">
                Связаться
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default DesignerHeader;
