import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = '0px' } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    // Defer layout reads to avoid forced reflow
    rafId = requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect();
      const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isAlreadyVisible) {
        timeoutId = setTimeout(() => setIsVisible(true), 100);
        if (triggerOnce) return;
      }
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, isVisible };
};

export default useScrollAnimation;
