import { useLanguage } from '@/contexts/LanguageContext';
import assistedReproductionImage from '@/assets/assisted-reproduction.jpeg';

const AssistedReproduction = () => {
  const { t } = useLanguage();

  const subServices = [
    { key: 'fertilityInvestigation', title: 'Διερεύνηση γονιμότητας', content: 'Περιλαμβάνει εξετάσεις για την αξιολόγηση των αναπαραγωγικών οργάνων, των ορμονών, της ποιότητας σπέρματος και της ωορρηξίας, με στόχο τον εντοπισμό παραγόντων υπογονιμότητας.' },
    { key: 'maleInfertility', title: 'Α. Ανδρικός παράγοντας υπογονιμότητας', content: 'Ανάλυση παραμέτρων σπέρματος όπως κινητικότητα, αριθμός και μορφολογία, ώστε να διαγνωστούν πιθανές δυσλειτουργίες.' },
    { key: 'femaleInfertility', title: 'Β. Γυναικείος παράγοντας υπογονιμότητας', content: 'Περιλαμβάνει αξιολόγηση ωοθηκικής λειτουργίας, ανατομικών παραγόντων, ορμονικών διαταραχών και παθήσεων που επηρεάζουν τη γονιμότητα.' },
    { key: 'eggFreezing', title: 'Κρυοσυντήρηση ωαρίων', content: 'Η διαδικασία κατά την οποία τα ωάρια καταψύχονται και διατηρούνται για μελλοντική χρήση. Προσφέρει λύση σε γυναίκες που επιθυμούν να διατηρήσουν τη γονιμότητά τους.' },
    { key: 'ivf', title: 'Εξωσωματική γονιμοποίηση (IVF)', content: 'Τα ωάρια γονιμοποιούνται στο εργαστήριο και στη συνέχεια τοποθετούνται στη μήτρα. Χρησιμοποιείται σε περιπτώσεις σοβαρής υπογονιμότητας.' },
    { key: 'miniIvf', title: 'Mini IVF', content: 'Πρωτόκολλο εξωσωματικής με μικρότερη φαρμακευτική αγωγή. Είναι πιο ήπιο και κατάλληλο για συγκεκριμένες ομάδες γυναικών.' },
    { key: 'iui', title: 'Ενδομητρική σπερματέγχυση (IUI)', content: 'Το επεξεργασμένο σπέρμα τοποθετείται απευθείας στη μήτρα την ημέρα της ωορρηξίας.' },
    { key: 'pgt', title: 'Προεμφυτευτικός έλεγχος (PGT)', content: 'Γενετικός έλεγχος εμβρύων πριν από την εμβρυομεταφορά για την αποφυγή χρωμοσωμικών ανωμαλιών.' },
    { key: 'donorEggsSperm', title: 'Δωρεά ωαρίων και σπέρματος', content: 'Επιλογή για ζευγάρια όπου υπάρχει σοβαρή ωοθηκική ή σπερματική ανεπάρκεια.' },
    { key: 'surrogacy', title: 'Παρένθετη μητρότητα', content: 'Λύση όπου τρίτη γυναίκα κυοφορεί το έμβρυο όταν η εγκυμοσύνη δεν είναι ιατρικά ασφαλής για τη βιολογική μητέρα.' }
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
                src={assistedReproductionImage} 
                alt={t('services.assistedReproduction.imageAlt')}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Title */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {t('services.assistedReproduction.title')}
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

export default AssistedReproduction;
