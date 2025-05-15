
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Ребрендинг Eco Foods',
    category: 'брендинг',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Дизайн приложения FitTrack',
    category: 'ui/ux',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Иллюстрации для Artify',
    category: 'иллюстрация',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Упаковка CoffeeBlend',
    category: 'упаковка',
    image: 'https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Логотип TechNova',
    category: 'брендинг',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Дизайн сайта TravelWise',
    category: 'ui/ux',
    image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('все');
  const categories = ['все', 'брендинг', 'ui/ux', 'иллюстрация', 'упаковка'];

  const filteredItems = activeFilter === 'все' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-modern-white dark:bg-designer-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-designer-secondary dark:text-designer-accent mb-4">
            Мое <span className="text-designer-primary">портфолио</span>
          </h2>
          <p className="text-designer-secondary/70 dark:text-designer-accent/70 max-w-2xl mx-auto">
            Ознакомьтесь с моими последними работами. Каждый проект уникален и отражает индивидуальный стиль и потребности клиента.
          </p>
        </div>

        {/* Фильтры категорий */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={`
                capitalize
                ${activeFilter === category 
                  ? 'bg-designer-primary text-white hover:bg-designer-primary/90' 
                  : 'border-designer-primary/30 text-designer-secondary hover:border-designer-primary hover:text-designer-primary dark:text-designer-accent dark:border-designer-accent/30'}
              `}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Галерея работ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="overflow-hidden bg-designer-card border-none shadow-md hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 relative group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full aspect-[4/3] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-designer-secondary/80 dark:bg-designer-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white">
                  <h3 className="text-xl font-bold font-montserrat mb-2">{item.title}</h3>
                  <p className="text-designer-primary capitalize mb-4">{item.category}</p>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                      <Eye className="mr-2 h-4 w-4" />
                      Просмотр
                    </Button>
                    <Button size="sm" className="bg-designer-primary hover:bg-designer-primary/90">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Подробнее
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-designer-primary hover:bg-designer-primary/90 text-white font-medium rounded-lg px-6 py-3 text-base">
            Смотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
