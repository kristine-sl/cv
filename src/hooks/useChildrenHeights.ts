import { ResizeObserver } from '@juggle/resize-observer';
import { RefObject, useEffect, useRef, useState } from 'react';

export const useChildrenHeights = (ref: RefObject<HTMLElement>): number[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  const [heights, setHeights] = useState<number[]>([]);

  const observer = useRef(
    new ResizeObserver(
      () =>
        ref.current &&
        setHeights(
          Array.from(ref.current.children).map(
            (child) => child.getBoundingClientRect().height
          )
        )
    )
  );

  useEffect(() => {
    ref.current &&
      Array.from(ref.current.children).forEach((child) =>
        observer.current.observe(child)
      );
  }, [ref]);

  return heights;
};
