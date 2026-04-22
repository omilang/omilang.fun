import { createContext } from 'react';

export interface SliderContextValue {
  currentSlide: number;
}

export const SliderContext = createContext<SliderContextValue>({
  currentSlide: 0,
});