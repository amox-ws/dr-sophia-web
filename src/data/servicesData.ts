export type Language = 'el' | 'en' | 'fr';

export interface ServiceItem {
  title: { el: string; en: string; fr: string };
  desc: { el: string; en: string; fr: string };
}

export interface Service {
  id: string;
  title: { el: string; en: string; fr: string };
  intro?: { el: string; en: string; fr: string };
  items: ServiceItem[];
}

export const servicesData: Service[] = [
  {
    id: "gynecology",
    title: { el: "Γυναικολογία", en: "Gynecology", fr: "Gynécologie" },
    intro: {
      el: "Ολοκληρωμένη γυναικολογική φροντίδα με ρουτίνες ελέγχων και εξειδικευμένες θεραπείες.",
      en: "Comprehensive gynecological care including routine checkups and specialized treatments.",
      fr: "Prise en charge gynécologique complète avec dépistages et traitements spécialisés."
    },
    items: [
      {
        title: { el: "Ενδομητρίωση", en: "Endometriosis", fr: "Endométriose" },
        desc: {
          el: "Κατάσταση όπου ιστός παρόμοιος με το ενδομήτριο αναπτύσσεται εκτός μήτρας, προκαλώντας πόνο και υπογονιμότητα.",
          en: "A condition in which tissue similar to the endometrium grows outside the uterus, causing pain and infertility.",
          fr: "État où un tissu semblable à l'endomètre se développe en dehors de l'utérus, provoquant douleur et infertilité."
        }
      },
      {
        title: { el: "Αδενομύωση", en: "Adenomyosis", fr: "Adénomyose" },
        desc: {
          el: "Ο ενδομητρικός ιστός εισχωρεί στο μυϊκό τοίχωμα της μήτρας, προκαλώντας έντονη περίοδο και πόνο.",
          en: "Endometrial tissue grows into the muscular wall of the uterus, causing heavy periods and pain.",
          fr: "Le tissu endométrial pénètre dans la paroi musculaire de l'utérus, entraînant des règles abondantes et douloureuses."
        }
      },
      {
        title: { el: "Εν τω βάθει Ενδομητρίωση", en: "Deep Infiltrating Endometriosis", fr: "Endométriose Profonde" },
        desc: {
          el: "Πιο σοβαρή μορφή που επηρεάζει βαθύτερους ιστούς και μπορεί να επηρεάσει έντερα, ουροδόχο κύστη και πυελικό πόνο.",
          en: "A more severe form affecting deeper tissues, potentially involving the bowel, bladder, and causing pelvic pain.",
          fr: "Forme plus sévère atteignant les tissus profonds, pouvant toucher les intestins, la vessie et provoquer des douleurs pelviennes."
        }
      },
      {
        title: { el: "Ενδομητρίωμα – Κύστεις Ενδομητρίωσης", en: "Endometrioma – Endometriotic Cysts", fr: "Endométriome – Kystes d'Endométriose" },
        desc: {
          el: "Κύστεις που σχηματίζονται στις ωοθήκες από ενδομητριωσικό ιστό.",
          en: "Cysts that form on the ovaries due to endometriotic tissue.",
          fr: "Kystes qui se forment sur les ovaires à partir de tissu endométriosique."
        }
      },
      {
        title: { el: "Ινομυώματα Μήτρας", en: "Uterine Fibroids", fr: "Fibromes Utérins" },
        desc: {
          el: "Καλοήθεις όγκοι της μήτρας που μπορεί να προκαλέσουν βαριά περίοδο, πόνο ή δυσκολία σύλληψης.",
          en: "Benign tumors of the uterus that may cause heavy bleeding, pain, or difficulty conceiving.",
          fr: "Tumeurs bénignes pouvant entraîner des règles abondantes, des douleurs ou difficultés de conception."
        }
      },
      {
        title: { el: "Πολυκυστικές Ωοθήκες (PCOS)", en: "Polycystic Ovary Syndrome (PCOS)", fr: "Syndrome des Ovaires Polykystiques (SOPK)" },
        desc: {
          el: "Ορμονική διαταραχή που σχετίζεται με ακανόνιστο κύκλο, τριχοφυΐα και δυσκολία στη σύλληψη.",
          en: "A hormonal disorder linked to irregular cycles, increased facial/body hair, and fertility challenges.",
          fr: "Trouble hormonal associé à des cycles irréguliers, une pilosité accrue et des difficultés de fertilité."
        }
      },
      {
        title: { el: "Δυσμηνόρροια", en: "Dysmenorrhea", fr: "Dysménorrhée" },
        desc: {
          el: "Επώδυνη περίοδος που μπορεί να επηρεάζει την καθημερινότητα.",
          en: "Painful menstruation that can affect daily activities.",
          fr: "Règles douloureuses pouvant perturber la vie quotidienne."
        }
      },
      {
        title: { el: "Εμμηνόπαυση", en: "Menopause", fr: "Ménopause" },
        desc: {
          el: "Φάση κατά την οποία σταματά η περίοδος, συνοδευόμενη από ορμονικές αλλαγές και συμπτώματα όπως εξάψεις.",
          en: "A phase when menstruation stops, accompanied by hormonal changes and symptoms such as hot flashes.",
          fr: "Période où les règles cessent, accompagnée de changements hormonaux et de symptômes tels que les bouffées de chaleur."
        }
      }
    ]
  },
  {
    id: "assisted-reproduction",
    title: { el: "Υποβοηθούμενη Αναπαραγωγή", en: "Assisted Reproduction", fr: "Aide Médicale à la Procréation (AMP)" },
    intro: {
      el: "Εξατομικευμένες λύσεις γονιμότητας για άτομα και ζευγάρια.",
      en: "Personalized fertility solutions for individuals and couples.",
      fr: "Solutions de fertilité personnalisées pour individus et couples."
    },
    items: [
      {
        title: { el: "Διερεύνηση Γονιμότητας", en: "Fertility Evaluation", fr: "Bilan de Fertilité" },
        desc: {
          el: "Έλεγχος ζευγαριού ή ατόμων για τους πιθανούς λόγους υπογονιμότητας (ανδρικός και γυναικείος παράγοντας).",
          en: "Assessment of individuals or couples to identify possible causes of infertility (male factor and female factor).",
          fr: "Évaluation des couples ou individus pour identifier les causes possibles d'infertilité (facteur masculin et facteur féminin)."
        }
      },
      {
        title: { el: "Κρυοσυντήρηση Ωαρίων", en: "Egg Cryopreservation", fr: "Cryopréservation des Ovocytes" },
        desc: {
          el: "Διατήρηση γονιμότητας για μελλοντική χρήση.",
          en: "Preservation of fertility for future use.",
          fr: "Conservation de la fertilité pour une utilisation future."
        }
      },
      {
        title: { el: "Εξωσωματική Γονιμοποίηση (IVF)", en: "In Vitro Fertilization (IVF)", fr: "Fécondation In Vitro (FIV)" },
        desc: {
          el: "Ένωση ωαρίου και σπέρματος στο εργαστήριο και μεταφορά εμβρύου στη μήτρα.",
          en: "Fertilisation of an egg and sperm in the laboratory and transfer of the embryo into the uterus.",
          fr: "Fécondation de l'ovocyte et du spermatozoïde en laboratoire, puis transfert de l'embryon dans l'utérus."
        }
      },
      {
        title: { el: "Mini IVF", en: "Mini IVF", fr: "Mini FIV" },
        desc: {
          el: "Ηπιότερη μορφή εξωσωματικής με λιγότερη φαρμακευτική αγωγή.",
          en: "A gentler IVF protocol requiring lower medication doses.",
          fr: "Version plus douce de la FIV avec moins de médicaments."
        }
      },
      {
        title: { el: "Ενδομήτρια Σπερματέγχυση (IUI)", en: "Intrauterine Insemination (IUI)", fr: "Insémination Intra-Utérine (IIU)" },
        desc: {
          el: "Τοποθέτηση επεξεργασμένου σπέρματος στη μήτρα για ενίσχυση της σύλληψης.",
          en: "Placement of processed sperm directly into the uterus to improve the chances of conception.",
          fr: "Dépôt de spermatozoïdes préparés directement dans l'utérus pour favoriser la conception."
        }
      },
      {
        title: { el: "Προεμφυτευτικός Έλεγχος (PGT)", en: "Preimplantation Genetic Testing (PGT)", fr: "Diagnostic Génétique Préimplantatoire (DPI/PGT)" },
        desc: {
          el: "Γενετικός έλεγχος εμβρύων πριν τη μεταφορά.",
          en: "Genetic testing of embryos before transfer.",
          fr: "Analyse génétique des embryons avant le transfert."
        }
      },
      {
        title: { el: "Δωρεά Ωαρίων & Σπέρματος", en: "Egg & Sperm Donation", fr: "Don d'Ovocytes et de Spermatozoïdes" },
        desc: {
          el: "Επιλογή για γυναίκες ή ζευγάρια που δεν μπορούν να χρησιμοποιήσουν δικά τους γαμετά.",
          en: "An option for individuals or couples unable to use their own gametes.",
          fr: "Option pour les couples ou individus ne pouvant pas utiliser leurs propres gamètes."
        }
      },
      {
        title: { el: "Παρένθετη Μητρότητα", en: "Surrogacy", fr: "Gestation pour Autrui (GPA)" },
        desc: {
          el: "Επιλογή για γυναίκες που δεν μπορούν να κυοφορήσουν.",
          en: "An option for women who are unable to carry a pregnancy.",
          fr: "Option pour les femmes incapables de mener une grossesse."
        }
      }
    ]
  },
  {
    id: "endoscopic-surgery",
    title: { el: "Ενδοσκοπική Χειρουργική", en: "Endoscopic Surgery", fr: "Chirurgie Endoscopique" },
    items: [
      {
        title: { el: "Υστεροσκόπηση", en: "Hysteroscopy", fr: "Hystéroscopie" },
        desc: {
          el: "Ενδοσκοπικός έλεγχος της μήτρας για διάγνωση και θεραπεία προβλημάτων.",
          en: "Endoscopic evaluation of the uterus for diagnosis and treatment.",
          fr: "Exploration endoscopique de l'utérus à des fins diagnostiques et thérapeutiques."
        }
      },
      {
        title: { el: "Λαπαροσκόπηση", en: "Laparoscopy", fr: "Laparoscopie" },
        desc: {
          el: "Ελάχιστα επεμβατική χειρουργική στην κοιλιά και τη λεκάνη.",
          en: "Minimally invasive surgery of the abdomen and pelvis.",
          fr: "Chirurgie mini-invasive de l'abdomen et du pelvis."
        }
      },
      {
        title: { el: "Ρομποτική Χειρουργική", en: "Robotic Surgery", fr: "Chirurgie Robotique" },
        desc: {
          el: "Πιο ακριβής χειρουργική με σύστημα ρομποτικής καθοδήγησης.",
          en: "Highly precise surgery performed with robotic-assisted technology.",
          fr: "Chirurgie de haute précision grâce à une assistance robotisée."
        }
      }
    ]
  },
  {
    id: "pregnancy",
    title: { el: "Εγκυμοσύνη", en: "Pregnancy", fr: "Grossesse" },
    items: [
      {
        title: { el: "Προγεννητικός Έλεγχος", en: "Prenatal Screening", fr: "Dépistage Prénatal" },
        desc: {
          el: "Παρακολούθηση υγείας μητέρας και εμβρύου.",
          en: "Monitoring the health of the mother and baby.",
          fr: "Suivi de la santé de la mère et du bébé."
        }
      },
      {
        title: { el: "NIPT", en: "NIPT", fr: "NIPT" },
        desc: {
          el: "Μη επεμβατικός έλεγχος για χρωμοσωμικές ανωμαλίες.",
          en: "Non-invasive test for chromosomal abnormalities.",
          fr: "Test sanguin non invasif pour anomalies chromosomiques."
        }
      },
      {
        title: { el: "Υπερηχογράφημα 3D–4D", en: "3D–4D Ultrasound", fr: "Échographie 3D–4D" },
        desc: {
          el: "Τρισδιάστατες απεικονίσεις του μωρού.",
          en: "Three-dimensional imaging of the baby.",
          fr: "Imagerie tridimensionnelle du bébé."
        }
      },
      {
        title: { el: "Τοκετός", en: "Childbirth", fr: "Accouchement" },
        desc: {
          el: "Φυσιολογικός ή καισαρική, ανάλογα με τις ανάγκες.",
          en: "Vaginal birth or caesarean section, as clinically indicated.",
          fr: "Voie basse ou césarienne selon les besoins médicaux."
        }
      },
      {
        title: { el: "Διατροφή", en: "Nutrition", fr: "Nutrition" },
        desc: {
          el: "Εξατομικευμένη καθοδήγηση για υγιή εγκυμοσύνη.",
          en: "Personalized dietary guidance for a healthy pregnancy.",
          fr: "Conseils nutritionnels personnalisés pour une grossesse saine."
        }
      },
      {
        title: { el: "VBAC – Κολπικός Τοκετός μετά από Καισαρική", en: "VBAC – Vaginal Birth After Cesarean", fr: "AVAC – Accouchement Vaginal Après Césarienne" },
        desc: {
          el: "Επιβλεπόμενος και ασφαλής κολπικός τοκετός μετά από καισαρική.",
          en: "Supervised, safe vaginal delivery after a previous caesarean.",
          fr: "Accompagnement spécialisé pour un accouchement vaginal après césarienne."
        }
      },
      {
        title: { el: "Δίδυμη Κύηση", en: "Twin Pregnancy", fr: "Grossesse Gémellaire" },
        desc: {
          el: "Εξειδικευμένη παρακολούθηση δίδυμων κυήσεων.",
          en: "Specialized monitoring of twin gestations.",
          fr: "Suivi spécialisé des grossesses gémellaires."
        }
      }
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return servicesData.find(service => service.id === id);
};
