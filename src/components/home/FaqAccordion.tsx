import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/home/SectionHeading';

const questions = [
  {
    q: 'Are your products third-party tested?',
    a: 'Yes. Every batch is sent to an independent laboratory before release, and its lab report is published on the Science page.',
  },
  {
    q: 'Who are these formulas for?',
    a: 'Real women and active adults who want a simple, consistent daily routine. They are food-based supplements, not medicine.',
  },
  {
    q: 'Can I take more than one formula?',
    a: 'Many people combine formulas, but check the label amounts and speak with your doctor before combining supplements or starting a new one.',
  },
  {
    q: 'What is the difference between a tub and a sachet?',
    a: 'Tubs are the better value for a month of daily use. Sachets are single servings for travel, gym bags, or trying a formula for the first time.',
  },
  {
    q: 'Where do you ship?',
    a: 'We ship across India. Delivery timelines and shipping costs are shown at checkout before you pay.',
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-36">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionHeading eyebrow="Questions" title="Good questions, plain answers." />
        </div>

        <Reveal delay={150} className="md:col-span-7 md:col-start-6">
          <ul className="border-t border-ink/15">
            {questions.map((item, index) => {
              const open = openIndex === index;
              const panelId = `faq-panel-${index}`;
              return (
                <li key={item.q} className="border-b border-ink/15">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-display text-[20px] font-medium leading-[28px] tracking-[-0.01em] text-ink md:text-[24px] md:leading-[32px]">
                      {item.q}
                    </span>
                    <Plus
                      size={22}
                      strokeWidth={1.75}
                      aria-hidden="true"
                      className={`shrink-0 text-ink transition-transform duration-700 ease-editorial ${
                        open ? 'rotate-45' : 'rotate-0'
                      }`}
                    />
                  </button>
                  <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows,opacity] duration-700 ease-editorial ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-8 text-[17px] leading-[28px] text-ink-muted">{item.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
