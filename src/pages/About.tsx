import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Languages, Heart, Award, Globe2, Stethoscope } from 'lucide-react';

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
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in-up text-center">
              {t('about.hero.name')}
            </h1>
            <p className="text-2xl md:text-3xl text-[hsl(var(--medical-medium))] font-semibold mb-4 animate-fade-in-up animation-delay-200 text-center">
              {t('about.hero.title')}
            </p>
            <p className="text-lg text-muted-foreground mb-6 animate-fade-in-up animation-delay-300 text-center max-w-3xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up animation-delay-400">
              <div className="px-5 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] text-white text-sm font-medium shadow-lg">
                {t('about.hero.specialty')}
              </div>
              <div className="px-5 py-3 rounded-full bg-background border-2 border-[hsl(var(--medical-medium))] text-[hsl(var(--medical-medium-dark))] text-sm font-medium shadow-lg">
                {t('about.hero.experience')}
              </div>
            </div>
            <p className="text-base text-muted-foreground animate-fade-in-up animation-delay-500 text-center max-w-4xl mx-auto leading-relaxed">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="observe-animation mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-foreground">
                  {t('about.education.title')}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.education.intro')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Medical Degree */}
              <Card className="observe-animation border-l-4 border-l-[hsl(var(--medical-medium))] hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="h-6 w-6 text-[hsl(var(--medical-medium))] mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {t('about.education.medical.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.education.medical.description')}
                  </p>
                </CardContent>
              </Card>

              {/* MSc */}
              <Card className="observe-animation border-l-4 border-l-[hsl(var(--medical-medium))] hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="h-6 w-6 text-[hsl(var(--medical-medium))] mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {t('about.education.msc.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.education.msc.description')}
                  </p>
                </CardContent>
              </Card>

              {/* Endoscopy */}
              <Card className="observe-animation border-l-4 border-l-[hsl(var(--medical-medium))] hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="h-6 w-6 text-[hsl(var(--medical-medium))] mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {t('about.education.endoscopy.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.education.endoscopy.description')}
                  </p>
                </CardContent>
              </Card>

              {/* Laser */}
              <Card className="observe-animation border-l-4 border-l-[hsl(var(--medical-medium))] hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="h-6 w-6 text-[hsl(var(--medical-medium))] mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {t('about.education.laser.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.education.laser.description')}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Continuing Education */}
            <Card className="observe-animation mt-6 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Globe2 className="h-6 w-6 text-[hsl(var(--medical-medium))] mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {t('about.education.conferences.title')}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.education.conferences.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="observe-animation mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                  <Briefcase className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-foreground">
                  {t('about.experience.title')}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.experience.intro')}
              </p>
            </div>

            {/* Current Positions */}
            <div className="mb-12 observe-animation">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--medical-medium))]"></span>
                {t('about.experience.current.title')}
              </h3>
              <div className="space-y-6">
                <ExperienceCard
                  role={t('about.experience.current.embryoland.role')}
                  location={t('about.experience.current.embryoland.location')}
                  description={t('about.experience.current.embryoland.description')}
                />
                <ExperienceCard
                  role={t('about.experience.current.rea.role')}
                  location={t('about.experience.current.rea.location')}
                  description={t('about.experience.current.rea.description')}
                />
                <ExperienceCard
                  role={t('about.experience.current.tzaneio.role')}
                  location={t('about.experience.current.tzaneio.location')}
                  description={t('about.experience.current.tzaneio.description')}
                />
                <ExperienceCard
                  role={t('about.experience.current.diamantis.role')}
                  location={t('about.experience.current.diamantis.location')}
                  description={t('about.experience.current.diamantis.description')}
                />
                <ExperienceCard
                  role={t('about.experience.current.euromedica.role')}
                  location={t('about.experience.current.euromedica.location')}
                  description={t('about.experience.current.euromedica.description')}
                />
              </div>
            </div>

            {/* International Experience */}
            <div className="mb-12 observe-animation">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--medical-medium))]"></span>
                {t('about.experience.international.title')}
              </h3>
              <div className="space-y-6">
                <ExperienceCard
                  role={t('about.experience.international.santulli.role')}
                  location={t('about.experience.international.santulli.location')}
                  description={t('about.experience.international.santulli.description')}
                />
                <ExperienceCard
                  role={t('about.experience.international.port_royal.role')}
                  location={t('about.experience.international.port_royal.location')}
                  description={t('about.experience.international.port_royal.description')}
                />
                <ExperienceCard
                  role={t('about.experience.international.saint_joseph.role')}
                  location={t('about.experience.international.saint_joseph.location')}
                  description={t('about.experience.international.saint_joseph.description')}
                />
                <ExperienceCard
                  role={t('about.experience.international.tenon.role')}
                  location={t('about.experience.international.tenon.location')}
                  description={t('about.experience.international.tenon.description')}
                />
                <Card className="border-none bg-white/50 shadow-md">
                  <CardContent className="p-5">
                    <p className="text-muted-foreground leading-relaxed italic">
                      {t('about.experience.international.other.description')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Previous Greece Experience */}
            <div className="observe-animation">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--medical-medium))]"></span>
                {t('about.experience.greece_other.title')}
              </h3>
              <div className="space-y-6">
                <ExperienceCard
                  role={t('about.experience.greece_other.bladi.role')}
                  location={t('about.experience.greece_other.bladi.location')}
                  description={t('about.experience.greece_other.bladi.description')}
                />
                <ExperienceCard
                  role={t('about.experience.greece_other.military.role')}
                  location={t('about.experience.greece_other.military.location')}
                  description={t('about.experience.greece_other.military.description')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="observe-animation mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                  <Stethoscope className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-foreground">
                  {t('about.expertise.title')}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.expertise.intro')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ExpertiseCard
                title={t('about.expertise.areas.endometriosis.title')}
                description={t('about.expertise.areas.endometriosis.description')}
              />
              <ExpertiseCard
                title={t('about.expertise.areas.robotics.title')}
                description={t('about.expertise.areas.robotics.description')}
              />
              <ExpertiseCard
                title={t('about.expertise.areas.ivf.title')}
                description={t('about.expertise.areas.ivf.description')}
              />
              <ExpertiseCard
                title={t('about.expertise.areas.infertility.title')}
                description={t('about.expertise.areas.infertility.description')}
              />
              <ExpertiseCard
                title={t('about.expertise.areas.cryopreservation.title')}
                description={t('about.expertise.areas.cryopreservation.description')}
              />
              <ExpertiseCard
                title={t('about.expertise.areas.obstetrics.title')}
                description={t('about.expertise.areas.obstetrics.description')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Languages */}
              <div className="observe-animation">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                    <Languages className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {t('about.languages.title')}
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('about.languages.intro')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="px-5 py-4 rounded-xl bg-white shadow-md border-l-4 border-l-[hsl(var(--medical-medium))]">
                    <p className="text-[hsl(var(--medical-medium-dark))] font-semibold text-lg">
                      {t('about.languages.greek')}
                    </p>
                  </div>
                  <div className="px-5 py-4 rounded-xl bg-white shadow-md border-l-4 border-l-[hsl(var(--medical-medium))]">
                    <p className="text-[hsl(var(--medical-medium-dark))] font-semibold text-lg">
                      {t('about.languages.english')}
                    </p>
                  </div>
                  <div className="px-5 py-4 rounded-xl bg-white shadow-md border-l-4 border-l-[hsl(var(--medical-medium))]">
                    <p className="text-[hsl(var(--medical-medium-dark))] font-semibold text-lg">
                      {t('about.languages.french')}
                    </p>
                  </div>
                  <div className="px-5 py-4 rounded-xl bg-white shadow-md border-l-4 border-l-[hsl(var(--medical-medium))]">
                    <p className="text-[hsl(var(--medical-medium-dark))] font-semibold text-lg">
                      {t('about.languages.romanian')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="observe-animation">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {t('about.philosophy.title')}
                  </h2>
                </div>
                <Card className="border-none shadow-lg bg-white">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {t('about.philosophy.text')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const ExperienceCard = ({ role, location, description }: { role: string; location: string; description: string }) => (
  <Card className="border-none bg-white shadow-md hover:shadow-lg transition-shadow">
    <CardContent className="p-5">
      <h4 className="text-lg font-semibold text-foreground mb-1">{role}</h4>
      <p className="text-sm text-[hsl(var(--medical-medium))] font-medium mb-3">{location}</p>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const ExpertiseCard = ({ title, description }: { title: string; description: string }) => (
  <Card className="observe-animation border-t-4 border-t-[hsl(var(--medical-medium))] hover:shadow-xl transition-shadow bg-white">
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default About;
