import { RefObject, useEffect, useRef, useState } from 'react';

export const useChildrenHeights = (ref: RefObject<HTMLElement>): number[] => {
  const [heights, setHeights] = useState<number[]>([]);

  const observer = useRef(
    new ResizeObserver(() => 
      ref.current && setHeights([...ref.current.children].map(child => child.getBoundingClientRect().height)
    ))
  );

  useEffect(() => {
    ref.current && [...ref.current.children].forEach(child => observer.current.observe(child));

    return () => observer.current.disconnect();
  }, []);

  return heights;
};