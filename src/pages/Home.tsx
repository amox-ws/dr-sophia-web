import { useRef } from 'react';
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
import Fade from 'embla-carousel-fade';
import { servicesData, type Language } from '@/data/servicesData';
import AnimatedSectionTitle from '@/components/AnimatedSectionTitle';
import ServicesSection from '@/components/ServicesSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import StaggeredTextReveal from '@/components/StaggeredTextReveal';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import MapPlaceholder from '@/components/MapPlaceholder';

// 🩺 Import service images
import mitraImg from '@/assets/mitra.jpeg';
import spermImg from "@/assets/assisted_reproduction/Intrauterine_Insemination.jpeg";
import surgeryImg from '@/assets/surgery.jpeg';
import birthImg from '@/assets/birth.jpeg';

// Desktop hero images (doctor_hero uses public folder for LCP optimization)
import gynecology_hero from '@/assets/gynecology_hero.jpeg';
import gynecology_hero_mobile from '@/assets/gynecology_hero_mobile.jpeg';
import assisted_reproduction_hero from '@/assets/assisted-reproduction_hero.jpg';
import assisted_reproduction_hero_mobile from '@/assets/assisted-reproduction_hero_mobile.jpg';
import endoscopic_surgery_hero from '@/assets/endoscopic_surgery_hero.jpg';
import endoscopic_surgery_hero_mobile from '@/assets/endoscopic_surgery_hero_mobile.jpg';
import pregnancy_hero from '@/assets/pregnancy_hero.jpg';
import pregnancy_hero_mobile from '@/assets/pregnancy_hero_mobile.jpg';

