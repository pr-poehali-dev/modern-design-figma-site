
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, Instagram, Behance, Dribbble, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-designer-secondary text-white dark:bg-designer-secondary/95">
      <div className="container mx-auto px-4 md:px-6">
        {/* Верхняя часть футера */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-16">
          {/* Колонка с информацией о дизайнере */}
          <div className="md:col-span-1 lg:col-span-1">
            <a href="#" className="text-white font-montserrat font-bold text-xl mb-4 inline-block">
              <span className="text-designer-primary">D</span>esign<span className="text-designer-primary">Studio</span>
            </a>
            <p className="text-gray-300 mb-4">
              Создаю уникальные дизайн-решения, которые помогают брендам выделяться и достигать своих целей.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-designer-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-designer-primary transition-colors">
                <Behance className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-designer-primary transition-colors">
                <Dribbble className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-designer-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-designer-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Колонка с навигацией */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-designer-primary transition-colors">Главная</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-designer-primary transition-colors">Портфолио</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-designer-primary transition-colors">Обо мне</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-designer-primary transition-colors">Услуги</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-designer-primary transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Колонка с услугами */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-designer-primary transition-colors">Брендинг и айдентика</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-designer-primary transition-colors">UI/UX дизайн</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-designer-primary transition-colors">Дизайн упаковки</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-designer-primary transition-colors">Иллюстрация</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-designer-primary transition-colors">Полиграфический дизайн</a></li>
            </ul>
          </div>

          {/* Колонка с контактами */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-white font-montserrat font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block text-white">Email:</span>
                design@example.com
              </li>
              <li className="text-gray-300">
                <span className="block text-white">Телефон:</span>
                +7 (999) 123-45-67
              </li>
              <li className="text-gray-300">
                <span className="block text-white">Адрес:</span>
                Москва, Россия
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} DesignStudio. Все права защищены.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-designer-primary text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-designer-primary text-sm transition-colors">
                Условия использования
              </a>
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="icon"
                className="rounded-full bg-designer-primary/10 hover:bg-designer-primary text-designer-primary hover:text-white"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
