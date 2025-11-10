import React, { createContext, useContext, useState } from 'react';

export type Language = 'el' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.about': 'Ο Γιατρός',
    'nav.services': 'Υπηρεσίες',
    'nav.contact': 'Επικοινωνία',
    
    // Hero
    'hero.title': 'Εξειδικευμένη Φροντίδα στη Γυναικολογία',
    'hero.subtitle': 'Προσφέροντας εξατομικευμένη ιατρική φροντίδα με συμπόνια και επαγγελματισμό',
    'hero.cta': 'Κλείστε Ραντεβού',
    
    // About
    'about.title': 'Σχετικά με τον Γιατρό',
    'about.intro': 'Με πάνω από 15 χρόνια εμπειρίας στη γυναικολογία και μαιευτική, αφιερώνομαι στην παροχή της υψηλότερης ποιότητας φροντίδας για κάθε ασθενή.',
    'about.education.title': 'Εκπαίδευση & Εξειδίκευση',
    'about.education.medical': 'Ιατρική Σχολή, Πανεπιστήμιο Αθηνών',
    'about.education.specialty': 'Εξειδίκευση στη Γυναικολογία-Μαιευτική',
    'about.education.fellowship': 'Υποτροφία σε Αναπαραγωγική Ιατρική',
    'about.approach.title': 'Η Προσέγγισή μου',
    'about.approach.text': 'Πιστεύω στην ολιστική προσέγγιση της υγείας των γυναικών, συνδυάζοντας την ιατρική αριστεία με την εξατομικευμένη φροντίδα. Κάθε ασθενής είναι μοναδική και η θεραπεία της πρέπει να αντικατοπτρίζει αυτό.',
    
    // Services Page
    'services.page.title': 'Οι Υπηρεσίες μας',
    'services.page.subtitle': 'Προσφέρουμε ένα ολοκληρωμένο φάσμα γυναικολογικών υπηρεσιών με εξειδίκευση και συμπόνια',
    'services.viewAll': 'Προβολή Όλων των Υπηρεσιών',
    'services.cta.title': 'Χρειάζεστε Βοήθεια;',
    'services.cta.subtitle': 'Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες σχετικά με τις υπηρεσίες μας',
    
    // Service Categories
    'services.category.gynecology': 'ΓΥΝΑΙΚΟΛΟΓΙΑ',
    'services.category.reproduction': 'ΥΠΟΒΟΗΘΟΥΜΕΝΗ ΑΝΑΠΑΡΑΓΩΓΗ',
    'services.category.surgery': 'ΕΝΔΟΣΚΟΠΙΚΗ ΧΕΙΡΟΥΡΓΙΚΗ',
    'services.category.pregnancy': 'ΕΓΚΥΜΟΣΥΝΗ',
    
    // Gynecology Services
    'services.gynecology.endometriosis': 'Ενδομητρίωση',
    'services.gynecology.endometriosis.desc': 'Διάγνωση και θεραπεία της ενδομητρίωσης με σύγχρονες μεθόδους.',
    'services.gynecology.adenomyosis': 'Αδενομύωση',
    'services.gynecology.adenomyosis.desc': 'Εξειδικευμένη φροντίδα για την αντιμετώπιση της αδενομύωσης.',
    'services.gynecology.deepEndometriosis': 'Εν τω βάθει ενδομητρίωση',
    'services.gynecology.deepEndometriosis.desc': 'Προηγμένη διαχείριση της εν τω βάθει ενδομητρίωσης.',
    'services.gynecology.endometrioma': 'Ενδομητρίωμα – Κύστες Ενδομητρίωσης',
    'services.gynecology.endometrioma.desc': 'Θεραπεία ενδομητριώματος και κύστεων ενδομητρίωσης.',
    'services.gynecology.fibroids': 'Ινομυώματα μήτρας',
    'services.gynecology.fibroids.desc': 'Διαχείριση και θεραπεία ινομυωμάτων της μήτρας.',
    'services.gynecology.pcos': 'Πολυκυστικές ωοθήκες',
    'services.gynecology.pcos.desc': 'Θεραπεία και παρακολούθηση του συνδρόμου πολυκυστικών ωοθηκών.',
    'services.gynecology.dysmenorrhea': 'Δυσμηνόρροια',
    'services.gynecology.dysmenorrhea.desc': 'Αντιμετώπιση της επώδυνης εμμηνορρυσίας.',
    'services.gynecology.menopause': 'Εμμηνόπαυση',
    'services.gynecology.menopause.desc': 'Υποστήριξη και θεραπεία κατά την περίοδο της εμμηνόπαυσης.',
    
    // Assisted Reproduction Services
    'services.reproduction.investigation': 'Διερεύνηση γονιμότητας',
    'services.reproduction.investigation.desc': 'Πλήρης διερεύνηση της γονιμότητας για ζευγάρια.',
    'services.reproduction.maleFactor': 'Ανδρικός παράγοντας υπογονιμότητας',
    'services.reproduction.maleFactor.desc': 'Αξιολόγηση και αντιμετώπιση ανδρικής υπογονιμότητας.',
    'services.reproduction.femaleFactor': 'Γυναικείος παράγοντας υπογονιμότητας',
    'services.reproduction.femaleFactor.desc': 'Διάγνωση και θεραπεία γυναικείας υπογονιμότητας.',
    'services.reproduction.eggFreezing': 'Κρυοσυντήρηση ωαρίων',
    'services.reproduction.eggFreezing.desc': 'Κρυοσυντήρηση ωαρίων για μελλοντική χρήση.',
    'services.reproduction.ivf': 'Εξωσωματική γονιμοποίηση',
    'services.reproduction.ivf.desc': 'Πλήρες πρόγραμμα εξωσωματικής γονιμοποίησης.',
    'services.reproduction.miniIvf': 'Mini IVF',
    'services.reproduction.miniIvf.desc': 'Ήπια πρωτόκολλα εξωσωματικής γονιμοποίησης.',
    'services.reproduction.iui': 'Ενδομητρική σπερματέγχυση',
    'services.reproduction.iui.desc': 'Ενδομητρική σπερματέγχυση ως επιλογή θεραπείας.',
    'services.reproduction.pgt': 'Προεμφυτευτικός έλεγχος',
    'services.reproduction.pgt.desc': 'Γενετικός έλεγχος εμβρύων πριν την εμφύτευση.',
    'services.reproduction.donor': 'Δωρεά ωαρίων και σπέρματος',
    'services.reproduction.donor.desc': 'Προγράμματα δωρεάς γαμετών.',
    'services.reproduction.surrogacy': 'Παρένθετη μητρότητα',
    'services.reproduction.surrogacy.desc': 'Υποστήριξη σε προγράμματα παρένθετης μητρότητας.',
    
    // Endoscopic Surgery Services
    'services.surgery.hysteroscopy': 'Υστεροσκόπηση',
    'services.surgery.hysteroscopy.desc': 'Διαγνωστική και θεραπευτική υστεροσκόπηση.',
    'services.surgery.laparoscopy': 'Λαπαροσκόπηση',
    'services.surgery.laparoscopy.desc': 'Ελάχιστα επεμβατική λαπαροσκοπική χειρουργική.',
    'services.surgery.robotic': 'Ρομποτική Χειρουργική',
    'services.surgery.robotic.desc': 'Προηγμένη ρομποτική χειρουργική με υψηλή ακρίβεια.',
    
    // Pregnancy Services
    'services.pregnancy.prenatal': 'Προγεννητικός Έλεγχος',
    'services.pregnancy.prenatal.desc': 'Πλήρης προγεννητικός έλεγχος και παρακολούθηση.',
    'services.pregnancy.nipt': 'Μη Επεμβατικός Προγεννητικός Έλεγχος (NIPT)',
    'services.pregnancy.nipt.desc': 'Προηγμένος μη επεμβατικός προγεννητικός έλεγχος.',
    'services.pregnancy.ultrasound': 'ΥΠΕΡΗΧΟΓΡΑΦΗΜΑ 3D-4D',
    'services.pregnancy.ultrasound.desc': 'Υπερηχογραφήματα υψηλής ανάλυσης 3D και 4D.',
    'services.pregnancy.delivery': 'Τοκετός',
    'services.pregnancy.delivery.desc': 'Υποστήριξη και παρακολούθηση τοκετού.',
    'services.pregnancy.vbac': 'Φυσιολογικός τοκετός μετά από καισαρική',
    'services.pregnancy.vbac.desc': 'Υποστήριξη φυσιολογικού τοκετού μετά από καισαρική τομή.',
    'services.pregnancy.twins': 'Δίδυμη κύηση',
    'services.pregnancy.twins.desc': 'Εξειδικευμένη παρακολούθηση δίδυμης εγκυμοσύνης.',
    
    'service.general.title': 'Γενική Γυναικολογία',
    'service.general.desc': 'Εξετάσεις ρουτίνας, τεστ Παπ, και προληπτική φροντίδα για τη γυναικεία υγεία.',
    
    'service.obstetrics.title': 'Μαιευτική',
    'service.obstetrics.desc': 'Προγεννητική φροντίδα, παρακολούθηση εγκυμοσύνης και συμβουλευτική τοκετού.',
    
    'service.fertility.title': 'Θεραπείες Γονιμότητας',
    'service.fertility.desc': 'Διάγνωση και θεραπεία υπογονιμότητας, IVF και υποβοηθούμενη αναπαραγωγή.',
    
    'service.prenatal.title': 'Προγεννητική Φροντίδα',
    'service.prenatal.desc': 'Ολοκληρωμένη φροντίδα για υγιεινή εγκυμοσύνη και ανάπτυξη εμβρύου.',
    
    'service.screening.title': 'Προληπτικός Έλεγχος',
    'service.screening.desc': 'Μαστογραφίες, οστεοπόρωση και άλλοι προληπτικοί έλεγχοι.',
    
    'service.menopause.title': 'Διαχείριση Εμμηνόπαυσης',
    'service.menopause.desc': 'Υποστήριξη και θεραπείες για τα συμπτώματα της εμμηνόπαυσης.',
    
    // Carousel Services
    'carousel.gynecology': 'ΓΥΝΑΙΚΟΛΟΓΙΑ',
    'carousel.reproduction': 'ΥΠΟΒΟΗΘΟΥΜΕΝΗ ΑΝΑΠΑΡΑΓΩΓΗ',
    'carousel.surgery': 'ΕΝΔΟΣΚΟΠΙΚΗ ΧΕΙΡΟΥΡΓΙΚΗ',
    'carousel.pregnancy': 'ΕΓΚΥΜΟΣΥΝΗ',
    
    // Doctor Section
    'doctor.title': 'Ο Γιατρός',
    'doctor.intro': 'Με πάνω από 15 χρόνια εμπειρίας στη γυναικολογία και μαιευτική, αφιερώνομαι στην παροχή της υψηλότερης ποιότητας φροντίδας για κάθε ασθενή. Η προσέγγισή μου συνδυάζει την ιατρική αριστεία με την εξατομικευμένη φροντίδα.',
    'doctor.readMore': 'Περισσότερα',
    'doctor.imageAlt': 'Δρ. Λευτέρης Χειράκης - Γυναικολόγος Αθήνα',
    
    // CTA
    'cta.title': 'Έτοιμοι να Φροντίσετε την Υγεία σας;',
    'cta.subtitle': 'Κλείστε το ραντεβού σας σήμερα και βιώστε εξατομικευμένη φροντίδα',
    
    // Contact
    'contact.title': 'Επικοινωνήστε μαζί μας',
    'contact.subtitle': 'Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας',
    'contact.name': 'Ονοματεπώνυμο',
    'contact.email': 'Email',
    'contact.phone': 'Τηλέφωνο',
    'contact.message': 'Μήνυμα',
    'contact.send': 'Αποστολή Μηνύματος',
    'contact.info.title': 'Πληροφορίες Επικοινωνίας',
    'contact.address': 'Διεύθυνση',
    'contact.address.value': 'Λεωφ. Κηφισίας 123, Αθήνα 115 26',
    'contact.hours': 'Ωράριο',
    'contact.hours.value': 'Δευτ-Παρ: 09:00 - 20:00',
    
    // Footer
    'footer.description': 'Παρέχοντας εξειδικευμένη γυναικολογική φροντίδα με συμπόνια και επαγγελματισμό.',
    'footer.rights': 'Όλα τα δικαιώματα κατοχυρωμένα.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'The Doctor',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Specialized Care in Gynecology',
    'hero.subtitle': 'Providing personalized medical care with compassion and professionalism',
    'hero.cta': 'Book Appointment',
    
    // About
    'about.title': 'About the Doctor',
    'about.intro': 'With over 15 years of experience in gynecology and obstetrics, I am dedicated to providing the highest quality care for every patient.',
    'about.education.title': 'Education & Training',
    'about.education.medical': 'Medical School, University of Athens',
    'about.education.specialty': 'Specialization in Gynecology-Obstetrics',
    'about.education.fellowship': 'Fellowship in Reproductive Medicine',
    'about.approach.title': 'My Approach',
    'about.approach.text': 'I believe in a holistic approach to women\'s health, combining medical excellence with personalized care. Every patient is unique and their treatment should reflect that.',
    
    // Services Page
    'services.page.title': 'Our Services',
    'services.page.subtitle': 'We offer a comprehensive range of gynecological services with expertise and compassion',
    'services.viewAll': 'View All Services',
    'services.cta.title': 'Need Help?',
    'services.cta.subtitle': 'Contact us for more information about our services',
    
    // Service Categories
    'services.category.gynecology': 'GYNECOLOGY',
    'services.category.reproduction': 'ASSISTED REPRODUCTION',
    'services.category.surgery': 'ENDOSCOPIC SURGERY',
    'services.category.pregnancy': 'PREGNANCY',
    
    // Gynecology Services
    'services.gynecology.endometriosis': 'Endometriosis',
    'services.gynecology.endometriosis.desc': 'Diagnosis and treatment of endometriosis with modern methods.',
    'services.gynecology.adenomyosis': 'Adenomyosis',
    'services.gynecology.adenomyosis.desc': 'Specialized care for managing adenomyosis.',
    'services.gynecology.deepEndometriosis': 'Deep Endometriosis',
    'services.gynecology.deepEndometriosis.desc': 'Advanced management of deep infiltrating endometriosis.',
    'services.gynecology.endometrioma': 'Endometrioma – Endometriosis Cysts',
    'services.gynecology.endometrioma.desc': 'Treatment of endometrioma and endometriosis cysts.',
    'services.gynecology.fibroids': 'Uterine Fibroids',
    'services.gynecology.fibroids.desc': 'Management and treatment of uterine fibroids.',
    'services.gynecology.pcos': 'Polycystic Ovaries',
    'services.gynecology.pcos.desc': 'Treatment and monitoring of polycystic ovary syndrome.',
    'services.gynecology.dysmenorrhea': 'Dysmenorrhea',
    'services.gynecology.dysmenorrhea.desc': 'Management of painful menstruation.',
    'services.gynecology.menopause': 'Menopause',
    'services.gynecology.menopause.desc': 'Support and treatment during menopause.',
    
    // Assisted Reproduction Services
    'services.reproduction.investigation': 'Fertility Investigation',
    'services.reproduction.investigation.desc': 'Comprehensive fertility investigation for couples.',
    'services.reproduction.maleFactor': 'Male Infertility Factor',
    'services.reproduction.maleFactor.desc': 'Evaluation and treatment of male infertility.',
    'services.reproduction.femaleFactor': 'Female Infertility Factor',
    'services.reproduction.femaleFactor.desc': 'Diagnosis and treatment of female infertility.',
    'services.reproduction.eggFreezing': 'Egg Freezing',
    'services.reproduction.eggFreezing.desc': 'Egg freezing for future use.',
    'services.reproduction.ivf': 'IVF',
    'services.reproduction.ivf.desc': 'Complete in vitro fertilization program.',
    'services.reproduction.miniIvf': 'Mini IVF',
    'services.reproduction.miniIvf.desc': 'Mild stimulation IVF protocols.',
    'services.reproduction.iui': 'IUI',
    'services.reproduction.iui.desc': 'Intrauterine insemination as a treatment option.',
    'services.reproduction.pgt': 'PGT',
    'services.reproduction.pgt.desc': 'Preimplantation genetic testing of embryos.',
    'services.reproduction.donor': 'Donor Eggs & Sperm',
    'services.reproduction.donor.desc': 'Gamete donation programs.',
    'services.reproduction.surrogacy': 'Surrogacy',
    'services.reproduction.surrogacy.desc': 'Support for surrogacy programs.',
    
    // Endoscopic Surgery Services
    'services.surgery.hysteroscopy': 'Hysteroscopy',
    'services.surgery.hysteroscopy.desc': 'Diagnostic and therapeutic hysteroscopy.',
    'services.surgery.laparoscopy': 'Laparoscopy',
    'services.surgery.laparoscopy.desc': 'Minimally invasive laparoscopic surgery.',
    'services.surgery.robotic': 'Robotic Surgery',
    'services.surgery.robotic.desc': 'Advanced robotic surgery with high precision.',
    
    // Pregnancy Services
    'services.pregnancy.prenatal': 'Prenatal Screening',
    'services.pregnancy.prenatal.desc': 'Complete prenatal screening and monitoring.',
    'services.pregnancy.nipt': 'NIPT',
    'services.pregnancy.nipt.desc': 'Advanced non-invasive prenatal testing.',
    'services.pregnancy.ultrasound': '3D-4D Ultrasound',
    'services.pregnancy.ultrasound.desc': 'High-resolution 3D and 4D ultrasound imaging.',
    'services.pregnancy.delivery': 'Delivery',
    'services.pregnancy.delivery.desc': 'Support and monitoring during delivery.',
    'services.pregnancy.vbac': 'VBAC',
    'services.pregnancy.vbac.desc': 'Support for vaginal birth after cesarean.',
    'services.pregnancy.twins': 'Twin Pregnancy',
    'services.pregnancy.twins.desc': 'Specialized monitoring of twin pregnancies.',
    
    'service.general.title': 'General Gynecology',
    'service.general.desc': 'Routine examinations, Pap tests, and preventive care for women\'s health.',
    
    'service.obstetrics.title': 'Obstetrics',
    'service.obstetrics.desc': 'Prenatal care, pregnancy monitoring, and delivery consultation.',
    
    'service.fertility.title': 'Fertility Treatments',
    'service.fertility.desc': 'Diagnosis and treatment of infertility, IVF and assisted reproduction.',
    
    'service.prenatal.title': 'Prenatal Care',
    'service.prenatal.desc': 'Comprehensive care for healthy pregnancy and fetal development.',
    
    'service.screening.title': 'Preventive Screening',
    'service.screening.desc': 'Mammograms, osteoporosis screening, and other preventive tests.',
    
    'service.menopause.title': 'Menopause Management',
    'service.menopause.desc': 'Support and treatments for menopause symptoms.',
    
    // Carousel Services
    'carousel.gynecology': 'GYNECOLOGY',
    'carousel.reproduction': 'ASSISTED REPRODUCTION',
    'carousel.surgery': 'ENDOSCOPIC SURGERY',
    'carousel.pregnancy': 'PREGNANCY',
    
    // Doctor Section
    'doctor.title': 'The Doctor',
    'doctor.intro': 'With over 15 years of experience in gynecology and obstetrics, I am dedicated to providing the highest quality care for every patient. My approach combines medical excellence with personalized care.',
    'doctor.readMore': 'Read More',
    'doctor.imageAlt': 'Dr. Lefteris Cheirakis - Gynecologist Athens',
    
    // CTA
    'cta.title': 'Ready to Take Care of Your Health?',
    'cta.subtitle': 'Schedule your appointment today and experience personalized care',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to answer your questions',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.address': 'Address',
    'contact.address.value': 'Kifisias Avenue 123, Athens 115 26',
    'contact.hours': 'Hours',
    'contact.hours.value': 'Mon-Fri: 09:00 - 20:00',
    
    // Footer
    'footer.description': 'Providing specialized gynecological care with compassion and professionalism.',
    'footer.rights': 'All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'Le Médecin',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Soins Spécialisés en Gynécologie',
    'hero.subtitle': 'Offrir des soins médicaux personnalisés avec compassion et professionnalisme',
    'hero.cta': 'Prendre Rendez-vous',
    
    // About
    'about.title': 'À Propos du Médecin',
    'about.intro': 'Avec plus de 15 ans d\'expérience en gynécologie et obstétrique, je me consacre à fournir des soins de la plus haute qualité à chaque patiente.',
    'about.education.title': 'Formation & Spécialisation',
    'about.education.medical': 'École de Médecine, Université d\'Athènes',
    'about.education.specialty': 'Spécialisation en Gynécologie-Obstétrique',
    'about.education.fellowship': 'Fellowship en Médecine de la Reproduction',
    'about.approach.title': 'Mon Approche',
    'about.approach.text': 'Je crois en une approche holistique de la santé des femmes, combinant l\'excellence médicale avec des soins personnalisés. Chaque patiente est unique et son traitement doit refléter cela.',
    
    // Services Page
    'services.page.title': 'Nos Services',
    'services.page.subtitle': 'Nous offrons une gamme complète de services gynécologiques avec expertise et compassion',
    'services.viewAll': 'Voir Tous les Services',
    'services.cta.title': 'Besoin d\'Aide?',
    'services.cta.subtitle': 'Contactez-nous pour plus d\'informations sur nos services',
    
    // Service Categories
    'services.category.gynecology': 'GYNÉCOLOGIE',
    'services.category.reproduction': 'REPRODUCTION ASSISTÉE',
    'services.category.surgery': 'CHIRURGIE ENDOSCOPIQUE',
    'services.category.pregnancy': 'GROSSESSE',
    
    // Gynecology Services
    'services.gynecology.endometriosis': 'Endométriose',
    'services.gynecology.endometriosis.desc': 'Diagnostic et traitement de l\'endométriose avec des méthodes modernes.',
    'services.gynecology.adenomyosis': 'Adénomyose',
    'services.gynecology.adenomyosis.desc': 'Soins spécialisés pour la gestion de l\'adénomyose.',
    'services.gynecology.deepEndometriosis': 'Endométriose profonde',
    'services.gynecology.deepEndometriosis.desc': 'Gestion avancée de l\'endométriose profonde infiltrante.',
    'services.gynecology.endometrioma': 'Endométriome',
    'services.gynecology.endometrioma.desc': 'Traitement de l\'endométriome et des kystes d\'endométriose.',
    'services.gynecology.fibroids': 'Fibromes utérins',
    'services.gynecology.fibroids.desc': 'Gestion et traitement des fibromes utérins.',
    'services.gynecology.pcos': 'Ovaires polykystiques',
    'services.gynecology.pcos.desc': 'Traitement et suivi du syndrome des ovaires polykystiques.',
    'services.gynecology.dysmenorrhea': 'Dysménorrhée',
    'services.gynecology.dysmenorrhea.desc': 'Gestion des menstruations douloureuses.',
    'services.gynecology.menopause': 'Ménopause',
    'services.gynecology.menopause.desc': 'Soutien et traitement pendant la ménopause.',
    
    // Assisted Reproduction Services
    'services.reproduction.investigation': 'Bilan de fertilité',
    'services.reproduction.investigation.desc': 'Bilan de fertilité complet pour les couples.',
    'services.reproduction.maleFactor': 'Facteur masculin',
    'services.reproduction.maleFactor.desc': 'Évaluation et traitement de l\'infertilité masculine.',
    'services.reproduction.femaleFactor': 'Facteur féminin',
    'services.reproduction.femaleFactor.desc': 'Diagnostic et traitement de l\'infertilité féminine.',
    'services.reproduction.eggFreezing': 'Congélation ovocytaire',
    'services.reproduction.eggFreezing.desc': 'Congélation des ovocytes pour une utilisation future.',
    'services.reproduction.ivf': 'FIV',
    'services.reproduction.ivf.desc': 'Programme complet de fécondation in vitro.',
    'services.reproduction.miniIvf': 'Mini FIV',
    'services.reproduction.miniIvf.desc': 'Protocoles de FIV à stimulation douce.',
    'services.reproduction.iui': 'Insémination intra-utérine',
    'services.reproduction.iui.desc': 'Insémination intra-utérine comme option de traitement.',
    'services.reproduction.pgt': 'Diagnostic pré-implantatoire',
    'services.reproduction.pgt.desc': 'Test génétique préimplantatoire des embryons.',
    'services.reproduction.donor': 'Don d\'ovocytes et de sperme',
    'services.reproduction.donor.desc': 'Programmes de don de gamètes.',
    'services.reproduction.surrogacy': 'Gestation pour autrui',
    'services.reproduction.surrogacy.desc': 'Soutien pour les programmes de gestation pour autrui.',
    
    // Endoscopic Surgery Services
    'services.surgery.hysteroscopy': 'Hystéroscopie',
    'services.surgery.hysteroscopy.desc': 'Hystéroscopie diagnostique et thérapeutique.',
    'services.surgery.laparoscopy': 'Laparoscopie',
    'services.surgery.laparoscopy.desc': 'Chirurgie laparoscopique minimalement invasive.',
    'services.surgery.robotic': 'Chirurgie robotique',
    'services.surgery.robotic.desc': 'Chirurgie robotique avancée avec haute précision.',
    
    // Pregnancy Services
    'services.pregnancy.prenatal': 'Dépistage prénatal',
    'services.pregnancy.prenatal.desc': 'Dépistage prénatal complet et suivi.',
    'services.pregnancy.nipt': 'Dépistage non invasif (NIPT)',
    'services.pregnancy.nipt.desc': 'Dépistage prénatal non invasif avancé.',
    'services.pregnancy.ultrasound': 'Échographie 3D-4D',
    'services.pregnancy.ultrasound.desc': 'Imagerie échographique 3D et 4D haute résolution.',
    'services.pregnancy.delivery': 'Accouchement',
    'services.pregnancy.delivery.desc': 'Soutien et suivi pendant l\'accouchement.',
    'services.pregnancy.vbac': 'AVAC',
    'services.pregnancy.vbac.desc': 'Soutien pour l\'accouchement vaginal après césarienne.',
    'services.pregnancy.twins': 'Grossesse gémellaire',
    'services.pregnancy.twins.desc': 'Suivi spécialisé des grossesses gémellaires.',
    
    'service.general.title': 'Gynécologie Générale',
    'service.general.desc': 'Examens de routine, tests Pap et soins préventifs pour la santé des femmes.',
    
    'service.obstetrics.title': 'Obstétrique',
    'service.obstetrics.desc': 'Soins prénatals, suivi de grossesse et consultation d\'accouchement.',
    
    'service.fertility.title': 'Traitements de Fertilité',
    'service.fertility.desc': 'Diagnostic et traitement de l\'infertilité, FIV et reproduction assistée.',
    
    'service.prenatal.title': 'Soins Prénatals',
    'service.prenatal.desc': 'Soins complets pour une grossesse saine et le développement fœtal.',
    
    'service.screening.title': 'Dépistage Préventif',
    'service.screening.desc': 'Mammographies, dépistage de l\'ostéoporose et autres tests préventifs.',
    
    'service.menopause.title': 'Gestion de la Ménopause',
    'service.menopause.desc': 'Soutien et traitements pour les symptômes de la ménopause.',
    
    // Carousel Services
    'carousel.gynecology': 'GYNÉCOLOGIE',
    'carousel.reproduction': 'REPRODUCTION ASSISTÉE',
    'carousel.surgery': 'CHIRURGIE ENDOSCOPIQUE',
    'carousel.pregnancy': 'GROSSESSE',
    
    // Doctor Section
    'doctor.title': 'Le Médecin',
    'doctor.intro': 'Avec plus de 15 ans d\'expérience en gynécologie et obstétrique, je me consacre à fournir des soins de la plus haute qualité à chaque patiente. Mon approche combine l\'excellence médicale avec des soins personnalisés.',
    'doctor.readMore': 'En savoir plus',
    'doctor.imageAlt': 'Dr Lefteris Cheirakis - Gynécologue Athènes',
    
    // CTA
    'cta.title': 'Prêt à Prendre Soin de Votre Santé ?',
    'cta.subtitle': 'Prenez rendez-vous dès aujourd\'hui et bénéficiez de soins personnalisés',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Nous sommes là pour répondre à vos questions',
    'contact.name': 'Nom Complet',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.info.title': 'Informations de Contact',
    'contact.address': 'Adresse',
    'contact.address.value': 'Avenue Kifisias 123, Athènes 115 26',
    'contact.hours': 'Horaires',
    'contact.hours.value': 'Lun-Ven: 09:00 - 20:00',
    
    // Footer
    'footer.description': 'Fournir des soins gynécologiques spécialisés avec compassion et professionnalisme.',
    'footer.rights': 'Tous droits réservés.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('el');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
