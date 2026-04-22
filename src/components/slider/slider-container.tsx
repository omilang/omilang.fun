import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SliderContext } from './slider-context';

interface SliderContainerProps {
  children: React.ReactNode;
  totalSlides: number;
}

export default function SliderContainer({ children, totalSlides }: SliderContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSlide = currentSlide + direction;

      if (nextSlide >= 0 && nextSlide < totalSlides) {
        setIsScrolling(true);
        setCurrentSlide(nextSlide);
        setTimeout(() => setIsScrolling(false), 600);
      }
    };


    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const touchEnd = e.changedTouches[0].clientY;
      const diff = touchStart - touchEnd;
      const minSwipeDistance = 50;

      if (Math.abs(diff) > minSwipeDistance) {
        const direction = diff > 0 ? 1 : -1;
        const nextSlide = currentSlide + direction;

        if (nextSlide >= 0 && nextSlide < totalSlides) {
          setIsScrolling(true);
          setCurrentSlide(nextSlide);
          setTimeout(() => setIsScrolling(false), 600);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide, isScrolling, totalSlides]);

  return (
    <SliderContext.Provider value={{ currentSlide }}>
      <motion.div className="h-screen overflow-hidden relative" style={{ touchAction: 'none' }}>
        {children}
      </motion.div>
    </SliderContext.Provider>
  );
}
