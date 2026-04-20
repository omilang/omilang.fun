import React, { useContext } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SliderContext } from './slider-context';

interface SlideSectionProps {
  children: React.ReactNode;
  className?: string;
  index: number;
  dockBottom?: boolean;
  keepVisibleOnSlides?: number[];
  animateOnMount?: boolean;
}

export default function SlideSection({
  children,
  className = '',
  index,
  dockBottom = false,
  keepVisibleOnSlides = [],
  animateOnMount = false,
}: SlideSectionProps) {
  const { currentSlide } = useContext(SliderContext);
  const prefersReducedMotion = useReducedMotion();
  const isVisible = currentSlide === index || keepVisibleOnSlides.includes(currentSlide);
  const verticalOffset = dockBottom ? 70 : (currentSlide > index ? -80 : 80);
  const hiddenY = prefersReducedMotion ? 0 : verticalOffset;
  const hiddenScale = prefersReducedMotion ? 1 : 0.98;
  const hiddenBlur = prefersReducedMotion ? 'blur(0px)' : 'blur(6px)';

  return (
    <motion.section
      className={dockBottom
        ? `${className} absolute bottom-0 left-0 w-screen z-20`
        : `${className} absolute h-screen w-screen`
      }
      initial={animateOnMount ? {
        opacity: 0,
        y: hiddenY,
        scale: hiddenScale,
        filter: hiddenBlur,
      } : false}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : hiddenY,
        scale: prefersReducedMotion ? 1 : (isVisible ? 1 : 0.98),
        filter: prefersReducedMotion ? 'blur(0px)' : (isVisible ? 'blur(0px)' : 'blur(6px)'),
      }}
      transition={{
        opacity: { duration: 0.45, ease: 'easeOut' },
        y: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        filter: { duration: 0.45, ease: 'easeOut' },
      }}
      style={{
        pointerEvents: isVisible ? 'auto' : 'none',
        willChange: 'transform, opacity, filter',
      }}
    >
      {children}
    </motion.section>
  );
}
