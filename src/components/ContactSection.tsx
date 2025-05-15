
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Instagram, Behance, Dribbble } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-modern-gray/30 dark:bg-designer-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-designer-secondary dark:text-designer-accent mb-4">
            Связаться <span className="text-designer-primary">со мной</span>
          </h2>
          <p className="text-designer-secondary/70 dark:text-designer-accent/70 max-w-2xl mx-auto">
            Есть проект или идея? Давайте обсудим, как я могу помочь воплотить вашу концепцию в реальность.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая колонка с формой */}
          <div className="bg-white dark:bg-designer-card rounded-lg shadow-lg p-8 animate-slide-left">
            <h3 className="text-2xl font-semibold font-montserrat text-designer-secondary dark:text-designer-accent mb-6">
              Отправить сообщение
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-designer-secondary/90 dark:text-designer-accent/90">
                    Имя
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Ваше имя" 
                    className="bg-modern-gray/20 dark:bg-designer-secondary/10 border-designer-primary/10 focus:border-designer-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-designer-secondary/90 dark:text-designer-accent/90">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    placeholder="ваш@email.com" 
                    type="email" 
                    className="bg-modern-gray/20 dark:bg-designer-secondary/10 border-designer-primary/10 focus:border-designer-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-designer-secondary/90 dark:text-designer-accent/90">
                  Тема
                </label>
                <Input 
                  id="subject" 
                  placeholder="Тема сообщения" 
                  className="bg-modern-gray/20 dark:bg-designer-secondary/10 border-designer-primary/10 focus:border-designer-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-designer-secondary/90 dark:text-designer-accent/90">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Ваше сообщение..." 
                  rows={6}
                  className="bg-modern-gray/20 dark:bg-designer-secondary/10 border-designer-primary/10 focus:border-designer-primary resize-none"
                />
              </div>

              <Button className="w-full bg-designer-primary hover:bg-designer-primary/90 text-white">
                <Send className="mr-2 h-4 w-4" />
                Отправить сообщение
              </Button>
            </form>
          </div>

          {/* Правая колонка с информацией */}
          <div className="lg:pl-8 animate-slide-right">
            <h3 className="text-2xl font-semibold font-montserrat text-designer-secondary dark:text-designer-accent mb-6">
              Контактная информация
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-designer-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-designer-primary" />
                </div>
                <div>
                  <p className="text-sm text-designer-secondary/70 dark:text-designer-accent/70 mb-1">
                    Email
                  </p>
                  <p className="text-designer-secondary dark:text-designer-accent font-medium">
                    design@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 p-3 bg-designer-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-designer-primary" />
                </div>
                <div>
                  <p className="text-sm text-designer-secondary/70 dark:text-designer-accent/70 mb-1">
                    Телефон
                  </p>
                  <p className="text-designer-secondary dark:text-designer-accent font-medium">
                    +7 (999) 123-45-67
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 p-3 bg-designer-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-designer-primary" />
                </div>
                <div>
                  <p className="text-sm text-designer-secondary/70 dark:text-designer-accent/70 mb-1">
                    Локация
                  </p>
                  <p className="text-designer-secondary dark:text-designer-accent font-medium">
                    Москва, Россия
                  </p>
                </div>
              </div>
            </div>

            {/* Соцсети */}
            <div>
              <h3 className="text-xl font-semibold font-montserrat text-designer-secondary dark:text-designer-accent mb-4">
                Следите за мной
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 bg-designer-primary/10 rounded-lg text-designer-primary hover:bg-designer-primary hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-designer-primary/10 rounded-lg text-designer-primary hover:bg-designer-primary hover:text-white transition-colors"
                >
                  <Behance className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-designer-primary/10 rounded-lg text-designer-primary hover:bg-designer-primary hover:text-white transition-colors"
                >
                  <Dribbble className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Часы работы */}
            <div className="mt-10 p-6 bg-white dark:bg-designer-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold font-montserrat text-designer-secondary dark:text-designer-accent mb-4">
                Часы работы
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-designer-secondary/70 dark:text-designer-accent/70">Понедельник - Пятница:</span>
                  <span className="text-designer-secondary dark:text-designer-accent font-medium">9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-designer-secondary/70 dark:text-designer-accent/70">Суббота:</span>
                  <span className="text-designer-secondary dark:text-designer-accent font-medium">10:00 - 15:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-designer-secondary/70 dark:text-designer-accent/70">Воскресенье:</span>
                  <span className="text-designer-secondary dark:text-designer-accent font-medium">Выходной</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
