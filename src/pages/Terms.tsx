import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { language } = useLanguage();

  const content = {
    el: {
      title: "Όροι Χρήσης & Ιατρική Αποποίηση Ευθυνών",
      seoTitle: "Όροι Χρήσης | Δρ. Ελευθέριος Χειράκης",
      seoDescription: "Όροι χρήσης και ιατρική αποποίηση ευθυνών για τον ιστότοπο cheirakisgyn.gr του Δρ. Ελευθέριου Χειράκη.",
      disclaimer: "Το περιεχόμενο είναι ενημερωτικό και δεν αποτελεί ιατρική διάγνωση.",
      emergency: "Σε επείγον περιστατικό καλέστε το 166."
    },
    en: {
      title: "Terms of Use & Medical Disclaimer",
      seoTitle: "Terms of Use | Dr. Eleftherios Cheirakis",
      seoDescription: "Terms of use and medical disclaimer for the website cheirakisgyn.gr of Dr. Eleftherios Cheirakis.",
      disclaimer: "Content is informational only and not medical advice.",
      emergency: "For emergencies call local emergency services."
    },
    fr: {
      title: "Conditions d'Utilisation & Avertissement Médical",
      seoTitle: "Conditions d'Utilisation | Dr. Eleftherios Cheirakis",
      seoDescription: "Conditions d'utilisation et avertissement médical pour le site cheirakisgyn.gr du Dr. Eleftherios Cheirakis.",
      disclaimer: "Le contenu est informatif et ne constitue pas un avis médical.",
      emergency: "En cas d'urgence, contactez les services d'urgence."
    }
  };

  const c = content[language];

  return (
    <>
      <Helmet>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDescription} />
        <link rel="canonical" href="https://cheirakisgyn.gr/terms" />
        <meta property="og:title" content={c.seoTitle} />
        <meta property="og:description" content={c.seoDescription} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-[hsl(210_30%_92%)] to-background">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--medical-darkest))] text-center font-playfair">
              {c.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-muted/30 p-8 rounded-xl space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">{c.disclaimer}</p>
              <p className="text-lg font-semibold text-[hsl(var(--medical-medium-dark))]">{c.emergency}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;
