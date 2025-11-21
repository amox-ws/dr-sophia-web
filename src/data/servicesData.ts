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
          el: "Ιστός παρόμοιος με το ενδομήτριο αναπτύσσεται εκτός μήτρας, προκαλώντας πόνο και υπογονιμότητα.",
          en: "Tissue similar to the endometrium grows outside the uterus, causing pain and infertility.",
          fr: "Tissu semblable à l'endomètre se développe en dehors de l'utérus, provoquant douleur et infertilité."
        }
      },
      {
        title: { el: "Αδενομύωση", en: "Adenomyosis", fr: "Adénomyose" },
        desc: {
          el: "Ενδομητρικός ιστός εισχωρεί στο μυϊκό τοίχωμα της μήτρας, με βαριές περιόδους και πόνο.",
          en: "Endometrial tissue grows into the uterine muscle wall, causing heavy periods and pain.",
          fr: "Le tissu endométrial pénètre la paroi musculaire de l'utérus, entraînant règles abondantes et douleurs."
        }
      },
      {
        title: { el: "Εν τω βάθει Ενδομητρίωση", en: "Deep Infiltrating Endometriosis", fr: "Endométriose Profonde" },
        desc: {
          el: "Πιο σοβαρή μορφή που επηρεάζει βαθύτερους ιστούς, έντερα και ουροδόχο κύστη, με πυελικό πόνο.",
          en: "A more severe form affecting deeper tissues, potentially bowel and bladder, causing pelvic pain.",
          fr: "Forme plus sévère atteignant les tissus profonds (intestin, vessie) avec douleurs pelviennes."
        }
      },
      {
        title: { el: "Ενδομητρίωμα – Κύστεις Ενδομητρίωσης", en: "Endometrioma – Endometriotic Cysts", fr: "Endométriome – Kystes d'Endométriose" },
        desc: {
          el: "Κύστεις στις ωοθήκες από ενδομητριωσικό ιστό.",
          en: "Cysts on the ovaries due to endometriotic tissue.",
          fr: "Kystes ovariens dus à un tissu endométriosique."
        }
      },
      {
        title: { el: "Ινομυώματα Μήτρας", en: "Uterine Fibroids", fr: "Fibromes Utérins" },
        desc: {
          el: "Καλοήθεις όγκοι που μπορεί να προκαλέσουν βαριά περίοδο, πόνο ή δυσκολία σύλληψης.",
          en: "Benign uterine tumors that may cause heavy bleeding, pain, or difficulty conceiving.",
          fr: "Tumeurs bénignes pouvant entraîner saignements abondants, douleurs ou difficultés de conception."
        }
      },
      {
        title: { el: "Πολυκυστικές Ωοθήκες (PCOS)", en: "Polycystic Ovary Syndrome (PCOS)", fr: "Syndrome des Ovaires Polykystiques (SOPK)" },
        desc: {
          el: "Ορμονική διαταραχή με ακανόνιστο κύκλο, τριχοφυΐα και δυσκολία σύλληψης.",
          en: "Hormonal disorder with irregular cycles, hirsutism, and fertility challenges.",
          fr: "Trouble hormonal avec cycles irréguliers, pilosité accrue et difficultés de fertilité."
        }
      },
      {
        title: { el: "Δυσμηνόρροια", en: "Dysmenorrhea", fr: "Dysménorrhée" },
        desc: {
          el: "Επώδυνη περίοδος που επηρεάζει την καθημερινότητα.",
          en: "Painful menstruation that can affect daily activities.",
          fr: "Règles douloureuses affectant la vie quotidienne."
        }
      },
      {
        title: { el: "Εμμηνόπαυση", en: "Menopause", fr: "Ménopause" },
        desc: {
          el: "Διακοπή περιόδου με ορμονικές αλλαγές και συμπτώματα όπως εξάψεις.",
          en: "Cessation of menstruation with hormonal changes and symptoms such as hot flashes.",
          fr: "Arrêt des règles avec changements hormonaux et symptômes tels que bouffées de chaleur."
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
          el: "Έλεγχος για πιθανούς λόγους υπογονιμότητας (ανδρικός/γυναικείος παράγοντας).",
          en: "Assessment to identify causes of infertility (male factor / female factor).",
          fr: "Évaluation des causes d'infertilité (facteur masculin / féminin)."
        }
      },
      {
        title: { el: "Κρυοσυντήρηση Ωαρίων", en: "Egg Cryopreservation", fr: "Cryopréservation des Ovocytes" },
        desc: {
          el: "Διατήρηση γονιμότητας για μελλοντική χρήση.",
          en: "Preserving fertility for future use.",
          fr: "Conservation de la fertilité pour une utilisation ultérieure."
        }
      },
      {
        title: { el: "Εξωσωματική Γονιμοποίηση (IVF)", en: "In Vitro Fertilization (IVF)", fr: "Fécondation In Vitro (FIV)" },
        desc: {
          el: "Γονιμοποίηση στο εργαστήριο και μεταφορά εμβρύου στη μήτρα.",
          en: "Fertilisation in the lab and embryo transfer into the uterus.",
          fr: "Fécondation en laboratoire puis transfert embryonnaire dans l'utérus."
        }
      },
      {
        title: { el: "Mini IVF", en: "Mini IVF", fr: "Mini FIV" },
        desc: {
          el: "Ηπιότερο πρωτόκολλο με χαμηλότερες δόσεις φαρμάκων.",
          en: "Gentler protocol with lower medication doses.",
          fr: "Protocole plus doux avec moins de médicaments."
        }
      },
      {
        title: { el: "Ενδομήτρια Σπερματέγχυση (IUI)", en: "Intrauterine Insemination (IUI)", fr: "Insémination Intra-Utérine (IIU)" },
        desc: {
          el: "Τοποθέτηση επεξεργασμένου σπέρματος στη μήτρα για ενίσχυση σύλληψης.",
          en: "Placement of processed sperm into the uterus to improve conception.",
          fr: "Dépôt de sperme préparé directement dans l'utérus pour favoriser la conception."
        }
      },
      {
        title: { el: "Προεμφυτευτικός Έλεγχος (PGT)", en: "Preimplantation Genetic Testing (PGT)", fr: "Diagnostic Génétique Préimplantatoire (DPI/PGT)" },
        desc: {
          el: "Γενετικός έλεγχος εμβρύων πριν τη μεταφορά.",
          en: "Genetic testing of embryos before transfer.",
          fr: "Analyse génétique des embryons avant transfert."
        }
      },
      {
        title: { el: "Δωρεά Ωαρίων & Σπέρματος", en: "Egg & Sperm Donation", fr: "Don d'Ovocytes et de Spermatozoïdes" },
        desc: {
          el: "Επιλογή για όσους δεν μπορούν να χρησιμοποιήσουν δικά τους γαμετά.",
          en: "Option for those unable to use their own gametes.",
          fr: "Option pour ceux qui ne peuvent utiliser leurs propres gamètes."
        }
      },
      {
        title: { el: "Παρένθετη Μητρότητα", en: "Surrogacy", fr: "Gestation pour Autrui (GPA)" },
        desc: {
          el: "Λύση για γυναίκες που δεν μπορούν να κυοφορήσουν.",
          en: "Option for women unable to carry a pregnancy.",
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
          el: "Ενδοσκοπικός έλεγχος μήτρας για διάγνωση και θεραπεία.",
          en: "Endoscopic evaluation of the uterus for diagnosis and treatment.",
          fr: "Exploration endoscopique de l'utérus à visée diagnostique et thérapeutique."
        }
      },
      {
        title: { el: "Λαπαροσκόπηση", en: "Laparoscopy", fr: "Laparoscopie" },
        desc: {
          el: "Ελάχιστα επεμβατική χειρουργική κοιλίας και λεκάνης.",
          en: "Minimally invasive surgery of the abdomen and pelvis.",
          fr: "Chirurgie mini-invasive de l'abdomen et du pelvis."
        }
      },
      {
        title: { el: "Ρομποτική Χειρουργική", en: "Robotic Surgery", fr: "Chirurgie Robotique" },
        desc: {
          el: "Ακριβέστερη χειρουργική με ρομποτική υποβοήθηση.",
          en: "Highly precise robotic-assisted surgery.",
          fr: "Chirurgie de haute précision assistée par robot."
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
