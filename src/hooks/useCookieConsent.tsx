import { useState, useEffect, useCallback } from "react";

interface CookieConsent {
  functional: boolean;
  thirdParty: boolean;
}

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  const checkConsent = useCallback(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored) {
      try {
        setConsent(JSON.parse(stored));
      } catch {
        setConsent(null);
      }
    } else {
      setConsent(null);
    }
  }, []);

  useEffect(() => {
    checkConsent();

    // Listen for storage changes (when consent is updated)
    const handleStorageChange = () => {
      checkConsent();
    };

    window.addEventListener("storage", handleStorageChange);
    
    // Custom event for same-tab updates
    window.addEventListener("cookie-consent-updated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cookie-consent-updated", handleStorageChange);
    };
  }, [checkConsent]);

  const hasThirdPartyConsent = consent?.thirdParty ?? false;

  const openCookiePreferences = () => {
    // Remove the consent to show the banner again
    localStorage.removeItem("cookie-consent");
    setConsent(null);
    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  return {
    consent,
    hasThirdPartyConsent,
    openCookiePreferences,
    refreshConsent: checkConsent,
  };
};
