import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GraduationCap, Briefcase, Monitor } from 'lucide-react';

import doctor_hero from '@/assets/doctor_hero.jpg';

const About = () => {
  const { language, t } = useLanguage();

  const biographyContent = {
    el: {
      intro: "Ο Ελευθέριος Χειράκης είναι Ιατρός, ειδικευόμενος στη Μαιευτική - Γυναικολογία με εξειδίκευση στην Υποβοηθούμενη Αναπαραγωγή.",
      education: {
        title: "🎓 Εκπαίδευση και Ακαδημαϊκή Πορεία",
        content: [
          "Ο Δρ. Χειράκης είναι απόφοιτος της Ιατρικής Σχολής του Universitatea de Medicina si Farmacie \"Gregoire T. Popa\" στην Ιάση της Ρουμανίας (2011-2017).",
          "Είναι κάτοχος του Μεταπτυχιακού Διπλώματος Σπουδών (MSC) στις Τεχνικές Υποβοηθούμενης Αναπαραγωγής και Υπογονιμότητας από το PORT ROYAL στο Παρίσι της Γαλλίας (2023).",
          "Έχει λάβει εξειδικευμένα διπλώματα στην ενδοσκόπηση, κατέχοντας το Δίπλωμα Ενδοσκόπησης CICE \"BACHELOR IN ENDOSCOPY CERTIFICATE LEVEL 1\" (2021) και το \"BACHELOR IN ENDOSCOPY CERTIFICATE LEVEL 2\" (2025). Επιπλέον, είναι κάτοχος Πανεπιστημιακού Διπλώματος Μαιευτικού και Γυναικολογικού Υπερήχου από το PORT ROYAL, Paris (2021)."
        ],
        conferences: {
          title: "Έχει συμμετάσχει σε συνέδρια και σεμινάρια, λαμβάνοντας πιστοποιήσεις για:",
          items: [
            "Τον 14ο Πανελλήνιο Συνέδριο Μαιευτικής και Γυναικολογίας (06/2018).",
            "Το 11ο Συνέδριο για την Υγεία του Γυναικείου Φύλου (\"De la Préconception à la Ménopause\") (09/2018).",
            "Τεχνικές Κολπικού Laser (LASER SEMINAR: JULIET ER: YAG FEMININE LASER SYSTEM) (11/2018)."
          ]
        }
      },
      experience: {
        title: "🏥 Επαγγελματική Εμπειρία και Εξειδίκευση",
        intro: "Ο Δρ. Χειράκης διατηρεί ενεργή επαγγελματική δραστηριότητα, ενώ παράλληλα βρίσκεται σε διαδικασία ειδίκευσης στη Μαιευτική-Γυναικολογία.",
        current: {
          title: "Τρέχουσα Απασχόληση (Εξωτερικός Συνεργάτης Υποβοηθούμενης Αναπαραγωγής)",
          items: [
            "ΚΛΙΝΙΚΗ EMBRYOLAND, Αθήνα, Ελλάδα (01/06/2025 – Τρέχουσα).",
            "ΡΕΑ ΜΑΙΕΥΤΙΚΗ ΚΛΙΝΙΚΗ, Αθήνα, Ελλάδα (05/06/2023 – Τρέχουσα)."
          ]
        },
        specialization: {
          title: "Ειδίκευση στη Μαιευτική - Γυναικολογία",
          items: [
            "ΤΖΑΝΕΙΟ Νοσοκομείο, Πειραιάς (09/2024 - 03/2025).",
            "HOPITAL PARIS SAINT JOSEPH, Παρίσι, Γαλλία, υπό τον DR ELIE AZRIA (02/05/2022 - 01/11/2022).",
            "ΗΟPITAL VICTOR DUPOY, ARGENTEUIL, υπό τον DR DEROUICH MOHAMED (02/05/2021 - 01/05/2022).",
            "GHEF MARNE LA VALLEE, PARIS, Γαλλία, υπό την DR ESTELLE WAFO (04/11/2019 - 01/11/2020)."
          ]
        },
        ivf: {
          title: "Εξειδίκευση στην Υποβοηθούμενη Αναπαραγωγή (FIV)",
          items: [
            "HOPITAL PORT ROYAL, Παρίσι, Γαλλία, υπό τον DR PIETRO SANTULLI (02/11/2022 - 01/05/2023).",
            "HOPITAL TENON, υπό τους DR EMILE DARAI/DR MARIE BORNES (02/11/2020 - 02/05/2021)."
          ]
        },
        prior: {
          title: "Προϋπηρεσία",
          items: [
            "Αγροτικός Ιατρός, Αγκίστρι, Αττικής (09/2023 - 08/2024).",
            "Ειδικευόμενος Γενικής Χειρουργικής, ΕΑΝΠ ΜΕΤΑΞΑ, Πειραιάς, υπό τον PANAGIOTIS MANIKIS (23/10/2018 - 22/10/2019).",
            "Γενικός Ιατρός στον Ελληνικό Στρατό (10/11/2017 - 13/08/2018). Κατά τη διάρκεια της θητείας του, ήταν υπεύθυνος για τη συνταγογράφηση φαρμάκων, την ενδοφλέβια χορήγηση υγρών και την ιατρική παρακολούθηση των στρατιωτών."
          ]
        }
      },
      skills: {
        title: "💻 Γνώσεις και Δεξιότητες",
        content: [
          "Ο Δρ. Χειράκης διαθέτει άριστες δεξιότητες επικοινωνίας με τους ασθενείς, εμπειρία που απέκτησε και ως ειδικευόμενος ιατρός στη γενική χειρουργική, ενώ επιδεικνύει εξαιρετικές ικανότητες επικοινωνίας με παιδιά.",
          "Στο κομμάτι της οργάνωσης, διαθέτει καλές οργανωτικές ικανότητες που απέκτησε ως γραμματέας στο ιατρικό κέντρο Cheirakis I. Emmanouil."
        ],
        languages: {
          title: "Γλωσσικές Δεξιότητες",
          content: "Η μητρική του γλώσσα είναι η Ελληνική (Grecque). Διαθέτει άριστη γνώση (Επίπεδο C2 - Έμπειρος χρήστης) της Αγγλικής και πολύ καλή γνώση (Επίπεδο C1 - Έμπειρος χρήστης) της Γαλλικής. Επίσης, ομιλεί και γράφει Ρουμανικά (Επίπεδο Β2 - Ανεξάρτητος χρήστης)."
        }
      }
    },
    en: {
      intro: "Eleftherios Cheirakis is a Medical Doctor, specializing in Obstetrics and Gynecology with a focus on Assisted Reproduction. His current address is 8 rue de Varenne, 75007, Paris, France.",
      education: {
        title: "🎓 Education and Academic Path",
        content: [
          "Dr. Cheirakis graduated from the Medical School of the Universitatea de Medicina si Farmacie \"Gregoire T. Popa\" in Iasi, Romania (2011-2017).",
          "He holds a Master of Science (MSc) in Assisted Reproductive Techniques and Infertility from PORT ROYAL in Paris, France (2023).",
          "He has obtained specialized diplomas in endoscopy, holding the CICE \"BACHELOR IN ENDOSCOPY CERTIFICATE LEVEL 1\" (2021) and the \"BACHELOR IN ENDOSCOPY CERTIFICATE LEVEL 2\" (2025). Additionally, he holds a University Diploma in Obstetric and Gynecological Ultrasound from PORT ROYAL, Paris (2021)."
        ],
        conferences: {
          title: "He has participated in conferences and seminars, receiving certificates for:",
          items: [
            "The 14th Panhellenic Congress of Obstetrics and Gynecology (06/2018).",
            "The 11th Congress on Female Sex Health (\"De la Préconception à la Ménopause\") (09/2018).",
            "Vaginal Laser Techniques (LASER SEMINAR: JULIET ER: YAG FEMININE LASER SYSTEM) (11/2018)."
          ]
        }
      },
      experience: {
        title: "🏥 Professional Experience and Specialization",
        intro: "Dr. Cheirakis maintains active professional practice while pursuing specialization in Obstetrics and Gynecology.",
        current: {
          title: "Current Employment (External Collaborator in Assisted Reproduction)",
          items: [
            "EMBRYOLAND Clinic, Athens, Greece (01/06/2025 – Current).",
            "REA Maternity Clinic, Athens, Greece (05/06/2023 – Current)."
          ]
        },
        specialization: {
          title: "Specialization in Obstetrics and Gynecology",
          items: [
            "TZANEIO Hospital, Piraeus (09/2024 - 03/2025).",
            "HOPITAL PARIS SAINT JOSEPH, Paris, France, under DR ELIE AZRIA (02/05/2022 - 01/11/2022).",
            "HÔPITAL VICTOR DUPOY, ARGENTEUIL, under DR DEROUICH MOHAMED (02/05/2021 - 01/05/2022).",
            "GHEF MARNE LA VALLEE, PARIS, France, under DR ESTELLE WAFO (04/11/2019 - 01/11/2020)."
          ]
        },
        ivf: {
          title: "Specialization in Assisted Reproduction (FIV)",
          items: [
            "HOPITAL PORT ROYAL, Paris, France, under DR PIETRO SANTULLI (02/11/2022 - 01/05/2023).",
            "HOPITAL TENON, under DR EMILE DARAI/DR MARIE BORNES (02/11/2020 - 02/05/2021)."
          ]
        },
        prior: {
          title: "Prior Experience",
          items: [
            "Rural Doctor (Agrotikos Iatros), Agistri, Attica (09/2023 - 08/2024).",
            "Specialist in General Surgery, EANP METAXA, Piraeus, under PANAGIOTIS MANIKIS (23/10/2018 - 22/10/2019).",
            "General Doctor in the Greek Army (10/11/2017 - 13/08/2018). During his military service, he was responsible for prescribing medications, intravenous fluids, and the medical surveillance of soldiers."
          ]
        }
      },
      skills: {
        title: "💻 Knowledge and Skills",
        content: [
          "Dr. Cheirakis possesses very good communication skills with patients, an experience gained also as a resident in general surgery, and demonstrates excellent communication skills with children.",
          "Regarding organization, he has good organizational skills acquired as a secretary at the Cheirakis I. Emmanouil medical center."
        ],
        languages: {
          title: "Language Skills",
          content: "His mother tongue is Greek (Grecque). He has excellent knowledge (Level C2 - Proficient user) of English and very good knowledge (Level C1 - Proficient user) of French. He also speaks and writes Romanian (Level B2 - Independent user)."
        }
      }
    },
    fr: {
      intro: "Le Dr. Eleftherios Cheirakis est Médecin, en cours de spécialisation en Obstétrique et Gynécologie avec une expertise en Procréation Médicalement Assistée (PMA). Son adresse actuelle est 8 rue de Varenne, 75007, Paris, France.",
      education: {
        title: "🎓 Formation et Parcours Académique",
        content: [
          "Le Dr. Cheirakis est diplômé de la Faculté de Médecine de l'Universitatea de Medicina si Farmacie \"Gregoire T. Popa\" à Iasi, Roumanie (2011-2017).",
          "Il est titulaire d'un Master of Science (MSc) en Techniques d'Assistance Médicale à la Procréation et Infertilité de PORT ROYAL à Paris, France (2023).",
          "Il a obtenu des diplômes spécialisés en endoscopie, détenant le \"BACHELOR IN ENDOSCOPY CERTIFICATE LEVEL 1\" CICE (2021) et le \"BACHELOR IN ENDOSCOPY CERTIFICATE LEVEL 2\" (2025). De plus, il est titulaire d'un Diplôme Universitaire d'Échographie Obstétricale et Gynécologique de PORT ROYAL, Paris (2021)."
        ],
        conferences: {
          title: "Il a participé à des conférences et séminaires, recevant des certificats pour :",
          items: [
            "Le 14e Congrès Panhellénique d'Obstétrique et de Gynécologie (06/2018).",
            "Le 11e Congrès sur la Santé du Sexe Féminin (\"De la Préconception à la Ménopause\") (09/2018).",
            "Les techniques de Laser Vaginal (LASER SEMINAR: JULIET ER: YAG FEMININE LASER SYSTEM) (11/2018)."
          ]
        }
      },
      experience: {
        title: "🏥 Expérience Professionnelle et Spécialisation",
        intro: "Le Dr. Cheirakis exerce une pratique professionnelle active tout en poursuivant sa spécialisation en Obstétrique et Gynécologie.",
        current: {
          title: "Emploi Actuel (Collaborateur Externe en PMA)",
          items: [
            "Clinique EMBRYOLAND, Athènes, Grèce (01/06/2025 – Actuel).",
            "Clinique Maternité REA, Athènes, Grèce (05/06/2023 – Actuel)."
          ]
        },
        specialization: {
          title: "Spécialisation en Obstétrique et Gynécologie",
          items: [
            "Hôpital TZANEIO, Le Pirée (09/2024 - 03/2025).",
            "HÔPITAL PARIS SAINT JOSEPH, Paris, France, sous la direction du DR ELIE AZRIA (02/05/2022 - 01/11/2022).",
            "HÔPITAL VICTOR DUPOY, ARGENTEUIL, sous la direction du DR DEROUICH MOHAMED (02/05/2021 - 01/05/2022).",
            "GHEF MARNE LA VALLEE, PARIS, France, sous la direction de la DR ESTELLE WAFO (04/11/2019 - 01/11/2020)."
          ]
        },
        ivf: {
          title: "Spécialisation en Procréation Médicalement Assistée (PMA)",
          items: [
            "HÔPITAL PORT ROYAL, Paris, France, sous la direction du DR PIETRO SANTULLI (02/11/2022 - 01/05/2023).",
            "HÔPITAL TENON, sous la direction des DR EMILE DARAI/DR MARIE BORNES (02/11/2020 - 02/05/2021)."
          ]
        },
        prior: {
          title: "Expérience Antérieure",
          items: [
            "Médecin Rural (Agrotikos Iatros), Agistri, Attique (09/2023 - 08/2024).",
            "Résident en Chirurgie Générale, EANP METAXA, Le Pirée, sous la direction de PANAGIOTIS MANIKIS (23/10/2018 - 22/10/2019).",
            "Docteur Général dans l'Armée Grecque (10/11/2017 - 13/08/2018). Pendant son service militaire, il était chargé de la prescription de médicaments, des fluides par voie intraveineuse et de la surveillance médicale des soldats."
          ]
        }
      },
      skills: {
        title: "💻 Connaissances et Compétences",
        content: [
          "Le Dr. Cheirakis possède une très bonne communication avec les patients, une expérience acquise également en tant que médecin résident en chirurgie générale, et démontre d'excellentes aptitudes à la communication avec les enfants.",
          "En matière d'organisation, il a acquis de bonnes compétences organisationnelles en tant que secrétaire au centre médical Cheirakis I. Emmanouil."
        ],
        languages: {
          title: "Compétences Linguistiques",
          content: "Sa langue maternelle est le Grec (Grecque). Il a une excellente maîtrise (Niveau C2 - Utilisateur expérimenté) de l'Anglais et une très bonne maîtrise (Niveau C1 - Utilisateur expérimenté) du Français. Il parle et écrit également le Roumain (Niveau B2 - Utilisateur indépendant)."
        }
      }
    }
  };

  const content = biographyContent[language];

  const heroTitles = {
    el: "Δρ. Ελευθέριος Χειράκης – Βιογραφικό",
    en: "Dr. Eleftherios Cheirakis – Biography",
    fr: "Dr. Eleftherios Cheirakis – Biographie"
  };

  const seoContent = {
    el: {
      title: "Βιογραφικό | Δρ. Ελευθέριος Χειράκης - Μαιευτήρας Γυναικολόγος",
      description: "Δρ. Ελευθέριος Χειράκης - Βιογραφικό, εκπαίδευση και επαγγελματική εμπειρία. Ειδικός μαιευτήρας-γυναικολόγος με εξειδίκευση στην υποβοηθούμενη αναπαραγωγή, IVF και ενδοσκοπική χειρουργική. Πειραιάς & Αίγινα."
    },
    en: {
      title: "Biography | Dr. Eleftherios Cheirakis - Obstetrician Gynecologist",
      description: "Dr. Eleftherios Cheirakis - Biography, education and professional experience. Specialist obstetrician-gynecologist with expertise in assisted reproduction, IVF and endoscopic surgery. Piraeus & Aegina."
    },
    fr: {
      title: "Biographie | Dr. Eleftherios Cheirakis - Obstétricien Gynécologue",
      description: "Dr. Eleftherios Cheirakis - Biographie, formation et expérience professionnelle. Obstétricien-gynécologue spécialiste en procréation médicalement assistée, FIV et chirurgie endoscopique. Le Pirée & Égine."
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seoContent[language].title}</title>
        <meta name="description" content={seoContent[language].description} />
        <meta property="og:title" content={seoContent[language].title} />
        <meta property="og:description" content={seoContent[language].description} />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>

      {/* Small Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-[hsl(210_30%_92%)] to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[hsl(var(--medical-darkest))]">
            {heroTitles[language]}
          </h1>
        </div>
      </section>

      {/* Main Content - Sticky Image + Scrollable Bio */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Side - Sticky Image */}
              <div className="lg:w-1/3 flex-shrink-0">
                <div className="lg:sticky lg:top-28">
                  <div className="aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                    <img
                      src={doctor_hero}
                      alt={heroTitles[language]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Scrollable Biography */}
              <div className="lg:w-2/3">
                <div className="prose prose-lg max-w-none">
                  {/* Intro */}
                  <p className="text-lg text-foreground leading-relaxed mb-8 font-medium">
                    {content.intro}
                  </p>

                  {/* Education Section */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground m-0">
                        {content.education.title}
                      </h2>
                    </div>
                    <div className="space-y-4 pl-0 md:pl-2">
                      {content.education.content.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                      <div className="mt-6">
                        <p className="text-muted-foreground font-medium mb-3">
                          {content.education.conferences.title}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {content.education.conferences.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Experience Section */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground m-0">
                        {content.experience.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 pl-0 md:pl-2">
                      {content.experience.intro}
                    </p>

                    {/* Current Employment */}
                    <div className="mb-6 pl-0 md:pl-2">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {content.experience.current.title}
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {content.experience.current.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Specialization */}
                    <div className="mb-6 pl-0 md:pl-2">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {content.experience.specialization.title}
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {content.experience.specialization.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* IVF Specialization */}
                    <div className="mb-6 pl-0 md:pl-2">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {content.experience.ivf.title}
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {content.experience.ivf.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Prior Experience */}
                    <div className="pl-0 md:pl-2">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {content.experience.prior.title}
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {content.experience.prior.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                        <Monitor className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground m-0">
                        {content.skills.title}
                      </h2>
                    </div>
                    <div className="space-y-4 pl-0 md:pl-2">
                      {content.skills.content.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {content.skills.languages.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {content.skills.languages.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
