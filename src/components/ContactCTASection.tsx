import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import StaggeredTextReveal from '@/components/StaggeredTextReveal';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactCTASection = () => {
  const { t } = useLanguage();
  const { ref: btnRef, isVisible: isBtnVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-medium))] to-[hsl(var(--medical-medium-dark))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Title with Staggered Letter Reveal */}
          <div className="mb-6">
            <StaggeredTextReveal 
              text={t('contactCta.title')} 
              className="text-4xl md:text-5xl font-bold text-white"
              stagger={40}
            />
          </div>

          {/* Subtitle with Staggered Letter Reveal (Delayed) */}
          <div className="mb-8">
            <StaggeredTextReveal 
              text={t('contactCta.subtitle')} 
              className="text-xl text-white/90"
              delay={800}
              stagger={20}
            />
          </div>

          {/* Button with simple fade up */}
          <div 
            ref={btnRef}
            style={{
              opacity: isBtnVisible ? 1 : 0,
              transform: isBtnVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease-out 1.5s"
            }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[hsl(var(--medical-darkest))] hover:bg-white/90 text-base md:text-lg px-8 py-6 shadow-xl"
              >
                {t('contactCta.button')}
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
