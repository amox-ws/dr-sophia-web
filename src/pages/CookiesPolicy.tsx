import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const CookiesPolicy = () => {
  const { language } = useLanguage();

  const content = {
    el: {
      title: "Πολιτική Cookies",
      seoTitle: "Πολιτική Cookies | Δρ. Ελευθέριος Χειράκης",
      seoDescription: "Πολιτική cookies για τον ιστότοπο cheirakisgyn.gr του Δρ. Ελευθέριου Χειράκη.",
      sections: [
        {
          title: "1. Τι είναι τα cookies",
          content: "Μικρά αρχεία κειμένου αποθηκευμένα στον browser."
        },
        {
          title: "2. Cookies που χρησιμοποιούμε",
          subsections: [
            {
              subtitle: "Λειτουργικά Cookies",
              items: [
                { label: "Όνομα", value: "sidebar:state" },
                { label: "Περιγραφή", value: "θυμάται αν το sidebar είναι ανοιχτό/κλειστό" },
                { label: "Διάρκεια", value: "7 ημέρες" }
              ]
            },
            {
              subtitle: "Cookies τρίτων – Google Maps",
              content: "Οι ενσωματωμένοι χάρτες Google αποθηκεύουν cookies για λειτουργία και προτιμήσεις."
            }
          ]
        },
        {
          title: "3. Διαχείριση cookies",
          content: "Μπορείτε να απενεργοποιήσετε cookies από τον browser."
        }
      ]
    },
    en: {
      title: "Cookies Policy",
      seoTitle: "Cookies Policy | Dr. Eleftherios Cheirakis",
      seoDescription: "Cookies policy for the website cheirakisgyn.gr of Dr. Eleftherios Cheirakis.",
      sections: [
        {
          title: "1. What are cookies?",
          content: "Small text files stored in your browser."
        },
        {
          title: "2. Cookies we use",
          subsections: [
            {
              subtitle: "Functional Cookie",
              items: [
                { label: "Name", value: "sidebar:state" },
                { label: "Purpose", value: "remembers sidebar open/closed state" },
                { label: "Duration", value: "7 days" }
              ]
            },
            {
              subtitle: "Third-Party: Google Maps",
              content: "Embedded Google Maps may store cookies for functionality and preferences."
            }
          ]
        },
        {
          title: "3. Cookie Management",
          content: "Cookies may be disabled through browser settings."
        }
      ]
    },
    fr: {
      title: "Politique de Cookies",
      seoTitle: "Politique de Cookies | Dr. Eleftherios Cheirakis",
      seoDescription: "Politique de cookies pour le site cheirakisgyn.gr du Dr. Eleftherios Cheirakis.",
      sections: [
        {
          title: "1. Que sont les cookies ?",
          content: "Petits fichiers texte stockés dans votre navigateur."
        },
        {
          title: "2. Cookies utilisés",
          subsections: [
            {
              subtitle: "Fonctionnel",
              items: [
                { label: "Nom", value: "sidebar:state" },
                { label: "Objectif", value: "mémorise l'état du sidebar" },
                { label: "Durée", value: "7 jours" }
              ]
            },
            {
              subtitle: "Cookies tiers: Google Maps",
              content: "Les cartes Google intégrées peuvent stocker des cookies."
            }
          ]
        },
        {
          title: "3. Gestion",
          content: "Les cookies peuvent être désactivés dans le navigateur."
        }
      ]
    }
  };

  const c = content[language];

  return (
    <>
      <Helmet>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDescription} />
        <link rel="canonical" href="https://cheirakisgyn.gr/cookies-policy" />
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
            <div className="space-y-8">
              {c.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                  {section.content && <p className="text-muted-foreground">{section.content}</p>}
                  {section.subsections && (
                    <div className="space-y-4 mt-4">
                      {section.subsections.map((sub, subIdx) => (
                        <div key={subIdx} className="bg-muted/30 p-4 rounded-lg">
                          <h3 className="font-medium text-foreground mb-2">{sub.subtitle}</h3>
                          {sub.items && (
                            <ul className="space-y-1 text-muted-foreground">
                              {sub.items.map((item, i) => (
                                <li key={i}><strong>{item.label}:</strong> {item.value}</li>
                              ))}
                            </ul>
                          )}
                          {sub.content && <p className="text-muted-foreground">{sub.content}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiesPolicy;
