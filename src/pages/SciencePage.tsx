import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { SiteShell, LogoMark } from '@/components/site/chrome';
import { Lines, Reveal, Ring, ease } from '@/components/site/motion';
import { hero, approach, howItWorks, molecule, transparency, sourcing, labReports, consult } from '@/content/science';
import mol1 from '@/assets/mol-1.jpg';
import mol2 from '@/assets/mol-2.jpg';
import mol3 from '@/assets/mol-3.jpg';
import mol4 from '@/assets/mol-4.jpg';
import mol5 from '@/assets/mol-5.jpg';
import products from '@/assets/products.jpg';
import body from '@/assets/card-body.jpg';
import field from '@/assets/field.jpg';

export function SciencePage() {
  return (
    <SiteShell>
      <Hero />
      <Approach />
      <StackedCards />
      <MoleculeStory />
      <Transparency />
      <Sourcing />
      <Consult />
    </SiteShell>
  );
}

/* 1. HERO */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const ringY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const positions = [
    'left-[8%] top-[8%] md:left-[18%]',
    'left-[38%] top-[34%] md:left-[40%]',
    'left-[12%] top-[62%] md:left-[22%]',
  ];

  return (
    <section
      ref={ref}
      className="relative flex min-h-[calc(100vh-6rem)] flex-col items-center overflow-hidden px-5 pt-14"
      onMouseMove={(e) => {
        mx.set((e.clientX / window.innerWidth - 0.5) * 30);
        my.set((e.clientY / window.innerHeight - 0.5) * 30);
      }}
    >
      <motion.div style={{ y: ringY }} className="pointer-events-none absolute -left-16 top-24 w-56 text-lilac md:w-80"><Ring className="animate-float" /></motion.div>
      <motion.div style={{ y: ringY }} className="pointer-events-none absolute -right-10 bottom-16 w-48 rotate-180 text-cobalt/25 md:w-72"><Ring className="animate-float" /></motion.div>

      <p className="eyebrow text-cobalt">{hero.eyebrow}</p>
      <Lines as="h1" lines={hero.headline} className="mt-5 text-center text-4xl font-medium leading-[1.02] text-ink md:text-7xl font-display" />

      <motion.div style={{ y, x: sx, translateY: sy }} className="relative mt-10 h-[420px] w-full max-w-[640px] md:h-[480px]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 480" aria-hidden>
          <path d="M210 110 L330 230 L230 360" stroke="#D7CBF5" strokeWidth="44" strokeLinecap="round" fill="none" opacity="0.7" />
        </svg>
        {hero.bubbles.map((b, i) => (
          <motion.div
            key={b.title}
            className={`absolute ${positions[i]} flex size-36 flex-col items-center justify-center rounded-full glass-bubble p-4 text-center md:size-48`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{ opacity: { duration: 0.9, ease, delay: 0.3 + i * 0.15 }, scale: { duration: 0.9, ease, delay: 0.3 + i * 0.15 }, y: { duration: 6 + i, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <span className="font-display text-lg font-semibold leading-tight text-cobalt md:text-xl">{b.title}</span>
            <span className="eyebrow mt-2 text-[0.55rem] text-ink/50">{b.sub}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-6 flex flex-col items-center gap-2 text-ink/60">
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <span className="h-10 w-px animate-float bg-cobalt/50" />
      </div>
    </section>
  );
}

/* 2. APPROACH */
function Approach() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const a = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const b = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const c = useTransform(scrollYProgress, [0, 1], [30, -90]);
  return (
    <section ref={ref} className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 py-28 md:grid-cols-2 md:px-10 md:py-40">
      <div>
        <p className="eyebrow text-cobalt">{approach.eyebrow}</p>
        <Lines lines={approach.headline} className="mt-5 text-4xl font-medium leading-[1.05] md:text-6xl font-display" />
        <div className="mt-8 max-w-lg space-y-5 text-base leading-relaxed text-ink/75">
          {approach.paragraphs.map((p) => <Reveal key={p}><p>{p}</p></Reveal>)}
        </div>
      </div>
      <div className="relative mx-auto aspect-square w-full max-w-[520px]">
        <div className="absolute inset-[8%] rounded-full bg-lilac" />
        <motion.img style={{ y: a }} src={products} alt="N° tub" loading="lazy" width={1024} height={1024} className="absolute left-0 top-[18%] w-[46%] rounded-[32px] object-cover object-left mix-blend-multiply" />
        <motion.img style={{ y: b }} src={products} alt="N° sachet" loading="lazy" width={1024} height={1024} className="absolute left-[34%] top-[30%] w-[34%] rounded-[24px] object-cover object-right mix-blend-multiply" />
        <motion.img style={{ y: c }} src={products} alt="N° tub" loading="lazy" width={1024} height={1024} className="absolute right-0 top-[8%] w-[38%] rounded-[32px] object-cover object-left mix-blend-multiply" />
      </div>
    </section>
  );
}

/* 3. STACKED CARDS */
const cardImg = { mol1, mol3, body } as const;
const cardTones = ['bg-cobalt', 'bg-[#221D96]', 'bg-[#1C1885]'];

function StackedCards() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-24 md:px-10">
      <p className="eyebrow mb-8 text-center text-cobalt font-bold tracking-[0.14em]">How it works</p>
      {howItWorks.map((c, i) => (
        <div key={c.n} className="sticky mb-8" style={{ top: `${88 + i * 18}px` }}>
          <Reveal>
            <article className={`${cardTones[i]} relative grid min-h-[70vh] gap-8 overflow-hidden rounded-[32px] p-7 text-ivory md:grid-cols-2 md:p-12 shadow-xl`}>
              <div className="pointer-events-none absolute inset-3 rounded-[24px] border border-ivory/15" />
              <div className="relative flex flex-col justify-between gap-8">
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-xl text-accent font-bold">{c.n}</span>
                  <h3 className="text-3xl font-medium md:text-6xl font-display">{c.title}</h3>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-ivory/75 md:text-base">{c.body}</p>
              </div>
              <div className="relative flex items-center justify-center">
                <img src={cardImg[c.image]} alt="" loading="lazy" width={1024} height={1024} className="aspect-square w-full max-w-[220px] rounded-[28px] object-cover md:max-w-[460px]" />
              </div>
            </article>
          </Reveal>
        </div>
      ))}
    </section>
  );
}

/* 4. MOLECULE STORY */
const mols = [mol1, mol2, mol3, mol4, mol5];
function MoleculeStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [step, setStep] = useState(0);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 30]);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setStep(Math.min(4, Math.floor(v * 5))));
  const s = molecule.steps[step] ?? molecule.steps[0]!;

  return (
    <section ref={ref} className="relative" style={{ height: '500vh' }}>
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/3 size-[60vw] -translate-x-1/2 rounded-full bg-lilac/50 blur-[120px]" />
        <div className="relative mx-auto grid w-full max-w-[1440px] flex-1 grid-rows-[1fr_auto] gap-4 px-5 pt-8 md:grid-cols-[1fr_1.2fr] md:grid-rows-1 md:items-center md:px-10">
          <div className="order-2 md:order-1">
            <p className="eyebrow text-cobalt font-bold tracking-[0.14em]">{molecule.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-medium leading-[1.02] md:text-7xl font-display">{molecule.headline}</h2>
            <div className="mt-6 min-h-[170px] md:mt-10">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.6, ease }}>
                  <p className="eyebrow text-cobalt font-bold">Step 0{step + 1}</p>
                  <h3 className="mt-2 text-2xl font-medium md:text-4xl font-display">{s.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/70">{s.body}</p>
                </motion.div>
              </AnimatePresence>
              <p className="mt-4 text-[0.7rem] italic text-ink/45">{molecule.note}</p>
            </div>
          </div>
          <motion.div style={{ rotate }} className="relative order-1 mx-auto aspect-square w-[58vw] max-w-[620px] md:order-2 md:w-full">
            <AnimatePresence>
              <motion.img
                key={step}
                src={mols[step]}
                alt={`Molecule step ${step + 1}`}
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-contain mix-blend-multiply [mask-image:radial-gradient(circle,black_45%,transparent_70%)]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.9, ease }}
              />
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 pb-6 md:px-10">
          <div className="flex gap-2">
            {molecule.steps.map((_, i) => (
              <span key={i} className={`h-2 rounded-full transition-all duration-700 ${i === step ? 'w-8 bg-cobalt' : 'w-2 bg-silver'}`} />
            ))}
          </div>
          <span className="eyebrow text-[0.6rem] text-ink/60">Scroll to explore ↓</span>
        </div>
      </div>
    </section>
  );
}

