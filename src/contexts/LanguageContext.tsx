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
    
    // Services
    'services.title': 'Οι Υπηρεσίες μας',
    'services.subtitle': 'Προσφέρουμε ένα ολοκληρωμένο φάσμα γυναικολογικών υπηρεσιών',
    'services.viewAll': 'Προβολή Όλων των Υπηρεσιών',
    
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
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer a comprehensive range of gynecological services',
    'services.viewAll': 'View All Services',
    
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
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Nous offrons une gamme complète de services gynécologiques',
    'services.viewAll': 'Voir Tous les Services',
    
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
