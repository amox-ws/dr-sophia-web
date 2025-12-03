import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsentBanner = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const content = {
    el: {
      title: "Χρησιμοποιούμε Cookies",
      description: "Χρησιμοποιούμε cookies για τη βελτίωση της εμπειρίας σας. Αυτά περιλαμβάνουν λειτουργικά cookies και cookies τρίτων (Google Maps).",
      acceptAll: "Αποδοχή Όλων",
      rejectNonEssential: "Απόρριψη Μη Απαραίτητων",
      managePreferences: "Διαχείριση Προτιμήσεων",
      savePreferences: "Αποθήκευση",
      functional: "Λειτουργικά Cookies",
      functionalDesc: "Απαραίτητα για τη λειτουργία του ιστότοπου",
      thirdParty: "Cookies Τρίτων (Google Maps)",
      thirdPartyDesc: "Για την εμφάνιση χαρτών",
      learnMore: "Μάθετε περισσότερα"
    },
    en: {
      title: "We Use Cookies",
      description: "We use cookies to improve your experience. These include functional cookies and third-party cookies (Google Maps).",
      acceptAll: "Accept All",
      rejectNonEssential: "Reject Non-Essential",
      managePreferences: "Manage Preferences",
      savePreferences: "Save",
      functional: "Functional Cookies",
      functionalDesc: "Required for site functionality",
      thirdParty: "Third-Party Cookies (Google Maps)",
      thirdPartyDesc: "For displaying maps",
      learnMore: "Learn more"
    },
    fr: {
      title: "Nous Utilisons des Cookies",
      description: "Nous utilisons des cookies pour améliorer votre expérience. Ceux-ci incluent des cookies fonctionnels et des cookies tiers (Google Maps).",
      acceptAll: "Tout Accepter",
      rejectNonEssential: "Rejeter Non-Essentiels",
      managePreferences: "Gérer les Préférences",
      savePreferences: "Enregistrer",
      functional: "Cookies Fonctionnels",
      functionalDesc: "Requis pour le fonctionnement du site",
      thirdParty: "Cookies Tiers (Google Maps)",
      thirdPartyDesc: "Pour afficher les cartes",
      learnMore: "En savoir plus"
    }
  };

  const c = content[language];

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ functional: true, thirdParty: true }));
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ functional: true, thirdParty: false }));
    setIsVisible(false);
  };

  const handleSavePreferences = (thirdParty: boolean) => {
    localStorage.setItem("cookie-consent", JSON.stringify({ functional: true, thirdParty }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
      <div className="container mx-auto max-w-4xl">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">
                {c.description}{" "}
                <Link to="/cookies-policy" className="text-[hsl(var(--medical-medium))] hover:underline">
                  {c.learnMore}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreferences(true)}
              >
                {c.managePreferences}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectNonEssential}
              >
                {c.rejectNonEssential}
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="bg-gradient-to-r from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] text-white"
              >
                {c.acceptAll}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{c.managePreferences}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{c.functional}</p>
                  <p className="text-sm text-muted-foreground">{c.functionalDesc}</p>
                </div>
                <input type="checkbox" checked disabled className="h-5 w-5 accent-[hsl(var(--medical-medium))]" />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{c.thirdParty}</p>
                  <p className="text-sm text-muted-foreground">{c.thirdPartyDesc}</p>
                </div>
                <input
                  type="checkbox"
                  id="thirdParty"
                  defaultChecked
                  className="h-5 w-5 accent-[hsl(var(--medical-medium))]"
                />
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm" onClick={() => setShowPreferences(false)}>
                ←
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  const checkbox = document.getElementById("thirdParty") as HTMLInputElement;
                  handleSavePreferences(checkbox?.checked ?? false);
                }}
                className="bg-gradient-to-r from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] text-white"
              >
                {c.savePreferences}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;
