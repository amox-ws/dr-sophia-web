import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Users, Award } from 'lucide-react';

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

        {/* Decorative circles */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-background to-[hsl(var(--medical-lightest))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassionate Care',
                description: 'Patient-centered approach with empathy and understanding',
              },
              {
                icon: Shield,
                title: 'Modern Medicine',
                description: 'Latest medical technologies and treatment methods',
              },
              {
                icon: Users,
                title: 'Personalized Attention',
                description: 'Individualized care plans for every patient',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Over 15 years of expertise in women\'s health',
              },
            ].map((value, index) => (
              <Card 
                key={index} 
                className="observe-animation border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: t('service.general.title'),
                description: t('service.general.desc'),
              },
              {
                title: t('service.obstetrics.title'),
                description: t('service.obstetrics.desc'),
              },
              {
                title: t('service.fertility.title'),
                description: t('service.fertility.desc'),
              },
            ].map((service, index) => (
              <Card 
                key={index} 
                className="observe-animation border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-[hsl(var(--medical-lightest))]"
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center observe-animation">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] text-white hover:opacity-90"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center observe-animation">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Take Care of Your Health?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule your appointment today and experience personalized care
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
