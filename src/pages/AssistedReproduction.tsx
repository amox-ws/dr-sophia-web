import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import assistedReproductionImage from '@/assets/assisted-reproduction.jpeg';

const AssistedReproduction = () => {
  const { t } = useLanguage();

  const subServices = [
    'fertilityInvestigation',
    'maleInfertility',
    'femaleInfertility',
    'eggFreezing',
    'ivf',
    'miniIvf',
    'iui',
    'pgt',
    'donorEggsSperm',
    'surrogacy'
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: '#4D6471' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#4D6471]/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Circular Image */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0 border-4 border-white/20 shadow-2xl">
              <img 
                src={assistedReproductionImage} 
                alt={t('services.assistedReproduction.imageAlt')}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Title */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {t('services.assistedReproduction.title')}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {subServices.map((service) => (
                <AccordionItem 
                  key={service} 
                  value={service}
                  className="bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background rounded-lg border border-border shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/50 transition-colors">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground text-left">
                      {t(`services.assistedReproduction.${service}.title`)}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`services.assistedReproduction.${service}.description`)}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AssistedReproduction;
