import { useLanguage } from '@/contexts/LanguageContext';
import pregnancyImage from '@/assets/pregnancy.jpeg';

const Pregnancy = () => {
  const { t } = useLanguage();

  const subServices = [
    { key: 'prenatalScreening', title: 'Προγεννητικός Έλεγχος', content: 'Περιλαμβάνει εξετάσεις που αξιολογούν την υγεία του εμβρύου και εντοπίζουν πιθανές ανωμαλίες.' },
    { key: 'nipt', title: 'Μη Επεμβατικός Προγεννητικός Έλεγχος (NIPT)', content: 'Ανάλυση εμβρυικού DNA από το αίμα της μητέρας. Προσφέρει υψηλή ακρίβεια για ανευπλοειδίες χωρίς κίνδυνο για την εγκυμοσύνη.' },
    { key: 'ultrasound3d4d', title: 'Υπερηχογράφημα 3D-4D', content: 'Τρισδιάστατη και τετραδιάστατη απεικόνιση του εμβρύου, προσφέροντας αναλυτική εικόνα της μορφολογίας και των κινήσεων του.' },
    { key: 'delivery', title: 'Τοκετός', content: 'Παρακολούθηση και υποστήριξη της γυναίκας στη διαδικασία του φυσιολογικού τοκετού ή της καισαρικής, ανάλογα με τις ιατρικές ανάγκες.' },
    { key: 'vbac', title: 'Φυσιολογικός τοκετός μετά από καισαρική (VBAC)', content: 'Προσεκτικά επιλεγμένες γυναίκες μπορούν να επιχειρήσουν φυσιολογικό τοκετό μετά από προηγούμενη καισαρική.' },
    { key: 'twinPregnancy', title: 'Δίδυμη κύηση', content: 'Εξειδικευμένη παρακολούθηση για πολύδυμες κυήσεις, με έμφαση στην πρόληψη και αντιμετώπιση επιπλοκών.' }
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
                src={pregnancyImage} 
                alt={t('services.pregnancy.imageAlt')}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Title */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {t('services.pregnancy.title')}
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

export default Pregnancy;