const Home = () => {
  const { t, language } = useLanguage();
  const { hasThirdPartyConsent, openCookiePreferences } = useCookieConsent();
  
  // Animation hooks
  const { ref: doctorRef, isVisible: isDoctorVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: btnRef, isVisible: isBtnVisible } = useScrollAnimation({ threshold: 0.1 });
  
  // Refs for "Pop" animation in Offices section
  const { ref: athensCarouselRef, isVisible: isAthensCarouselVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: athensMapRef, isVisible: isAthensMapVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: aeginaCarouselRef, isVisible: isAeginaCarouselVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: aeginaMapRef, isVisible: isAeginaMapVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  const fadePlugin = Fade();
  
  // Office carousel autoplay plugins
  const athensAutoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const aeginaAutoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  
  const athensOfficeImages = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];
  
  const aeginaOfficeImages = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];

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

  const heroSlides = [
    {
      id: 'slide1',
      link: '/contact',
      imageDesktop: '/images/doctor_hero.jpg',
      imageMobile: '/images/doctor_hero.jpg',
    },
    {
      id: 'slide2',
      link: '/services/gynecology',
      imageDesktop: gynecology_hero,
      imageMobile: gynecology_hero_mobile,
    },
    {
      id: 'slide3',
      link: '/services/pregnancy',
      imageDesktop: pregnancy_hero,
      imageMobile: pregnancy_hero_mobile,
    },
    {
      id: 'slide4',
      link: '/services/endoscopic-surgery',
      imageDesktop: endoscopic_surgery_hero,
      imageMobile: endoscopic_surgery_hero_mobile,
    },
    {
      id: 'slide5',
      link: '/services/assisted-reproduction',
      imageDesktop: assisted_reproduction_hero,
      imageMobile: assisted_reproduction_hero_mobile,
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
          plugins={[autoplayPlugin.current, fadePlugin]}
          className="w-full"
        >
          <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              {/* Height calc: 100vh minus header height */}
              <div className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center text-white overflow-hidden">
                

                <div className="absolute inset-0 w-full h-full">
                  {/* Desktop Background Image */}
                  <img
                    src={slide.imageDesktop}
                    alt={t(`heroCarousel.${slide.id}.title`)}
                    className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
                    fetchPriority={slide.id === 'slide1' ? 'high' : 'auto'}
                    loading={slide.id === 'slide1' ? 'eager' : 'lazy'}
                  />
                  
                  {/* Mobile Background Image */}
                  <img
                    src={slide.imageMobile}
                    alt={t(`heroCarousel.${slide.id}.title`)}
                    className="absolute inset-0 w-full h-full object-cover object-center block md:hidden"
                    fetchPriority={slide.id === 'slide1' ? 'high' : 'auto'}
                    loading={slide.id === 'slide1' ? 'eager' : 'lazy'}
                  />

                  {/* Dark Overlay (Replaces brightness filter) */}
                  <div className="absolute inset-0 bg-black/70" />
                </div>

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
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div ref={doctorRef} className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left Side: Doctor Image */}
              <div 
                className="order-1 md:order-1"
                style={{
                  opacity: isDoctorVisible ? 1 : 0,
                  transform: isDoctorVisible ? "translate(0, 0)" : "translate(-1000px, 100px)",
                  transition: "opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              >
                <div className="max-w-md mx-auto">
                  <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] shadow-2xl">
                    <img
                      src="/images/doctor_hero.jpg"
                      alt={t('doctor.imageAlt')}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Text */}
              <div 
                className="order-2 md:order-2"
                style={{
                  opacity: isDoctorVisible ? 1 : 0,
                  transform: isDoctorVisible ? "translate(0, 0)" : "translate(1000px, 100px)",
                  transition: "opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"
                }}
              >
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

      {/* 🩺 Services Section */}
      <ServicesSection 
        serviceCategories={serviceCategories} 
        formatTitleWithLineBreak={formatTitleWithLineBreak}
        language={language}
        t={t}
      />

      {/* 🏢 Our Offices Section with "Pop" Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSectionTitle title={t('offices.title')} className="mb-16" />

            {/* Athens Office */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {t('offices.athens.title')}
              </h3>
              
              {/* Athens Office Carousel - POP Animation */}
              <div 
                ref={athensCarouselRef}
                className="mb-6"
                style={{
                  opacity: isAthensCarouselVisible ? 1 : 0,
                  transform: isAthensCarouselVisible ? "translateY(0) scale(1)" : "translateY(100px) scale(0.9)",
                  transition: "opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
                }}
              >
                <Carousel
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  plugins={[athensAutoplay.current]}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {athensOfficeImages.map((img, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2">
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={img}
                            alt={language === 'el' ? `Ιατρείο Αθήνας - Εικόνα ${index + 1}` : language === 'fr' ? `Cabinet d'Athènes - Image ${index + 1}` : `Athens Office - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-transparent border border-white/40 text-foreground hover:bg-white/20 hover:border-white/60" />
                  <CarouselNext className="right-2 bg-transparent border border-white/40 text-foreground hover:bg-white/20 hover:border-white/60" />
                </Carousel>
              </div>
              
              {/* Athens Map - POP Animation (Delayed) */}
              <div 
                ref={athensMapRef}
                className="aspect-video md:aspect-[21/9] rounded-lg overflow-hidden shadow-lg"
                style={{
                  opacity: isAthensMapVisible ? 1 : 0,
                  transform: isAthensMapVisible ? "translateY(0) scale(1)" : "translateY(100px) scale(0.9)",
                  transition: "opacity 0.8s ease-out 0.2s, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s"
                }}
              >
                {hasThirdPartyConsent ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.842427827482!2d23.64447!3d37.93869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bb7b5c1e5555%3A0x5555555555555555!2sLeof.%20Vasileos%20Georgiou%20B%204%2C%20Pireas%20185%2034!5e0!3m2!1sen!2sgr!4v1701500000000!5m2!1sen!2sgr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={language === 'el' ? 'Τοποθεσία Ιατρείου Αθήνας' : language === 'fr' ? "Emplacement du cabinet d'Athènes" : 'Athens Office Location'}
                    className="w-full h-full"
                  />
                ) : (
                  <MapPlaceholder onAcceptCookies={openCookiePreferences} className="w-full h-full min-h-[200px]" />
                )}
              </div>
            </div>

            {/* Aegina Office */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {t('offices.aegina.title')}
              </h3>
              
              {/* Aegina Office Carousel - POP Animation */}
              <div 
                ref={aeginaCarouselRef}
                className="mb-6"
                style={{
                  opacity: isAeginaCarouselVisible ? 1 : 0,
                  transform: isAeginaCarouselVisible ? "translateY(0) scale(1)" : "translateY(100px) scale(0.9)",
                  transition: "opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
                }}
              >
                <Carousel
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  plugins={[aeginaAutoplay.current]}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {aeginaOfficeImages.map((img, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2">
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={img}
                            alt={language === 'el' ? `Ιατρείο Αίγινας - Εικόνα ${index + 1}` : language === 'fr' ? `Cabinet d'Égine - Image ${index + 1}` : `Aegina Office - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-transparent border border-white/40 text-foreground hover:bg-white/20 hover:border-white/60" />
                  <CarouselNext className="right-2 bg-transparent border border-white/40 text-foreground hover:bg-white/20 hover:border-white/60" />
                </Carousel>
              </div>
              
              {/* Aegina Map - POP Animation (Delayed) */}
              <div 
                ref={aeginaMapRef}
                className="aspect-video md:aspect-[21/9] rounded-lg overflow-hidden shadow-lg"
                style={{
                  opacity: isAeginaMapVisible ? 1 : 0,
                  transform: isAeginaMapVisible ? "translateY(0) scale(1)" : "translateY(100px) scale(0.9)",
                  transition: "opacity 0.8s ease-out 0.2s, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s"
                }}
              >
                {hasThirdPartyConsent ? (
                  <iframe
                    src="https://www.google.com/maps?q=Νοσοκομείου+5,+Αίγινα,+Greece&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={language === 'el' ? 'Τοποθεσία Ιατρείου Αίγινας' : language === 'fr' ? "Emplacement du cabinet d'Égine" : 'Aegina Office Location'}
                    className="w-full h-full"
                  />
                ) : (
                  <MapPlaceholder onAcceptCookies={openCookiePreferences} className="w-full h-full min-h-[200px]" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Title with Staggered Letter Reveal */}
            <div className="mb-6">
              <StaggeredTextReveal 
                text={t('contactCta.title')} 
                className="text-4xl md:text-5xl font-bold text-white"
                stagger={40} // 40ms per letter
              />
            </div>

            {/* Subtitle with Staggered Letter Reveal (Delayed) */}
            <div className="mb-8">
              <StaggeredTextReveal 
                text={t('contactCta.subtitle')} 
                className="text-xl text-white/90"
                delay={800} // Start after title finishes (approx)
                stagger={20} // Faster stagger for longer text
              />
            </div>

            {/* Button with simple fade up */}
            <div 
              ref={btnRef}
              style={{
                opacity: isBtnVisible ? 1 : 0,
                transform: isBtnVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s ease-out 1.5s" // Wait for text to mostly finish
              }}
            >
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
        </div>
      </section>
    </div>
  );
};

export default Home;