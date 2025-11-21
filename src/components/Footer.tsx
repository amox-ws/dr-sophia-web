import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[hsl(var(--medical-darkest))] to-[hsl(var(--medical-dark))] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Dr. Gynecology</h3>
            <p className="text-white/80 text-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("nav.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/gynecology" className="text-white/80 hover:text-white transition-colors text-sm">
                  {t("services.gynecology.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/assisted-reproduction"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {t("services.assistedReproduction.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/endoscopic-surgery"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {t("services.endoscopicSurgery.title")}
                </Link>
              </li>
              <li>
                <Link to="/services/pregnancy" className="text-white/80 hover:text-white transition-colors text-sm">
                  {t("services.pregnancy.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("contact.info.title")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">{t("contact.address.value")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+302104117958" className="text-white/80 hover:text-white transition-colors text-sm">
                  +30 210 677 1540
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@gynecology.gr"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  info@gynecology.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Dr. Gynecology. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
