import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
              <div className="space-y-6">
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
                <div className="relative">
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
      </main>
    </div>
  );
};

export default Index;
