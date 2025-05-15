
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-modern-white via-modern-gray/20 to-modern-purple/10 dark:from-designer-secondary dark:to-designer-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight text-designer-secondary dark:text-designer-accent">
              Креативный <span className="text-designer-primary">графический дизайн</span> для вашего бизнеса
            </h1>
            <p className="text-lg md:text-xl text-designer-secondary/80 dark:text-designer-accent/80 font-open-sans max-w-xl">
              Визуальные решения, которые привлекают внимание, запоминаются и помогают вашему бренду выделиться на рынке.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-designer-primary hover:bg-designer-primary/90 text-white font-medium rounded-lg px-6 py-3 text-base flex items-center">
                Смотреть работы
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-designer-primary text-designer-primary hover:bg-designer-primary/10 font-medium rounded-lg px-6 py-3 text-base">
                Узнать больше
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-designer-primary">8+</p>
                <p className="text-sm text-designer-secondary/70 dark:text-designer-accent/70">лет опыта</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-designer-primary">150+</p>
                <p className="text-sm text-designer-secondary/70 dark:text-designer-accent/70">проектов</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-designer-primary">95%</p>
                <p className="text-sm text-designer-secondary/70 dark:text-designer-accent/70">довольных клиентов</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-slide-right">
            {/* Геометрические фигуры для стиля модерн */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-designer-primary/30 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-designer-primary/20 -z-10"></div>
            
            {/* Главное изображение */}
            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-white dark:border-designer-secondary shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Графический дизайнер за работой" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Плавающие элементы */}
            <div className="absolute top-10 right-10 bg-white dark:bg-designer-secondary p-3 rounded-lg shadow-lg animate-float">
              <img 
                src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="Цветовая палитра" 
                className="w-12 h-12 rounded"
              />
            </div>
            <div className="absolute bottom-10 left-10 bg-white dark:bg-designer-secondary p-3 rounded-lg shadow-lg animate-float animation-delay-500">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="Графический планшет" 
                className="w-12 h-12 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
