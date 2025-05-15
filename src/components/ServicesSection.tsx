
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, MonitorSmartphone, PackageCheck, PenTool, Shapes, VideoIcon } from 'lucide-react';

const services = [
  {
    title: 'Брендинг и айдентика',
    description: 'Разработка уникального визуального образа вашего бренда, включая логотип, цветовую палитру, типографику и стилевые элементы.',
    icon: <Palette className="h-10 w-10 text-designer-primary" />,
  },
  {
    title: 'UI/UX дизайн',
    description: 'Создание интуитивных и эстетически привлекательных интерфейсов для веб-сайтов и мобильных приложений с фокусом на пользовательский опыт.',
    icon: <MonitorSmartphone className="h-10 w-10 text-designer-primary" />,
  },
  {
    title: 'Дизайн упаковки',
    description: 'Разработка привлекательной и функциональной упаковки, которая выделит ваш продукт на полке и подчеркнет его уникальность.',
    icon: <PackageCheck className="h-10 w-10 text-designer-primary" />,
  },
  {
    title: 'Иллюстрация',
    description: 'Создание уникальных иллюстраций для любых целей: от маркетинговых материалов до анимации и инфографики.',
    icon: <PenTool className="h-10 w-10 text-designer-primary" />,
  },
  {
    title: 'Полиграфический дизайн',
    description: 'Разработка всех видов печатной продукции: от визиток и брошюр до плакатов и каталогов с вниманием к деталям.',
    icon: <Shapes className="h-10 w-10 text-designer-primary" />,
  },
  {
    title: 'Моушн-дизайн',
    description: 'Создание анимированной графики для социальных сетей, рекламы, презентаций и видеороликов.',
    icon: <VideoIcon className="h-10 w-10 text-designer-primary" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-modern-white dark:bg-designer-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-designer-secondary dark:text-designer-accent mb-4">
            Мои <span className="text-designer-primary">услуги</span>
          </h2>
          <p className="text-designer-secondary/70 dark:text-designer-accent/70 max-w-2xl mx-auto">
            Предлагаю широкий спектр дизайнерских услуг, адаптированных под потребности вашего бизнеса.
            Независимо от масштаба проекта, каждая задача получает максимум внимания и креативного подхода.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-none bg-designer-card shadow-md hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 relative">
                {/* Декоративный элемент в стиле модерн */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-designer-primary/5 rounded-bl-3xl -z-10"></div>
                
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold font-montserrat text-designer-secondary dark:text-designer-accent mb-3">
                  {service.title}
                </h3>
                <p className="text-designer-secondary/80 dark:text-designer-accent/80">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительный блок с процессом */}
        <div className="mt-20" id="process">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-designer-secondary dark:text-designer-accent mb-4">
              Мой <span className="text-designer-primary">процесс</span>
            </h2>
            <p className="text-designer-secondary/70 dark:text-designer-accent/70 max-w-2xl mx-auto">
              Чтобы достичь наилучшего результата, я следую четкому и структурированному подходу
              на каждом этапе дизайн-проекта.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Исследование',
                description: 'Анализ бренда, аудитории и конкурентов для глубокого понимания задачи.'
              },
              {
                number: '02',
                title: 'Концепция',
                description: 'Разработка креативных идей и ключевых визуальных решений.'
              },
              {
                number: '03',
                title: 'Дизайн',
                description: 'Создание визуальных материалов с вниманием к каждой детали.'
              },
              {
                number: '04',
                title: 'Реализация',
                description: 'Доработка, финализация и подготовка файлов для использования.'
              }
            ].map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="bg-designer-card p-6 rounded-lg shadow-sm relative z-10 h-full">
                  <div className="text-5xl font-bold text-designer-primary/20 font-montserrat mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold font-montserrat text-designer-secondary dark:text-designer-accent mb-2">
                    {step.title}
                  </h3>
                  <p className="text-designer-secondary/80 dark:text-designer-accent/80">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20 text-designer-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
