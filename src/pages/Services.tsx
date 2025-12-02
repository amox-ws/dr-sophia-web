import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import { servicesData, type Language } from "@/data/servicesData";

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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t("services.page.title")}</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{t("services.page.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Service Categories Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-6 md:gap-8 grid-cols-2">
            {serviceCategories.map((category, index) => (
              <Link 
                key={category.key} 
                to={category.route} 
                className="block group"
                style={{
                  animation: 'slide-in-bounce 0.6s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  transform: index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)'
                }}
              >
                <Card className="overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Top Section - Text Content */}
                  <CardHeader className="relative p-3 md:p-4 lg:p-6">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base md:text-lg lg:text-xl font-heading font-medium mb-2 text-foreground group-hover:text-primary transition-colors whitespace-pre-line">
                          {formatTitleWithLineBreak(category.title, category.key, language)}
                        </CardTitle>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                      </div>
                      {/* Arrow Icon */}
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </CardHeader>

                  {/* Divider */}
                  <Separator />

                  {/* Bottom Section - Image */}
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={category.image}
                        alt={`${category.title} services`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
