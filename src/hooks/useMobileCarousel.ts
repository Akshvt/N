import { useEffect, useRef, useState } from 'react';

interface UseMobileCarouselOptions {
  count: number;
  autoScroll?: boolean;
  interval?: number;
}

export function useMobileCarousel({
  count,
  autoScroll = false,
  interval = 4000,
}: UseMobileCarouselOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const isInteracting = useRef(false);
  const isInView = useRef(false);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animRaf = useRef<number | null>(null);
  const scrollRaf = useRef<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.current = entry?.isIntersecting ?? false;
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTargetLeft = (el: HTMLElement, target: HTMLElement) => {
    const centerOffset = (el.clientWidth - target.clientWidth) / 2;
    const idealLeft = target.offsetLeft - centerOffset;
    return Math.max(0, Math.min(el.scrollWidth - el.clientWidth, idealLeft));
  };

  const smoothScrollTo = (targetLeft: number, duration = 650) => {
    const el = containerRef.current;
    if (!el) return;
    if (animRaf.current) cancelAnimationFrame(animRaf.current);

    const startLeft = el.scrollLeft;
    const distance = targetLeft - startLeft;
    if (Math.abs(distance) < 2) return;

    // Temporarily turn off CSS scroll-snap so browser doesn't force instant snap
    const prevSnap = el.style.scrollSnapType;
    el.style.scrollSnapType = 'none';

    const startTime = performance.now();
    // EaseInOutCubic for fluent acceleration and soft landing
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.scrollLeft = startLeft + distance * ease(progress);

      if (progress < 1) {
        animRaf.current = requestAnimationFrame(step);
      } else {
        el.scrollLeft = targetLeft;
        el.style.scrollSnapType = prevSnap;
        animRaf.current = null;
      }
    };

    animRaf.current = requestAnimationFrame(step);
  };

  const scrollTo = (idx: number) => {
    const el = containerRef.current;
    if (!el || !el.children[idx]) return;
    pauseAuto();
    const target = el.children[idx] as HTMLElement;
    smoothScrollTo(getTargetLeft(el, target));
    setActiveIdx(idx);
  };

  const pauseAuto = () => {
    if (animRaf.current) {
      cancelAnimationFrame(animRaf.current);
      animRaf.current = null;
      if (containerRef.current) containerRef.current.style.scrollSnapType = '';
    }
    isInteracting.current = true;
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => {
      isInteracting.current = false;
    }, 5000);
  };

  const handleScroll = () => {
    if (animRaf.current) return;
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

  useEffect(() => {
    if (!autoScroll) return;
    if (typeof window === 'undefined' || window.innerWidth >= 768) return;

    const timer = setInterval(() => {
      if (isInteracting.current || !isInView.current) return;
      const el = containerRef.current;
      if (!el || !el.children.length) return;
      setActiveIdx((prev) => {
        const next = (prev + 1) % count;
        const target = el.children[next] as HTMLElement | undefined;
        if (target) {
          smoothScrollTo(getTargetLeft(el, target));
        }
        return next;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
      if (animRaf.current) cancelAnimationFrame(animRaf.current);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
  }, [autoScroll, count, interval]);

  return {
    containerRef,
    activeIdx,
    scrollTo,
    handleScroll,
    pauseAuto,
  };
}

