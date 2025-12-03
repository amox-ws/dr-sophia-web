import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface MapPlaceholderProps {
  onAcceptCookies: () => void;
  className?: string;
}

const MapPlaceholder = ({ onAcceptCookies, className = "" }: MapPlaceholderProps) => {
  const { language } = useLanguage();

  const content = {
    el: {
      message: "Για να εμφανιστεί ο χάρτης, παρακαλούμε αποδεχτείτε τα cookies τρίτων.",
      button: "Αποδοχή Cookies"
    },
    en: {
      message: "To display the map, please accept third-party cookies.",
      button: "Accept Cookies"
    },
    fr: {
      message: "Pour afficher la carte, veuillez accepter les cookies tiers.",
      button: "Accepter les Cookies"
    }
  };

  const c = content[language as keyof typeof content] || content.el;

  return (
    <div className={`flex flex-col items-center justify-center bg-muted/50 border border-border rounded-lg ${className}`}>
      <div className="p-3 rounded-full bg-muted mb-4">
        <MapPin className="h-8 w-8 text-muted-foreground" />
      </div>
      <p className="text-muted-foreground text-center mb-4 px-4 max-w-md">
        {c.message}
      </p>
      <Button
        variant="outline"
        size="sm"
        onClick={onAcceptCookies}
        className="hover:bg-[hsl(var(--medical-medium))] hover:text-white hover:border-[hsl(var(--medical-medium))] transition-colors"
      >
        {c.button}
      </Button>
    </div>
  );
};

export default MapPlaceholder;
