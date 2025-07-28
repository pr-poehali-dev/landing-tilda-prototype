import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-tech-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-tech-dark/80 backdrop-blur-md border-b border-neon-cyan/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Code" className="text-neon-cyan" size={24} />
              <span className="font-mono text-xl font-bold">TILDA DEV STUDIO</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-neon-cyan transition-colors">Услуги</a>
              <a href="#advantages" className="hover:text-neon-cyan transition-colors">Преимущества</a>
              <a href="#contact" className="hover:text-neon-cyan transition-colors">Контакты</a>
            </div>
            <Button className="bg-neon-cyan text-tech-dark hover:bg-neon-cyan/90 font-mono">
              Обсудить проект
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-slate-navy to-electric-blue"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 animate-fade-in">
              <span className="text-transparent bg-clip-text bg-neon-gradient">
                НЕСТАНДАРТНЫЕ
              </span>
              <br />
              РЕШЕНИЯ ДЛЯ TILDA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
              Программируем то, что невозможно в стандартном конструкторе.
              <br />
              Интеграции, анимации, кастомная логика.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-neon-cyan text-tech-dark hover:bg-neon-cyan/90 font-mono text-lg px-8 py-3 animate-glow">
                <Icon name="Zap" className="mr-2" size={20} />
                Начать проект
              </Button>
              <Button variant="outline" size="lg" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-mono text-lg px-8 py-3">
                <Icon name="Play" className="mr-2" size={20} />
                Посмотреть кейсы
              </Button>
            </div>
          </div>
        </div>
        
        {/* Code Animation Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 font-mono text-sm">
          <pre className="text-neon-cyan">
{`// Custom Tilda Integration
function customWidget() {
  const element = document.querySelector('.t-widget');
  element.addEventListener('click', () => {
    // Нестандартная логика
    processCustomData();
  });
}`}
          </pre>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-neon-gradient">
                НАШИ УСЛУГИ
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Расширяем возможности Tilda через программирование
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Code2",
                title: "Custom Widget",
                description: "Разработка уникальных виджетов и компонентов для вашего сайта"
              },
              {
                icon: "Braces",
                title: "API Интеграции",
                description: "Подключение внешних сервисов, CRM, платёжных систем"
              },
              {
                icon: "Cog",
                title: "Автоматизация",
                description: "Настройка автоматических процессов и уведомлений"
              },
              {
                icon: "Sparkles",
                title: "Анимации",
                description: "Создание впечатляющих интерактивных элементов"
              },
              {
                icon: "Database",
                title: "Базы данных",
                description: "Работа с данными, фильтрация, сортировка контента"
              },
              {
                icon: "Shield",
                title: "Безопасность",
                description: "Защита форм, валидация данных, антиспам"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-card border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} className="text-neon-cyan" size={24} />
                    </div>
                    <h3 className="text-xl font-mono font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gradient-to-r from-slate-navy to-electric-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16">
              <span className="text-transparent bg-clip-text bg-neon-gradient">
                ПОЧЕМУ МЫ?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-tech-dark font-mono font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-semibold mb-2">Глубокая экспертиза</h3>
                    <p className="text-gray-300">5+ лет работы с Tilda, знаем все тонкости платформы</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-tech-dark font-mono font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-semibold mb-2">Быстрая разработка</h3>
                    <p className="text-gray-300">Готовые решения и шаблоны для типовых задач</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-tech-dark font-mono font-bold text-sm">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-semibold mb-2">Чистый код</h3>
                    <p className="text-gray-300">Все решения оптимизированы и не замедляют сайт</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-tech-dark font-mono font-bold text-sm">04</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-semibold mb-2">Поддержка</h3>
                    <p className="text-gray-300">Гарантия на все работы и техническая поддержка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-neon-gradient">
                  ОБСУДИМ ПРОЕКТ?
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Расскажите о своей задаче — мы найдём решение
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Card className="bg-card border-neon-cyan/20">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ваше имя</label>
                        <Input className="bg-background border-neon-cyan/30 focus:border-neon-cyan" placeholder="Как к вам обращаться?" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email или Telegram</label>
                        <Input className="bg-background border-neon-cyan/30 focus:border-neon-cyan" placeholder="Для связи с вами" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Опишите задачу</label>
                        <Textarea className="bg-background border-neon-cyan/30 focus:border-neon-cyan min-h-32" placeholder="Что нужно добавить или изменить на сайте?" />
                      </div>
                      <Button className="w-full bg-neon-cyan text-tech-dark hover:bg-neon-cyan/90 font-mono">
                        <Icon name="Send" className="mr-2" size={20} />
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-mono font-semibold mb-6">Контакты</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-neon-cyan/10 rounded-lg flex items-center justify-center">
                        <Icon name="Mail" className="text-neon-cyan" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-400">hello@tildadev.studio</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-neon-cyan/10 rounded-lg flex items-center justify-center">
                        <Icon name="MessageCircle" className="text-neon-cyan" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Telegram</p>
                        <p className="text-gray-400">@tildadev_studio</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-neon-cyan/10 rounded-lg flex items-center justify-center">
                        <Icon name="Clock" className="text-neon-cyan" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Время работы</p>
                        <p className="text-gray-400">Пн-Пт 10:00-19:00 МСК</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-neon-cyan/10 to-electric-blue/10 rounded-lg p-6 border border-neon-cyan/20">
                  <h4 className="font-mono font-semibold mb-3">Бесплатная консультация</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Не знаете, возможно ли реализовать вашу идею? Напишите нам — обсудим бесплатно!
                  </p>
                  <div className="flex items-center space-x-2 text-neon-cyan">
                    <Icon name="CheckCircle" size={16} />
                    <span className="text-sm">Ответим в течение 2 часов</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neon-cyan/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Code" className="text-neon-cyan" size={20} />
              <span className="font-mono font-bold">TILDA DEV STUDIO</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Tilda Dev Studio. Программируем нестандартные решения.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}