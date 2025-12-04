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
  const isLeftColumn = index % 2 === 0;
  // A delay that increases with each item creates a "staggered" effect
  const delay = index * 200; 

  // LOGIC:
  // We use 1000px to ensure the element starts truly "off-screen" for most devices.
  // We also add 100px of vertical movement (Y-axis) so it slides Up and In.
  const startPosition = isLeftColumn 
    ? "translate(-1000px, 100px)" // Left column starts far left and slightly down
    : "translate(1000px, 100px)";  // Right column starts far right and slightly down

  return (
    <Link
      to={route}
      className="block group"
      style={{
        opacity: isVisible ? 1 : 0,
        // When visible, move to natural position (0,0). When hidden, be far away.
        transform: isVisible ? "translate(0, 0)" : startPosition,
        // 1.8s is very slow and smooth. The cubic-bezier makes it start fast and land gently.
        transition: `opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      <Card className="overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <CardHeader className="relative p-3 md:p-4 lg:p-6 h-[58px]">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl font-heading font-medium mb-1 sm:mb-2 text-foreground group-hover:text-primary transition-colors whitespace-pre-line">
                {title}
              </CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                {description}
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="p-0">
          {/* FIXED HEIGHT IMAGE */}
          <div className="aspect-[4/3] overflow-hidden rounded-b-xl">
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