/* 5. TRANSPARENCY */
function Icon({ name }: { name: string }) {
  return name === 'factory' ? (
    <svg viewBox="0 0 48 48" className="size-12 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 42V22l10 6v-6l10 6v-6l10 6V8h6v34z" /><path d="M14 36h4M24 36h4M34 36h4" /></svg>
  ) : (
    <svg viewBox="0 0 48 48" className="size-12 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6h12M20 6v14L9 38a3 3 0 0 0 3 4h24a3 3 0 0 0 3-4L28 20V6" /><path d="M14 30h20" /></svg>
  );
}

function Transparency() {
  return (
    <section className="relative overflow-hidden bg-transparency text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-28 md:grid-cols-2 md:px-10 md:py-40">
        <div>
          <p className="eyebrow text-accent font-bold tracking-[0.14em]">{transparency.eyebrow}</p>
          <Lines lines={[transparency.headline]} className="mt-5 text-4xl font-medium md:text-6xl font-display" />
          <p className="mt-5 text-ivory/75">{transparency.line}</p>
        </div>
        <div className="space-y-6">
          {transparency.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="glass-dark rounded-[32px] p-8 md:p-10">
                <Icon name={c.icon} />
                <h3 className="mt-8 text-2xl font-medium font-display">{c.title}</h3>
                <p className="mt-2 text-sm text-ivory/65">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. SOURCING */
function QR() {
  const cells = Array.from({ length: 81 }, (_, i) => ((i * 37) % 7) % 2 === 0 || [0, 1, 2, 9, 11, 18, 19, 20, 6, 7, 8, 15, 17, 24, 25, 26, 54, 55, 56, 63, 65, 72, 73, 74].includes(i));
  return (
    <div className="grid size-24 shrink-0 grid-cols-9 gap-px rounded-xl bg-ivory p-2" aria-label="QR code placeholder">
      {cells.map((on, i) => <span key={i} className={on ? 'bg-ink' : ''} />)}
    </div>
  );
}

function Sourcing() {
  return (
    <section>
      <div className="relative overflow-hidden">
        <img src={field} alt="Herb field at dusk" loading="lazy" width={1920} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-28 text-ivory md:flex-row md:items-end md:justify-between md:px-10 md:py-40">
          <div className="max-w-xl">
            <Lines lines={[sourcing.headline]} className="text-4xl font-medium md:text-6xl font-display" />
            <p className="mt-5 text-ivory/80">{sourcing.body}</p>
          </div>
          <Reveal>
            <Link to="/lab-reports" className="glass-dark flex items-center gap-5 rounded-[32px] p-5 pr-8 transition-transform duration-700 hover:scale-[1.02]">
              <QR />
              <span className="max-w-[10rem] font-display text-lg font-medium">{sourcing.qrText}</span>
            </Link>
          </Reveal>
        </div>
      </div>
      <div id="lab-reports" className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
        <LabTable />
      </div>
    </section>
  );
}

export function LabTable() {
  return (
    <Reveal>
      <div className="overflow-x-auto rounded-[32px] border border-silver bg-ivory">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="eyebrow text-[0.65rem] text-ink/60">
            <tr>{['Product', 'Batch', 'Test', 'Date', ''].map((h) => <th key={h} className="px-6 py-5 font-semibold">{h}</th>)}</tr>
          </thead>
          <tbody>
            {labReports.rows.map((r) => (
              <tr key={r.batch} className="border-t border-silver/60">
                <td className="px-6 py-4 font-medium">{r.product}</td>
                <td className="px-6 py-4 text-ink/70">{r.batch}</td>
                <td className="px-6 py-4 text-ink/70">{r.test}</td>
                <td className="px-6 py-4 text-ink/70">{r.date}</td>
                <td className="px-6 py-4 text-right"><span className="rounded-full border border-cobalt px-4 py-1.5 text-xs font-medium text-cobalt">View PDF</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="border-t border-silver/60 px-6 py-3 text-xs italic text-ink/50">{labReports.note}</p>
      </div>
    </Reveal>
  );
}

/* 7. CONSULT */
function Consult() {
  return (
    <section id="consult" className="relative overflow-hidden bg-lilac px-5 py-28 text-center md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 grid-cols-6 gap-4 opacity-40 md:grid-cols-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <LogoMark key={i} className={`h-6 text-cobalt/40 ${i % 2 ? 'rotate-45' : '-rotate-45'}`} />
        ))}
      </div>
      <div className="relative">
        <Lines lines={[consult.headline]} className="mx-auto max-w-3xl text-3xl font-medium md:text-6xl font-display" />
        <p className="mt-4 text-ink/70">{consult.sub}</p>
        <button className="mt-8 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink transition-transform duration-700 hover:scale-[1.04]">
          {consult.cta} →
        </button>
      </div>
    </section>
  );
}
