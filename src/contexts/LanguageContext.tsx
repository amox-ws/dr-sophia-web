import React, { createContext, useContext, useState } from "react";

export type Language = "el" | "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  el: {
    // Navigation
    "nav.home": "Αρχική",
    "nav.about": "Ο Γιατρός",
    "nav.services": "Υπηρεσίες",
    "nav.allServices": "Όλες οι Υπηρεσίες",
    "nav.contact": "Επικοινωνία",

    // Hero
    "hero.title": "Εξειδικευμένη Φροντίδα στη Γυναικολογία",
    "hero.subtitle": "Προσφέροντας εξατομικευμένη ιατρική φροντίδα με συμπόνια και επαγγελματισμό",
    "hero.cta": "Επικοινωνήστε",

    // About
    "about.seo.title": "Ο Γιατρός | Δρ. Ελευθέριος Cheirakis - Μαιευτήρας Γυναικολόγος Πειραιάς",
    "about.seo.description": "Δρ. Ελευθέριος Cheirakis - Ειδικός μαιευτήρας-γυναικολόγος με διεθνή εμπειρία στην υποβοηθούμενη αναπαραγωγή, εξωσωματική γονιμοποίηση, ενδοσκοπική χειρουργική και μαιευτική υψηλού κινδύνου. Πειραιάς & Αίγινα.",
    "about.title": "Ο Γιατρός",
    "about.subtitle": "Μαιευτήρας-Γυναικολόγος με διεθνή εξειδίκευση στην Υποβοηθούμενη Αναπαραγωγή, Εξωσωματική Γονιμοποίηση και Ενδοσκοπική Χειρουργική. Πάνω από 15 χρόνια εμπειρίας σε κορυφαία ιατρικά κέντρα της Ελλάδας και του εξωτερικού.",
    "about.hero.name": "Δρ. Ελευθέριος Cheirakis",
    "about.hero.title": "Μαιευτήρας Γυναικολόγος",
    "about.hero.specialty": "Υποβοηθούμενη Αναπαραγωγή & Ενδοσκοπική Χειρουργική",
    "about.hero.experience": "15+ χρόνια κλινικής εμπειρίας",
    "about.hero.description": "Εξειδικευμένος στη θεραπεία υπογονιμότητας, εξωσωματική γονιμοποίηση (IVF), ενδομητρίωση, ελάχιστα επεμβατική χειρουργική και μαιευτική παρακολούθηση εγκυμοσυνών υψηλού κινδύνου.",
    "about.education.title": "Εκπαίδευση & Πιστοποιήσεις",
    "about.education.intro": "Η ακαδημαϊκή μου κατάρτιση συνδυάζει θεμελιώδη ιατρική εκπαίδευση με εξειδικευμένες σπουδές σε κορυφαία ευρωπαϊκά κέντρα αριστείας.",
    "about.education.medical.title": "Πτυχίο Ιατρικής",
    "about.education.medical.description": "Απόφοιτος της Ιατρικής Σχολής του Πανεπιστημίου Ιατρικής και Φαρμακευτικής 'Grigore T. Popa' στο Iasi της Ρουμανίας, όπου απέκτησα ολοκληρωμένη κατάρτιση στις βασικές ιατρικές επιστήμες και την κλινική πρακτική.",
    "about.education.msc.title": "Μεταπτυχιακό Δίπλωμα Υποβοηθούμενης Αναπαραγωγής",
    "about.education.msc.description": "Ολοκλήρωσα το MSc στην Υποβοηθούμενη Αναπαραγωγή στο Port Royal του Παρισιού, ένα από τα πιο διακεκριμένα κέντρα γονιμότητας στην Ευρώπη. Η εκπαίδευσή μου εστίασε σε προηγμένες τεχνικές IVF, διαχείριση υπογονιμότητας και εξατομικευμένα πρωτόκολλα θεραπείας.",
    "about.education.endoscopy.title": "Διπλώματα Ενδοσκοπικής Χειρουργικής",
    "about.education.endoscopy.description": "Κάτοχος των διπλωμάτων Bachelor in Endoscopy – Level 1 και Level 2 από το Κολλέγιο Ενδοσκοπικής Χειρουργικής (CICE). Η εξειδίκευση αυτή μου επιτρέπει να εκτελώ προηγμένες λαπαροσκοπικές και υστεροσκοπικές επεμβάσεις με ελάχιστη επεμβατικότητα.",
    "about.education.laser.title": "Πιστοποιητικά Κολπικού Laser",
    "about.education.laser.description": "Εκπαιδευμένος στη χρήση της τεχνολογίας κολπικού laser για τη θεραπεία γυναικολογικών παθήσεων, συμπεριλαμβανομένης της ατροφίας κόλπου και της ακράτειας ούρων.",
    "about.education.conferences.title": "Συνεχής Ιατρική Εκπαίδευση",
    "about.education.conferences.description": "Συμμετέχω ενεργά σε διεθνή συνέδρια και εκπαιδευτικά προγράμματα μαιευτικής, γυναικολογίας και υποβοηθούμενης αναπαραγωγής, διατηρώντας τις γνώσεις μου ενημερωμένες με τις τελευταίες επιστημονικές εξελίξεις.",
    "about.experience.title": "Επαγγελματική Εμπειρία",
    "about.experience.intro": "Η κλινική μου πορεία περιλαμβάνει συνεργασίες με κορυφαία ιατρικά κέντρα στην Ελλάδα και το εξωτερικό, όπου απέκτησα πολύτιμη εμπειρία στη διαχείριση σύνθετων περιπτώσεων.",
    "about.experience.current.title": "Τρέχουσες Θέσεις στην Ελλάδα",
    "about.experience.current.embryoland.role": "Σύμβουλος Υποβοηθούμενης Αναπαραγωγής",
    "about.experience.current.embryoland.location": "Embryoland - Κέντρο Εξωσωματικής Γονιμοποίησης",
    "about.experience.current.embryoland.description": "Παρέχω ολοκληρωμένες υπηρεσίες γονιμότητας, συμπεριλαμβανομένων προγραμμάτων IVF, ICSI, κρυοσυντήρησης ωαρίων και εμβρύων, και εξατομικευμένων πρωτοκόλλων θεραπείας για ζευγάρια με προβλήματα γονιμότητας.",
    "about.experience.current.rea.role": "Μαιευτήρας-Γυναικολόγος",
    "about.experience.current.rea.location": "REA Μαιευτική Κλινική & Γυναικολογικό Κέντρο",
    "about.experience.current.rea.description": "Εξειδίκευση στη μαιευτική παρακολούθηση εγκυμοσυνών, διαχείριση εγκυμοσυνών υψηλού κινδύνου και γυναικολογικές επεμβάσεις.",
    "about.experience.current.tzaneio.role": "Σύμβουλος Μαιευτήρας-Γυναικολόγος",
    "about.experience.current.tzaneio.location": "Γενικό Νοσοκομείο Τζάνειο - Πειραιάς",
    "about.experience.current.tzaneio.description": "Κλινική πρακτική σε δημόσιο νοσοκομείο με εστίαση στην οξεία μαιευτική φροντίδα, τοκετούς και επείγουσες γυναικολογικές παθήσεις.",
    "about.experience.current.diamantis.role": "Μαιευτήρας-Γυναικολόγος",
    "about.experience.current.diamantis.location": "Διαμάντης Ιατρικό Κέντρο",
    "about.experience.current.diamantis.description": "Προσφορά γυναικολογικών υπηρεσιών, προληπτικής φροντίδας και χειρουργικών επεμβάσεων.",
    "about.experience.current.euromedica.role": "Μαιευτήρας-Γυναικολόγος",
    "about.experience.current.euromedica.location": "EuroMedica - Αίγινα",
    "about.experience.current.euromedica.description": "Παροχή γυναικολογικών και μαιευτικών υπηρεσιών στο νησί της Αίγινας, διασφαλίζοντας ποιοτική φροντίδα υγείας για τις γυναίκες της περιοχής.",
    "about.experience.international.title": "Διεθνής Εμπειρία - Γαλλία",
    "about.experience.international.santulli.role": "Fellow στην Υποβοηθούμενη Αναπαραγωγή",
    "about.experience.international.santulli.location": "Ομάδα του Καθηγητή Paolo Santulli - Παρίσι",
    "about.experience.international.santulli.description": "Προηγμένη εκπαίδευση στην υποβοηθούμενη αναπαραγωγή, ενδομητρίωση και χειρουργικές τεχνικές υπό την καθοδήγηση αναγνωρισμένων διεθνών ειδικών.",
    "about.experience.international.saint_joseph.role": "Resident στη Μαιευτική-Γυναικολογία",
    "about.experience.international.saint_joseph.location": "Hôpital Saint Joseph - Παρίσι",
    "about.experience.international.saint_joseph.description": "Κλινική κατάρτιση σε γενική μαιευτική, γυναικολογία και χειρουργικές τεχνικές.",
    "about.experience.international.port_royal.role": "Resident στη Μαιευτική-Γυναικολογία & Υποβοηθούμενη Αναπαραγωγή",
    "about.experience.international.port_royal.location": "Port Royal Maternity Hospital - Παρίσι",
    "about.experience.international.port_royal.description": "Εργασία σε ένα από τα πιο διάσημα μαιευτήρια στην Ευρώπη, με εξειδίκευση στις προηγμένες τεχνικές IVF και τη διαχείριση περίπλοκων περιπτώσεων γονιμότητας.",
    "about.experience.international.tenon.role": "Resident στη Μαιευτική-Γυναικολογία",
    "about.experience.international.tenon.location": "Hôpital Tenon - Παρίσι",
    "about.experience.international.tenon.description": "Πολύπλευρη κλινική εμπειρία σε μαιευτική, γυναικολογία και επείγοντα περιστατικά.",
    "about.experience.international.other.description": "Επιπλέον κλινική εμπειρία στα νοσοκομεία Victor Dupuy και άλλα κέντρα στη Γαλλία, όπου ανέπτυξα εξειδίκευση σε διάφορες πτυχές της μαιευτικής και της γυναικολογίας.",
    "about.experience.greece_other.title": "Προηγούμενη Εμπειρία στην Ελλάδα",
    "about.experience.greece_other.bladi.role": "Μαιευτήρας-Γυναικολόγος",
    "about.experience.greece_other.bladi.location": "Κλινική Αριστείδη Μπλάδη",
    "about.experience.greece_other.bladi.description": "Κλινική πρακτική με εστίαση στη γυναικολογία και τη μαιευτική φροντίδα.",
    "about.experience.greece_other.military.role": "Ιατρός Στρατού",
    "about.experience.greece_other.military.location": "Στρατιωτική Ιατρική Υπηρεσία",
    "about.experience.greece_other.military.description": "Παροχή ιατρικών υπηρεσιών κατά τη διάρκεια της στρατιωτικής θητείας.",
    "about.expertise.title": "Ιατρική Εξειδίκευση",
    "about.expertise.intro": "Οι κλινικές μου εξειδικεύσεις καλύπτουν ένα ευρύ φάσμα γυναικολογικών και μαιευτικών παθήσεων, με ιδιαίτερη έμφαση στην υποβοηθούμενη αναπαραγωγή και την ελάχιστα επεμβατική χειρουργική.",
    "about.expertise.areas.endometriosis.title": "Ενδομητρίωση",
    "about.expertise.areas.endometriosis.description": "Διάγνωση και θεραπεία της ενδομητρίωσης με χρήση προηγμένων ενδοσκοπικών τεχνικών και ολιστικής προσέγγισης για τη βελτίωση της ποιότητας ζωής και της γονιμότητας.",
    "about.expertise.areas.robotics.title": "Ρομποτική Χειρουργική",
    "about.expertise.areas.robotics.description": "Εξοικείωση με ρομποτικά συστήματα για την εκτέλεση πολύπλοκων γυναικολογικών επεμβάσεων με μέγιστη ακρίβεια και ελάχιστο τραύμα για την ασθενή.",
    "about.expertise.areas.ivf.title": "Εξωσωματική Γονιμοποίηση (IVF) & Mini IVF",
    "about.expertise.areas.ivf.description": "Προσφορά ολοκληρωμένων προγραμμάτων IVF, συμπεριλαμβανομένων πρωτοκόλλων mini IVF για ήπια διέγερση, προσαρμοσμένων στις ατομικές ανάγκες κάθε ασθενούς.",
    "about.expertise.areas.infertility.title": "Διαχείριση Υπογονιμότητας",
    "about.expertise.areas.infertility.description": "Διερεύνηση και θεραπεία ανδρικών και γυναικείων παραγόντων υπογονιμότητας με βάση τις πιο πρόσφατες επιστημονικές κατευθυντήριες οδηγίες.",
    "about.expertise.areas.cryopreservation.title": "Κρυοσυντήρηση Ωαρίων",
    "about.expertise.areas.cryopreservation.description": "Προγράμματα κρυοσυντήρησης ωαρίων για διατήρηση της γονιμότητας για ιατρικούς ή προσωπικούς λόγους.",
    "about.expertise.areas.obstetrics.title": "Μαιευτική Παρακολούθηση",
    "about.expertise.areas.obstetrics.description": "Εξατομικευμένη μαιευτική φροντίδα, από την προσύλληψη έως τον τοκετό, με ιδιαίτερη προσοχή στις εγκυμοσύνες υψηλού κινδύνου και τις πολύδυμες κυήσεις.",
    "about.languages.title": "Γλώσσες",
    "about.languages.intro": "Η πολυγλωσσία μου επιτρέπει την αποτελεσματική επικοινωνία με ασθενείς από διαφορετικά πολιτισμικά υπόβαθρα.",
    "about.languages.greek": "Ελληνικά (Μητρική)",
    "about.languages.english": "Αγγλικά (C2 - Επίπεδο Proficiency)",
    "about.languages.french": "Γαλλικά (C1 - Προχωρημένο)",
    "about.languages.romanian": "Ρουμανικά (B2 - Ανώτερο Μεσαίο)",
    "about.philosophy.title": "Φιλοσοφία Φροντίδας",
    "about.philosophy.text": "Η ιατρική μου πρακτική βασίζεται σε τρεις θεμελιώδεις αρχές: εξατομικευμένη φροντίδα, επιστήμη βασισμένη σε αποδείξεις και ανθρωποκεντρική προσέγγιση. Πιστεύω ότι κάθε ασθενής είναι μοναδική και χρειάζεται ένα προσαρμοσμένο σχέδιο θεραπείας που λαμβάνει υπόψη όχι μόνο την ιατρική της κατάσταση, αλλά και τις συναισθηματικές, κοινωνικές και προσωπικές της ανάγκες. Συνδυάζω την επιστημονική μου κατάρτιση από διεθνή κέντρα αριστείας με μια ολιστική προσέγγιση που τοποθετεί την ασθενή στο κέντρο κάθε απόφασης. Ο σεβασμός, η ειλικρινής επικοινωνία και η συμπόνια είναι οι πυλώνες της σχέσης μου με κάθε ασθενή. Στόχος μου είναι να δημιουργήσω ένα ασφαλές περιβάλλον όπου οι γυναίκες αισθάνονται άνετα να μοιράζονται τις ανησυχίες τους και να λαμβάνουν την υποστήριξη που χρειάζονται σε κάθε στάδιο της αναπαραγωγικής και γυναικολογικής τους υγείας.",

    // Services Page
    "services.page.title": "Οι Υπηρεσίες μας",
    "services.page.subtitle": "Προσφέρουμε ένα ολοκληρωμένο φάσμα γυναικολογικών υπηρεσιών με εξειδίκευση και συμπόνια",
    "services.viewAll": "Προβολή Όλων των Υπηρεσιών",
    "services.cta.title": "Χρειάζεστε Βοήθεια;",
    "services.cta.subtitle": "Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες σχετικά με τις υπηρεσίες μας",

    // Service Categories
    "services.category.gynecology": "ΓΥΝΑΙΚΟΛΟΓΙΑ",
    "services.category.reproduction": "ΥΠΟΒΟΗΘΟΥΜΕΝΗ ΑΝΑΠΑΡΑΓΩΓΗ",
    "services.category.surgery": "ΕΝΔΟΣΚΟΠΙΚΗ ΧΕΙΡΟΥΡΓΙΚΗ",
    "services.category.pregnancy": "ΕΓΚΥΜΟΣΥΝΗ",
    "services.readMore": "Περισσότερα",

    // Gynecology Page
    "services.gynecology.title": "ΓΥΝΑΙΚΟΛΟΓΙΑ",
    "services.gynecology.intro":
      "Προσφέρουμε εξειδικευμένες υπηρεσίες γυναικολογίας με σύγχρονες μεθόδους διάγνωσης και θεραπείας.",
    "services.gynecology.imageAlt": "Υπηρεσίες Γυναικολογίας",
    "services.gynecology.endometriosis.title": "Ενδομητρίωση",

    "services.gynecology.adenomyosis.title": "Αδενομύωση",
    "services.gynecology.adenomyosis.description":
      "Ο ενδομητρικός ιστός εισχωρεί στο μυϊκό τοίχωμα της μήτρας, προκαλώντας έντονη περίοδο και πόνο.",
    "services.gynecology.deepEndometriosis.title": "Εν τω βάθει ενδομητρίωση",
    "services.gynecology.deepEndometriosis.description":
      "Πιο σοβαρή μορφή που επηρεάζει βαθύτερους ιστούς και μπορεί να επηρεάσει έντερα, ουροδόχο κύστη και πυελικό πόνο.",
    "services.gynecology.endometrioma.title": "Ενδομητρίωμα – Κύστες Ενδομητρίωσης",
    "services.gynecology.endometrioma.description": "Κύστεις που σχηματίζονται στις ωοθήκες από ενδομητριωσικό ιστό.",
    "services.gynecology.uterineFibroids.title": "Ινομυώματα μήτρας",
    "services.gynecology.uterineFibroids.description":
      "Καλοήθεις όγκοι της μήτρας που μπορεί να προκαλέσουν βαριά περίοδο, πόνο ή δυσκολία σύλληψης.",
    "services.gynecology.polycysticOvaries.title": "Πολυκυστικές ωοθήκες",
    "services.gynecology.polycysticOvaries.description":
      "Ορμονική διαταραχή που σχετίζεται με ακανόνιστο κύκλο, τριχοφυΐα και δυσκολία στη σύλληψη.",
    "services.gynecology.dysmenorrhea.title": "Δυσμηνόρροια",
    "services.gynecology.dysmenorrhea.description": "Επώδυνη περίοδος που μπορεί να επηρεάζει την καθημερινότητα.",
    "services.gynecology.menopause.title": "Εμμηνόπαυση",
    "services.gynecology.menopause.description":
      "Φάση κατά την οποία σταματά η περίοδος, συνοδευόμενη από ορμονικές αλλαγές και συμπτώματα όπως εξάψεις.",

    // Assisted Reproduction Page
    "services.assistedReproduction.title": "ΥΠΟΒΟΗΘΟΥΜΕΝΗ ΑΝΑΠΑΡΑΓΩΓΗ",
    "services.assistedReproduction.intro":
      "Παρέχουμε ολοκληρωμένες υπηρεσίες υποβοηθούμενης αναπαραγωγής με προηγμένες τεχνολογίες.",
    "services.assistedReproduction.imageAlt": "Υπηρεσίες Υποβοηθούμενης Αναπαραγωγής",
    "services.assistedReproduction.fertilityInvestigation.title": "Διερεύνηση γονιμότητας",
    "services.assistedReproduction.fertilityInvestigation.description":
      "Έλεγχος ζευγαριού ή ατόμων για τους πιθανούς λόγους υπογονιμότητας.",
    "services.assistedReproduction.maleInfertility.title": "Α. Ανδρικός παράγοντας υπογονιμότητας",
    "services.assistedReproduction.maleInfertility.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τον ανδρικό παράγοντα.",
    "services.assistedReproduction.femaleInfertility.title": "Β. Γυναικείος παράγοντας υπογονιμότητας",
    "services.assistedReproduction.femaleInfertility.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τον γυναικείο παράγοντα.",
    "services.assistedReproduction.eggFreezing.title": "Κρυοσυντήρηση ωαρίων",
    "services.assistedReproduction.eggFreezing.description": "Διατήρηση γονιμότητας για μελλοντική χρήση.",
    "services.assistedReproduction.ivf.title": "Εξωσωματική γονιμοποίηση",
    "services.assistedReproduction.ivf.description":
      "Ένωση ωαρίου και σπέρματος στο εργαστήριο και μεταφορά εμβρύου στη μήτρα.",
    "services.assistedReproduction.miniIvf.title": "Mini IVF",
    "services.assistedReproduction.miniIvf.description": "Ηπιότερη μορφή εξωσωματικής με λιγότερη φαρμακευτική αγωγή.",
    "services.assistedReproduction.iui.title": "Ενδομητρική σπερματέγχυση",
    "services.assistedReproduction.iui.description":
      "Τοποθέτηση επεξεργασμένου σπέρματος στη μήτρα για ενίσχυση της σύλληψης.",
    "services.assistedReproduction.pgt.title": "Προεμφυτευτικός έλεγχος",
    "services.assistedReproduction.pgt.description": "Γενετικός έλεγχος εμβρύων πριν τη μεταφορά.",
    "services.assistedReproduction.donorEggsSperm.title": "Δωρεά ωαρίων και σπέρματος",
    "services.assistedReproduction.donorEggsSperm.description":
      "Επιλογή για γυναίκες/ζευγάρια που δεν μπορούν να χρησιμοποιήσουν δικά τους γαμετά.",
    "services.assistedReproduction.surrogacy.title": "Παρένθετη μητρότητα",
    "services.assistedReproduction.surrogacy.description": "Επιλογή για γυναίκες που δεν μπορούν να κυοφορήσουν.",

    // Endoscopic Surgery Page
    "services.endoscopicSurgery.title": "ΕΝΔΟΣΚΟΠΙΚΗ ΧΕΙΡΟΥΡΓΙΚΗ",
    "services.endoscopicSurgery.intro":
      "Εξειδικευμένες ενδοσκοπικές χειρουργικές επεμβάσεις με ελάχιστα επεμβατικές τεχνικές.",
    "services.endoscopicSurgery.imageAlt": "Υπηρεσίες Ενδοσκοπικής Χειρουργικής",
    "services.endoscopicSurgery.hysteroscopy.title": "Υστεροσκόπηση",
    "services.endoscopicSurgery.hysteroscopy.description":
      "Ενδοσκοπικός έλεγχος της μήτρας για διάγνωση και θεραπεία προβλημάτων.",
    "services.endoscopicSurgery.laparoscopy.title": "Λαπαροσκόπηση",
    "services.endoscopicSurgery.laparoscopy.description": "Ελάχιστα επεμβατική χειρουργική στην κοιλιά και τη λεκάνη.",
    "services.endoscopicSurgery.roboticSurgery.title": "Ρομποτική Χειρουργική",
    "services.endoscopicSurgery.roboticSurgery.description":
      "Πιο ακριβής χειρουργική με σύστημα ρομποτικής καθοδήγησης.",

    // Pregnancy Page
    "services.pregnancy.title": "ΕΓΚΥΜΟΣΥΝΗ",
    "services.pregnancy.intro": "Πλήρης υποστήριξη και παρακολούθηση εγκυμοσύνης με σύγχρονες μεθόδους.",
    "services.pregnancy.imageAlt": "Υπηρεσίες Εγκυμοσύνης",
    "services.pregnancy.prenatalScreening.title": "Προγεννητικός Έλεγχος",
    "services.pregnancy.prenatalScreening.description":
      "Έλεγχος υγείας μητέρας και εμβρύου κατά τη διάρκεια της εγκυμοσύνης.",
    "services.pregnancy.nipt.title": "Μη Επεμβατικός Προγεννητικός Έλεγχος (NIPT)",
    "services.pregnancy.nipt.description": "Μη επεμβατικός έλεγχος για χρωμοσωμικές ανωμαλίες.",
    "services.pregnancy.ultrasound3d4d.title": "Υπερηχογράφημα 3D-4D",
    "services.pregnancy.ultrasound3d4d.description": "Τρισδιάστατες απεικονίσεις του μωρού.",
    "services.pregnancy.delivery.title": "Τοκετός",
    "services.pregnancy.delivery.description": "Φυσιολογικός τοκετός ή καισαρική ανάλογα με τις ανάγκες.",
    "services.pregnancy.vbac.title": "Φυσιολογικός τοκετός μετά από καισαρική",
    "services.pregnancy.vbac.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τον φυσιολογικό τοκετό μετά από καισαρική.",
    "services.pregnancy.twinPregnancy.title": "Δίδυμη κύηση",
    "services.pregnancy.twinPregnancy.description": "Εδώ θα προστεθεί λεπτομερής περιγραφή για τη δίδυμη κύηση.",

    // Gynecology Services
    "services.gynecology.endometriosis": "Ενδομητρίωση",
    "services.gynecology.endometriosis.desc": "Διάγνωση και θεραπεία της ενδομητρίωσης με σύγχρονες μεθόδους.",
    "services.gynecology.adenomyosis": "Αδενομύωση",
    "services.gynecology.adenomyosis.desc": "Εξειδικευμένη φροντίδα για την αντιμετώπιση της αδενομύωσης.",
    "services.gynecology.deepEndometriosis": "Εν τω βάθει ενδομητρίωση",
    "services.gynecology.deepEndometriosis.desc": "Προηγμένη διαχείριση της εν τω βάθει ενδομητρίωσης.",
    "services.gynecology.endometrioma": "Ενδομητρίωμα – Κύστες Ενδομητρίωσης",
    "services.gynecology.endometrioma.desc": "Θεραπεία ενδομητριώματος και κύστεων ενδομητρίωσης.",
    "services.gynecology.fibroids": "Ινομυώματα μήτρας",
    "services.gynecology.fibroids.desc": "Διαχείριση και θεραπεία ινομυωμάτων της μήτρας.",
    "services.gynecology.pcos": "Πολυκυστικές ωοθήκες",
    "services.gynecology.pcos.desc": "Θεραπεία και παρακολούθηση του συνδρόμου πολυκυστικών ωοθηκών.",
    "services.gynecology.dysmenorrhea": "Δυσμηνόρροια",
    "services.gynecology.dysmenorrhea.desc": "Αντιμετώπιση της επώδυνης εμμηνορρυσίας.",
    "services.gynecology.menopause": "Εμμηνόπαυση",
    "services.gynecology.menopause.desc": "Υποστήριξη και θεραπεία κατά την περίοδο της εμμηνόπαυσης.",

    // Assisted Reproduction Services
    "services.reproduction.investigation": "Διερεύνηση γονιμότητας",
    "services.reproduction.investigation.desc": "Πλήρης διερεύνηση της γονιμότητας για ζευγάρια.",
    "services.reproduction.maleFactor": "Ανδρικός παράγοντας υπογονιμότητας",
    "services.reproduction.maleFactor.desc": "Αξιολόγηση και αντιμετώπιση ανδρικής υπογονιμότητας.",
    "services.reproduction.femaleFactor": "Γυναικείος παράγοντας υπογονιμότητας",
    "services.reproduction.femaleFactor.desc": "Διάγνωση και θεραπεία γυναικείας υπογονιμότητας.",
    "services.reproduction.eggFreezing": "Κρυοσυντήρηση ωαρίων",
    "services.reproduction.eggFreezing.desc": "Κρυοσυντήρηση ωαρίων για μελλοντική χρήση.",
    "services.reproduction.ivf": "Εξωσωματική γονιμοποίηση",
    "services.reproduction.ivf.desc": "Πλήρες πρόγραμμα εξωσωματικής γονιμοποίησης.",
    "services.reproduction.miniIvf": "Mini IVF",
    "services.reproduction.miniIvf.desc": "Ήπια πρωτόκολλα εξωσωματικής γονιμοποίησης.",
    "services.reproduction.iui": "Ενδομητρική σπερματέγχυση",
    "services.reproduction.iui.desc": "Ενδομητρική σπερματέγχυση ως επιλογή θεραπείας.",
    "services.reproduction.pgt": "Προεμφυτευτικός έλεγχος",
    "services.reproduction.pgt.desc": "Γενετικός έλεγχος εμβρύων πριν την εμφύτευση.",
    "services.reproduction.donor": "Δωρεά ωαρίων και σπέρματος",
    "services.reproduction.donor.desc": "Προγράμματα δωρεάς γαμετών.",
    "services.reproduction.surrogacy": "Παρένθετη μητρότητα",
    "services.reproduction.surrogacy.desc": "Υποστήριξη σε προγράμματα παρένθετης μητρότητας.",

    // Endoscopic Surgery Services
    "services.surgery.hysteroscopy": "Υστεροσκόπηση",
    "services.surgery.hysteroscopy.desc": "Διαγνωστική και θεραπευτική υστεροσκόπηση.",
    "services.surgery.laparoscopy": "Λαπαροσκόπηση",
    "services.surgery.laparoscopy.desc": "Ελάχιστα επεμβατική λαπαροσκοπική χειρουργική.",
    "services.surgery.robotic": "Ρομποτική Χειρουργική",
    "services.surgery.robotic.desc": "Προηγμένη ρομποτική χειρουργική με υψηλή ακρίβεια.",

    // Pregnancy Services
    "services.pregnancy.prenatal": "Προγεννητικός Έλεγχος",
    "services.pregnancy.prenatal.desc": "Πλήρης προγεννητικός έλεγχος και παρακολούθηση.",
    "services.pregnancy.nipt": "Μη Επεμβατικός Προγεννητικός Έλεγχος (NIPT)",
    "services.pregnancy.nipt.desc": "Προηγμένος μη επεμβατικός προγεννητικός έλεγχος.",
    "services.pregnancy.ultrasound": "ΥΠΕΡΗΧΟΓΡΑΦΗΜΑ 3D-4D",
    "services.pregnancy.ultrasound.desc": "Υπερηχογραφήματα υψηλής ανάλυσης 3D και 4D.",
    "services.pregnancy.delivery": "Τοκετός",
    "services.pregnancy.delivery.desc": "Υποστήριξη και παρακολούθηση τοκετού.",
    "services.pregnancy.vbac": "Φυσιολογικός τοκετός μετά από καισαρική",
    "services.pregnancy.vbac.desc": "Υποστήριξη φυσιολογικού τοκετού μετά από καισαρική τομή.",
    "services.pregnancy.twins": "Δίδυμη κύηση",
    "services.pregnancy.twins.desc": "Εξειδικευμένη παρακολούθηση δίδυμης εγκυμοσύνης.",

    "service.general.title": "Γενική Γυναικολογία",
    "service.general.desc": "Εξετάσεις ρουτίνας, τεστ Παπ, και προληπτική φροντίδα για τη γυναικεία υγεία.",

    "service.obstetrics.title": "Μαιευτική",
    "service.obstetrics.desc": "Προγεννητική φροντίδα, παρακολούθηση εγκυμοσύνης και συμβουλευτική τοκετού.",

    "service.fertility.title": "Θεραπείες Γονιμότητας",
    "service.fertility.desc": "Διάγνωση και θεραπεία υπογονιμότητας, IVF και υποβοηθούμενη αναπαραγωγή.",

    "service.prenatal.title": "Προγεννητική Φροντίδα",
    "service.prenatal.desc": "Ολοκληρωμένη φροντίδα για υγιεινή εγκυμοσύνη και ανάπτυξη εμβρύου.",

    "service.screening.title": "Προληπτικός Έλεγχος",
    "service.screening.desc": "Μαστογραφίες, οστεοπόρωση και άλλοι προληπτικοί έλεγχοι.",

    "service.menopause.title": "Διαχείριση Εμμηνόπαυσης",
    "service.menopause.desc": "Υποστήριξη και θεραπείες για τα συμπτώματα της εμμηνόπαυσης.",

    // Carousel Services
    "carousel.gynecology": "ΓΥΝΑΙΚΟΛΟΓΙΑ",
    "carousel.reproduction": "ΥΠΟΒΟΗΘΟΥΜΕΝΗ ΑΝΑΠΑΡΑΓΩΓΗ",
    "carousel.surgery": "ΕΝΔΟΣΚΟΠΙΚΗ ΧΕΙΡΟΥΡΓΙΚΗ",
    "carousel.pregnancy": "ΕΓΚΥΜΟΣΥΝΗ",

    // Hero Carousel
    "heroCarousel.slide1.title": "Δρ. Ελευθέριος Χειράκης – Μαιευτήρας-Γυναικολόγος",
    "heroCarousel.slide1.subtitle": "Εξειδικευμένη Φροντίδα στη Γυναικολογία, προσφέροντας εξατομικευμένη ιατρική φροντίδα με συμπόνια και επαγγελματισμό.",
    "heroCarousel.slide1.button": "Επικοινωνία",
    "heroCarousel.slide2.title": "Γυναικολογία",
    "heroCarousel.slide2.subtitle": "Ολοκληρωμένη γυναικολογική φροντίδα με ρουτίνες ελέγχων και εξειδικευμένες θεραπείες.",
    "heroCarousel.slide2.button": "Διαβάστε Περισσότερα",
    "heroCarousel.slide3.title": "Εγκυμοσύνη",
    "heroCarousel.slide3.subtitle": "Δίπλα σας από τη σύλληψη, καθοδηγώντας σας σε κάθε βήμα της εγκυμοσύνης για μια ασφαλή και άνετη εμπειρία τοκετού.",
    "heroCarousel.slide3.button": "Διαβάστε Περισσότερα",
    "heroCarousel.slide4.title": "Ενδοσκοπική Χειρουργική",
    "heroCarousel.slide4.subtitle": "Χειρουργική Υψηλής Ευκρίνειας: Ελάχιστη παρέμβαση, μέγιστο αποτέλεσμα.",
    "heroCarousel.slide4.button": "Διαβάστε Περισσότερα",
    "heroCarousel.slide5.title": "Υποβοηθούμενη Αναπαραγωγή",
    "heroCarousel.slide5.subtitle": "Εξατομικευμένες λύσεις γονιμότητας για άτομα και ζευγάρια.",
    "heroCarousel.slide5.button": "Διαβάστε Περισσότερα",

    // Doctor Section
    "doctor.title": "Ο Γιατρός",
    "doctor.intro":
      "Ο Δρ. Ελευθέριος Cheirakis είναι Μαιευτήρας-Γυναικολόγος με διεθνή εξειδίκευση στην Υποβοηθούμενη Αναπαραγωγή (IVF) και την Ελάχιστα Επεμβατική Χειρουργική. Με χρόνια εμπειρίας σε διακεκριμένα κέντρα της Ελλάδας και του Παρισιού (Port Royal), παρέχει εξειδικευμένη φροντίδα στη διαχείριση υπογονιμότητας, την αντιμετώπηση της ενδομητρίωσης και την μαιευτική παρακολούθηση (συμπεριλαμβανομένων των κυήσεων υψηλού κινδύνου). Η φιλοσοφία του συνδυάζει την επιστημονική αριστεία με την ανθρωποκεντρική προσέγγιση και την εξατομικευμένη θεραπεία.",
    "doctor.readMore": "Περισσότερα",
    "doctor.imageAlt": "Δρ. Ελευθέριος Cheirakis - Μαιευτήρας-Γυναικολόγος",

    // Offices
    "offices.title": "Τα Γραφεία μας",
    "offices.athens.title": "Αθήνα: Leof. Vasileos Georgiou B 4, Pireas 185 34",
    "offices.aegina.title": "Αίγινα: Νοσοκομείου 5, 180 10 Αίγινα",

    // Contact CTA
    "contactCta.title": "Έτοιμοι να Κλείσετε Ραντεβού;",
    "contactCta.subtitle": "Επικοινωνήστε μαζί μας σήμερα για να κανονίσουμε τη συνάντησή σας.",
    "contactCta.button": "Επικοινωνία",

    // Contact
    "contact.title": "Επικοινωνήστε μαζί μας",
    "contact.subtitle": "Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας",
    "contact.name": "Ονοματεπώνυμο",
    "contact.email": "Email",
    "contact.phone": "Τηλέφωνο",
    "contact.message": "Μήνυμα",
    "contact.send": "Αποστολή Μηνύματος",
    "contact.info.title": "Πληροφορίες Επικοινωνίας",
    "contact.address": "Διεύθυνση",
    "contact.address.value": "Αθήνα: Leof. Vasileos Georgiou B 4, Pireas 185 34\nΑίγινα: Νοσοκομείου 5, 180 10 Αίγινα",
    "contact.hours": "Ωράριο",
    "contact.hours.value": "Δευτ-Παρ: 09:00 - 20:00",

    // Footer
    "footer.description": "Παρέχοντας εξειδικευμένη γυναικολογική φροντίδα με συμπόνια και επαγγελματισμό.",
    "footer.rights": "Όλα τα δικαιώματα κατοχυρωμένα.",
    "footer.name": "Dr. Cheirakis",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "The Doctor",
    "nav.services": "Services",
    "nav.allServices": "All Services",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Specialized Care in Gynecology",
    "hero.subtitle": "Providing personalized medical care with compassion and professionalism",
    "hero.cta": "Contact",

    // About
    "about.seo.title": "The Doctor | Dr. Eleftherios Cheirakis - Obstetrician Gynecologist Piraeus",
    "about.seo.description": "Dr. Eleftherios Cheirakis - Expert obstetrician-gynecologist with international experience in assisted reproduction, IVF, endoscopic surgery and high-risk obstetrics. Piraeus & Aegina.",
    "about.title": "The Doctor",
    "about.subtitle": "Obstetrician-Gynecologist with international specialization in Assisted Reproduction, In Vitro Fertilization and Endoscopic Surgery. Over 15 years of experience in leading medical centers in Greece and abroad.",
    "about.hero.name": "Dr. Eleftherios Cheirakis",
    "about.hero.title": "Obstetrician Gynecologist",
    "about.hero.specialty": "Assisted Reproduction & Endoscopic Surgery",
    "about.hero.experience": "15+ years of clinical experience",
    "about.hero.description": "Specialized in infertility treatment, in vitro fertilization (IVF), endometriosis, minimally invasive surgery and obstetric monitoring of high-risk pregnancies.",
    "about.education.title": "Education & Certifications",
    "about.education.intro": "My academic training combines fundamental medical education with specialized studies at leading European centers of excellence.",
    "about.education.medical.title": "Medical Degree",
    "about.education.medical.description": "Graduate of the Medical School of the University of Medicine and Pharmacy 'Grigore T. Popa' in Iasi, Romania, where I acquired comprehensive training in basic medical sciences and clinical practice.",
    "about.education.msc.title": "Master's Degree in Assisted Reproduction",
    "about.education.msc.description": "I completed my MSc in Assisted Reproduction at Port Royal in Paris, one of the most distinguished fertility centers in Europe. My training focused on advanced IVF techniques, infertility management and personalized treatment protocols.",
    "about.education.endoscopy.title": "Endoscopic Surgery Certificates",
    "about.education.endoscopy.description": "Holder of Bachelor in Endoscopy – Level 1 and Level 2 certificates from the College of Endoscopic Surgery (CICE). This specialization allows me to perform advanced laparoscopic and hysteroscopic procedures with minimal invasiveness.",
    "about.education.laser.title": "Vaginal Laser Certificates",
    "about.education.laser.description": "Trained in the use of vaginal laser technology for the treatment of gynecological conditions, including vaginal atrophy and urinary incontinence.",
    "about.education.conferences.title": "Continuous Medical Education",
    "about.education.conferences.description": "I actively participate in international congresses and educational programs in obstetrics, gynecology and assisted reproduction, keeping my knowledge updated with the latest scientific developments.",
    "about.experience.title": "Professional Experience",
    "about.experience.intro": "My clinical career includes collaborations with leading medical centers in Greece and abroad, where I gained valuable experience in managing complex cases.",
    "about.experience.current.title": "Current Positions in Greece",
    "about.experience.current.embryoland.role": "Assisted Reproduction Consultant",
    "about.experience.current.embryoland.location": "Embryoland - IVF Center",
    "about.experience.current.embryoland.description": "I provide comprehensive fertility services, including IVF programs, ICSI, egg and embryo cryopreservation, and personalized treatment protocols for couples with fertility problems.",
    "about.experience.current.rea.role": "Obstetrician-Gynecologist",
    "about.experience.current.rea.location": "REA Maternity Clinic & Gynecological Center",
    "about.experience.current.rea.description": "Specialization in obstetric pregnancy monitoring, high-risk pregnancy management and gynecological procedures.",
    "about.experience.current.tzaneio.role": "Consultant Obstetrician-Gynecologist",
    "about.experience.current.tzaneio.location": "Tzaneio General Hospital - Piraeus",
    "about.experience.current.tzaneio.description": "Clinical practice in a public hospital with a focus on acute obstetric care, deliveries and emergency gynecological conditions.",
    "about.experience.current.diamantis.role": "Obstetrician-Gynecologist",
    "about.experience.current.diamantis.location": "Diamantis Medical Center",
    "about.experience.current.diamantis.description": "Provision of gynecological services, preventive care and surgical procedures.",
    "about.experience.current.euromedica.role": "Obstetrician-Gynecologist",
    "about.experience.current.euromedica.location": "EuroMedica - Aegina",
    "about.experience.current.euromedica.description": "Provision of gynecological and obstetric services on the island of Aegina, ensuring quality healthcare for women in the region.",
    "about.experience.international.title": "International Experience - France",
    "about.experience.international.santulli.role": "Fellow in Assisted Reproduction",
    "about.experience.international.santulli.location": "Professor Paolo Santulli's Team - Paris",
    "about.experience.international.santulli.description": "Advanced training in assisted reproduction, endometriosis and surgical techniques under the guidance of recognized international experts.",
    "about.experience.international.saint_joseph.role": "Resident in Obstetrics-Gynecology",
    "about.experience.international.saint_joseph.location": "Hôpital Saint Joseph - Paris",
    "about.experience.international.saint_joseph.description": "Clinical training in general obstetrics, gynecology and surgical techniques.",
    "about.experience.international.port_royal.role": "Resident in Obstetrics-Gynecology & Assisted Reproduction",
    "about.experience.international.port_royal.location": "Port Royal Maternity Hospital - Paris",
    "about.experience.international.port_royal.description": "Work at one of the most famous maternity hospitals in Europe, specializing in advanced IVF techniques and managing complex fertility cases.",
    "about.experience.international.tenon.role": "Resident in Obstetrics-Gynecology",
    "about.experience.international.tenon.location": "Hôpital Tenon - Paris",
    "about.experience.international.tenon.description": "Multifaceted clinical experience in obstetrics, gynecology and emergency cases.",
    "about.experience.international.other.description": "Additional clinical experience at Victor Dupuy Hospital and other centers in France, where I developed expertise in various aspects of obstetrics and gynecology.",
    "about.experience.greece_other.title": "Previous Experience in Greece",
    "about.experience.greece_other.bladi.role": "Obstetrician-Gynecologist",
    "about.experience.greece_other.bladi.location": "Aristidis Bladi Clinic",
    "about.experience.greece_other.bladi.description": "Clinical practice focusing on gynecology and obstetric care.",
    "about.experience.greece_other.military.role": "Army Doctor",
    "about.experience.greece_other.military.location": "Military Medical Service",
    "about.experience.greece_other.military.description": "Provision of medical services during military service.",
    "about.expertise.title": "Medical Expertise",
    "about.expertise.intro": "My clinical specialties cover a wide range of gynecological and obstetric conditions, with particular emphasis on assisted reproduction and minimally invasive surgery.",
    "about.expertise.areas.endometriosis.title": "Endometriosis",
    "about.expertise.areas.endometriosis.description": "Diagnosis and treatment of endometriosis using advanced endoscopic techniques and a holistic approach to improve quality of life and fertility.",
    "about.expertise.areas.robotics.title": "Robotic Surgery",
    "about.expertise.areas.robotics.description": "Familiarity with robotic systems for performing complex gynecological procedures with maximum precision and minimal trauma to the patient.",
    "about.expertise.areas.ivf.title": "In Vitro Fertilization (IVF) & Mini IVF",
    "about.expertise.areas.ivf.description": "Offering comprehensive IVF programs, including mini IVF protocols for mild stimulation, tailored to the individual needs of each patient.",
    "about.expertise.areas.infertility.title": "Infertility Management",
    "about.expertise.areas.infertility.description": "Investigation and treatment of male and female infertility factors based on the most recent scientific guidelines.",
    "about.expertise.areas.cryopreservation.title": "Egg Cryopreservation",
    "about.expertise.areas.cryopreservation.description": "Egg cryopreservation programs for fertility preservation for medical or personal reasons.",
    "about.expertise.areas.obstetrics.title": "Obstetric Monitoring",
    "about.expertise.areas.obstetrics.description": "Personalized obstetric care, from preconception to delivery, with special attention to high-risk pregnancies and multiple gestations.",
    "about.languages.title": "Languages",
    "about.languages.intro": "My multilingualism allows effective communication with patients from different cultural backgrounds.",
    "about.languages.greek": "Greek (Native)",
    "about.languages.english": "English (C2 - Proficiency Level)",
    "about.languages.french": "French (C1 - Advanced)",
    "about.languages.romanian": "Romanian (B2 - Upper Intermediate)",
    "about.philosophy.title": "Philosophy of Care",
    "about.philosophy.text": "My medical practice is based on three fundamental principles: personalized care, evidence-based science and a human-centered approach. I believe that every patient is unique and needs a customized treatment plan that takes into account not only her medical condition, but also her emotional, social and personal needs. I combine my scientific training from international centers of excellence with a holistic approach that places the patient at the center of every decision. Respect, honest communication and compassion are the pillars of my relationship with every patient. My goal is to create a safe environment where women feel comfortable sharing their concerns and receiving the support they need at every stage of their reproductive and gynecological health.",

    // Services Page
    "services.page.title": "Our Services",
    "services.page.subtitle": "We offer a comprehensive range of gynecological services with expertise and compassion",
    "services.viewAll": "View All Services",
    "services.cta.title": "Need Help?",
    "services.cta.subtitle": "Contact us for more information about our services",

    // Service Categories
    "services.category.gynecology": "GYNECOLOGY",
    "services.category.reproduction": "ASSISTED REPRODUCTION",
    "services.category.surgery": "ENDOSCOPIC SURGERY",
    "services.category.pregnancy": "PREGNANCY",
    "services.readMore": "Read More",

    // Gynecology Page
    "services.gynecology.title": "GYNECOLOGY",
    "services.gynecology.intro":
      "We offer specialized gynecological services with modern diagnostic and treatment methods.",
    "services.gynecology.imageAlt": "Gynecology Services",
    "services.gynecology.endometriosis.title": "Endometriosis",
    "services.gynecology.endometriosis.description": "Detailed description for endometriosis will be added here.",
    "services.gynecology.adenomyosis.title": "Adenomyosis",
    "services.gynecology.adenomyosis.description": "Detailed description for adenomyosis will be added here.",
    "services.gynecology.deepEndometriosis.title": "Deep Endometriosis",
    "services.gynecology.deepEndometriosis.description":
      "Detailed description for deep endometriosis will be added here.",
    "services.gynecology.endometrioma.title": "Endometrioma – Endometriosis Cysts",
    "services.gynecology.endometrioma.description": "Detailed description for endometrioma will be added here.",
    "services.gynecology.uterineFibroids.title": "Uterine Fibroids",
    "services.gynecology.uterineFibroids.description": "Detailed description for uterine fibroids will be added here.",
    "services.gynecology.polycysticOvaries.title": "Polycystic Ovaries",
    "services.gynecology.polycysticOvaries.description":
      "Detailed description for polycystic ovaries will be added here.",
    "services.gynecology.dysmenorrhea.title": "Dysmenorrhea",
    "services.gynecology.dysmenorrhea.description": "Detailed description for dysmenorrhea will be added here.",
    "services.gynecology.menopause.title": "Menopause",
    "services.gynecology.menopause.description": "Detailed description for menopause will be added here.",

    // Assisted Reproduction Page
    "services.assistedReproduction.title": "ASSISTED REPRODUCTION",
    "services.assistedReproduction.intro":
      "We provide comprehensive assisted reproduction services with advanced technologies.",
    "services.assistedReproduction.imageAlt": "Assisted Reproduction Services",
    "services.assistedReproduction.fertilityInvestigation.title": "Fertility Investigation",
    "services.assistedReproduction.fertilityInvestigation.description":
      "Detailed description for fertility investigation will be added here.",
    "services.assistedReproduction.maleInfertility.title": "A. Male Infertility Factor",
    "services.assistedReproduction.maleInfertility.description":
      "Detailed description for male infertility will be added here.",
    "services.assistedReproduction.femaleInfertility.title": "B. Female Infertility Factor",
    "services.assistedReproduction.femaleInfertility.description":
      "Detailed description for female infertility will be added here.",
    "services.assistedReproduction.eggFreezing.title": "Egg Freezing",
    "services.assistedReproduction.eggFreezing.description":
      "Detailed description for egg freezing will be added here.",
    "services.assistedReproduction.ivf.title": "IVF",
    "services.assistedReproduction.ivf.description": "Detailed description for IVF will be added here.",
    "services.assistedReproduction.miniIvf.title": "Mini IVF",
    "services.assistedReproduction.miniIvf.description": "Detailed description for Mini IVF will be added here.",
    "services.assistedReproduction.iui.title": "IUI",
    "services.assistedReproduction.iui.description": "Detailed description for IUI will be added here.",
    "services.assistedReproduction.pgt.title": "PGT",
    "services.assistedReproduction.pgt.description": "Detailed description for PGT will be added here.",
    "services.assistedReproduction.donorEggsSperm.title": "Donor Eggs & Sperm",
    "services.assistedReproduction.donorEggsSperm.description":
      "Detailed description for donor eggs & sperm will be added here.",
    "services.assistedReproduction.surrogacy.title": "Surrogacy",
    "services.assistedReproduction.surrogacy.description": "Detailed description for surrogacy will be added here.",

    // Endoscopic Surgery Page
    "services.endoscopicSurgery.title": "ENDOSCOPIC SURGERY",
    "services.endoscopicSurgery.intro":
      "Specialized endoscopic surgical procedures with minimally invasive techniques.",
    "services.endoscopicSurgery.imageAlt": "Endoscopic Surgery Services",
    "services.endoscopicSurgery.hysteroscopy.title": "Hysteroscopy",
    "services.endoscopicSurgery.hysteroscopy.description": "Detailed description for hysteroscopy will be added here.",
    "services.endoscopicSurgery.laparoscopy.title": "Laparoscopy",
    "services.endoscopicSurgery.laparoscopy.description": "Detailed description for laparoscopy will be added here.",
    "services.endoscopicSurgery.roboticSurgery.title": "Robotic Surgery",
    "services.endoscopicSurgery.roboticSurgery.description":
      "Detailed description for robotic surgery will be added here.",

    // Pregnancy Page
    "services.pregnancy.title": "PREGNANCY",
    "services.pregnancy.intro": "Complete pregnancy support and monitoring with modern methods.",
    "services.pregnancy.imageAlt": "Pregnancy Services",
    "services.pregnancy.prenatalScreening.title": "Prenatal Screening",
    "services.pregnancy.prenatalScreening.description":
      "Detailed description for prenatal screening will be added here.",
    "services.pregnancy.nipt.title": "NIPT",
    "services.pregnancy.nipt.description": "Detailed description for NIPT will be added here.",
    "services.pregnancy.ultrasound3d4d.title": "3D-4D Ultrasound",
    "services.pregnancy.ultrasound3d4d.description": "Detailed description for 3D-4D ultrasound will be added here.",
    "services.pregnancy.delivery.title": "Delivery",
    "services.pregnancy.delivery.description": "Detailed description for delivery will be added here.",
    "services.pregnancy.vbac.title": "VBAC",
    "services.pregnancy.vbac.description": "Detailed description for VBAC will be added here.",
    "services.pregnancy.twinPregnancy.title": "Twin Pregnancy",
    "services.pregnancy.twinPregnancy.description": "Detailed description for twin pregnancy will be added here.",

    // Gynecology Services
    "services.gynecology.endometriosis": "Endometriosis",
    "services.gynecology.endometriosis.desc": "Diagnosis and treatment of endometriosis with modern methods.",
    "services.gynecology.adenomyosis": "Adenomyosis",
    "services.gynecology.adenomyosis.desc": "Specialized care for managing adenomyosis.",
    "services.gynecology.deepEndometriosis": "Deep Endometriosis",
    "services.gynecology.deepEndometriosis.desc": "Advanced management of deep infiltrating endometriosis.",
    "services.gynecology.endometrioma": "Endometrioma – Endometriosis Cysts",
    "services.gynecology.endometrioma.desc": "Treatment of endometrioma and endometriosis cysts.",
    "services.gynecology.fibroids": "Uterine Fibroids",
    "services.gynecology.fibroids.desc": "Management and treatment of uterine fibroids.",
    "services.gynecology.pcos": "Polycystic Ovaries",
    "services.gynecology.pcos.desc": "Treatment and monitoring of polycystic ovary syndrome.",
    "services.gynecology.dysmenorrhea": "Dysmenorrhea",
    "services.gynecology.dysmenorrhea.desc": "Management of painful menstruation.",
    "services.gynecology.menopause": "Menopause",
    "services.gynecology.menopause.desc": "Support and treatment during menopause.",

    // Assisted Reproduction Services
    "services.reproduction.investigation": "Fertility Investigation",
    "services.reproduction.investigation.desc": "Comprehensive fertility investigation for couples.",
    "services.reproduction.maleFactor": "Male Infertility Factor",
    "services.reproduction.maleFactor.desc": "Evaluation and treatment of male infertility.",
    "services.reproduction.femaleFactor": "Female Infertility Factor",
    "services.reproduction.femaleFactor.desc": "Diagnosis and treatment of female infertility.",
    "services.reproduction.eggFreezing": "Egg Freezing",
    "services.reproduction.eggFreezing.desc": "Egg freezing for future use.",
    "services.reproduction.ivf": "IVF",
    "services.reproduction.ivf.desc": "Complete in vitro fertilization program.",
    "services.reproduction.miniIvf": "Mini IVF",
    "services.reproduction.miniIvf.desc": "Mild stimulation IVF protocols.",
    "services.reproduction.iui": "IUI",
    "services.reproduction.iui.desc": "Intrauterine insemination as a treatment option.",
    "services.reproduction.pgt": "PGT",
    "services.reproduction.pgt.desc": "Preimplantation genetic testing of embryos.",
    "services.reproduction.donor": "Donor Eggs & Sperm",
    "services.reproduction.donor.desc": "Gamete donation programs.",
    "services.reproduction.surrogacy": "Surrogacy",
    "services.reproduction.surrogacy.desc": "Support for surrogacy programs.",

    // Endoscopic Surgery Services
    "services.surgery.hysteroscopy": "Hysteroscopy",
    "services.surgery.hysteroscopy.desc": "Diagnostic and therapeutic hysteroscopy.",
    "services.surgery.laparoscopy": "Laparoscopy",
    "services.surgery.laparoscopy.desc": "Minimally invasive laparoscopic surgery.",
    "services.surgery.robotic": "Robotic Surgery",
    "services.surgery.robotic.desc": "Advanced robotic surgery with high precision.",

    // Pregnancy Services
    "services.pregnancy.prenatal": "Prenatal Screening",
    "services.pregnancy.prenatal.desc": "Complete prenatal screening and monitoring.",
    "services.pregnancy.nipt": "NIPT",
    "services.pregnancy.nipt.desc": "Advanced non-invasive prenatal testing.",
    "services.pregnancy.ultrasound": "3D-4D Ultrasound",
    "services.pregnancy.ultrasound.desc": "High-resolution 3D and 4D ultrasound imaging.",
    "services.pregnancy.delivery": "Delivery",
    "services.pregnancy.delivery.desc": "Support and monitoring during delivery.",
    "services.pregnancy.vbac": "VBAC",
    "services.pregnancy.vbac.desc": "Support for vaginal birth after cesarean.",
    "services.pregnancy.twins": "Twin Pregnancy",
    "services.pregnancy.twins.desc": "Specialized monitoring of twin pregnancies.",

    "service.general.title": "General Gynecology",
    "service.general.desc": "Routine examinations, Pap tests, and preventive care for women's health.",

    "service.obstetrics.title": "Obstetrics",
    "service.obstetrics.desc": "Prenatal care, pregnancy monitoring, and delivery consultation.",

    "service.fertility.title": "Fertility Treatments",
    "service.fertility.desc": "Diagnosis and treatment of infertility, IVF and assisted reproduction.",

    "service.prenatal.title": "Prenatal Care",
    "service.prenatal.desc": "Comprehensive care for healthy pregnancy and fetal development.",

    "service.screening.title": "Preventive Screening",
    "service.screening.desc": "Mammograms, osteoporosis screening, and other preventive tests.",

    "service.menopause.title": "Menopause Management",
    "service.menopause.desc": "Support and treatments for menopause symptoms.",

    // Carousel Services
    "carousel.gynecology": "GYNECOLOGY",
    "carousel.reproduction": "ASSISTED REPRODUCTION",
    "carousel.surgery": "ENDOSCOPIC SURGERY",
    "carousel.pregnancy": "PREGNANCY",

    // Hero Carousel
    "heroCarousel.slide1.title": "Dr. Eleftherios Cheirakis – Obstetrician–Gynecologist",
    "heroCarousel.slide1.subtitle": "Specialized gynecological care, offering personalized medical support with compassion and professionalism.",
    "heroCarousel.slide1.button": "Contact",
    "heroCarousel.slide2.title": "Gynecology",
    "heroCarousel.slide2.subtitle": "Comprehensive gynecological care with routine examinations and specialized treatments.",
    "heroCarousel.slide2.button": "Learn More",
    "heroCarousel.slide3.title": "Pregnancy",
    "heroCarousel.slide3.subtitle": "Supporting you from conception through every step of pregnancy, ensuring a safe and comfortable birth experience.",
    "heroCarousel.slide3.button": "Learn More",
    "heroCarousel.slide4.title": "Endoscopic Surgery",
    "heroCarousel.slide4.subtitle": "High-definition surgical precision: minimum intervention, maximum results.",
    "heroCarousel.slide4.button": "Learn More",
    "heroCarousel.slide5.title": "Assisted Reproduction",
    "heroCarousel.slide5.subtitle": "Personalized fertility solutions for individuals and couples.",
    "heroCarousel.slide5.button": "Learn More",

    // Doctor Section
    "doctor.title": "The Doctor",
    "doctor.intro":
      "Dr. Eleftherios Cheirakis is an Obstetrician-Gynecologist with international expertise in Assisted Reproduction (IVF) and Minimally Invasive Surgery. With years of experience in distinguished centers in Greece and Paris (Port Royal), he provides specialized care in infertility management, endometriosis treatment, and obstetric monitoring (including high-risk pregnancies). His philosophy combines scientific excellence with a patient-centered approach and personalized treatment.",
    "doctor.readMore": "Read More",
    "doctor.imageAlt": "Dr. Eleftherios Cheirakis - Obstetrician-Gynecologist",

    // Offices
    "offices.title": "Our Offices",
    "offices.athens.title": "Athens: Leof. Vasileos Georgiou B 4, Pireas 185 34",
    "offices.aegina.title": "Aegina: Νοσοκομείου 5, 180 10 Αίγινα",

    // Contact CTA
    "contactCta.title": "Ready to Schedule Your Appointment?",
    "contactCta.subtitle": "Contact us today to arrange your consultation and begin your journey toward health and wellness with us.",
    "contactCta.button": "Contact",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We are here to answer your questions",
    "contact.name": "Full Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.address": "Address",
    "contact.address.value": "Athens: Leof. Vasileos Georgiou B 4, Pireas 185 34\nAegina: Nosokomeiou 5, 180 10 Aegina",
    "contact.hours": "Hours",
    "contact.hours.value": "Mon-Fri: 09:00 - 20:00",

    // Footer
    "footer.description": "Providing specialized gynecological care with compassion and professionalism.",
    "footer.rights": "All rights reserved.",
    "footer.name": "Dr. Cheirakis",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "Le Médecin",
    "nav.services": "Services",
    "nav.allServices": "Tous les Services",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Soins Spécialisés en Gynécologie",
    "hero.subtitle": "Offrir des soins médicaux personnalisés avec compassion et professionnalisme",
    "hero.cta": "Contactez",

    // About
    "about.seo.title": "Le Médecin | Dr. Eleftherios Cheirakis - Gynécologue Obstétricien Le Pirée",
    "about.seo.description": "Dr. Eleftherios Cheirakis - Expert gynécologue-obstétricien avec expérience internationale en reproduction assistée, FIV, chirurgie endoscopique et obstétrique à haut risque. Le Pirée & Égine.",
    "about.title": "Le Médecin",
    "about.subtitle": "Gynécologue-obstétricien avec spécialisation internationale en Reproduction Assistée, Fécondation In Vitro et Chirurgie Endoscopique. Plus de 15 ans d'expérience dans des centres médicaux de premier plan en Grèce et à l'étranger.",
    "about.hero.name": "Dr. Eleftherios Cheirakis",
    "about.hero.title": "Gynécologue Obstétricien",
    "about.hero.specialty": "Reproduction Assistée & Chirurgie Endoscopique",
    "about.hero.experience": "15+ années d'expérience clinique",
    "about.hero.description": "Spécialisé dans le traitement de l'infertilité, la fécondation in vitro (FIV), l'endométriose, la chirurgie mini-invasive et le suivi obstétrical des grossesses à haut risque.",
    "about.education.title": "Formation & Certifications",
    "about.education.intro": "Ma formation académique combine une formation médicale fondamentale avec des études spécialisées dans des centres européens d'excellence de premier plan.",
    "about.education.medical.title": "Diplôme de Médecine",
    "about.education.medical.description": "Diplômé de la Faculté de Médecine de l'Université de Médecine et de Pharmacie 'Grigore T. Popa' à Iasi, en Roumanie, où j'ai acquis une formation complète en sciences médicales de base et en pratique clinique.",
    "about.education.msc.title": "Master en Reproduction Assistée",
    "about.education.msc.description": "J'ai complété mon MSc en Reproduction Assistée à Port Royal à Paris, l'un des centres de fertilité les plus distingués d'Europe. Ma formation s'est concentrée sur les techniques avancées de FIV, la gestion de l'infertilité et les protocoles de traitement personnalisés.",
    "about.education.endoscopy.title": "Certificats de Chirurgie Endoscopique",
    "about.education.endoscopy.description": "Titulaire des certificats Bachelor in Endoscopy – Level 1 et Level 2 du Collège de Chirurgie Endoscopique (CICE). Cette spécialisation me permet d'effectuer des procédures laparoscopiques et hystéroscopiques avancées avec un minimum d'invasivité.",
    "about.education.laser.title": "Certificats de Laser Vaginal",
    "about.education.laser.description": "Formé à l'utilisation de la technologie laser vaginal pour le traitement des affections gynécologiques, y compris l'atrophie vaginale et l'incontinence urinaire.",
    "about.education.conferences.title": "Formation Médicale Continue",
    "about.education.conferences.description": "Je participe activement à des congrès internationaux et des programmes éducatifs en obstétrique, gynécologie et reproduction assistée, maintenant mes connaissances à jour avec les derniers développements scientifiques.",
    "about.experience.title": "Expérience Professionnelle",
    "about.experience.intro": "Ma carrière clinique comprend des collaborations avec des centres médicaux de premier plan en Grèce et à l'étranger, où j'ai acquis une expérience précieuse dans la gestion de cas complexes.",
    "about.experience.current.title": "Postes Actuels en Grèce",
    "about.experience.current.embryoland.role": "Consultant en Reproduction Assistée",
    "about.experience.current.embryoland.location": "Embryoland - Centre FIV",
    "about.experience.current.embryoland.description": "Je fournis des services complets de fertilité, y compris des programmes de FIV, ICSI, cryoconservation d'ovules et d'embryons, et des protocoles de traitement personnalisés pour les couples ayant des problèmes de fertilité.",
    "about.experience.current.rea.role": "Gynécologue-Obstétricien",
    "about.experience.current.rea.location": "Clinique de Maternité REA & Centre Gynécologique",
    "about.experience.current.rea.description": "Spécialisation dans le suivi obstétrical des grossesses, la gestion des grossesses à haut risque et les procédures gynécologiques.",
    "about.experience.current.tzaneio.role": "Consultant Gynécologue-Obstétricien",
    "about.experience.current.tzaneio.location": "Hôpital Général Tzaneio - Le Pirée",
    "about.experience.current.tzaneio.description": "Pratique clinique dans un hôpital public axée sur les soins obstétricaux aigus, les accouchements et les urgences gynécologiques.",
    "about.experience.current.diamantis.role": "Gynécologue-Obstétricien",
    "about.experience.current.diamantis.location": "Centre Médical Diamantis",
    "about.experience.current.diamantis.description": "Prestation de services gynécologiques, de soins préventifs et de procédures chirurgicales.",
    "about.experience.current.euromedica.role": "Gynécologue-Obstétricien",
    "about.experience.current.euromedica.location": "EuroMedica - Égine",
    "about.experience.current.euromedica.description": "Prestation de services gynécologiques et obstétricaux sur l'île d'Égine, assurant des soins de santé de qualité pour les femmes de la région.",
    "about.experience.international.title": "Expérience Internationale - France",
    "about.experience.international.santulli.role": "Fellow en Reproduction Assistée",
    "about.experience.international.santulli.location": "Équipe du Professeur Paolo Santulli - Paris",
    "about.experience.international.santulli.description": "Formation avancée en reproduction assistée, endométriose et techniques chirurgicales sous la direction d'experts internationaux reconnus.",
    "about.experience.international.saint_joseph.role": "Résident en Obstétrique-Gynécologie",
    "about.experience.international.saint_joseph.location": "Hôpital Saint Joseph - Paris",
    "about.experience.international.saint_joseph.description": "Formation clinique en obstétrique générale, gynécologie et techniques chirurgicales.",
    "about.experience.international.port_royal.role": "Résident en Obstétrique-Gynécologie & Reproduction Assistée",
    "about.experience.international.port_royal.location": "Maternité Port Royal - Paris",
    "about.experience.international.port_royal.description": "Travail dans l'une des maternités les plus célèbres d'Europe, spécialisée dans les techniques avancées de FIV et la gestion de cas complexes de fertilité.",
    "about.experience.international.tenon.role": "Résident en Obstétrique-Gynécologie",
    "about.experience.international.tenon.location": "Hôpital Tenon - Paris",
    "about.experience.international.tenon.description": "Expérience clinique polyvalente en obstétrique, gynécologie et cas d'urgence.",
    "about.experience.international.other.description": "Expérience clinique supplémentaire à l'Hôpital Victor Dupuy et dans d'autres centres en France, où j'ai développé une expertise dans divers aspects de l'obstétrique et de la gynécologie.",
    "about.experience.greece_other.title": "Expérience Antérieure en Grèce",
    "about.experience.greece_other.bladi.role": "Gynécologue-Obstétricien",
    "about.experience.greece_other.bladi.location": "Clinique Aristidis Bladi",
    "about.experience.greece_other.bladi.description": "Pratique clinique axée sur la gynécologie et les soins obstétricaux.",
    "about.experience.greece_other.military.role": "Médecin Militaire",
    "about.experience.greece_other.military.location": "Service Médical Militaire",
    "about.experience.greece_other.military.description": "Prestation de services médicaux pendant le service militaire.",
    "about.expertise.title": "Expertise Médicale",
    "about.expertise.intro": "Mes spécialités cliniques couvrent un large éventail de conditions gynécologiques et obstétricales, avec un accent particulier sur la reproduction assistée et la chirurgie mini-invasive.",
    "about.expertise.areas.endometriosis.title": "Endométriose",
    "about.expertise.areas.endometriosis.description": "Diagnostic et traitement de l'endométriose en utilisant des techniques endoscopiques avancées et une approche holistique pour améliorer la qualité de vie et la fertilité.",
    "about.expertise.areas.robotics.title": "Chirurgie Robotique",
    "about.expertise.areas.robotics.description": "Familiarité avec les systèmes robotiques pour effectuer des procédures gynécologiques complexes avec une précision maximale et un traumatisme minimal pour la patiente.",
    "about.expertise.areas.ivf.title": "Fécondation In Vitro (FIV) & Mini FIV",
    "about.expertise.areas.ivf.description": "Offre de programmes complets de FIV, y compris des protocoles de mini FIV pour une stimulation douce, adaptés aux besoins individuels de chaque patiente.",
    "about.expertise.areas.infertility.title": "Gestion de l'Infertilité",
    "about.expertise.areas.infertility.description": "Investigation et traitement des facteurs d'infertilité masculine et féminine basés sur les directives scientifiques les plus récentes.",
    "about.expertise.areas.cryopreservation.title": "Cryoconservation d'Ovules",
    "about.expertise.areas.cryopreservation.description": "Programmes de cryoconservation d'ovules pour la préservation de la fertilité pour des raisons médicales ou personnelles.",
    "about.expertise.areas.obstetrics.title": "Suivi Obstétrical",
    "about.expertise.areas.obstetrics.description": "Soins obstétricaux personnalisés, de la préconception à l'accouchement, avec une attention particulière aux grossesses à haut risque et aux gestations multiples.",
    "about.languages.title": "Langues",
    "about.languages.intro": "Mon multilinguisme permet une communication efficace avec des patients de différents horizons culturels.",
    "about.languages.greek": "Grec (Maternelle)",
    "about.languages.english": "Anglais (C2 - Niveau Proficiency)",
    "about.languages.french": "Français (C1 - Avancé)",
    "about.languages.romanian": "Roumain (B2 - Intermédiaire Supérieur)",
    "about.philosophy.title": "Philosophie de Soins",
    "about.philosophy.text": "Ma pratique médicale repose sur trois principes fondamentaux : les soins personnalisés, la science fondée sur des preuves et une approche centrée sur l'humain. Je crois que chaque patiente est unique et a besoin d'un plan de traitement personnalisé qui prend en compte non seulement son état médical, mais aussi ses besoins émotionnels, sociaux et personnels. Je combine ma formation scientifique de centres internationaux d'excellence avec une approche holistique qui place la patiente au centre de chaque décision. Le respect, la communication honnête et la compassion sont les piliers de ma relation avec chaque patiente. Mon objectif est de créer un environnement sûr où les femmes se sentent à l'aise de partager leurs préoccupations et de recevoir le soutien dont elles ont besoin à chaque étape de leur santé reproductive et gynécologique.",

    // Services Page
    "services.page.title": "Nos Services",
    "services.page.subtitle": "Nous offrons une gamme complète de services gynécologiques avec expertise et compassion",
    "services.viewAll": "Voir Tous les Services",
    "services.cta.title": "Besoin d'Aide?",
    "services.cta.subtitle": "Contactez-nous pour plus d'informations sur nos services",

    // Service Categories
    "services.category.gynecology": "GYNÉCOLOGIE",
    "services.category.reproduction": "REPRODUCTION ASSISTÉE",
    "services.category.surgery": "CHIRURGIE ENDOSCOPIQUE",
    "services.category.pregnancy": "GROSSESSE",
    "services.readMore": "En savoir plus",

    // Gynecology Page
    "services.gynecology.title": "GYNÉCOLOGIE",
    "services.gynecology.intro":
      "Nous offrons des services gynécologiques spécialisés avec des méthodes modernes de diagnostic et de traitement.",
    "services.gynecology.imageAlt": "Services de Gynécologie",
    "services.gynecology.endometriosis.title": "Endométriose",
    "services.gynecology.endometriosis.description": "Une description détaillée pour l'endométriose sera ajoutée ici.",
    "services.gynecology.adenomyosis.title": "Adénomyose",
    "services.gynecology.adenomyosis.description": "Une description détaillée pour l'adénomyose sera ajoutée ici.",
    "services.gynecology.deepEndometriosis.title": "Endométriose profonde",
    "services.gynecology.deepEndometriosis.description":
      "Une description détaillée pour l'endométriose profonde sera ajoutée ici.",
    "services.gynecology.endometrioma.title": "Endométriome – Kystes d'endométriose",
    "services.gynecology.endometrioma.description": "Une description détaillée pour l'endométriome sera ajoutée ici.",
    "services.gynecology.uterineFibroids.title": "Fibromes utérins",
    "services.gynecology.uterineFibroids.description":
      "Une description détaillée pour les fibromes utérins sera ajoutée ici.",
    "services.gynecology.polycysticOvaries.title": "Ovaires polykystiques",
    "services.gynecology.polycysticOvaries.description":
      "Une description détaillée pour les ovaires polykystiques sera ajoutée ici.",
    "services.gynecology.dysmenorrhea.title": "Dysménorrhée",
    "services.gynecology.dysmenorrhea.description": "Une description détaillée pour la dysménorrhée sera ajoutée ici.",
    "services.gynecology.menopause.title": "Ménopause",
    "services.gynecology.menopause.description": "Une description détaillée pour la ménopause sera ajoutée ici.",

    // Assisted Reproduction Page
    "services.assistedReproduction.title": "REPRODUCTION ASSISTÉE",
    "services.assistedReproduction.intro":
      "Nous fournissons des services complets de reproduction assistée avec des technologies avancées.",
    "services.assistedReproduction.imageAlt": "Services de Reproduction Assistée",
    "services.assistedReproduction.fertilityInvestigation.title": "Bilan de fertilité",
    "services.assistedReproduction.fertilityInvestigation.description":
      "Une description détaillée pour le bilan de fertilité sera ajoutée ici.",
    "services.assistedReproduction.maleInfertility.title": "A. Facteur masculin",
    "services.assistedReproduction.maleInfertility.description":
      "Une description détaillée pour le facteur masculin sera ajoutée ici.",
    "services.assistedReproduction.femaleInfertility.title": "B. Facteur féminin",
    "services.assistedReproduction.femaleInfertility.description":
      "Une description détaillée pour le facteur féminin sera ajoutée ici.",
    "services.assistedReproduction.eggFreezing.title": "Congélation ovocytaire",
    "services.assistedReproduction.eggFreezing.description":
      "Une description détaillée pour la congélation ovocytaire sera ajoutée ici.",
    "services.assistedReproduction.ivf.title": "FIV",
    "services.assistedReproduction.ivf.description": "Une description détaillée pour la FIV sera ajoutée ici.",
    "services.assistedReproduction.miniIvf.title": "Mini FIV",
    "services.assistedReproduction.miniIvf.description": "Une description détaillée pour la Mini FIV sera ajoutée ici.",
    "services.assistedReproduction.iui.title": "Insémination intra-utérine",
    "services.assistedReproduction.iui.description":
      "Une description détaillée pour l'insémination intra-utérine sera ajoutée ici.",
    "services.assistedReproduction.pgt.title": "Diagnostic pré-implantatoire",
    "services.assistedReproduction.pgt.description":
      "Une description détaillée pour le diagnostic pré-implantatoire sera ajoutée ici.",
    "services.assistedReproduction.donorEggsSperm.title": "Don d'ovocytes et de sperme",
    "services.assistedReproduction.donorEggsSperm.description":
      "Une description détaillée pour le don de gamètes sera ajoutée ici.",
    "services.assistedReproduction.surrogacy.title": "Gestation pour autrui",
    "services.assistedReproduction.surrogacy.description":
      "Une description détaillée pour la gestation pour autrui sera ajoutée ici.",

    // Endoscopic Surgery Page
    "services.endoscopicSurgery.title": "CHIRURGIE ENDOSCOPIQUE",
    "services.endoscopicSurgery.intro":
      "Procédures chirurgicales endoscopiques spécialisées avec des techniques minimalement invasives.",
    "services.endoscopicSurgery.imageAlt": "Services de Chirurgie Endoscopique",
    "services.endoscopicSurgery.hysteroscopy.title": "Hystéroscopie",
    "services.endoscopicSurgery.hysteroscopy.description":
      "Une description détaillée pour l'hystéroscopie sera ajoutée ici.",
    "services.endoscopicSurgery.laparoscopy.title": "Laparoscopie",
    "services.endoscopicSurgery.laparoscopy.description":
      "Une description détaillée pour la laparoscopie sera ajoutée ici.",
    "services.endoscopicSurgery.roboticSurgery.title": "Chirurgie robotique",
    "services.endoscopicSurgery.roboticSurgery.description":
      "Une description détaillée pour la chirurgie robotique sera ajoutée ici.",

    // Pregnancy Page
    "services.pregnancy.title": "GROSSESSE",
    "services.pregnancy.intro": "Soutien et suivi complets de la grossesse avec des méthodes modernes.",
    "services.pregnancy.imageAlt": "Services de Grossesse",
    "services.pregnancy.prenatalScreening.title": "Dépistage prénatal",
    "services.pregnancy.prenatalScreening.description":
      "Une description détaillée pour le dépistage prénatal sera ajoutée ici.",
    "services.pregnancy.nipt.title": "Dépistage non invasif (NIPT)",
    "services.pregnancy.nipt.description": "Une description détaillée pour le NIPT sera ajoutée ici.",
    "services.pregnancy.ultrasound3d4d.title": "Échographie 3D-4D",
    "services.pregnancy.ultrasound3d4d.description":
      "Une description détaillée pour l'échographie 3D-4D sera ajoutée ici.",
    "services.pregnancy.delivery.title": "Accouchement",
    "services.pregnancy.delivery.description": "Une description détaillée pour l'accouchement sera ajoutée ici.",
    "services.pregnancy.vbac.title": "AVAC",
    "services.pregnancy.vbac.description": "Une description détaillée pour l'AVAC sera ajoutée ici.",
    "services.pregnancy.twinPregnancy.title": "Grossesse gémellaire",
    "services.pregnancy.twinPregnancy.description":
      "Une description détaillée pour la grossesse gémellaire sera ajoutée ici.",

    // Gynecology Services
    "services.gynecology.endometriosis": "Endométriose",
    "services.gynecology.endometriosis.desc": "Diagnostic et traitement de l'endométriose avec des méthodes modernes.",
    "services.gynecology.adenomyosis": "Adénomyose",
    "services.gynecology.adenomyosis.desc": "Soins spécialisés pour la gestion de l'adénomyose.",
    "services.gynecology.deepEndometriosis": "Endométriose profonde",
    "services.gynecology.deepEndometriosis.desc": "Gestion avancée de l'endométriose profonde infiltrante.",
    "services.gynecology.endometrioma": "Endométriome",
    "services.gynecology.endometrioma.desc": "Traitement de l'endométriome et des kystes d'endométriose.",
    "services.gynecology.fibroids": "Fibromes utérins",
    "services.gynecology.fibroids.desc": "Gestion et traitement des fibromes utérins.",
    "services.gynecology.pcos": "Ovaires polykystiques",
    "services.gynecology.pcos.desc": "Traitement et suivi du syndrome des ovaires polykystiques.",
    "services.gynecology.dysmenorrhea": "Dysménorrhée",
    "services.gynecology.dysmenorrhea.desc": "Gestion des menstruations douloureuses.",
    "services.gynecology.menopause": "Ménopause",
    "services.gynecology.menopause.desc": "Soutien et traitement pendant la ménopause.",

    // Assisted Reproduction Services
    "services.reproduction.investigation": "Bilan de fertilité",
    "services.reproduction.investigation.desc": "Bilan de fertilité complet pour les couples.",
    "services.reproduction.maleFactor": "Facteur masculin",
    "services.reproduction.maleFactor.desc": "Évaluation et traitement de l'infertilité masculine.",
    "services.reproduction.femaleFactor": "Facteur féminin",
    "services.reproduction.femaleFactor.desc": "Diagnostic et traitement de l'infertilité féminine.",
    "services.reproduction.eggFreezing": "Congélation ovocytaire",
    "services.reproduction.eggFreezing.desc": "Congélation des ovocytes pour une utilisation future.",
    "services.reproduction.ivf": "FIV",
    "services.reproduction.ivf.desc": "Programme complet de fécondation in vitro.",
    "services.reproduction.miniIvf": "Mini FIV",
    "services.reproduction.miniIvf.desc": "Protocoles de FIV à stimulation douce.",
    "services.reproduction.iui": "Insémination intra-utérine",
    "services.reproduction.iui.desc": "Insémination intra-utérine comme option de traitement.",
    "services.reproduction.pgt": "Diagnostic pré-implantatoire",
    "services.reproduction.pgt.desc": "Test génétique préimplantatoire des embryons.",
    "services.reproduction.donor": "Don d'ovocytes et de sperme",
    "services.reproduction.donor.desc": "Programmes de don de gamètes.",
    "services.reproduction.surrogacy": "Gestation pour autrui",
    "services.reproduction.surrogacy.desc": "Soutien pour les programmes de gestation pour autrui.",

    // Endoscopic Surgery Services
    "services.surgery.hysteroscopy": "Hystéroscopie",
    "services.surgery.hysteroscopy.desc": "Hystéroscopie diagnostique et thérapeutique.",
    "services.surgery.laparoscopy": "Laparoscopie",
    "services.surgery.laparoscopy.desc": "Chirurgie laparoscopique minimalement invasive.",
    "services.surgery.robotic": "Chirurgie robotique",
    "services.surgery.robotic.desc": "Chirurgie robotique avancée avec haute précision.",

    // Pregnancy Services
    "services.pregnancy.prenatal": "Dépistage prénatal",
    "services.pregnancy.prenatal.desc": "Dépistage prénatal complet et suivi.",
    "services.pregnancy.nipt": "Dépistage non invasif (NIPT)",
    "services.pregnancy.nipt.desc": "Dépistage prénatal non invasif avancé.",
    "services.pregnancy.ultrasound": "Échographie 3D-4D",
    "services.pregnancy.ultrasound.desc": "Imagerie échographique 3D et 4D haute résolution.",
    "services.pregnancy.delivery": "Accouchement",
    "services.pregnancy.delivery.desc": "Soutien et suivi pendant l'accouchement.",
    "services.pregnancy.vbac": "AVAC",
    "services.pregnancy.vbac.desc": "Soutien pour l'accouchement vaginal après césarienne.",
    "services.pregnancy.twins": "Grossesse gémellaire",
    "services.pregnancy.twins.desc": "Suivi spécialisé des grossesses gémellaires.",

    "service.general.title": "Gynécologie Générale",
    "service.general.desc": "Examens de routine, tests Pap et soins préventifs pour la santé des femmes.",

    "service.obstetrics.title": "Obstétrique",
    "service.obstetrics.desc": "Soins prénatals, suivi de grossesse et consultation d'accouchement.",

    "service.fertility.title": "Traitements de Fertilité",
    "service.fertility.desc": "Diagnostic et traitement de l'infertilité, FIV et reproduction assistée.",

    "service.prenatal.title": "Soins Prénatals",
    "service.prenatal.desc": "Soins complets pour une grossesse saine et le développement fœtal.",

    "service.screening.title": "Dépistage Préventif",
    "service.screening.desc": "Mammographies, dépistage de l'ostéoporose et autres tests préventifs.",

    "service.menopause.title": "Gestion de la Ménopause",
    "service.menopause.desc": "Soutien et traitements pour les symptômes de la ménopause.",

    // Carousel Services
    "carousel.gynecology": "GYNÉCOLOGIE",
    "carousel.reproduction": "REPRODUCTION ASSISTÉE",
    "carousel.surgery": "CHIRURGIE ENDOSCOPIQUE",
    "carousel.pregnancy": "GROSSESSE",

    // Hero Carousel
    "heroCarousel.slide1.title": "Dr. Eleftherios Cheirakis – Obstétricien-Gynécologue",
    "heroCarousel.slide1.subtitle": "Des soins gynécologiques spécialisés, offrant un accompagnement personnalisé avec compassion et professionnalisme.",
    "heroCarousel.slide1.button": "Contact",
    "heroCarousel.slide2.title": "Gynécologie",
    "heroCarousel.slide2.subtitle": "Des soins gynécologiques complets avec examens de routine et traitements spécialisés.",
    "heroCarousel.slide2.button": "En savoir plus",
    "heroCarousel.slide3.title": "Grossesse",
    "heroCarousel.slide3.subtitle": "À vos côtés dès la conception, vous guidant à chaque étape pour une expérience d'accouchement sûre et confortable.",
    "heroCarousel.slide3.button": "En savoir plus",
    "heroCarousel.slide4.title": "Chirurgie Endoscopique",
    "heroCarousel.slide4.subtitle": "Chirurgie haute définition : intervention minimale, résultat maximal.",
    "heroCarousel.slide4.button": "En savoir plus",
    "heroCarousel.slide5.title": "Procréation Assistée",
    "heroCarousel.slide5.subtitle": "Des solutions de fertilité personnalisées pour individus et couples.",
    "heroCarousel.slide5.button": "En savoir plus",

    // Doctor Section
    "doctor.title": "Le Médecin",
    "doctor.intro":
      "Le Dr. Eleftherios Cheirakis est un Obstétricien-Gynécologue avec une expertise internationale en Procréation Assistée (FIV) et en Chirurgie Mini-Invasive. Fort de nombreuses années d'expérience dans des centres de renom en Grèce et à Paris (Port Royal), il offre des soins spécialisés dans la gestion de l'infertilité, le traitement de l'endométriose et le suivi obstétrical (y compris les grossesses à haut risque). Sa philosophie allie excellence scientifique, approche centrée sur le patient et traitement personnalisé.",
    "doctor.readMore": "En savoir plus",
    "doctor.imageAlt": "Dr. Eleftherios Cheirakis - Obstétricien-Gynécologue",

    // Offices
    "offices.title": "Nos Bureaux",
    "offices.athens.title": "Athènes: Leof. Vasileos Georgiou B 4, Pireas 185 34",
    "offices.aegina.title": "Égine: Νοσοκομείου 5, 180 10 Αίγινα",

    // Contact CTA
    "contactCta.title": "Prêt à Prendre Rendez-vous?",
    "contactCta.subtitle": "Contactez-nous dès aujourd'hui pour organiser votre consultation et commencer votre parcours vers la santé et le bien-être avec nous.",
    "contactCta.button": "Contact",

    // Contact
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Nous sommes là pour répondre à vos questions",
    "contact.name": "Nom Complet",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.message": "Message",
    "contact.send": "Envoyer le Message",
    "contact.info.title": "Informations de Contact",
    "contact.address": "Adresse",
    "contact.address.value": "Athènes : Leof. Vasileos Georgiou B 4, Pireas 185 34\nÉgine : Nosokomeiou 5, 180 10 Égine",
    "contact.hours": "Horaires",
    "contact.hours.value": "Lun-Ven: 09:00 - 20:00",

    // Footer
    "footer.description": "Fournir des soins gynécologiques spécialisés avec compassion et professionnalisme.",
    "footer.rights": "Tous droits réservés.",
    "footer.name": "Dr. Cheirakis",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("el");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
