import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import logoImage from '@/assets/logo.png';

const languageAbbreviations: Record<Language, string> = {
  el: 'ΕΛ',
  en: 'EN',
  fr: 'FR',
};

const languageNames: Record<Language, string> = {
  el: 'Ελληνικά',
  en: 'English',
  fr: 'Français',
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileCategory(null);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  // Map service IDs to their routes
  const serviceRoutes: Record<string, string> = {
    'gynecology': '/services/gynecology',
    'assisted-reproduction': '/services/assisted-reproduction',
    'endoscopic-surgery': '/services/endoscopic-surgery',
    'pregnancy': '/services/pregnancy',
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/60 backdrop-blur-md shadow-sm"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Main Navigation (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors nav-link-animated ${
                  location.pathname === link.to
                    ? 'text-primary active'
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services with Multi-Level Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => {
                setIsServicesOpen(false);
                setHoveredCategory(null);
              }}
            >
              <Link
                to="/services"
                className={`text-sm font-medium transition-colors nav-link-animated flex items-center gap-1 ${
                  location.pathname.startsWith('/services')
                    ? 'text-primary active'
                    : 'text-foreground'
                }`}
              >
                {t('nav.services')}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Level 1 Dropdown - Service Categories */}
              {isServicesOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="bg-background border border-border rounded-md shadow-lg min-w-[220px]">
                    {servicesData.map((service) => (
                      <div
                        key={service.id}
                        className="relative"
                        onMouseEnter={() => setHoveredCategory(service.id)}
                      >
                        <Link
                          to={serviceRoutes[service.id]}
                          className="flex items-center justify-between px-4 py-3 text-sm text-foreground hover:bg-accent/10 transition-colors"
                        >
                          <span>{service.title[language]}</span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>

                        {/* Level 2 Dropdown - Subcategories (appears to the right) */}
                        {hoveredCategory === service.id && (
                          <div className="absolute left-full top-0 ml-0">
                            <div className="bg-background border border-border rounded-md shadow-lg min-w-[280px] max-h-[400px] overflow-y-auto">
                              {service.items.map((item, index) => (
                                <Link
                                  key={index}
                                  to={serviceRoutes[service.id]}
                                  className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 transition-colors border-b border-border/30 last:border-b-0"
                                >
                                  {item.title[language]}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center - Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img 
              src={logoImage} 
              alt="Cheirakis Gynecology" 
              className="h-20 w-auto mix-blend-multiply"
            />
          </Link>

          {/* Right Side - Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="font-medium">{languageAbbreviations[language]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background">
                {(Object.keys(languageAbbreviations) as Language[]).map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="cursor-pointer"
                  >
                    <span className="font-medium mr-2">{languageAbbreviations[lang]}</span>
                    {languageNames[lang]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile - Language Switcher + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <span className="font-medium">{languageAbbreviations[language]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background">
                {(Object.keys(languageAbbreviations) as Language[]).map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="cursor-pointer"
                  >
                    <span className="font-medium mr-2">{languageAbbreviations[lang]}</span>
                    {languageNames[lang]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-2 bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors nav-link-animated ${
                  location.pathname === link.to
                    ? 'text-primary active'
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Services Accordion for Mobile */}
            <div className="border-t border-border pt-2 mt-2">
              <button
                onClick={() => setExpandedMobileCategory(expandedMobileCategory === 'services' ? null : 'services')}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/services')
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
              >
                <span>{t('nav.services')}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedMobileCategory === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {expandedMobileCategory === 'services' && (
                <div className="pl-4 mt-1 space-y-1">
                  {servicesData.map((service) => (
                    <div key={service.id}>
                      <button
                        onClick={() => setExpandedMobileCategory(
                          expandedMobileCategory === service.id ? 'services' : service.id
                        )}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        <span>{service.title[language]}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedMobileCategory === service.id ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Subcategories */}
                      {expandedMobileCategory === service.id && (
                        <div className="pl-4 space-y-1 bg-accent/5 rounded-md py-2 mx-2">
                          {service.items.map((item, index) => (
                            <Link
                              key={index}
                              to={serviceRoutes[service.id]}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.title[language]}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
