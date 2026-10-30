import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  variant?: 'fade-up' | 'image';
  className?: string;
}

export function Reveal({ children, delay = 0, variant = 'fade-up', className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const hidden = variant === 'image' ? 'scale-[0.96] opacity-0' : 'translate-y-6 opacity-0';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-[800ms] ease-editorial ${
        inView ? 'translate-y-0 scale-100 opacity-100' : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface RevealLinesProps {
  lines: ReactNode[];
  delay?: number;
  className?: string;
}

export function RevealLines({ lines, delay = 0, className = '' }: RevealLinesProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();

  return (
    <span ref={ref} className={`block ${className}`}>
      {lines.map((line, index) => (
        <span key={index} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
          <span
            className={`block transition-transform duration-[900ms] ease-editorial ${
              inView ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ transitionDelay: `${delay + index * 120}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}
