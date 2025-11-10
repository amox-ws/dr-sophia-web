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
    "hero.cta": "Κλείστε Ραντεβού",

    // About
    "about.title": "Σχετικά με τον Γιατρό",
    "about.intro":
      "Με πάνω από 15 χρόνια εμπειρίας στη γυναικολογία και μαιευτική, αφιερώνομαι στην παροχή της υψηλότερης ποιότητας φροντίδας για κάθε ασθενή.",
    "about.education.title": "Εκπαίδευση & Εξειδίκευση",
    "about.education.medical": "Ιατρική Σχολή, Πανεπιστήμιο Αθηνών",
    "about.education.specialty": "Εξειδίκευση στη Γυναικολογία-Μαιευτική",
    "about.education.fellowship": "Υποτροφία σε Αναπαραγωγική Ιατρική",
    "about.approach.title": "Η Προσέγγισή μου",
    "about.approach.text":
      "Πιστεύω στην ολιστική προσέγγιση της υγείας των γυναικών, συνδυάζοντας την ιατρική αριστεία με την εξατομικευμένη φροντίδα. Κάθε ασθενής είναι μοναδική και η θεραπεία της πρέπει να αντικατοπτρίζει αυτό.",

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
    "services.gynecology.endometriosis.description":
      "Κατάσταση όπου ιστός παρόμοιος με το ενδομήτριο αναπτύσσεται εκτός μήτρας, προκαλώντας πόνο και πιθανή υπογονιμότητα.",
    "services.gynecology.adenomyosis.title": "Αδενομύωση",
    "services.gynecology.adenomyosis.description":
      "Ο ενδομητρικός ιστός εισχωρεί στο μυϊκό τοίχωμα της μήτρας, προκαλώντας έντονη εμμηνορρυσία και κράμπες.",
    "services.gynecology.deepEndometriosis.title": "Εν τω βάθει ενδομητρίωση",
    "services.gynecology.deepEndometriosis.description":
      "Πιο σοβαρή μορφή ενδομητρίωσης με διείσδυση βαθύτερα στους ιστούς της πυέλου, που απαιτεί εξειδικευμένη αντιμετώπιση.",
    "services.gynecology.endometrioma.title": "Ενδομητρίωμα – Κύστες Ενδομητρίωσης",
    "services.gynecology.endometrioma.description":
      "Κύστες στις ωοθήκες που προκαλούνται από ενδομητρίωση, συχνά συνδεδεμένες με πόνο ή δυσκολία σύλληψης.",
    "services.gynecology.uterineFibroids.title": "Ινομυώματα μήτρας",
    "services.gynecology.uterineFibroids.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τα ινομυώματα μήτρας.",
    "services.gynecology.polycysticOvaries.title": "Πολυκυστικές ωοθήκες",
    "services.gynecology.polycysticOvaries.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τις πολυκυστικές ωοθήκες.",
    "services.gynecology.dysmenorrhea.title": "Δυσμηνόρροια",
    "services.gynecology.dysmenorrhea.description": "Εδώ θα προστεθεί λεπτομερής περιγραφή για τη δυσμηνόρροια.",
    "services.gynecology.menopause.title": "Εμμηνόπαυση",
    "services.gynecology.menopause.description": "Εδώ θα προστεθεί λεπτομερής περιγραφή για την εμμηνόπαυση.",

    // Assisted Reproduction Page
    "services.assistedReproduction.title": "ΥΠΟΒΟΗΘΟΥΜΕΝΗ ΑΝΑΠΑΡΑΓΩΓΗ",
    "services.assistedReproduction.intro":
      "Παρέχουμε ολοκληρωμένες υπηρεσίες υποβοηθούμενης αναπαραγωγής με προηγμένες τεχνολογίες.",
    "services.assistedReproduction.imageAlt": "Υπηρεσίες Υποβοηθούμενης Αναπαραγωγής",
    "services.assistedReproduction.fertilityInvestigation.title": "Διερεύνηση γονιμότητας",
    "services.assistedReproduction.fertilityInvestigation.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τη διερεύνηση γονιμότητας.",
    "services.assistedReproduction.maleInfertility.title": "Α. Ανδρικός παράγοντας υπογονιμότητας",
    "services.assistedReproduction.maleInfertility.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τον ανδρικό παράγοντα.",
    "services.assistedReproduction.femaleInfertility.title": "Β. Γυναικείος παράγοντας υπογονιμότητας",
    "services.assistedReproduction.femaleInfertility.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τον γυναικείο παράγοντα.",
    "services.assistedReproduction.eggFreezing.title": "Κρυοσυντήρηση ωαρίων",
    "services.assistedReproduction.eggFreezing.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για την κρυοσυντήρηση ωαρίων.",
    "services.assistedReproduction.ivf.title": "Εξωσωματική γονιμοποίηση",
    "services.assistedReproduction.ivf.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για την εξωσωματική γονιμοποίηση.",
    "services.assistedReproduction.miniIvf.title": "Mini IVF",
    "services.assistedReproduction.miniIvf.description": "Εδώ θα προστεθεί λεπτομερής περιγραφή για το Mini IVF.",
    "services.assistedReproduction.iui.title": "Ενδομητρική σπερματέγχυση",
    "services.assistedReproduction.iui.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για την ενδομητρική σπερματέγχυση.",
    "services.assistedReproduction.pgt.title": "Προεμφυτευτικός έλεγχος",
    "services.assistedReproduction.pgt.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τον προεμφυτευτικό έλεγχο.",
    "services.assistedReproduction.donorEggsSperm.title": "Δωρεά ωαρίων και σπέρματος",
    "services.assistedReproduction.donorEggsSperm.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τη δωρεά γαμετών.",
    "services.assistedReproduction.surrogacy.title": "Παρένθετη μητρότητα",
    "services.assistedReproduction.surrogacy.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για την παρένθετη μητρότητα.",

    // Endoscopic Surgery Page
    "services.endoscopicSurgery.title": "ΕΝΔΟΣΚΟΠΙΚΗ ΧΕΙΡΟΥΡΓΙΚΗ",
    "services.endoscopicSurgery.intro":
      "Εξειδικευμένες ενδοσκοπικές χειρουργικές επεμβάσεις με ελάχιστα επεμβατικές τεχνικές.",
    "services.endoscopicSurgery.imageAlt": "Υπηρεσίες Ενδοσκοπικής Χειρουργικής",
    "services.endoscopicSurgery.hysteroscopy.title": "Υστεροσκόπηση",
    "services.endoscopicSurgery.hysteroscopy.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για την υστεροσκόπηση.",
    "services.endoscopicSurgery.laparoscopy.title": "Λαπαροσκόπηση",
    "services.endoscopicSurgery.laparoscopy.description": "Εδώ θα προστεθεί λεπτομερής περιγραφή για τη λαπαροσκόπηση.",
    "services.endoscopicSurgery.roboticSurgery.title": "Ρομποτική Χειρουργική",
    "services.endoscopicSurgery.roboticSurgery.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τη ρομποτική χειρουργική.",

    // Pregnancy Page
    "services.pregnancy.title": "ΕΓΚΥΜΟΣΥΝΗ",
    "services.pregnancy.intro": "Πλήρης υποστήριξη και παρακολούθηση εγκυμοσύνης με σύγχρονες μεθόδους.",
    "services.pregnancy.imageAlt": "Υπηρεσίες Εγκυμοσύνης",
    "services.pregnancy.prenatalScreening.title": "Προγεννητικός Έλεγχος",
    "services.pregnancy.prenatalScreening.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για τον προγεννητικό έλεγχο.",
    "services.pregnancy.nipt.title": "Μη Επεμβατικός Προγεννητικός Έλεγχος (NIPT)",
    "services.pregnancy.nipt.description": "Εδώ θα προστεθεί λεπτομερής περιγραφή για το NIPT.",
    "services.pregnancy.ultrasound3d4d.title": "Υπερηχογράφημα 3D-4D",
    "services.pregnancy.ultrasound3d4d.description":
      "Εδώ θα προστεθεί λεπτομερής περιγραφή για το υπερηχογράφημα 3D-4D.",
    "services.pregnancy.delivery.title": "Τοκετός",
    "services.pregnancy.delivery.description": "Εδώ θα προστεθεί λεπτομερής περιγραφή για τον τοκετό.",
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

    // Doctor Section
    "doctor.title": "Ο Γιατρός",
    "doctor.intro":
      "Με πάνω από 15 χρόνια εμπειρίας στη γυναικολογία και μαιευτική, αφιερώνομαι στην παροχή της υψηλότερης ποιότητας φροντίδας για κάθε ασθενή. Η προσέγγισή μου συνδυάζει την ιατρική αριστεία με την εξατομικευμένη φροντίδα.",
    "doctor.readMore": "Περισσότερα",
    "doctor.imageAlt": "Δρ. Λευτέρης Χειράκης - Γυναικολόγος Αθήνα",

    // CTA
    "cta.title": "Έτοιμοι να Φροντίσετε την Υγεία σας;",
    "cta.subtitle": "Κλείστε το ραντεβού σας σήμερα και βιώστε εξατομικευμένη φροντίδα",

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
    "contact.address.value": "Λεωφ. Κηφισίας 123, Αθήνα 115 26",
    "contact.hours": "Ωράριο",
    "contact.hours.value": "Δευτ-Παρ: 09:00 - 20:00",

    // Footer
    "footer.description": "Παρέχοντας εξειδικευμένη γυναικολογική φροντίδα με συμπόνια και επαγγελματισμό.",
    "footer.rights": "Όλα τα δικαιώματα κατοχυρωμένα.",
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
    "hero.cta": "Book Appointment",

    // About
    "about.title": "About the Doctor",
    "about.intro":
      "With over 15 years of experience in gynecology and obstetrics, I am dedicated to providing the highest quality care for every patient.",
    "about.education.title": "Education & Training",
    "about.education.medical": "Medical School, University of Athens",
    "about.education.specialty": "Specialization in Gynecology-Obstetrics",
    "about.education.fellowship": "Fellowship in Reproductive Medicine",
    "about.approach.title": "My Approach",
    "about.approach.text":
      "I believe in a holistic approach to women's health, combining medical excellence with personalized care. Every patient is unique and their treatment should reflect that.",

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

    // Doctor Section
    "doctor.title": "The Doctor",
    "doctor.intro":
      "With over 15 years of experience in gynecology and obstetrics, I am dedicated to providing the highest quality care for every patient. My approach combines medical excellence with personalized care.",
    "doctor.readMore": "Read More",
    "doctor.imageAlt": "Dr. Lefteris Cheirakis - Gynecologist Athens",

    // CTA
    "cta.title": "Ready to Take Care of Your Health?",
    "cta.subtitle": "Schedule your appointment today and experience personalized care",

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
    "contact.address.value": "Kifisias Avenue 123, Athens 115 26",
    "contact.hours": "Hours",
    "contact.hours.value": "Mon-Fri: 09:00 - 20:00",

    // Footer
    "footer.description": "Providing specialized gynecological care with compassion and professionalism.",
    "footer.rights": "All rights reserved.",
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
    "hero.cta": "Prendre Rendez-vous",

    // About
    "about.title": "À Propos du Médecin",
    "about.intro":
      "Avec plus de 15 ans d'expérience en gynécologie et obstétrique, je me consacre à fournir des soins de la plus haute qualité à chaque patiente.",
    "about.education.title": "Formation & Spécialisation",
    "about.education.medical": "École de Médecine, Université d'Athènes",
    "about.education.specialty": "Spécialisation en Gynécologie-Obstétrique",
    "about.education.fellowship": "Fellowship en Médecine de la Reproduction",
    "about.approach.title": "Mon Approche",
    "about.approach.text":
      "Je crois en une approche holistique de la santé des femmes, combinant l'excellence médicale avec des soins personnalisés. Chaque patiente est unique et son traitement doit refléter cela.",

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

    // Doctor Section
    "doctor.title": "Le Médecin",
    "doctor.intro":
      "Avec plus de 15 ans d'expérience en gynécologie et obstétrique, je me consacre à fournir des soins de la plus haute qualité à chaque patiente. Mon approche combine l'excellence médicale avec des soins personnalisés.",
    "doctor.readMore": "En savoir plus",
    "doctor.imageAlt": "Dr Lefteris Cheirakis - Gynécologue Athènes",

    // CTA
    "cta.title": "Prêt à Prendre Soin de Votre Santé ?",
    "cta.subtitle": "Prenez rendez-vous dès aujourd'hui et bénéficiez de soins personnalisés",

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
    "contact.address.value": "Avenue Kifisias 123, Athènes 115 26",
    "contact.hours": "Horaires",
    "contact.hours.value": "Lun-Ven: 09:00 - 20:00",

    // Footer
    "footer.description": "Fournir des soins gynécologiques spécialisés avec compassion et professionnalisme.",
    "footer.rights": "Tous droits réservés.",
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
