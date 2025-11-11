import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import gynecologyImage from '@/assets/gynecology.jpeg';

interface SubService {
  key: string;
  title: string;
  summary: string;
  details: string[];
  tips?: string[];
}

const Gynecology = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<string | null>(null);

  const subServices: SubService[] = [
    {
      key: 'endometriosis',
      title: 'Ενδομητρίωση',
      summary: 'Χρόνια γυναικολογική πάθηση με ανάπτυξη ενδομητρικών κυττάρων εκτός μήτρας.',
      details: [
        'Συχνά εντοπίζεται στις ωοθήκες, τις σάλπιγγες ή την πύελο.',
        'Συμπτώματα: Πόνος κατά την έμμηνο ρύση, δυσμηνόρροια, πόνος κατά τη σεξουαλική επαφή, υπογονιμότητα.',
        'Διάγνωση: Υπέρηχος, MRI, λαπαροσκόπηση.',
      ],
      tips: [
        'Τακτικές γυναικολογικές εξετάσεις.',
        'Καταγραφή κύκλου και συμπτωμάτων.',
        'Συζήτηση για θεραπευτικές επιλογές με ειδικό.'
      ]
    },
    {
      key: 'adenomyosis',
      title: 'Αδενομύωση',
      summary: 'Τα κύτταρα του ενδομητρίου εισχωρούν στο μυϊκό τοίχωμα της μήτρας.',
      details: [
        'Συμπτώματα: έντονη εμμηνόρροια, κράμπες, αίσθηση βάρους στη μήτρα.',
        'Διάγνωση: Υπέρηχος ή MRI.'
      ],
      tips: [
        'Καταγραφή συμπτωμάτων.',
        'Συζήτηση φαρμακευτική ή χειρουργική θεραπεία με τον γυναικολόγο.'
      ]
    },
    {
      key: 'deepEndometriosis',
      title: 'Εν τω βάθει ενδομητρίωση',
      summary: 'Πιο σοβαρή μορφή ενδομητρίωσης που επηρεάζει εσωτερικά όργανα της πυέλου.',
      details: [
        'Μπορεί να προκαλέσει έντονο πόνο και δυσκολία κύησης.',
        'Απαιτεί συχνά χειρουργική αντιμετώπιση.'
      ],
      tips: [
        'Συχνή παρακολούθηση από εξειδικευμένο γυναικολόγο.',
        'Καταγραφή συμπτωμάτων και πόνου.'
      ]
    },
    {
      key: 'endometrioma',
      title: 'Ενδομητρίωμα - Κύστες Ενδομητρίωσης',
      summary: 'Κύστες που σχηματίζονται στις ωοθήκες λόγω ενδομητρίωσης.',
      details: [
        'Μπορεί να επηρεάσουν τη γονιμότητα.',
        'Συχνά διαγιγνώσκονται με υπερηχογράφημα.'
      ],
      tips: [
        'Τακτική παρακολούθηση με υπερηχογράφημα.',
        'Συζήτηση για χειρουργική ή φαρμακευτική αντιμετώπιση.'
      ]
    },
    {
      key: 'uterineFibroids',
      title: 'Ινομυώματα μήτρας',
      summary: 'Καλοήθεις όγκοι του μυϊκού τοιχώματος της μήτρας που επηρεάζουν τη γονιμότητα.',
      details: [
        'Μπορεί να προκαλέσουν βαριά περίοδο, πόνο ή πίεση στην κοιλιά.',
        'Διάγνωση: Υπέρηχος, MRI, κατ\' ανάγκη υστεροσκόπηση.'
      ],
      tips: [
        'Τακτικός έλεγχος για μεγέθυνση ή αλλαγές.',
        'Συζήτηση για ελάχιστα επεμβατικές τεχνικές.'
      ]
    },
    {
      key: 'polycysticOvaries',
      title: 'Πολυκυστικές ωοθήκες (PCOS)',
      summary: 'Πολλαπλές μικρές κύστες στις ωοθήκες με ορμονικές διαταραχές.',
      details: [
        'Συμπτώματα: ακανόνιστος κύκλος, υπερτρίχωση, ακμή, δυσκολία σύλληψης.',
        'Διάγνωση: Υπερηχογράφημα, ορμονικές εξετάσεις.'
      ],
      tips: [
        'Διαχείριση βάρους και διατροφής.',
        'Συστηματική παρακολούθηση ορμονών και κύκλου.'
      ]
    },
    {
      key: 'dysmenorrhea',
      title: 'Δυσμηνόρροια',
      summary: 'Πόνος κατά την έμμηνο ρύση που επηρεάζει την καθημερινότητα.',
      details: [
        'Μπορεί να είναι πρωτοπαθής ή δευτεροπαθής σε άλλες γυναικολογικές παθήσεις.',
        'Απαιτεί ιατρική αξιολόγηση σε σοβαρές περιπτώσεις.'
      ],
      tips: [
        'Καταγραφή έντασης πόνου.',
        'Χρήση κατάλληλης αναλγητικής αγωγής υπό ιατρική επίβλεψη.'
      ]
    },
    {
      key: 'menopause',
      title: 'Εμμηνόπαυση',
      summary: 'Φυσιολογική παύση της έμμηνου ρύσης με ορμονικές αλλαγές.',
      details: [
        'Συμπτώματα: εξάψεις, αϋπνία, μεταπτώσεις διάθεσης, ξηρότητα κόλπου.',
        'Διαχείριση: Ορμονική υποκατάσταση, lifestyle adjustments.'
      ],
      tips: [
        'Καταγραφή συμπτωμάτων.',
        'Συζήτηση θεραπειών για βελτίωση ποιότητας ζωής.'
      ]
    }
  ];

  // Κλείνει όλα τα άλλα box όταν ανοίγει ένα νέο
  const toggleExpand = (key: string) => {
    setExpanded(prev => (prev === key ? null : key));
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-[#4D6471]/90 to-[#1E2A30]/90 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0">
              <img src={gynecologyImage} alt="Gynecology" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Γυναικολογικές Υπηρεσίες
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                Παρέχουμε ολοκληρωμένη φροντίδα για κάθε φάση της γυναικείας υγείας. 
                Από πρόληψη και διάγνωση έως εξατομικευμένες θεραπείες και συμβουλευτική.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services Section */}
      <section className="py-20 bg-background/90">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Υπο-Υπηρεσίες</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {subServices.map(service => (
              <div key={service.key} className="border border-muted-foreground/20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow bg-background">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(service.key)}>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <span className="text-2xl">{expanded === service.key ? '-' : '+'}</span>
                </div>
                <p className="mt-2 text-foreground/80">{service.summary}</p>
                {expanded === service.key && (
                  <div className="mt-4 space-y-3">
                    <ul className="list-disc list-inside space-y-1">
                      {service.details.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                    {service.tips && (
                      <>
                        <h4 className="mt-3 font-semibold">Συμβουλές:</h4>
                        <ul className="list-disc list-inside ml-5 text-foreground/70 space-y-1">
                          {service.tips.map((tip, idx) => (
                            <li key={idx}>{tip}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition"
            >
              Κλείστε Ραντεβού Τώρα
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gynecology;
