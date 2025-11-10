import { useLanguage } from '@/contexts/LanguageContext';
import endoscopicSurgeryImage from '@/assets/endoscopic_surgery.jpeg';

const EndoscopicSurgery = () => {
  const { t } = useLanguage();

  const subServices = [
    { key: 'hysteroscopy', title: 'Υστεροσκόπηση', content: 'Ελάχιστα επεμβατική διαδικασία που επιτρέπει την άμεση ενδοσκοπική εξέταση της ενδομητρικής κοιλότητας για διάγνωση και θεραπεία πολυπόδων, συμφύσεων και άλλων ανωμαλιών.' },
    { key: 'laparoscopy', title: 'Λαπαροσκόπηση', content: 'Χειρουργική τεχνική με μικρές τομές, μέσω κάμερας, για τη διάγνωση ή θεραπεία παθήσεων όπως ενδομητρίωση, κύστεις ωοθηκών, ινομυώματα και προβλήματα σαλπίγγων.' },
    { key: 'roboticSurgery', title: 'Ρομποτική Χειρουργική', content: 'Προηγμένη λαπαροσκοπική μέθοδος που επιτρέπει μεγαλύτερη ακρίβεια, λιγότερη απώλεια αίματος και ταχύτερη ανάρρωση.' }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: '#4D6471' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#4D6471]/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Circular Image */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0 border-4 border-white/20 shadow-2xl">
              <img 
                src={endoscopicSurgeryImage} 
                alt={t('services.endoscopicSurgery.imageAlt')}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Title */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {t('services.endoscopicSurgery.title')}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {subServices.map((service) => (
              <article key={service.key} className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {service.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default EndoscopicSurgery;
