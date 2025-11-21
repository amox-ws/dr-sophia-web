import { useLanguage } from '@/contexts/LanguageContext';
import { getServiceById, type Language } from '@/data/servicesData';
import assistedReproductionImage from '@/assets/assisted-reproduction.jpeg';

const AssistedReproduction = () => {
  const { language } = useLanguage();
  const serviceData = getServiceById('assisted-reproduction');

  if (!serviceData) return null;

  return (
    <main className="min-h-screen bg-background">
      <title>{serviceData.title[language as Language]} - Medical Services</title>
      <meta name="description" content={serviceData.intro?.[language as Language] || ''} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: '#4D6471' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#4D6471]/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0 border-4 border-white/20 shadow-2xl">
              <img 
                src={assistedReproductionImage} 
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

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {serviceData.items.map((item, index) => (
              <article key={index} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground">
                  {item.title[language as Language]}
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {item.desc[language as Language]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AssistedReproduction;
