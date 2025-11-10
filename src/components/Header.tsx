import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Menu, X } from 'lucide-react';

const languageFlags: Record<Language, string> = {
  el: '🇬🇷',
  en: '🇬🇧',
  fr: '🇫🇷',
};

const languageNames: Record<Language, string> = {
  el: 'Ελληνικά',
  en: 'English',
  fr: 'Français',
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const servicesLinks = [
    { to: '/services', label: t('nav.allServices') },
    { to: '/services/gynecology', label: t('services.gynecology.title') },
    { to: '/services/assisted-reproduction', label: t('services.assistedReproduction.title') },
    { to: '/services/endoscopic-surgery', label: t('services.endoscopicSurgery.title') },
    { to: '/services/pregnancy', label: t('services.pregnancy.title') },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/60 backdrop-blur-md shadow-sm"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-semibold text-primary">
              Dr. Cheirakis
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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

            {/* Services Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`text-sm font-medium nav-link-animated bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:bg-transparent ${
                      location.pathname.startsWith('/services')
                        ? 'text-primary active'
                        : 'text-foreground'
                    }`}
                  >
                    {t('nav.services')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2 bg-background border border-border rounded-md shadow-lg">
                      {servicesLinks.map((link) => (
                        <li key={link.to}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.to}
                              className="block select-none rounded-sm px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground"
                            >
                              {link.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                  <span>{languageFlags[language]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background">
                {(Object.keys(languageFlags) as Language[]).map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{languageFlags[lang]}</span>
                    {languageNames[lang]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  {languageFlags[language]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background">
                {(Object.keys(languageFlags) as Language[]).map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{languageFlags[lang]}</span>
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
          <div className="md:hidden mt-4 py-4 space-y-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
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
            
            <div className="px-4 pt-2 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2">{t('nav.services')}</p>
              {servicesLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-2 py-2 text-sm transition-colors ${
                    location.pathname === link.to
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
