import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

const EndoscopicSurgery = () => {
  const { t } = useLanguage();

  const subServices = [
    'hysteroscopy',
    'laparoscopy',
    'roboticSurgery'
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('services.endoscopicSurgery.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="space-y-6">
              {subServices.map((service) => (
                <Card key={service} className="p-6 hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    {t(`services.endoscopicSurgery.${service}.title`)}
                  </h2>
                  <div className="min-h-[100px] text-muted-foreground">
                    {t(`services.endoscopicSurgery.${service}.description`)}
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

export default EndoscopicSurgery;
