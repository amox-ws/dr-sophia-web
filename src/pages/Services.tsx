import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      key: 'gynecology',
      route: '/services/gynecology',
      imagePosition: 'right',
    },
    {
      key: 'assistedReproduction',
      route: '/services/assisted-reproduction',
      imagePosition: 'left',
    },
    {
      key: 'endoscopicSurgery',
      route: '/services/endoscopic-surgery',
      imagePosition: 'right',
    },
    {
      key: 'pregnancy',
      route: '/services/pregnancy',
      imagePosition: 'left',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('services.page.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t('services.page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-24">
            {serviceCategories.map((category, index) => (
              <div key={category.key} className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text Box */}
                <div className={`${category.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'} order-2`}>
                  <div className="bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background p-8 md:p-12 rounded-lg shadow-lg">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                      {t(`services.${category.key}.title`)}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {t(`services.${category.key}.intro`)}
                    </p>
                    <Link to={category.route}>
                      <Button size="lg" className="text-lg">
                        {t('services.readMore')}
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image Box */}
                <div className={`${category.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'} order-1`}>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-[hsl(var(--medical-light))] to-[hsl(var(--medical-medium))] shadow-xl">
                    <img
                      src="/placeholder.svg"
                      alt={t(`services.${category.key}.imageAlt`)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
