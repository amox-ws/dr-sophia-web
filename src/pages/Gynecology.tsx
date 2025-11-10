import { useLanguage } from '@/contexts/LanguageContext';
import gynecologyImage from '@/assets/gynecology.jpeg';

const Gynecology = () => {
  const { t } = useLanguage();

  const subServices = [
    { key: 'endometriosis', title: 'Ενδομητρίωση', content: 'Η ενδομητρίωση είναι μια χρόνια γυναικολογική πάθηση κατά την οποία κύτταρα όμοια με αυτά του ενδομητρίου αναπτύσσονται εκτός της μήτρας, συνήθως στις ωοθήκες, τις σάλπιγγες ή την πύελο. Προκαλεί πόνο, δυσμηνόρροια, πόνο κατά τη σεξουαλική επαφή και σε ορισμένες περιπτώσεις υπογονιμότητα.' },
    { key: 'adenomyosis', title: 'Αδενομύωση', content: 'Η αδενομύωση εμφανίζεται όταν κύτταρα του ενδομητρίου εισχωρούν στο μυϊκό τοίχωμα της μήτρας. Προκαλεί έντονη εμμηνορρυσία, κράμπες και αίσθηση βάρους στη μήτρα.' },
    { key: 'deepEndometriosis', title: 'Εν τω βάθει ενδομητρίωση', content: 'Πρόκειται για σοβαρή μορφή ενδομητρίωσης, όπου οι εστίες διεισδύουν βαθιά στους ιστούς της πυέλου, επηρεάζοντας συχνά το έντερο, την ουροδόχο κύστη ή τα ιερομητρικά συνδέσμια. Συχνά συνδέεται με έντονο πόνο και δυσκολία στη σύλληψη.' },
    { key: 'endometrioma', title: 'Ενδομητρίωμα – Κύστες Ενδομητρίωσης', content: 'Οι κύστες ενδομητρίωσης (ενδομητριώματα) σχηματίζονται στις ωοθήκες και περιέχουν παχύρρευστο, σκούρο υγρό. Μπορεί να προκαλούν πόνο, δυσφορία και επηρεάζουν τη γονιμότητα.' },
    { key: 'uterineFibroids', title: 'Ινομυώματα μήτρας', content: 'Καλοήθεις όγκοι του μυϊκού τοιχώματος της μήτρας. Ανάλογα με το μέγεθος και τη θέση τους, μπορεί να προκαλέσουν βαριά περίοδο, πόνο ή πίεση, και σε ορισμένες περιπτώσεις προβλήματα υπογονιμότητας.' },
    { key: 'polycysticOvaries', title: 'Πολυκυστικές ωοθήκες', content: 'Χαρακτηρίζονται από πολλαπλές μικρές κύστες στις ωοθήκες και συχνά σχετίζονται με ορμονικές διαταραχές. Μπορεί να προκαλέσουν ακανόνιστο κύκλο, υπερτρίχωση, ακμή και δυσκολία σύλληψης.' },
    { key: 'dysmenorrhea', title: 'Δυσμηνόρροια', content: 'Έντονος πόνος κατά την έμμηνο ρύση. Μπορεί να είναι πρωτοπαθής ή δευτεροπαθής (π.χ. ενδομητρίωση).' },
    { key: 'menopause', title: 'Εμμηνόπαυση', content: 'Η φυσιολογική παύση της έμμηνου ρύσης. Συνοδεύεται από ορμονικές αλλαγές με εξάψεις, αϋπνία και μεταπτώσεις διάθεσης.' }
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
                src={gynecologyImage} 
                alt={t('services.gynecology.imageAlt')}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Title */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {t('services.gynecology.title')}
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

export default Gynecology;
