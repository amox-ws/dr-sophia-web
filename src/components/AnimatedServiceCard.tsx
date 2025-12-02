import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

interface AnimatedServiceCardProps {
  route: string;
  title: string;
  description: string;
  image: string;
  index: number;
  isVisible: boolean;
}

const AnimatedServiceCard = ({
  route,
  title,
  description,
  image,
  index,
  isVisible,
}: AnimatedServiceCardProps) => {
  // Determine animation direction based on position (left or right column)
  const isLeftColumn = index % 2 === 0;
  
  // Staggered delays: 0ms, 150ms, 300ms, 450ms
  const delay = index * 150;
  
  return (
    <Link
      to={route}
      className="block group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateX(0)' 
          : isLeftColumn 
            ? 'translateX(-80px)' 
            : 'translateX(80px)',
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      <Card className="overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        {/* Top Section - Text Content */}
        <CardHeader className="relative p-3 md:p-4 lg:p-6">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl font-heading font-medium mb-1 sm:mb-2 text-foreground group-hover:text-primary transition-colors whitespace-pre-line">
                {title}
              </CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                {description}
              </p>
            </div>
            {/* Arrow Icon */}
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </div>
        </CardHeader>

        {/* Divider */}
        <Separator />

        {/* Bottom Section - Image */}
        <CardContent className="p-0">
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={`${title} services`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AnimatedServiceCard;
