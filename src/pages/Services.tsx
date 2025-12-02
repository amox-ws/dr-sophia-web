import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesData, type Language } from "@/data/servicesData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";
import { Button } from "@/components/ui/button";

const formatTitleWithLineBreak = (title: string, key: string, language: string): string => {
  if (language !== "el") return title;
  if (key === "gynecology") return "Γυναικολογική Φροντίδα.";
  if (key === "pregnancy") return "Εγκυμοσύνη - Μαιευτική.";
  return title;
};

// 🖼️ Import your local images
import birthImg from "@/assets/birth.jpeg";
import mitraImg from "@/assets/mitra.jpeg";
import spermImg from "@/assets/sperm.jpeg";
import surgeryImg from "@/assets/surgery.jpeg";

const Services = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const serviceImages: Record<string, string> = {
    gynecology: mitraImg,
    "assisted-reproduction": spermImg,
    "endoscopic-surgery": surgeryImg,
    pregnancy: birthImg,
  };

  const serviceRoutes: Record<string, string> = {
    gynecology: "/services/gynecology",
    "assisted-reproduction": "/services/assisted-reproduction",
    "endoscopic-surgery": "/services/endoscopic-surgery",
    pregnancy: "/services/pregnancy",
  };

  const serviceCategories = servicesData.map((service) => ({
    key: service.id,
    route: serviceRoutes[service.id],
    image: serviceImages[service.id],
    title: service.title[language as Language],
    description: service.intro?.[language as Language] || service.title[language as Language],
  }));

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <AnimatedSectionTitle
            title={t("services.page.title")}
            subtitle={t("services.page.subtitle")}
            titleClassName="text-4xl md:text-5xl"
          />
        </div>
      </section>

      {/* Service Categories Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div ref={ref} className="max-w-4xl mx-auto grid gap-4 sm:gap-6 md:gap-1 grid-cols-2">
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

      {/* 📞 Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSectionTitle 
              title={t('contactCta.title')} 
              subtitle={t('contactCta.subtitle')}
              titleClassName="text-white"
              subtitleClassName="text-white/90"
            />
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[hsl(var(--medical-darkest))] hover:bg-white/90 text-base md:text-lg px-8 py-6 shadow-xl"
              >
                {t('contactCta.button')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;