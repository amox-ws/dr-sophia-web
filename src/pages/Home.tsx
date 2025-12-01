import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowUpRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { servicesData, type Language } from '@/data/servicesData';

// 🩺 Import service images
import gynecology_img from '@/assets/gynecology.jpeg';
import assisted_reproduction_img from '@/assets/assisted-reproduction.jpeg';
import endoscopic_surgery_img from '@/assets/endoscopic_surgery.jpeg';
import pregnancy_img from '@/assets/pregnancy.jpeg';
import mitraImg from '@/assets/mitra.jpeg';
import spermImg from '@/assets/sperm.jpeg';
import surgeryImg from '@/assets/surgery.jpeg';
import birthImg from '@/assets/birth.jpeg';

import doctor_hero from '@/assets/doctor_hero.jpg';
import gynecology_hero from '@/assets/gynecology_hero.jpeg';
import assisted_reproduction_hero from '@/assets/assisted-reproduction_hero.jpg';
import endoscopic_surgery_hero from '@/assets/endoscopic_surgery_hero.jpg';
import pregnancy_hero from '@/assets/pregnancy_hero.jpg';

const Home = () => {
  const { t, language } = useLanguage();
  const observerRef = useRef(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const formatTitleWithLineBreak = (title: string, key: string, lang: string): string => {
    if (lang !== "el") return title;
    if (key === "gynecology") return "Γυναικολογία";
    if (key === "pregnancy") return "Εγκυμοσύνη";
    return title;
  };

  const serviceImages: Record<string, string> = {
    gynecology: mitraImg,
    "assisted-reproduction": spermImg,
    "endoscopic-surgery": surgeryImg,
    pregnancy: birthImg,
  };

  const serviceRoutes: Record<string, string> = {
    gynecology: "/services/gynecology",
    "assisted-reproduction": "/services/assisted-reproduction",
    "endoscopic-surgery": "/services/endoscopic-surgery",
    pregnancy: "/services/pregnancy",
  };

  const serviceCategories = servicesData.map((service) => ({
    key: service.id,
    route: serviceRoutes[service.id],
    image: serviceImages[service.id],
    title: service.title[language as Language],
    description: service.intro?.[language as Language] || service.title[language as Language],
  }));

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

  const heroSlides = [
    {
      id: 'slide1',
      link: '/contact',
      image: doctor_hero, // Mapped to general doctor/clinic image
    },
    {
      id: 'slide2',
      link: '/services/gynecology',
      image: gynecology_hero, // Mapped to gynecology
    },
    {
      id: 'slide3',
      link: '/services/pregnancy',
      image: pregnancy_hero, // Mapped to pregnancy
    },
    {
      id: 'slide4',
      link: '/services/endoscopic-surgery',
      image: endoscopic_surgery_hero, // Mapped to endoscopic surgery
    },
    {
      id: 'slide5',
      link: '/services/assisted-reproduction',
      image: assisted_reproduction_hero, // Mapped to assisted reproduction
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 🌟 Hero Carousel Section */}
      <section className="relative w-full mt-16 md:mt-20">
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
                  
                  {/* Background Image */}
                  <img
                    src={slide.image}
                    alt={t(`heroCarousel.${slide.id}.title`)}
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[.3]"
                    // Using filter brightness to darken the image for text visibility
                  />

                  {/* Dark Overlay (Alternative to brightness filter, but filter looks better here) */}
                  {/* <div className="absolute inset-0 bg-black/60"></div> */}

                  {/* Decorative glowing elements - now over the image */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                  </div>

                  {/* Slide Content */}
                  <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
                        {t(`heroCarousel.${slide.id}.title`)}
                      </h1>
                      <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 max-w-3xl mx-auto drop-shadow-md">
                        {t(`heroCarousel.${slide.id}.subtitle`)}
                      </p>
                      <Link to={slide.link}>
                        <Button 
                          size="lg" 
                          className="bg-white text-[hsl(var(--medical-darkest))] hover:bg-white/90 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 shadow-xl"
                        >
                          {t(`heroCarousel.${slide.id}.button`)}
                        </Button>
                      </Link>
                    </div>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8 z-20" />
          <CarouselNext className="right-4 md:right-8 z-20" />
        </Carousel>
      </section>

      {/* 👩‍⚕️ Doctor Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-light))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto observe-animation">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 md:order-1">
                <div className="max-w-md mx-auto">
                  <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] shadow-2xl">
                    <img
                      src= {doctor_hero}
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

      {/* 🩺 Services Section - Matching /services page layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 observe-animation">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              {t('services.page.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.page.subtitle')}
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 observe-animation">
            {serviceCategories.map((category) => (
              <Link key={category.key} to={category.route} className="block group">
                <Card className="overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Top Section - Text Content */}
                  <CardHeader className="relative p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl font-heading font-medium mb-4 text-foreground group-hover:text-primary transition-colors whitespace-pre-line">
                          {formatTitleWithLineBreak(category.title, category.key, language)}
                        </CardTitle>
                        <p className="text-base text-muted-foreground leading-relaxed">{category.description}</p>
                      </div>
                      {/* Arrow Icon */}
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </CardHeader>

                  {/* Divider */}
                  <Separator />

                  {/* Bottom Section - Image */}
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={category.image}
                        alt={`${category.title} services`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🏢 Our Offices Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 observe-animation">
              <h2 className="text-4xl font-bold text-foreground">
                {t('offices.title')}
              </h2>
            </div>

            {/* Athens Office */}
            <div className="mb-16 observe-animation">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {t('offices.athens.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Athens office - exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Athens office - interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Aegina Office */}
            <div className="observe-animation">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {t('offices.aegina.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Aegina office - exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Aegina office - interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center observe-animation">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('contactCta.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('contactCta.subtitle')}
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[hsl(var(--medical-darkest))] hover:bg-white/90 text-base md:text-lg px-8 py-6 shadow-xl"
              >
                {t('contactCta.button')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;