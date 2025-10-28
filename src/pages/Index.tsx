import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sword" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                АНАРХИЯ MC
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('rules')} className="hover:text-primary transition-colors">Правила</button>
              <button onClick={() => scrollToSection('map')} className="hover:text-primary transition-colors">Карта</button>
              <button onClick={() => scrollToSection('donate')} className="hover:text-primary transition-colors">Донат</button>
              <button onClick={() => scrollToSection('forum')} className="hover:text-primary transition-colors">Форум</button>
              <button onClick={() => scrollToSection('wiki')} className="hover:text-primary transition-colors">Вики</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Copy" size={16} className="mr-2" />
              IP: anarchy.mc
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <img 
                src="https://cdn.poehali.dev/projects/6e2e6931-329a-417b-9254-d4e700aaee60/files/98f81ede-bc5f-445e-84b0-e6fc2120aff1.jpg" 
                alt="Анархия сервер" 
                className="w-full h-96 object-cover rounded-lg mb-8 border-2 border-primary shadow-2xl shadow-primary/50"
              />
              <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                ДОБРО ПОЖАЛОВАТЬ В ХАОС
              </h2>
              <p className="text-2xl text-muted-foreground mb-8">
                Настоящая анархия без правил. Выживай, сражайся, доминируй.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Badge className="text-lg px-6 py-2 bg-primary">НИКАКИХ БАНОВ</Badge>
                <Badge className="text-lg px-6 py-2 bg-secondary">БЕЗ ПРИВИЛЕГИЙ</Badge>
                <Badge className="text-lg px-6 py-2 bg-primary">100% АНАРХИЯ</Badge>
              </div>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl px-8 py-6">
                  <Icon name="Play" size={24} className="mr-2" />
                  ИГРАТЬ СЕЙЧАС
                </Button>
                <Button size="lg" variant="outline" className="text-xl px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-background">
                  <Icon name="Users" size={24} className="mr-2" />
                  DISCORD
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="rules" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold mb-12 text-center">
              <Icon name="Shield" size={40} className="inline mr-4 text-primary" />
              ПРАВИЛА СЕРВЕРА
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-primary/50 bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Icon name="Check" size={24} />
                    РАЗРЕШЕНО
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center gap-2"><Icon name="Zap" size={16} className="text-secondary" /> Гриферство</p>
                  <p className="flex items-center gap-2"><Icon name="Zap" size={16} className="text-secondary" /> Рейды</p>
                  <p className="flex items-center gap-2"><Icon name="Zap" size={16} className="text-secondary" /> PvP без ограничений</p>
                  <p className="flex items-center gap-2"><Icon name="Zap" size={16} className="text-secondary" /> Использование дюпов</p>
                  <p className="flex items-center gap-2"><Icon name="Zap" size={16} className="text-secondary" /> Все виды читов</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/50 bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <Icon name="X" size={24} />
                    ЗАПРЕЩЕНО
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center gap-2"><Icon name="Ban" size={16} className="text-muted-foreground" /> Краш сервера</p>
                  <p className="flex items-center gap-2"><Icon name="Ban" size={16} className="text-muted-foreground" /> Лаг-машины</p>
                  <p className="flex items-center gap-2"><Icon name="Ban" size={16} className="text-muted-foreground" /> DDoS атаки</p>
                  <p className="flex items-center gap-2"><Icon name="Ban" size={16} className="text-muted-foreground" /> Эксплойты ядра</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="map" className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold mb-12 text-center">
              <Icon name="Map" size={40} className="inline mr-4 text-secondary" />
              КАРТА МИРА
            </h3>
            <Card className="max-w-6xl mx-auto bg-card border-secondary/50">
              <CardContent className="p-8">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Globe" size={64} className="mx-auto mb-4 text-secondary" />
                    <p className="text-xl text-muted-foreground">Интерактивная карта загружается...</p>
                    <Button className="mt-4 bg-secondary text-background hover:bg-secondary/90">
                      Открыть в полном размере
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="donate" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold mb-4 text-center">
              <Icon name="ShoppingCart" size={40} className="inline mr-4 text-primary" />
              МАГАЗИН И ДОНАТ
            </h3>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Поддержи сервер! Все покупки идут на развитие проекта. Никаких преимуществ в игре.
            </p>
            
            <Tabs defaultValue="shop" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="shop">
                  <Icon name="Store" size={20} className="mr-2" />
                  Магазин
                </TabsTrigger>
                <TabsTrigger value="auction">
                  <Icon name="Gavel" size={20} className="mr-2" />
                  Аукцион
                </TabsTrigger>
                <TabsTrigger value="trade">
                  <Icon name="ArrowLeftRight" size={20} className="mr-2" />
                  Торговля
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="shop">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'Стартовый набор', price: '50₽', items: ['32 стейка', '1 железная кирка', '1 меч'] },
                    { title: 'Набор строителя', price: '150₽', items: ['64 блока камня', '32 факела', 'Инструменты'] },
                    { title: 'Набор воина', price: '300₽', items: ['Алмазная броня', 'Зачарованный меч', '5 зелий'] }
                  ].map((item, i) => (
                    <Card key={i} className="border-primary/50 hover:border-primary transition-all">
                      <CardHeader>
                        <img 
                          src="https://cdn.poehali.dev/projects/6e2e6931-329a-417b-9254-d4e700aaee60/files/f2cd98ed-db24-44ea-9bdf-7559071f9b7d.jpg" 
                          alt={item.title}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <CardTitle className="text-primary">{item.title}</CardTitle>
                        <CardDescription className="text-2xl font-bold text-foreground">{item.price}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 mb-4">
                          {item.items.map((i, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Icon name="Check" size={16} className="text-secondary" />
                              {i}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Купить
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="auction">
                <Card className="border-secondary/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Gavel" size={24} className="text-secondary" />
                      Игровой аукцион
                    </CardTitle>
                    <CardDescription>
                      Покупай и продавай предметы за игровую валюту
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { item: 'Зачарованная кирка (Эффективность V)', price: '5000 монет', seller: 'Player123' },
                        { item: 'Элитра', price: '15000 монет', seller: 'CraftMaster' },
                        { item: 'Маяк', price: '8000 монет', seller: 'BuilderPro' }
                      ].map((auction, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                          <div>
                            <p className="font-semibold">{auction.item}</p>
                            <p className="text-sm text-muted-foreground">Продавец: {auction.seller}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-secondary">{auction.price}</p>
                            <Button size="sm" className="mt-2 bg-secondary text-background hover:bg-secondary/90">
                              Купить
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="trade">
                <Card className="border-primary/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="ArrowLeftRight" size={24} className="text-primary" />
                      Торговая система
                    </CardTitle>
                    <CardDescription>
                      Безопасный обмен предметами между игроками
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-6 bg-muted rounded-lg text-center">
                        <Icon name="Handshake" size={48} className="mx-auto mb-4 text-secondary" />
                        <p className="text-lg mb-2">Зайди на сервер для торговли</p>
                        <p className="text-sm text-muted-foreground mb-4">Используй команду /trade [игрок]</p>
                        <Button className="bg-primary hover:bg-primary/90">
                          Как пользоваться
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="forum" className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold mb-12 text-center">
              <Icon name="MessageSquare" size={40} className="inline mr-4 text-secondary" />
              ФОРУМ
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-secondary/50 hover:border-secondary transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Megaphone" size={24} className="text-primary" />
                    Объявления
                  </CardTitle>
                  <CardDescription>Последние новости сервера</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">156 тем • 2.3K сообщений</p>
                </CardContent>
              </Card>
              
              <Card className="border-secondary/50 hover:border-secondary transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-primary" />
                    Общение
                  </CardTitle>
                  <CardDescription>Обсуждения и беседы</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">892 темы • 15.7K сообщений</p>
                </CardContent>
              </Card>
              
              <Card className="border-secondary/50 hover:border-secondary transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Lightbulb" size={24} className="text-primary" />
                    Предложения
                  </CardTitle>
                  <CardDescription>Ваши идеи для сервера</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">234 темы • 1.2K сообщений</p>
                </CardContent>
              </Card>
              
              <Card className="border-secondary/50 hover:border-secondary transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="LifeBuoy" size={24} className="text-primary" />
                    Помощь
                  </CardTitle>
                  <CardDescription>Техническая поддержка</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">445 тем • 3.1K сообщений</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="wiki" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold mb-12 text-center">
              <Icon name="Book" size={40} className="inline mr-4 text-primary" />
              ВИКИ СЕРВЕРА
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: 'Pickaxe', title: 'Гайды для новичков', desc: 'Как начать играть на анархии' },
                { icon: 'Building', title: 'Постройки и базы', desc: 'Лучшие идеи для строительства' },
                { icon: 'Swords', title: 'PvP механики', desc: 'Как побеждать в бою' },
                { icon: 'Sparkles', title: 'Зачарования', desc: 'Полный гайд по зачарованиям' },
                { icon: 'Package', title: 'Экономика', desc: 'Как зарабатывать монеты' },
                { icon: 'History', title: 'История сервера', desc: 'Легенды и события' }
              ].map((item, i) => (
                <Card key={i} className="border-primary/30 hover:border-primary transition-all cursor-pointer">
                  <CardHeader>
                    <Icon name={item.icon as any} size={32} className="text-secondary mb-2" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold mb-12 text-center">
              <Icon name="HelpCircle" size={40} className="inline mr-4 text-secondary" />
              ЧАСТЫЕ ВОПРОСЫ
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: 'Как зайти на сервер?', a: 'Скопируй IP: anarchy.mc и добавь в список серверов Minecraft Java Edition версии 1.20+' },
                { q: 'Можно ли использовать читы?', a: 'Да, на нашем сервере разрешены все виды читов кроме тех, что крашат сервер' },
                { q: 'Есть ли донат привилегии?', a: 'Нет! У нас нет донат привилегий. Все игроки равны. В магазине можно купить только косметику и ресурсы' },
                { q: 'Как защитить свою базу?', a: 'Стройте далеко от спавна, используйте обсидиан, прячьте координаты и не доверяйте никому' },
                { q: 'Будут ли вайпы?', a: 'Нет! Мир существует с момента открытия сервера и никогда не будет вайпов' }
              ].map((item, i) => (
                <Card key={i} className="border-secondary/30">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-t from-primary/20 to-background">
          <div className="container mx-auto px-4 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/6e2e6931-329a-417b-9254-d4e700aaee60/files/13f5d465-0c78-4ba4-a6de-7da7c51b5dbf.jpg" 
              alt="Minecraft меч" 
              className="w-32 h-32 object-contain mx-auto mb-6"
            />
            <h3 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ГОТОВ К АНАРХИИ?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйся к тысячам игроков в самом хардкорном Minecraft сервере
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl px-12 py-6">
                <Icon name="Copy" size={24} className="mr-2" />
                СКОПИРОВАТЬ IP
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-12 py-6 border-secondary text-secondary hover:bg-secondary hover:text-background">
                <Icon name="MessageCircle" size={24} className="mr-2" />
                ПОДДЕРЖКА
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-primary">АНАРХИЯ MC</h4>
              <p className="text-sm text-muted-foreground">
                Лучший анархия сервер для Minecraft с 2024 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                <p className="cursor-pointer hover:text-primary transition-colors">Главная</p>
                <p className="cursor-pointer hover:text-primary transition-colors">Правила</p>
                <p className="cursor-pointer hover:text-primary transition-colors">Карта</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <div className="space-y-2 text-sm">
                <p className="cursor-pointer hover:text-primary transition-colors">Discord</p>
                <p className="cursor-pointer hover:text-primary transition-colors">Форум</p>
                <p className="cursor-pointer hover:text-primary transition-colors">Вики</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">Email: support@anarchy.mc</p>
                <p className="text-muted-foreground">Discord: /anarchy-mc</p>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 АНАРХИЯ MC. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Icon name="MessageCircle" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Github" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Youtube" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
