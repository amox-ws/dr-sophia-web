import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getServiceById, type Language } from '@/data/servicesData';
import gynecologyImage from '@/assets/gynecology.jpeg';

const Gynecology = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState<string | null>(null);

  const serviceData = getServiceById('gynecology');
  
  if (!serviceData) return null;

  const toggleExpand = (index: number) => {
    setExpanded(prev => (prev === String(index) ? null : String(index)));
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <title>{serviceData.title[language as Language]} - Medical Services</title>
      <meta name="description" content={serviceData.intro?.[language as Language] || ''} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-[#4D6471]/90 to-[#1E2A30]/90 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0">
              <img 
                src={gynecologyImage} 
                alt={`${serviceData.title[language as Language]} services`}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {serviceData.title[language as Language]}
              </h1>
              {serviceData.intro && (
                <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                  {serviceData.intro[language as Language]}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services Section */}
      <section className="py-20 bg-background/90">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {serviceData.items.map((item, index) => (
              <article 
                key={index} 
                className="border border-muted-foreground/20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow bg-background"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer" 
                  onClick={() => toggleExpand(index)}
                >
                  <h2 className="text-2xl font-semibold">{item.title[language as Language]}</h2>
                  <span className="text-2xl">{expanded === String(index) ? '-' : '+'}</span>
                </div>
                {expanded === String(index) && (
                  <div className="mt-4 space-y-3">
                    <p className="text-foreground/80 leading-relaxed">
                      {item.desc[language as Language]}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition"
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
