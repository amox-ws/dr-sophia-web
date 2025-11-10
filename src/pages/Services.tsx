import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Baby, Heart, Stethoscope, Activity, Shield, Users } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Stethoscope,
      title: t('service.general.title'),
      description: t('service.general.desc'),
    },
    {
      icon: Baby,
      title: t('service.obstetrics.title'),
      description: t('service.obstetrics.desc'),
    },
    {
      icon: Heart,
      title: t('service.fertility.title'),
      description: t('service.fertility.desc'),
    },
    {
      icon: Activity,
      title: t('service.prenatal.title'),
      description: t('service.prenatal.desc'),
    },
    {
      icon: Shield,
      title: t('service.screening.title'),
      description: t('service.screening.desc'),
    },
    {
      icon: Users,
      title: t('service.menopause.title'),
      description: t('service.menopause.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200 leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="observe-animation border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-[hsl(var(--medical-lightest))] group"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto observe-animation">
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
                  Why Choose Our Services?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Our practice is dedicated to providing comprehensive gynecological care with a focus on preventive medicine and patient education. We believe that informed patients make better health decisions.
                  </p>
                  <p className="leading-relaxed">
                    Using state-of-the-art medical technology and evidence-based treatment protocols, we ensure that you receive the highest standard of care in a comfortable and supportive environment.
                  </p>
                  <p className="leading-relaxed">
                    Every patient is unique, and we take the time to understand your individual health needs, concerns, and goals to develop a personalized treatment plan that works for you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
