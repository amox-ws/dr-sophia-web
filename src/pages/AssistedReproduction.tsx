import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

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
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
              {t('services.assistedReproduction.title')}
            </h1>
            
            <div className="space-y-6">
              {subServices.map((service) => (
                <Card key={service} className="p-6 hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    {t(`services.assistedReproduction.${service}.title`)}
                  </h2>
                  <div className="min-h-[100px] text-muted-foreground">
                    {t(`services.assistedReproduction.${service}.description`)}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AssistedReproduction;
