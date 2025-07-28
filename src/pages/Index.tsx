import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

// Компонент для анимированного текста в стиле терминала
const TerminalText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 500);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className="font-mono">
      {displayText}
      {showCursor && <span className="animate-pulse text-neon-cyan">|</span>}
    </span>
  );
};

// Компонент карточки кейса
const CaseCard = ({ title, tech, description, image }: {
  title: string;
  tech: string[];
  description: string;
  image: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-gradient-to-br from-slate-navy/50 to-electric-blue/30 
                 rounded-xl border border-neon-cyan/20 overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="aspect-video bg-gradient-to-br from-tech-dark to-electric-blue relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon name="Code2" size={48} className="text-neon-cyan/40" />
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-neon-cyan/10 flex items-center justify-center"
            >
              <Icon name="Play" size={32} className="text-neon-cyan" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="p-6">
        <h3 className="font-mono text-xl text-white mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span key={index} className="px-2 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded-md font-mono">
              {item}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Компонент статистики
const StatItem = ({ number, label, delay }: { number: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="font-mono text-3xl lg:text-4xl text-neon-cyan mb-2">{number}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </motion.div>
);

export default function Index() {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { 
      icon: 'Zap', 
      title: 'Custom Widgets', 
      description: 'Создаём уникальные интерактивные элементы и виджеты для Tilda',
      details: 'Калькуляторы, формы с логикой, интерактивные карты, слайдеры'
    },
    { 
      icon: 'Database', 
      title: 'API Integration', 
      description: 'Подключаем внешние сервисы и базы данных к вашему сайту',
      details: 'CRM, платёжные системы, внешние каталоги, синхронизация данных'
    },
    { 
      icon: 'Settings', 
      title: 'Automation', 
      description: 'Автоматизируем бизнес-процессы через ваш сайт',
      details: 'Уведомления, обработка заявок, интеграция с мессенджерами'
    },
    { 
      icon: 'Sparkles', 
      title: 'Animations', 
      description: 'Добавляем WOW-эффекты и плавные анимации',
      details: 'Параллакс, морфинг, интерактивные переходы, микроанимации'
    }
  ];

  const cases = [
    {
      title: "E-commerce Integration",
      tech: ["JavaScript", "API", "Payment"],
      description: "Полная интеграция интернет-магазина с внешней системой управления товарами и автоматической синхронизацией цен",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Smart Calculator",
      tech: ["React", "LocalStorage", "Analytics"],
      description: "Интерактивный калькулятор стоимости услуг с сохранением промежуточных результатов и отправкой в CRM",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Dynamic Portfolio",
      tech: ["JSON", "Filtering", "Animations"],
      description: "Портфолио с фильтрацией по категориям, поиском и плавными анимациями появления элементов",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-tech-dark/90 backdrop-blur-sm border-b border-neon-cyan/20"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="font-mono text-xl text-neon-cyan"
            whileHover={{ scale: 1.05 }}
          >
            {'<TildaStudio />'}
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Услуги', 'Кейсы', 'О нас', 'Контакты'].map((item) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-300 hover:text-neon-cyan transition-colors font-mono text-sm"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-neon-gradient text-tech-dark font-mono text-sm font-medium">
              Обсудить проект
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section with Parallax */}
      <section className="pt-32 pb-20 px-6 relative min-h-screen flex items-center">
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: scrollY * 0.5 }}
        >
          <div className="font-mono text-xs text-neon-cyan whitespace-pre-wrap leading-relaxed">
            {`function createTildaWidget(config) {
  const widget = {
    element: config.selector,
    data: config.data || {},
    
    init() {
      this.bindEvents();
      this.render();
    },
    
    bindEvents() {
      this.element.addEventListener('click', (e) => {
        this.handleClick(e);
      });
    },
    
    handleClick(event) {
      // Custom logic here
      this.processData(event.target.dataset);
    },
    
    render() {
      // Dynamic content rendering
      this.element.innerHTML = this.template();
    }
  };
  
  widget.init();
  return widget;
}`}
          </div>
        </motion.div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="mb-6 opacity-70">
                <TerminalText 
                  text="$ npm run build-custom-tilda-solution"
                  delay={500}
                />
              </div>
              <motion.h1 
                className="font-mono text-4xl lg:text-6xl text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                Программируем
                <br />
                <span className="text-transparent bg-clip-text bg-neon-gradient">
                  невозможное
                </span>
                <br />
                для Tilda
              </motion.h1>
              <motion.p 
                className="text-gray-400 text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                Создаём кастомные решения, которые выходят за рамки стандартных возможностей конструктора. 
                Интеграции, автоматизация, уникальная логика.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-neon-gradient text-tech-dark font-mono font-medium px-8 py-3">
                    <Icon name="Rocket" className="mr-2" size={20} />
                    Запустить проект
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-mono px-8 py-3"
                  >
                    <Icon name="Eye" className="mr-2" size={20} />
                    Смотреть кейсы
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-navy to-electric-blue rounded-2xl p-8
                            border border-neon-cyan/20 relative overflow-hidden">
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mt-8 font-mono text-sm space-y-1">
                  <div className="text-gray-500">// Интеграция с внешним API</div>
                  <div className="text-neon-cyan">class TildaIntegration {'{'}</div>
                  <div className="text-white ml-4">constructor(apiKey) {'{'}</div>
                  <div className="text-gray-400 ml-8">this.api = apiKey;</div>
                  <div className="text-gray-400 ml-8">this.initWidget();</div>
                  <div className="text-white ml-4">{'}'}</div>
                  <div className="text-white ml-4">
                    <span className="text-yellow-400">async</span> fetchData() {'{'}
                  </div>
                  <div className="text-gray-400 ml-8">// Магия происходит здесь</div>
                  <div className="text-neon-cyan ml-8">return await this.api.get();</div>
                  <div className="text-white ml-4">{'}'}</div>
                  <div className="text-neon-cyan">{'}'}</div>
                </div>
                <motion.div
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-4 right-4 w-3 h-3 bg-neon-cyan rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl lg:text-4xl text-white mb-4">
              Наши <span className="text-neon-cyan">суперсилы</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Превращаем стандартную Tilda в мощный инструмент для вашего бизнеса
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-xl border cursor-pointer transition-all duration-500 
                          ${activeService === index 
                            ? 'bg-neon-cyan/10 border-neon-cyan shadow-neon' 
                            : 'bg-slate-navy/30 border-neon-cyan/20 hover:border-neon-cyan/50'}`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300
                                ${activeService === index ? 'bg-neon-cyan/20' : 'bg-neon-cyan/10'}`}>
                    <Icon 
                      name={service.icon as any} 
                      size={32} 
                      className={`transition-colors ${activeService === index ? 'text-neon-cyan' : 'text-gray-400'}`} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-xl text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                    <AnimatePresence>
                      {activeService === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-neon-cyan text-sm font-mono"
                        >
                          {service.details}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="кейсы" className="py-20 px-6 bg-slate-navy/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl lg:text-4xl text-white mb-4">
              Портфолио <span className="text-neon-cyan">решений</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Реальные проекты, где мы превратили обычные сайты в мощные инструменты
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <CaseCard {...caseItem} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-2xl text-white mb-4">
              Результаты в <span className="text-neon-cyan">цифрах</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem number="100+" label="Кастомных решений" delay={0} />
            <StatItem number="5" label="Лет с Tilda" delay={0.1} />
            <StatItem number="24/7" label="Техподдержка" delay={0.2} />
            <StatItem number="98%" label="Довольных клиентов" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 px-6 bg-gradient-to-br from-tech-dark to-slate-navy">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-mono text-3xl lg:text-4xl text-white mb-6">
                Готовы создать что-то <span className="text-neon-cyan">невозможное</span>?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Расскажите о вашей задаче — мы найдём техническое решение
              </p>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 10 }}
                >
                  <Icon name="Mail" size={20} className="text-neon-cyan" />
                  <span className="text-gray-300 font-mono">dev@tilda-studio.ru</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 10 }}
                >
                  <Icon name="MessageCircle" size={20} className="text-neon-cyan" />
                  <span className="text-gray-300 font-mono">@tilda_dev_bot</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-navy/50 border-neon-cyan/20">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Input
                        placeholder="Как вас зовут?"
                        className="bg-tech-dark border-neon-cyan/30 text-white placeholder-gray-500 
                                 focus:border-neon-cyan focus:ring-neon-cyan/20"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email или Telegram"
                        className="bg-tech-dark border-neon-cyan/30 text-white placeholder-gray-500 
                                 focus:border-neon-cyan focus:ring-neon-cyan/20"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Опишите задачу или идею..."
                        rows={4}
                        className="bg-tech-dark border-neon-cyan/30 text-white placeholder-gray-500 
                                 focus:border-neon-cyan focus:ring-neon-cyan/20 resize-none"
                      />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-neon-gradient text-tech-dark font-mono font-medium py-3">
                        <Icon name="Send" className="mr-2" size={20} />
                        Отправить заявку
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neon-cyan/20">
        <div className="container mx-auto text-center">
          <motion.p 
            className="text-gray-500 font-mono text-sm"
            whileHover={{ color: '#00F5FF' }}
          >
            © 2024 Tilda Studio. Кодим будущее вашего бизнеса.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}