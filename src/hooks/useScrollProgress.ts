import { useEffect, useRef, useState } from 'react';

export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      // Skip on mobile screens where pinned desktop scroll sections are hidden
      if (typeof window !== 'undefined' && window.innerWidth < 768) return;

      const node = ref.current;
      if (!node) return;

      const travel = node.offsetHeight - window.innerHeight;
      if (travel <= 0) {
        setProgress((prev) => (prev !== 0 ? 0 : prev));
        return;
      }

      const rect = node.getBoundingClientRect();
      if (rect.bottom < 0) {
        setProgress((prev) => (prev !== 1 ? 1 : prev));
        return;
      }
      if (rect.top > window.innerHeight) {
        setProgress((prev) => (prev !== 0 ? 0 : prev));
        return;
      }

      const raw = -rect.top / travel;
      const next = Math.min(1, Math.max(0, raw));
      // Only update state if delta is meaningful (> 0.005) to avoid excessive re-renders
      setProgress((prev) => (Math.abs(prev - next) > 0.005 ? next : prev));
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, progress };
}
