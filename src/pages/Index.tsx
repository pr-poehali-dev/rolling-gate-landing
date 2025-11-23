import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const features = [
    {
      icon: "Shield",
      title: "Надёжность",
      description: "Стальная конструкция выдерживает любые нагрузки"
    },
    {
      icon: "Zap",
      title: "Автоматика",
      description: "Открытие одним нажатием кнопки"
    },
    {
      icon: "Lock",
      title: "Безопасность",
      description: "Система защиты от взлома"
    },
    {
      icon: "Clock",
      title: "Долговечность",
      description: "Гарантия до 10 лет"
    }
  ];

  const catalog = [
    {
      title: "Стандарт",
      price: "от 45 000 ₽",
      image: "https://cdn.poehali.dev/projects/c4fba2fa-f5bc-4afb-8b97-dabf73d93581/files/2ae89676-3518-4dd5-b476-b0d0f012f3d4.jpg",
      features: ["Ширина до 4м", "Оцинкованная сталь", "Базовая автоматика"]
    },
    {
      title: "Премиум",
      price: "от 75 000 ₽",
      image: "https://cdn.poehali.dev/projects/c4fba2fa-f5bc-4afb-8b97-dabf73d93581/files/1ee23006-4870-4fcd-a28b-6f33790eba09.jpg",
      features: ["Ширина до 6м", "Порошковое покрытие", "Тихий привод", "Датчики препятствий"]
    },
    {
      title: "Индивидуальный",
      price: "от 95 000 ₽",
      image: "https://cdn.poehali.dev/projects/c4fba2fa-f5bc-4afb-8b97-dabf73d93581/files/5d182f74-9133-4b86-bd68-5af0627f00b0.jpg",
      features: ["Любой размер", "Дизайн на заказ", "Премиум-автоматика", "Умное управление"]
    }
  ];

  const installSteps = [
    { step: "1", title: "Консультация", description: "Выезд специалиста и замер" },
    { step: "2", title: "Производство", description: "Изготовление за 5-7 дней" },
    { step: "3", title: "Монтаж", description: "Установка за 1 день" },
    { step: "4", title: "Настройка", description: "Пуско-наладка и обучение" }
  ];

  const reviews = [
    { name: "Александр К.", text: "Отличные ворота! Работают безупречно уже 2 года.", rating: 5 },
    { name: "Мария С.", text: "Быстрый монтаж, качественные материалы. Рекомендую!", rating: 5 },
    { name: "Дмитрий П.", text: "Профессиональная команда. Всё сделали точно в срок.", rating: 5 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Move" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-secondary">ВоротаПро</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#installation" className="text-sm font-medium hover:text-primary transition-colors">Установка</a>
            <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Откатные ворота премиум-класса
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Инновационные решения для вашей безопасности в Москве и области
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name={feature.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Каталог решений</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Найдите идеальный вариант для вашего участка</p>
          <div className="grid md:grid-cols-3 gap-8">
            {catalog.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-secondary">{item.title}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{item.price}</p>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Заказать консультацию</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="installation" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Процесс установки</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">От заявки до запуска — всего 4 шага</p>
          <div className="grid md:grid-cols-4 gap-8">
            {installSteps.map((step, index) => (
              <div key={index} className="relative animate-slide-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < installSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Цены и гарантия</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Прозрачное ценообразование и официальная гарантия</p>
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-secondary">Что входит в стоимость</h3>
                    <ul className="space-y-4">
                      {["Выезд замерщика", "Изготовление", "Доставка", "Монтаж", "Автоматика", "Настройка и обучение"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={20} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-secondary">Гарантии</h3>
                    <div className="space-y-4">
                      <div className="bg-primary/5 p-4 rounded-xl">
                        <p className="font-bold text-primary mb-1">10 лет</p>
                        <p className="text-sm text-muted-foreground">на конструкцию</p>
                      </div>
                      <div className="bg-accent/5 p-4 rounded-xl">
                        <p className="font-bold text-accent mb-1">3 года</p>
                        <p className="text-sm text-muted-foreground">на автоматику</p>
                      </div>
                      <div className="bg-secondary/5 p-4 rounded-xl">
                        <p className="font-bold text-secondary mb-1">1 год</p>
                        <p className="text-sm text-muted-foreground">бесплатное обслуживание</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-secondary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Получить консультацию</h2>
            <p className="text-center text-white/90 mb-12 text-lg">Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут</p>
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">Ваше имя</label>
                    <Input
                      placeholder="Иван"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о ваших требованиях..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Move" size={28} />
                <span className="text-xl font-bold">ВоротаПро</span>
              </div>
              <p className="text-white/70 text-sm">Откатные ворота премиум-класса для вашего дома</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@vorotapro.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
            <p>© 2024 ВоротаПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
