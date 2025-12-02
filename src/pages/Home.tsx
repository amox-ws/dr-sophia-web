import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { servicesData, type Language } from '@/data/servicesData';
import AnimatedSectionTitle from '@/components/AnimatedSectionTitle';
import ServicesSection from '@/components/ServicesSection';

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
  const autoplayPlugin = Autoplay({ delay: 5000, stopOnInteraction: false });

  const formatTitleWithLineBreak = (title: string, key: string, lang: string): string => {
    if (lang !== "el") return title;
    if (key === "gynecology") return "Γυναικολογίκη Φροντίδα.";
    if (key === "pregnancy") return "Εγκυμοσύνη - Μαιευτική.";
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
          // plugins={[autoplayPlugin]}
          className="w-full"
        >
          <CarouselContent>
          {heroSlides.map((slide) => (
  <CarouselItem key={slide.id}>
    {/* ΑΛΛΑΓΗ 1: Υπολογισμός ύψους 100vh μείον το ύψος του header (4rem mobile, 5rem desktop) */}
    <div className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center text-white overflow-hidden">
      
      {/* Background Image */}
      <img
        src={slide.image}
        alt={t(`heroCarousel.${slide.id}.title`)}
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[.3]"
      />

      {/* Decorative glowing elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Slide Content - Bottom Left */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 h-full flex items-end pb-12 md:pb-16">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight drop-shadow-lg">
            {t(`heroCarousel.${slide.id}.title`)}
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-white/90 drop-shadow-md">
            {t(`heroCarousel.${slide.id}.subtitle`)}
          </p>
          <Link to={slide.link}>
            <Button 
              size="lg" 
              className="bg-white text-[hsl(var(--medical-darkest))] hover:bg-white/90 text-sm md:text-base px-6 md:px-8 py-3 md:py-4 shadow-xl"
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
          <CarouselPrevious 
            className="left-4 md:left-8 z-20 bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white hover:text-white h-10 w-10 md:h-12 md:w-12 transition-all duration-300" 
          />
          <CarouselNext 
            className="right-4 md:right-8 z-20 bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white hover:text-white h-10 w-10 md:h-12 md:w-12 transition-all duration-300" 
          />
        </Carousel>
      </section>

      {/* 👩‍⚕️ Doctor Section */}
      <section className="py-20 bg-white">
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
                <h2 className="text-4xl font-heading font-bold mb-6 text-foreground">
                  {t('doctor.title')}
                </h2>
                <p 
                  className="text-lg text-muted-foreground mb-8 leading-[1.6] tracking-[0.2px] font-body"
                  dangerouslySetInnerHTML={{
                    __html: t('doctor.intro')
                      .replace(/Υποβοηθούμενη Αναπαραγωγή \(IVF\)/g, '<strong class="text-[hsl(var(--medical-medium-dark))]">Υποβοηθούμενη Αναπαραγωγή (IVF)</strong>')
                      .replace(/Assisted Reproduction \(IVF\)/g, '<strong class="text-[hsl(var(--medical-medium-dark))]">Assisted Reproduction (IVF)</strong>')
                      .replace(/Procréation Assistée \(FIV\)/g, '<strong class="text-[hsl(var(--medical-medium-dark))]">Procréation Assistée (FIV)</strong>')
                      .replace(/Ελάχιστα Επεμβατική Χειρουργική/g, '<strong class="text-[hsl(var(--medical-medium-dark))]">Ελάχιστα Επεμβατική Χειρουργική</strong>')
                      .replace(/Minimally Invasive Surgery/g, '<strong class="text-[hsl(var(--medical-medium-dark))]">Minimally Invasive Surgery</strong>')
                      .replace(/Chirurgie Mini-Invasive/g, '<strong class="text-[hsl(var(--medical-medium-dark))]">Chirurgie Mini-Invasive</strong>')
                      .replace(/Port Royal/g, '<strong class="text-[hsl(var(--medical-medium))]">Port Royal</strong>')
                      .replace(/επιστημονική αριστεία/g, '<strong class="text-foreground">επιστημονική αριστεία</strong>')
                      .replace(/scientific excellence/g, '<strong class="text-foreground">scientific excellence</strong>')
                      .replace(/excellence scientifique/g, '<strong class="text-foreground">excellence scientifique</strong>')
                  }}
                />
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
      <ServicesSection 
        serviceCategories={serviceCategories} 
        formatTitleWithLineBreak={formatTitleWithLineBreak}
        language={language}
        t={t}
      />

      {/* 🏢 Our Offices Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSectionTitle title={t('offices.title')} className="mb-16" />

            {/* Athens Office */}
            <div className="mb-16">
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
            <div>
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
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSectionTitle 
              title={t('contactCta.title')} 
              subtitle={t('contactCta.subtitle')}
              titleClassName="text-white"
              subtitleClassName="text-white/90"
            />
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