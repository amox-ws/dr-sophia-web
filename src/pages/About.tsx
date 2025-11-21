import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Heart, Languages, Briefcase } from 'lucide-react';

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
      <Helmet>
        <title>{t('about.seo.title')}</title>
        <meta name="description" content={t('about.seo.description')} />
        <meta property="og:title" content={t('about.seo.title')} />
        <meta property="og:description" content={t('about.seo.description')} />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200 leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Profile Card */}
            <div className="observe-animation">
              <Card className="aspect-[4/5] rounded-2xl border-none shadow-2xl bg-gradient-to-br from-[hsl(var(--medical-medium-light))] to-[hsl(var(--medical-medium))] p-8 flex flex-col justify-end text-white">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold mb-3">{t('about.profile.name')}</h2>
                  <p className="text-xl mb-2 opacity-90">{t('about.profile.title')}</p>
                  <p className="text-sm opacity-80 leading-relaxed">{t('about.profile.specialties')}</p>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Education */}
              <div className="observe-animation">
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
                    <span>{t('about.education.msc')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--medical-medium))] mt-1">•</span>
                    <span>{t('about.education.endoscopy')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--medical-medium))] mt-1">•</span>
                    <span>{t('about.education.certificates')}</span>
                  </li>
                </ul>
              </div>

              {/* Experience */}
              <div className="observe-animation">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {t('about.experience.title')}
                  </h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-semibold text-foreground">{t('about.experience.current')}</p>
                  <p>{t('about.experience.greece')}</p>
                  <p className="text-sm">{t('about.experience.france')}</p>
                  <p className="italic text-sm">{t('about.experience.focus')}</p>
                </div>
              </div>

              {/* Languages */}
              <div className="observe-animation">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                    <Languages className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {t('about.languages.title')}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-[hsl(var(--medical-lightest))] text-[hsl(var(--medical-medium-dark))] text-sm font-medium">
                    {t('about.languages.greek')}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-[hsl(var(--medical-lightest))] text-[hsl(var(--medical-medium-dark))] text-sm font-medium">
                    {t('about.languages.english')}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-[hsl(var(--medical-lightest))] text-[hsl(var(--medical-medium-dark))] text-sm font-medium">
                    {t('about.languages.french')}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-[hsl(var(--medical-lightest))] text-[hsl(var(--medical-medium-dark))] text-sm font-medium">
                    {t('about.languages.romanian')}
                  </span>
                </div>
              </div>

              {/* Approach */}
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

        </div>
      </section>
    </div>
  );
};

export default About;
