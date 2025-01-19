import { useEffect, useState } from "react";

export const useVisibility = (elementId: string): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      {
        root: null, // Par rapport au viewport
        threshold: 0, // Détecte dès qu'un pixel sort ou entre
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [elementId]);

  return isVisible;
};
