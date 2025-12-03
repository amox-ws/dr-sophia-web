import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import StaggeredTextReveal from "@/components/StaggeredTextReveal";

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consentChecked, setConsentChecked] = useState(false);

  const consentText = {
    el: {
      label: "Συμφωνώ με την",
      policy: "Πολιτική Απορρήτου",
      and: "και την επεξεργασία των προσωπικών μου δεδομένων."
    },
    en: {
      label: "I agree to the",
      policy: "Privacy Policy",
      and: "and the processing of my personal data."
    },
    fr: {
      label: "J'accepte la",
      policy: "Politique de Confidentialité",
      and: "et le traitement de mes données personnelles."
    }
  };

  const currentConsentText = consentText[language as keyof typeof consentText] || consentText.el;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".observe-animation");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentChecked) {
      toast({
        title: language === "el" ? "Απαιτείται συγκατάθεση" : language === "fr" ? "Consentement requis" : "Consent required",
        description: language === "el" ? "Παρακαλώ αποδεχτείτε την πολιτική απορρήτου." : language === "fr" ? "Veuillez accepter la politique de confidentialité." : "Please accept the privacy policy.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: language === "el" ? "Το μήνυμα στάλθηκε!" : language === "fr" ? "Message envoyé!" : "Message Sent!",
      description: language === "el" ? "Θα επικοινωνήσουμε μαζί σας το συντομότερο." : language === "fr" ? "Nous vous répondrons bientôt." : "We will get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setConsentChecked(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[hsl(var(--medical-lightest))] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Title with Staggered Letter Reveal */}
            <div className="mb-6">
              <StaggeredTextReveal 
                text={t("contact.title")}
                className="text-5xl font-bold text-foreground"
                stagger={40}
              />
            </div>

            {/* Subtitle with Staggered Letter Reveal (Delayed) */}
            <div className="mb-8">
              <StaggeredTextReveal 
                text={t("contact.subtitle")}
                className="text-xl text-muted-foreground"
                delay={800}
                stagger={20}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="observe-animation">
              <Card className="border-none shadow-xl bg-white">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">{t("contact.name")}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">{t("contact.email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">{t("contact.phone")}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">{t("contact.message")}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    {/* Privacy Consent Checkbox */}
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={consentChecked}
                        onCheckedChange={(checked) => setConsentChecked(checked === true)}
                        required
                      />
                      <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        {currentConsentText.label}{" "}
                        <Link to="/privacy-policy" className="text-[hsl(var(--medical-medium))] hover:underline">
                          {currentConsentText.policy}
                        </Link>{" "}
                        {currentConsentText.and}
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))] text-white hover:opacity-90"
                      size="lg"
                    >
                      {t("contact.send")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="observe-animation space-y-6">
              <Card className="border-none shadow-xl bg-gradient-to-br from-white to-[hsl(var(--medical-lightest))]">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">{t("contact.info.title")}</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">{t("contact.address")}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">{t("contact.address.value")}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">{t("contact.phone")}</h3>
                        <a
                          href="tel:+302104117958"
                          className="text-muted-foreground hover:text-[hsl(var(--medical-medium))] transition-colors"
                        >
                          +30 210 677 1540
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">{t("contact.email")}</h3>
                        <a
                          href="mailto:info@gynecology.gr"
                          className="text-muted-foreground hover:text-[hsl(var(--medical-medium))] transition-colors"
                        >
                          info@gynecology.gr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">{t("contact.hours")}</h3>
                        <p className="text-muted-foreground">{t("contact.hours.value")}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Maps Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Athens Map */}
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Αθήνα - Πειραιάς</h3>
                    <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.8374447890447!2d23.647999!3d37.9408838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bbef4dd46271%3A0xe8b44844d7f54f29!2sLeof.%20Vasileos%20Georgiou%20B%204%2C%20Pireas%20185%2034!5e0!3m2!1sel!2sgr!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <a
                      href="https://www.google.com/maps/place/%CE%9B%CE%B5%CF%89%CF%86.+%CE%92%CE%B1%CF%83%CE%B9%CE%BB%CE%AD%CF%89%CF%82+%CE%93%CE%B5%CF%89%CF%81%CE%B3%CE%AF%CE%BF%CF%85+%CE%92+4,+%CE%A0%CE%B5%CE%B9%CF%81%CE%B1%CE%B9%CE%AC%CF%82+185+34/@37.9408838,23.647999,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1bbef4dd46271:0xe8b44844d7f54f29!8m2!3d37.9408796!4d23.6505739!16s%2Fg%2F11r_t8f4kf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(var(--medical-medium))] hover:text-[hsl(var(--medical-medium-dark))] transition-colors text-sm font-medium"
                    >
                      Προβολή στο Google Maps →
                    </a>
                  </CardContent>
                </Card>

                {/* Aegina Map */}
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Αίγινα</h3>
                    <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1876954321!2d23.4286997!3d37.7475664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1cd9d725858d5%3A0xd269f4a98843dbe4!2sNosokomeiou%205%2C%20Aigina%20180%2010!5e0!3m2!1sel!2sgr!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <a
                      href="https://www.google.com/maps/place/%CE%9D%CE%BF%CF%83%CE%BF%CE%BA%CE%BF%CE%BC%CE%B5%CE%AF%CE%BF%CF%85+5,+%CE%91%CE%AF%CE%B3%CE%B9%CE%BD%CE%B1+180+10/@37.7475664,23.4286997,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1cd9d725858d5:0xd269f4a98843dbe4!8m2!3d37.7475622!4d23.4312746!16s%2Fg%2F11jwlyks7l"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(var(--medical-medium))] hover:text-[hsl(var(--medical-medium-dark))] transition-colors text-sm font-medium"
                    >
                      Προβολή στο Google Maps →
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;