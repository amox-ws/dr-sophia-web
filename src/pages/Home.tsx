import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// 🩺 Import service images
import gynecology_img from '@/assets/gynecology.jpeg';
import assisted_reproduction_img from '@/assets/assisted-reproduction.jpeg';
import endoscopic_surgery_img from '@/assets/endoscopic_surgery.jpeg';
import pregnancy_img from '@/assets/pregnancy.jpeg';

const Home = () => {
  const { t } = useLanguage();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.observe-animation');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[hsl(var(--medical-darkest))] via-[hsl(var(--medical-dark))] to-[hsl(var(--medical-medium-dark))] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up animation-delay-200">
              {t('hero.subtitle')}
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-[hsl(var(--medical-darkest))] hover:bg-white/90 animate-fade-in-up animation-delay-400 text-lg px-8 py-6"
              >
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 observe-animation">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              {t('services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          {/* Services Carousel */}
          <div className="mb-16 observe-animation">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {[
                  { 
                    key: 'gynecology', 
                    img: gynecology_img,
                    alt: 'Gynecology services - Υπηρεσίες γυναικολογίας - Services de gynécologie' 
                  },
                  { 
                    key: 'reproduction', 
                    img: assisted_reproduction_img,
                    alt: 'Assisted reproduction - Υποβοηθούμενη αναπαραγωγή - Reproduction assistée' 
                  },
                  { 
                    key: 'surgery', 
                    img: endoscopic_surgery_img,
                    alt: 'Endoscopic surgery - Ενδοσκοπική χειρουργική - Chirurgie endoscopique' 
                  },
                  { 
                    key: 'pregnancy', 
                    img: pregnancy_img,
                    alt: 'Pregnancy care - Φροντίδα εγκυμοσύνης - Suivi de grossesse' 
                  },
                ].map((service) => (
                  <CarouselItem key={service.key} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <div className="max-w-sm mx-auto">
                        <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-[hsl(var(--medical-light))] flex items-center justify-center shadow-lg">
                          <img
                            src={service.img}
                            alt={service.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="mt-6 text-center">
                          <h3 className="text-2xl font-bold text-foreground">
                            {t(`carousel.${service.key}`)}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-1/2" />
              <CarouselNext className="right-0 translate-x-1/2" />
            </Carousel>
          </div>

          <div className="text-center observe-animation">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] text-white hover:opacity-90"
              >
                {t('services.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-light))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto observe-animation">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 md:order-1">
                <div className="max-w-md mx-auto">
                  <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] shadow-2xl">
                    <img
                      src="/placeholder.svg"
                      alt={t('doctor.imageAlt')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="order-2 md:order-2">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  {t('doctor.title')}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t('doctor.intro')}
                </p>
                <Link to="/about">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] text-white hover:opacity-90"
                  >
                    {t('doctor.readMore')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center observe-animation">
            <h2 className="text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {t('cta.subtitle')}
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-[hsl(var(--medical-darkest))] hover:bg-white/90 text-lg px-8 py-6"
              >
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
