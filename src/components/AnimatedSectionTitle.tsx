import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const AnimatedSectionTitle = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: AnimatedSectionTitleProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Check if it's a white/light title (for dark backgrounds)
  const isLightTitle = titleClassName?.includes('text-white');

  return (
    <div ref={ref} className={cn("text-center mb-12 relative", className)}>
      {/* Title with brush reveal effect */}
      <div className="relative inline-block overflow-hidden">
        <h2
          className={cn(
            "text-4xl font-bold transition-all duration-500",
            !isLightTitle && "text-foreground",
            titleClassName
          )}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s',
          }}
        >
          {title}
        </h2>
        
        {/* Brush line reveal effect */}
        <div
          className={cn(
            "absolute bottom-0 left-0 h-[3px] rounded-full",
            isLightTitle 
              ? "bg-gradient-to-r from-white/60 via-white to-white/60"
              : "bg-gradient-to-r from-[hsl(var(--medical-medium))] via-[hsl(var(--medical-light))] to-[hsl(var(--medical-medium))]"
          )}
          style={{
            width: isVisible ? '100%' : '0%',
            transition: 'width 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "text-xl max-w-2xl mx-auto mt-4",
            !subtitleClassName?.includes('text-white') && "text-muted-foreground",
            subtitleClassName
          )}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default AnimatedSectionTitle;
