import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CalendarCheck, Wrench, BellRing, ShieldCheck, Star, Sparkles } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const Index = () => {
  useEffect(() => {
    document.title = "My Home Keeper — Home Maintenance Tracker";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Track home maintenance tasks with a sleek dark UI, smooth image transitions, and engaging animations.");
  }, []);

  const slides = [
    { src: hero1, alt: "Modern home interior — dark elegant living room" },
    { src: hero2, alt: "Cozy kitchen space — warm lighting over island" },
    { src: hero3, alt: "Minimalist hallway — clean lines and textures" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="w-full">
        <nav className="container py-6 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">My Home Keeper</a>
          <div className="flex items-center gap-3">
            <Button variant="secondary">Log in</Button>
            <Button>Get Started</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative">
          <div className="container py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 animate-in fade-in-50">
                <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">
                  Stay on top of home maintenance effortlessly
                </h1>
                <p className="text-muted-foreground text-lg">
                  Organize tasks, set smart reminders, and watch your progress grow. A sleek dark interface with smooth transitions keeps everything delightful.
                </p>
                <div className="flex gap-3">
                  <Button size="lg">Create your plan</Button>
                  <Button variant="secondary" size="lg">Explore features</Button>
                </div>
              </div>

              <div>
                <div className="relative animate-in fade-in-50">
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-background/60 via-background/20 to-background/60" />
                  <Carousel
                    className="w-full"
                    opts={{ loop: true }}
                    plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
                  >
                    <CarouselContent>
                      {slides.map((s, i) => (
                        <CarouselItem key={i}>
                          <figure className="relative overflow-hidden rounded-lg shadow-xl">
                            <img
                              src={s.src}
                              alt={s.alt}
                              className="h-[55vh] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                              loading={i === 0 ? "eager" : "lazy"}
                              decoding="async"
                            />
                          </figure>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-6" />
                    <CarouselNext className="-right-6" />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-border">
          <div className="container py-12 md:py-20">
            <header className="mb-10 text-center max-w-2xl mx-auto">
              <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" /> Smart and simple
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold mt-2">Features that keep your home in shape</h2>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                Icon: CalendarCheck,
                title: 'Recurring schedules',
                desc: 'Set monthly, seasonal, or yearly reminders so nothing slips.'
              }, {
                Icon: Wrench,
                title: 'Custom categories',
                desc: 'Group by rooms, systems, or priorities for clarity.'
              }, {
                Icon: BellRing,
                title: 'Smart reminders',
                desc: 'Know what’s due soon with color-coded urgency.'
              }, {
                Icon: ShieldCheck,
                title: 'Progress tracking',
                desc: 'Earn badges and visualize completion over time.'
              }].map(({ Icon, title, desc }, i) => (
                <Card key={i} className="transition-transform duration-300 hover:translate-y-[-4px]">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-t border-border">
          <div className="container py-12 md:py-20">
            <header className="mb-10 text-center max-w-2xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold">How it works</h2>
              <p className="text-muted-foreground mt-2">Three simple steps to a well‑maintained home.</p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              {[{
                step: '1', title: 'Create your plan', desc: 'Add your home name and key task categories.'
              }, {
                step: '2', title: 'Add tasks', desc: 'Set due dates and recurrence for each task.'
              }, {
                step: '3', title: 'Track progress', desc: 'Complete tasks and watch your progress rise.'
              }].map(({ step, title, desc }) => (
                <Card key={step} className="relative">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span aria-hidden className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">{step}</span>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="border-t border-border">
          <div className="container py-12 md:py-20">
            <header className="mb-10 text-center max-w-xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold">Loved by organized homeowners</h2>
            </header>
            <div className="grid md:grid-cols-3 gap-6">
              {[`“I finally keep up with filters and seasonal checks.”`, `“Beautiful dark design and super smooth.”`, `“The reminders saved me from a costly repair.”`].map((quote, i) => (
                <Card key={i} className="transition-transform duration-300 hover:translate-y-[-4px]">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 text-primary" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-border">
          <div className="container py-12 md:py-20">
            <header className="mb-8 text-center max-w-2xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold">Frequently asked questions</h2>
            </header>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is this free to use?</AccordionTrigger>
                  <AccordionContent>
                    Yes. You can start tracking home tasks right away. No credit card required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I customize categories?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. Create categories that match your home: rooms, systems, or priorities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you support recurring tasks?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Schedule monthly, seasonal, or yearly tasks with smart reminders.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Will I lose my data?</AccordionTrigger>
                  <AccordionContent>
                    Your data is saved locally in your browser. You can clear it anytime in settings.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="cta" className="border-t border-border">
          <div className="container py-12 md:py-20 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold">Ready to simplify home care?</h2>
            <p className="text-muted-foreground mt-3">Create your plan now and enjoy a calmer, well‑maintained home.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button size="lg">Get started</Button>
              <Button variant="secondary" size="lg">See how it works</Button>
            </div>
          </div>
        </section>

        <footer className="border-t border-border">
          <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} My Home Keeper. All rights reserved.</p>
            <nav className="flex items-center gap-4">
              <a href="#features" className="hover:underline">Features</a>
              <a href="#how-it-works" className="hover:underline">How it works</a>
              <a href="#faq" className="hover:underline">FAQ</a>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
