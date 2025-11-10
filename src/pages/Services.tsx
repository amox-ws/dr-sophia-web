import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

// 🖼️ Import your local images
import birthImg from "@/assets/birth.jpeg";
import mitraImg from "@/assets/mitra.jpeg";
import spermImg from "@/assets/sperm.jpeg";
import surgeryImg from "@/assets/surgery.jpeg";

const Services = () => {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      key: "gynecology",
      route: "/services/gynecology",
      image: mitraImg,
      description: "Ολοκληρωμένη φροντίδα για τη γυναικεία υγεία, από διάγνωση έως θεραπεία γυναικολογικών παθήσεων.",
    },
    {
      key: "assistedReproduction",
      route: "/services/assisted-reproduction",
      image: spermImg,
      description: "Σύγχρονες μέθοδοι υποβοηθούμενης αναπαραγωγής για ζευγάρια που αντιμετωπίζουν δυσκολία σύλληψης.",
    },
    {
      key: "endoscopicSurgery",
      route: "/services/endoscopic-surgery",
      image: surgeryImg,
      description: "Ελάχιστα επεμβατικές τεχνικές που προσφέρουν ακριβή διάγνωση και ταχεία ανάρρωση.",
    },
    {
      key: "pregnancy",
      route: "/services/pregnancy",
      image: birthImg,
      description: "Εξειδικευμένη παρακολούθηση της εγκυμοσύνης με έμφαση στην ασφάλεια μητέρας και μωρού.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("services.page.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t("services.page.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <Link 
                key={category.key} 
                to={category.route}
                className="block group"
              >
                <Card className="overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Top Section - Text Content */}
                  <CardHeader className="relative p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl font-heading font-medium mb-4 text-foreground group-hover:text-primary transition-colors">
                          {t(`services.${category.key}.title`)}
                        </CardTitle>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      {/* Arrow Icon */}
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </CardHeader>
                  
                  {/* Divider */}
                  <Separator />
                  
                  {/* Bottom Section - Image */}
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={t(`services.${category.key}.imageAlt`)}
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
