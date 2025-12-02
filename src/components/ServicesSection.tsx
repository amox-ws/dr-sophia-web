import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import AnimatedSectionTitle from '@/components/AnimatedSectionTitle';

interface ServiceCategory {
  key: string;
  route: string;
  image: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  serviceCategories: ServiceCategory[];
  formatTitleWithLineBreak: (title: string, key: string, lang: string) => string;
  language: string;
  t: (key: string) => string;
}

const ServicesSection = ({
  serviceCategories,
  formatTitleWithLineBreak,
  language,
  t,
}: ServicesSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-light))] to-background">
      <div className="container mx-auto px-4">
        <AnimatedSectionTitle
          title={t('services.page.title')}
          subtitle={t('services.page.subtitle')}
        />

        {/* Service Cards Grid */}
        <div ref={ref} className="max-w-4xl mx-auto grid gap-4 sm:gap-6 md:gap-8 grid-cols-2">
          {serviceCategories.map((category, index) => (
            <AnimatedServiceCard
              key={category.key}
              route={category.route}
              title={formatTitleWithLineBreak(category.title, category.key, language)}
              description={category.description}
              image={category.image}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
