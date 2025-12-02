import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getServiceById, type Language } from '@/data/servicesData';
import pregnancyImage from '@/assets/pregnancy.jpeg';

// 🖼️ Imports για τις επιμέρους υπηρεσίες (βασισμένα στα paths των assets σας)
import prenatalScreeningImage from '@/assets/pregnancy/prenatal_screening.jpg';
import niptImage from '@/assets/pregnancy/nipt.jpg';
import ultrasoundImage from '@/assets/pregnancy/ultrasound.jpg';
import childbirthImage from '@/assets/pregnancy/childbirth.jpg';
import nutritionImage from '@/assets/pregnancy/nutrition.jpg';
import vbacImage from '@/assets/pregnancy/vbac.jpg';
import twinPregnancyImage from '@/assets/pregnancy/twin_pregnancy.jpeg';

const Pregnancy = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState<string | null>(null);
  const serviceData = getServiceById('pregnancy');

  // Map που αντιστοιχεί τον Τίτλο Υπηρεσίας (σε οποιαδήποτε γλώσσα) με τη σωστή imported εικόνα
  const itemImages: Record<string, string> = {
    // Ελληνικά
    'Προγεννητικός Έλεγχος': prenatalScreeningImage,
    'NIPT': niptImage,
    'Υπερηχογράφημα 3D–4D': ultrasoundImage,
    'Τοκετός': childbirthImage,
    'Διατροφή': nutritionImage,
    'VBAC – Κολπικός Τοκετός μετά από Καισαρική': vbacImage,
    'Δίδυμη Κύηση': twinPregnancyImage,

    // English
    'Prenatal Screening': prenatalScreeningImage,
    '3D–4D Ultrasound': ultrasoundImage,
    'Delivery': childbirthImage,
    'Nutrition': nutritionImage,
    'VBAC – Vaginal Birth After Cesarean': vbacImage,
    'Twin Pregnancy': twinPregnancyImage,

    // Français
    'Dépistage Prénatal': prenatalScreeningImage,
    'Échographie 3D–4D': ultrasoundImage,
    'Accouchement': childbirthImage,
    'AVAC – Accouchement Vaginal Après Césarienne': vbacImage,
    'Grossesse Gémellaire': twinPregnancyImage,
  };

  const toggleExpand = (index: number) => {
    setExpanded(prev => (prev === String(index) ? null : String(index)));
  };

  if (!serviceData) return null;

  return (
    <main className="min-h-screen bg-background">
      <title>{serviceData.title[language as Language]} - Medical Services</title>
      <meta name="description" content={serviceData.title[language as Language]} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: '#4D6471' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#4D6471]/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0 border-4 border-white/20 shadow-2xl">
              <img 
                src={pregnancyImage} 
                alt={`${serviceData.title[language as Language]} services`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white whitespace-pre-line">
                {serviceData.title[language as Language]}
              </h1>
              {serviceData.intro && (
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mt-4">
                  {serviceData.intro[language as Language]}
                </p>
              )}
            </div>
          </div>
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
                {/* Image Placeholder - Τώρα χρησιμοποιούμε τις imported εικόνες */}
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
        </div>
      </section>
    </main>
  );
};
nutritionImage
export default Pregnancy;