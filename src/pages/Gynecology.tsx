import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getServiceById, type Language } from '@/data/servicesData';

// 🖼️ Imports εικόνων από τον φάκελο assets/gynecology
import adenomyosisImage from '@/assets/gynecology/Adenomyosis.jpeg';
import deepEndometriosisImage from '@/assets/gynecology/Deep Infiltrating Endometriosis.jpg';
import dysmenorrheaImage from '@/assets/gynecology/Dysmenorrhea.jpeg';
import endometriomaImage from '@/assets/gynecology/Endometrioma – Endometriotic Cysts.jpg';
import endometriosisImage from '@/assets/gynecology/Endometriosis.jpg';
import menopauseImage from '@/assets/gynecology/Menopause.jpeg';
import pcosImage from '@/assets/gynecology/Polycystic Ovary Syndrome.jpeg';
import fibroidsImage from '@/assets/gynecology/Uterine Fibroids.jpeg';

const Gynecology = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState<string | null>(null);

  const serviceData = getServiceById('gynecology');
  
  // Map που αντιστοιχεί τον Τίτλο Υπηρεσίας (σε οποιαδήποτε γλώσσα) με τη σωστή imported εικόνα
  const itemImages: Record<string, string> = {
    // Ελληνικά
    'Ενδομητρίωση': endometriosisImage,
    'Αδενομύωση': adenomyosisImage,
    'Εν τω βάθει Ενδομητρίωση': deepEndometriosisImage,
    'Ενδομητρίωμα – Κύστεις Ενδομητρίωσης': endometriomaImage,
    'Ινομυώματα Μήτρας': fibroidsImage,
    'Πολυκυστικές Ωοθήκες (PCOS)': pcosImage,
    'Δυσμηνόρροια': dysmenorrheaImage,
    'Εμμηνόπαυση': menopauseImage,

    // English
    'Endometriosis': endometriosisImage,
    'Adenomyosis': adenomyosisImage,
    'Deep Infiltrating Endometriosis': deepEndometriosisImage,
    'Endometrioma – Endometriotic Cysts': endometriomaImage,
    'Uterine Fibroids': fibroidsImage,
    'Polycystic Ovary Syndrome (PCOS)': pcosImage,
    'Dysmenorrhea': dysmenorrheaImage,
    'Menopause': menopauseImage,

    // Français
    'Endométriose': endometriosisImage,
    'Adénomyose': adenomyosisImage,
    'Endométriose Profonde': deepEndometriosisImage,
    "Endométriome – Kystes d'Endométriose": endometriomaImage,
    'Fibromes Utérins': fibroidsImage,
    'Syndrome des Ovaires Polykystiques (SOPK)': pcosImage,
    'Dysménorrhée': dysmenorrheaImage,
    'Ménopause': menopauseImage,
  };

  if (!serviceData) return null;

  const toggleExpand = (index: number) => {
    setExpanded(prev => (prev === String(index) ? null : String(index)));
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <title>{serviceData.title[language as Language]} - Medical Services</title>
      <meta name="description" content={serviceData.intro?.[language as Language] || ''} />
      
      {/* Hero Section - Small & Clean */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-[hsl(210_30%_92%)] to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(var(--medical-darkest))] text-center">
            {serviceData.title[language as Language]}
          </h1>
        </div>
      </section>

      {/* Sub-services Section */}
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

export default Gynecology;