import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getServiceById, type Language } from '@/data/servicesData';

// 🖼️ Imports για τις επιμέρους υπηρεσίες
import eggSpermDonationImage from '@/assets/assisted_reproduction/Egg & Sperm Donation.jpeg';
import eggCryopreservationImage from '@/assets/assisted_reproduction/egg cryopreservation.jpeg';
import fertilityEvaluationImage from '@/assets/assisted_reproduction/Fertility Evaluation.jpeg';
import iuiImage from '@/assets/assisted_reproduction/Intrauterine Insemination.jpeg';
import ivfImage from '@/assets/assisted_reproduction/InVitroFertilization.jpeg';
import miniIvfImage from '@/assets/assisted_reproduction/mini-ivf.jpeg';
import pgtImage from '@/assets/assisted_reproduction/Preimplantation Genetic Testing.jpeg';
import surrogacyImage from '@/assets/assisted_reproduction/Surrogacy.jpeg';

const AssistedReproduction = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState<string | null>(null);
  const serviceData = getServiceById('assisted-reproduction');

  // Map που αντιστοιχεί τον Τίτλο Υπηρεσίας (σε οποιαδήποτε γλώσσα) με τη σωστή imported εικόνα
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
      
      {/* Hero Section - Small & Clean */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            {serviceData.title[language as Language]}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background/90">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2">
            {serviceData.items.map((item, index) => (
              <article 
                key={index} 
                className="border border-muted-foreground/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-background cursor-pointer"
                onClick={() => toggleExpand(index)}
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
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-[hsl(var(--medical-medium))] text-white rounded-xl font-semibold hover:bg-[hsl(var(--medical-medium-dark))] transition"
            >
              {language === 'el' ? 'Κλείστε Ραντεβού Τώρα' : language === 'en' ? 'Book Appointment Now' : 'Prendre Rendez-vous'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AssistedReproduction;