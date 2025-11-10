import { useLanguage } from '@/contexts/LanguageContext';
import pregnancyImage from '@/assets/pregnancy.jpeg';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowUpRight } from 'lucide-react';

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
          <div className="max-w-4xl mx-auto space-y-8">
            {subServices.map((service) => (
              <article key={service.key}>
                <Card className="overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Top Section - Text Content */}
                  <CardHeader className="relative p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl font-heading font-medium mb-4 text-foreground">
                          {service.title}
                        </CardTitle>
                        <p className="text-base text-foreground/80 leading-relaxed">
                          {service.content}
                        </p>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    </div>
                  </CardHeader>
                  
                  {/* Divider */}
                  <Separator />
                  
                  {/* Bottom Section - Image Placeholder */}
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Εικόνα</span>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pregnancy;
