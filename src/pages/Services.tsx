import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesData, type Language } from "@/data/servicesData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
// Αφαιρέθηκε το AnimatedSectionTitle καθώς πλέον χρησιμοποιούμε το StaggeredTextReveal παντού
import { Button } from "@/components/ui/button";
import StaggeredTextReveal from "@/components/StaggeredTextReveal";

const formatTitleWithLineBreak = (title: string, key: string, language: string): string => {
  if (language !== "el") return title;
  if (key === "gynecology") return "Γυναικολογία";
  if (key === "pregnancy") return "Εγκυμοσύνη";
  return title;
};

// 🖼️ Import your local images
import birthImg from "@/assets/birth.jpeg";
import mitraImg from "@/assets/mitra.jpeg";
import spermImg from "@/assets/assisted_reproduction/Intrauterine Insemination.jpeg";
import surgeryImg from "@/assets/surgery.jpeg";

const Services = () => {
  const { t, language } = useLanguage();
  
  // Animation hooks: Ξεχωριστά refs για το grid και το κουμπί της φόρμας επικοινωνίας
  const { ref: gridRef, isVisible: isGridVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: btnRef, isVisible: isBtnVisible } = useScrollAnimation({ threshold: 0.1 });

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
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Title with Staggered Letter Reveal */}
            <div className="mb-6">
              <StaggeredTextReveal 
                text={t("services.page.title")}
                className="text-4xl md:text-5xl font-bold text-foreground"
                stagger={40} // 40ms ανά γράμμα
              />
            </div>

            {/* Subtitle with Staggered Letter Reveal (Delayed) */}
            <div className="mb-8">
              <StaggeredTextReveal 
                text={t("services.page.subtitle")}
                className="text-xl text-muted-foreground"
                delay={800} // Ξεκινάει αφού ολοκληρωθεί ο τίτλος περίπου
                stagger={20} // Λίγο πιο γρήγορα για το μεγάλο κείμενο
              />
            </div>

          </div>
        </div>
      </section>

      {/* Service Categories Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Χρήση του gridRef και isGridVisible */}
          <div ref={gridRef} className="max-w-4xl mx-auto grid gap-4 sm:gap-6 md:gap-1 grid-cols-2">
            {serviceCategories.map((category, index) => (
              <AnimatedServiceCard
                key={category.key}
                route={category.route}
                title={formatTitleWithLineBreak(category.title, category.key, language)}
                description={category.description}
                image={category.image}
                index={index}
                isVisible={isGridVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 📞 Contact CTA Section - Updated with Staggered Animation */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Title with Staggered Letter Reveal (White Text) */}
            <div className="mb-6">
              <StaggeredTextReveal 
                text={t('contactCta.title')} 
                className="text-4xl md:text-5xl font-bold text-white"
                stagger={40}
              />
            </div>

            {/* Subtitle with Staggered Letter Reveal (White Text, Delayed) */}
            <div className="mb-8">
              <StaggeredTextReveal 
                text={t('contactCta.subtitle')} 
                className="text-xl text-white/90"
                delay={800} // Περιμένει να τελειώσει ο τίτλος
                stagger={20}
              />
            </div>

            {/* Button with Fade Up Animation */}
            <div 
              ref={btnRef}
              style={{
                opacity: isBtnVisible ? 1 : 0,
                transform: isBtnVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s ease-out 1.5s" // Καθυστέρηση ώστε να εμφανιστεί μετά το κείμενο
              }}
            >
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
        </div>
      </section>
    </main>
  );
};

export default Services;