import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200 leading-relaxed">
              {t('about.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image Placeholder */}
            <div className="observe-animation">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[hsl(var(--medical-medium-light))] to-[hsl(var(--medical-medium))] shadow-2xl"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <div className="observe-animation mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {t('about.education.title')}
                  </h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--medical-medium))] mt-1">•</span>
                    <span>{t('about.education.medical')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--medical-medium))] mt-1">•</span>
                    <span>{t('about.education.specialty')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--medical-medium))] mt-1">•</span>
                    <span>{t('about.education.fellowship')}</span>
                  </li>
                </ul>
              </div>

              <div className="observe-animation">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {t('about.approach.title')}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.approach.text')}
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Board Certified',
                description: 'Certified by the Hellenic Society of Obstetrics and Gynecology',
              },
              {
                icon: Heart,
                title: '15+ Years Experience',
                description: 'Extensive experience in all aspects of women\'s health',
              },
              {
                icon: GraduationCap,
                title: 'Continuous Learning',
                description: 'Regular participation in international medical conferences',
              },
            ].map((item, index) => (
              <Card 
                key={index} 
                className="observe-animation border-none shadow-lg bg-gradient-to-br from-white to-[hsl(var(--medical-lightest))]"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
