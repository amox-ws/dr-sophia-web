import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getServiceById, type Language } from '@/data/servicesData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation'; // Import Animation Hook
import StaggeredTextReveal from '@/components/StaggeredTextReveal'; // Import Text Reveal
import ContactCTASection from '@/components/ContactCTASection';

// 🖼️ Imports for services
import eggSpermDonationImage from '@/assets/assisted_reproduction/Egg_Sperm_Donation.jpeg';
import eggCryopreservationImage from '@/assets/assisted_reproduction/egg_cryopreservation.jpeg';
import fertilityEvaluationImage from '@/assets/assisted_reproduction/Fertility_Evaluation.jpeg';
import iuiImage from '@/assets/assisted_reproduction/Intrauterine_Insemination.jpeg';
import ivfImage from '@/assets/assisted_reproduction/InVitroFertilization.jpeg';
import miniIvfImage from '@/assets/assisted_reproduction/mini_ivf.jpeg';
import pgtImage from '@/assets/assisted_reproduction/Preimplantation_Genetic_Testing.jpeg';
import surrogacyImage from '@/assets/assisted_reproduction/Surrogacy.jpeg';

const AssistedReproduction = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState<string | null>(null);
  
  // Animation hook for the grid
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const serviceData = getServiceById('assisted-reproduction');

  // Map images to titles
  const itemImages: Record<string, string> = {
    // Ελληνικά
    'Διερεύνηση Γονιμότητας': fertilityEvaluationImage,
    'Κρυοσυντήρηση Ωαρίων': eggCryopreservationImage,
    'Εξωσωματική Γονιμοποίηση (IVF)': ivfImage,
    'Mini IVF': miniIvfImage,
    'Ενδομήτρια Σπερματέγχυση (IUI)': iuiImage,
    'Προεμφυτευτικός Έλεγχος (PGT)': pgtImage,
    'Δωρεά Ωαρίων & Σπέρματος': eggSpermDonationImage,
    'Παρένθετη Μητρότητα': surrogacyImage,
    
    // English
    'Fertility Evaluation': fertilityEvaluationImage,
    'Egg Cryopreservation': eggCryopreservationImage,
    'In Vitro Fertilization (IVF)': ivfImage,
    'Mini IVF_en': miniIvfImage,
    'Intrauterine Insemination (IUI)': iuiImage,
    'Preimplantation Genetic Testing (PGT)': pgtImage,
    'Egg & Sperm Donation': eggSpermDonationImage,
    'Surrogacy': surrogacyImage,

    // Français
    'Bilan de Fertilité': fertilityEvaluationImage,
    'Cryopréservation des Ovocytes': eggCryopreservationImage,
    'Fécondation In Vitro (FIV)': ivfImage,
    'Mini FIV': miniIvfImage,
    'Insémination Intra-Utérine (IIU)': iuiImage,
    'Diagnostic Génétique Préimplantatoire (DPI/PGT)': pgtImage,
    "Don d'Ovocytes et de Spermatozoïdes": eggSpermDonationImage,
    'Gestation pour Autrui (GPA)': surrogacyImage,
  };

  const toggleExpand = (index: number) => {
    setExpanded(prev => (prev === String(index) ? null : String(index)));
  };

  if (!serviceData) return null;

  return (
    <main className="min-h-screen bg-background">
      <title>{serviceData.title[language as Language]} - Medical Services</title>
      <meta name="description" content={serviceData.intro?.[language as Language] || ''} />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-[hsl(210_30%_92%)] to-background">
        <div className="container mx-auto px-4 text-center">
          {/* Title with Staggered Letter Reveal */}
          <div className="inline-block">
            <StaggeredTextReveal 
              text={serviceData.title[language as Language]}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(var(--medical-darkest))]"
              stagger={40}
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background/90">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Grid Container with Ref for scrolling & Updated Margins */}
          <div ref={ref} className="max-w-4xl mx-auto grid gap-4 sm:gap-6 md:gap-1 grid-cols-1 sm:grid-cols-2">
            {serviceData.items.map((item, index) => {
              // Animation Logic
              const isLeftColumn = index % 2 === 0;
              const startPosition = isLeftColumn 
                ? "translate(-1000px, 100px)" // Left side flies from far left
                : "translate(1000px, 100px)";  // Right side flies from far right
              const delay = index * 200;

              return (
                <article 
                  key={index} 
                  className="border border-muted-foreground/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-background cursor-pointer"
                  onClick={() => toggleExpand(index)}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translate(0, 0)" : startPosition,
                    transition: `opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                  }}
                >
                  {/* Image */}
                  <div className="aspect-video bg-muted">
                    <img 
                      src={itemImages[item.title[language as Language] as keyof typeof itemImages] || '/placeholder.svg'}
                      alt={item.title[language as Language]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Title */}
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-2 sm:mb-4">
                      <h2 className="text-base sm:text-lg md:text-xl font-semibold">{item.title[language as Language]}</h2>
                      <span className="text-xl sm:text-2xl text-primary">{expanded === String(index) ? '−' : '+'}</span>
                    </div>
                    
                    {/* Expandable Description */}
                    {expanded === String(index) && (
                      <div className="mt-3 sm:mt-4 space-y-3 pt-3 sm:pt-4 border-t border-muted-foreground/20">
                        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                          {item.desc[language as Language]}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTASection />
    </main>
  );
};

export default AssistedReproduction;