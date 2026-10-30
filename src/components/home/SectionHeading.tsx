import type { ReactNode } from 'react';
import { Reveal } from '@/components/motion/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-[40px] font-medium leading-[44px] tracking-[-0.02em] text-ink md:text-[56px] md:leading-[60px]">
        {title}
      </h2>
      {children}
    </Reveal>
  );
}
