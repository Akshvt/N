import { useEffect, useRef, useState } from 'react';

export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;
      const travel = node.offsetHeight - window.innerHeight;
      if (travel <= 0) {
        setProgress(0);
        return;
      }
      const offset = -node.getBoundingClientRect().top;
      setProgress(Math.min(1, Math.max(0, offset / travel)));
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, progress };
}
