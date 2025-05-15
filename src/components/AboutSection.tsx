
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Star } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Sketch', 
    'Branding', 'UI/UX Design', 'Typography', 'Motion Design'
  ];

  const experience = [
    { 
      year: '2020 - Настоящее время', 
      position: 'Старший графический дизайнер', 
      company: 'Creative Studio X' 
    },
    { 
      year: '2018 - 2020', 
      position: 'Графический дизайнер', 
      company: 'DesignLab Agency' 
    },
    { 
      year: '2015 - 2018', 
      position: 'Младший дизайнер', 
      company: 'ArtPoint Studio' 
    }
  ];

  return (
    <section id="about" className="py-20 bg-modern-gray/30 dark:bg-designer-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка с изображением */}
          <div className="relative">
            <div className="relative z-10 animate-slide-left">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Дизайнер за работой" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            
            {/* Декоративные элементы в стиле модерн */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-designer-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-designer-primary/30 rounded-full -z-10"></div>
            
            {/* Стикер с опытом */}
            <div className="absolute top-4 -right-10 bg-designer-primary text-white px-6 py-3 rounded-lg shadow-lg transform rotate-3 animate-fade-in animate-delay-300">
              <p className="font-montserrat font-bold text-lg">8+ лет опыта</p>
            </div>
          </div>
          
          {/* Правая колонка с информацией */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-designer-secondary dark:text-designer-accent">
              Обо <span className="text-designer-primary">мне</span>
            </h2>
            
            <p className="text-designer-secondary/90 dark:text-designer-accent/90 text-lg">
              Привет! Меня зовут Александр, я графический дизайнер с более чем 8-летним опытом создания современных визуальных решений для брендов и компаний различных масштабов.
            </p>
            
            <p className="text-designer-secondary/80 dark:text-designer-accent/80">
              Моя специализация — разработка уникальной айдентики, UI/UX дизайн и создание впечатляющих иллюстраций. Я верю, что хороший дизайн должен не только привлекать внимание, но и решать бизнес-задачи.
            </p>
            
            {/* Навыки */}
            <div>
              <h3 className="text-xl font-semibold font-montserrat text-designer-secondary dark:text-designer-accent mb-3">
                Навыки и инструменты
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-designer-primary/10 text-designer-primary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Опыт работы */}
            <div>
              <h3 className="text-xl font-semibold font-montserrat text-designer-secondary dark:text-designer-accent mb-3">
                Опыт работы
              </h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-3 h-3 rounded-full bg-designer-primary"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-designer-secondary dark:text-designer-accent">{exp.position} — {exp.company}</p>
                      <p className="text-sm text-designer-secondary/70 dark:text-designer-accent/70">{exp.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Отзывы клиентов (мини-блок) */}
            <div className="bg-white dark:bg-designer-secondary/30 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="ml-2 text-sm text-designer-secondary/70 dark:text-designer-accent/70">
                  5.0 / 5.0
                </p>
              </div>
              <p className="text-designer-secondary/90 dark:text-designer-accent/90 italic text-sm">
                "Александр — невероятно талантливый дизайнер с отличным чувством стиля. Он полностью понял нашу концепцию и превратил её в визуальный шедевр. Абсолютно рекомендую!"
              </p>
              <p className="mt-2 text-designer-primary font-semibold text-sm">— Мария Петрова, CEO TechStart</p>
            </div>
            
            <Button className="bg-designer-primary hover:bg-designer-primary/90 text-white font-medium rounded-lg">
              <Download className="mr-2 h-4 w-4" />
              Скачать резюме
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
