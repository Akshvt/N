import { useRef, useState } from 'react';

interface UseMobileCarouselOptions {
  count: number;
}

export function useMobileCarousel({ count }: UseMobileCarouselOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRaf = useRef<number | null>(null);

  const scrollTo = (idx: number) => {
    const el = containerRef.current;
    if (!el || !el.children[idx]) return;
    const target = el.children[idx] as HTMLElement;
    const centerOffset = (el.clientWidth - target.clientWidth) / 2;
    const idealLeft = target.offsetLeft - centerOffset;
    el.scrollTo({
      left: Math.max(0, Math.min(el.scrollWidth - el.clientWidth, idealLeft)),
      behavior: 'smooth',
    });
    setActiveIdx(idx);
  };

  const handleScroll = () => {
    if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    scrollRaf.current = requestAnimationFrame(() => {
      const el = containerRef.current;
      if (!el || !el.children.length) return;
      const containerCenter = el.scrollLeft + el.clientWidth / 2;
      let closestIdx = 0;
      let minDiff = Infinity;
      for (let i = 0; i < count; i++) {
        const child = el.children[i] as HTMLElement | undefined;
        if (!child) continue;
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const diff = Math.abs(containerCenter - childCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      }
      setActiveIdx((current) => (current !== closestIdx ? closestIdx : current));
    });
  };

  return {
    containerRef,
    activeIdx,
    scrollTo,
    handleScroll,
    pauseAuto: () => {},
  };
}
