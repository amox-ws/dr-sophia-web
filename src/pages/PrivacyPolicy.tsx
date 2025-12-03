import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const content = {
    el: {
      title: "Πολιτική Απορρήτου",
      seoTitle: "Πολιτική Απορρήτου | Δρ. Ελευθέριος Χειράκης",
      seoDescription: "Πολιτική απορρήτου και προστασία δεδομένων για τον ιστότοπο cheirakisgyn.gr του Δρ. Ελευθέριου Χειράκη.",
      lastUpdated: "Τελευταία ενημέρωση: 2025",
      intro: "Η παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο ο Δρ. Ελευθέριος Χειράκης συλλέγει, επεξεργάζεται και προστατεύει τα προσωπικά δεδομένα που παρέχετε μέσω της ιστοσελίδας cheirakisgyn.gr.",
      sections: [
        {
          title: "1. Υπεύθυνος Επεξεργασίας",
          content: [
            "Δρ. Ελευθέριος Χειράκης – Μαιευτήρας-Γυναικολόγος",
            "Διεύθυνση: Leof. Vasileos Georgiou B 4, Pireas 185 34",
            "Τηλέφωνο: +30 210 677 1540",
            "Email: info@cheirakisgyn.gr"
          ]
        },
        {
          title: "2. Ποια δεδομένα συλλέγουμε",
          intro: "Μέσω της φόρμας επικοινωνίας συλλέγουμε:",
          items: ["Ονοματεπώνυμο", "Email", "Τηλέφωνο", "Περιεχόμενο μηνύματος"]
        },
        {
          title: "3. Σκοπός επεξεργασίας",
          intro: "Τα δεδομένα σας χρησιμοποιούνται αποκλειστικά για:",
          items: ["απάντηση στο αίτημά σας", "προγραμματισμό ραντεβού", "παροχή πληροφοριών για τις ιατρικές υπηρεσίες"]
        },
        {
          title: "4. Αποδέκτες – Formspree (Third-Party Processor)",
          content: ["Χρησιμοποιούμε την υπηρεσία Formspree Inc.", "Τα δεδομένα μεταφέρονται στους servers της αποκλειστικά για την παράδοση του email."]
        },
        {
          title: "5. Χρόνος διατήρησης",
          intro: "Τα δεδομένα τηρούνται:",
          items: ["για όσο διαρκεί η επικοινωνία", "σύμφωνα με την ιατρική νομοθεσία εάν γίνετε ασθενής"]
        },
        {
          title: "6. Τα δικαιώματά σας (GDPR)",
          intro: "Μπορείτε να ζητήσετε:",
          items: ["πρόσβαση", "διόρθωση", "διαγραφή"],
          footer: "Αιτήματα στο: info@cheirakisgyn.gr"
        },
        {
          title: "7. Ασφάλεια δεδομένων",
          content: ["Λαμβάνουμε όλα τα απαιτούμενα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων σας."]
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      seoTitle: "Privacy Policy | Dr. Eleftherios Cheirakis",
      seoDescription: "Privacy policy and data protection for the website cheirakisgyn.gr of Dr. Eleftherios Cheirakis.",
      lastUpdated: "Last updated: 2025",
      intro: "This Privacy Policy explains how Dr. Eleftherios Cheirakis collects and processes personal data through the website cheirakisgyn.gr.",
      sections: [
        {
          title: "1. Data Controller",
          content: [
            "Dr. Eleftherios Cheirakis – Obstetrician-Gynecologist",
            "Address: Leof. Vasileos Georgiou B 4, Pireas 185 34",
            "Phone: +30 210 677 1540",
            "Email: info@cheirakisgyn.gr"
          ]
        },
        {
          title: "2. Data we collect",
          items: ["Full Name", "Email", "Phone Number", "Message content"]
        },
        {
          title: "3. Purpose of processing",
          intro: "Used exclusively to:",
          items: ["respond to your inquiry", "schedule appointments", "provide medical service information"]
        },
        {
          title: "4. Third-Party Processor – Formspree",
          content: ["Form submissions are transmitted and processed via Formspree Inc."]
        },
        {
          title: "5. Data retention",
          intro: "Stored:",
          items: ["as long as necessary for communication", "per medical law if you become a patient"]
        },
        {
          title: "6. GDPR rights",
          intro: "You may request:",
          items: ["access", "correction", "erasure"],
          footer: "Requests: info@cheirakisgyn.gr"
        },
        {
          title: "7. Security",
          content: ["We apply strict technical and organizational security measures."]
        }
      ]
    },
    fr: {
      title: "Politique de Confidentialité",
      seoTitle: "Politique de Confidentialité | Dr. Eleftherios Cheirakis",
      seoDescription: "Politique de confidentialité et protection des données pour le site cheirakisgyn.gr du Dr. Eleftherios Cheirakis.",
      lastUpdated: "Dernière mise à jour : 2025",
      intro: "Cette politique explique comment le Dr. Eleftherios Cheirakis traite vos données via cheirakisgyn.gr.",
      sections: [
        {
          title: "1. Responsable du traitement",
          content: [
            "Dr. Eleftherios Cheirakis – Obstétricien-Gynécologue",
            "Adresse : Leof. Vasileos Georgiou B 4, Pireas 185 34",
            "Téléphone : +30 210 677 1540",
            "Email : info@cheirakisgyn.gr"
          ]
        },
        {
          title: "2. Données collectées",
          items: ["Nom complet", "Email", "Téléphone", "Message"]
        },
        {
          title: "3. Finalité du traitement",
          intro: "Utilisation pour:",
          items: ["répondre à votre demande", "organiser un rendez-vous", "fournir des informations médicales"]
        },
        {
          title: "4. Service tiers – Formspree",
          content: ["Les données du formulaire sont transmises via Formspree Inc."]
        },
        {
          title: "5. Durée de conservation",
          intro: "Conservées:",
          items: ["le temps nécessaire à la communication", "selon la législation médicale si vous devenez patient"]
        },
        {
          title: "6. Droits GDPR",
          intro: "Vous pouvez demander:",
          items: ["accès", "rectification", "suppression"],
          footer: "Demandes: info@cheirakisgyn.gr"
        },
        {
          title: "7. Sécurité",
          content: ["Mesures de sécurité techniques et organisationnelles strictes appliquées."]
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
        <link rel="canonical" href="https://cheirakisgyn.gr/privacy-policy" />
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
            <p className="text-sm text-muted-foreground mb-4">{c.lastUpdated}</p>
            <p className="text-muted-foreground mb-8 leading-relaxed">{c.intro}</p>

            <div className="space-y-8">
              {c.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                  {section.content && (
                    <div className="space-y-1">
                      {section.content.map((line, i) => (
                        <p key={i} className="text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  )}
                  {section.intro && <p className="text-muted-foreground mb-2">{section.intro}</p>}
                  {section.items && (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.footer && <p className="text-muted-foreground mt-3">{section.footer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
