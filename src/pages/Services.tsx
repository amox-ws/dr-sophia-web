import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Stethoscope, Baby, Microscope, Heart } from 'lucide-react';

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

  const serviceCategories = [
    {
      icon: Stethoscope,
      title: t('services.category.gynecology'),
      services: [
        { key: 'endometriosis', title: t('services.gynecology.endometriosis'), desc: t('services.gynecology.endometriosis.desc') },
        { key: 'adenomyosis', title: t('services.gynecology.adenomyosis'), desc: t('services.gynecology.adenomyosis.desc') },
        { key: 'deep-endometriosis', title: t('services.gynecology.deepEndometriosis'), desc: t('services.gynecology.deepEndometriosis.desc') },
        { key: 'endometrioma', title: t('services.gynecology.endometrioma'), desc: t('services.gynecology.endometrioma.desc') },
        { key: 'fibroids', title: t('services.gynecology.fibroids'), desc: t('services.gynecology.fibroids.desc') },
        { key: 'pcos', title: t('services.gynecology.pcos'), desc: t('services.gynecology.pcos.desc') },
        { key: 'dysmenorrhea', title: t('services.gynecology.dysmenorrhea'), desc: t('services.gynecology.dysmenorrhea.desc') },
        { key: 'menopause', title: t('services.gynecology.menopause'), desc: t('services.gynecology.menopause.desc') },
      ],
    },
    {
      icon: Microscope,
      title: t('services.category.reproduction'),
      services: [
        { key: 'fertility-investigation', title: t('services.reproduction.investigation'), desc: t('services.reproduction.investigation.desc') },
        { key: 'male-factor', title: t('services.reproduction.maleFactor'), desc: t('services.reproduction.maleFactor.desc') },
        { key: 'female-factor', title: t('services.reproduction.femaleFactor'), desc: t('services.reproduction.femaleFactor.desc') },
        { key: 'egg-freezing', title: t('services.reproduction.eggFreezing'), desc: t('services.reproduction.eggFreezing.desc') },
        { key: 'ivf', title: t('services.reproduction.ivf'), desc: t('services.reproduction.ivf.desc') },
        { key: 'mini-ivf', title: t('services.reproduction.miniIvf'), desc: t('services.reproduction.miniIvf.desc') },
        { key: 'iui', title: t('services.reproduction.iui'), desc: t('services.reproduction.iui.desc') },
        { key: 'pgt', title: t('services.reproduction.pgt'), desc: t('services.reproduction.pgt.desc') },
        { key: 'donor', title: t('services.reproduction.donor'), desc: t('services.reproduction.donor.desc') },
        { key: 'surrogacy', title: t('services.reproduction.surrogacy'), desc: t('services.reproduction.surrogacy.desc') },
      ],
    },
    {
      icon: Microscope,
      title: t('services.category.surgery'),
      services: [
        { key: 'hysteroscopy', title: t('services.surgery.hysteroscopy'), desc: t('services.surgery.hysteroscopy.desc') },
        { key: 'laparoscopy', title: t('services.surgery.laparoscopy'), desc: t('services.surgery.laparoscopy.desc') },
        { key: 'robotic', title: t('services.surgery.robotic'), desc: t('services.surgery.robotic.desc') },
      ],
    },
    {
      icon: Baby,
      title: t('services.category.pregnancy'),
      services: [
        { key: 'prenatal', title: t('services.pregnancy.prenatal'), desc: t('services.pregnancy.prenatal.desc') },
        { key: 'nipt', title: t('services.pregnancy.nipt'), desc: t('services.pregnancy.nipt.desc') },
        { key: 'ultrasound', title: t('services.pregnancy.ultrasound'), desc: t('services.pregnancy.ultrasound.desc') },
        { key: 'delivery', title: t('services.pregnancy.delivery'), desc: t('services.pregnancy.delivery.desc') },
        { key: 'vbac', title: t('services.pregnancy.vbac'), desc: t('services.pregnancy.vbac.desc') },
        { key: 'twins', title: t('services.pregnancy.twins'), desc: t('services.pregnancy.twins.desc') },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              {t('services.page.title')}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200 leading-relaxed">
              {t('services.page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="observe-animation border-none shadow-lg bg-gradient-to-br from-white to-[hsl(var(--medical-lightest))]"
              >
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <Collapsible key={serviceIndex}>
                        <CollapsibleTrigger className="w-full group">
                          <div className="flex items-center justify-between p-4 rounded-lg bg-white hover:bg-[hsl(var(--medical-lightest))] transition-colors duration-200 border border-border/50">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground text-left">
                              {service.title}
                            </h3>
                            <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="p-4 pt-2">
                            <p className="text-muted-foreground leading-relaxed">
                              {service.desc}
                            </p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center observe-animation">
            <Heart className="h-16 w-16 mx-auto mb-6 text-[hsl(var(--medical-medium))]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('services.cta.subtitle')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
