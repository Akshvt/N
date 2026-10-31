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
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // Enhanced spring response for noticeably responsive cursor-follow physics
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });
  const ringY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Restored exact connected molecule diagonal chain coordinates matching the original design
  const positions = [
    'left-[8%] top-[8%] md:left-[18%]',
    'left-[38%] top-[34%] md:left-[40%]',
    'left-[12%] top-[62%] md:left-[22%]',
  ];

  return (
    <section
      ref={ref}
      className="relative flex min-h-[90vh] flex-col items-center justify-between overflow-hidden px-5 pb-12 pt-10 md:min-h-screen md:pb-16 md:pt-14"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
        const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
        // Increased range from 30 to 75 so the molecule glides distinctly toward the cursor
        mx.set(xNorm * 75);
        my.set(yNorm * 75);
      }}
    >
      <motion.div style={{ y: ringY }} className="pointer-events-none absolute -left-16 top-24 w-56 text-lilac md:w-80"><Ring className="animate-float" /></motion.div>
      <motion.div style={{ y: ringY }} className="pointer-events-none absolute -right-10 bottom-24 w-48 rotate-180 text-cobalt/25 md:w-72"><Ring className="animate-float" /></motion.div>

      <div className="flex flex-col items-center text-center">
        <p className="eyebrow text-cobalt font-bold tracking-[0.14em]">{hero.eyebrow}</p>
        <Lines as="h1" lines={hero.headline} className="mt-4 text-center text-4xl font-medium leading-[1.02] text-ink md:text-7xl font-display" />
      </div>

      {/* Connected 3D Molecule Stage with interactive cursor spring physics */}
      <motion.div style={{ y, x: sx, translateY: sy }} className="relative my-4 h-[420px] w-full max-w-[640px] md:my-6 md:h-[480px]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 480" aria-hidden>
          <path d="M210 110 L330 230 L230 360" stroke="#D7CBF5" strokeWidth="44" strokeLinecap="round" fill="none" opacity="0.75" />
        </svg>
        {hero.bubbles.map((b, i) => (
          <motion.div
            key={b.title}
            className={`absolute ${positions[i]} flex size-36 flex-col items-center justify-center rounded-full glass-bubble p-4 text-center shadow-lg md:size-48`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{ opacity: { duration: 0.9, ease, delay: 0.2 + i * 0.15 }, scale: { duration: 0.9, ease, delay: 0.2 + i * 0.15 }, y: { duration: 6 + i, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <span className="font-display text-lg font-semibold leading-tight text-cobalt md:text-xl">{b.title}</span>
            <span className="eyebrow mt-1.5 text-[0.55rem] text-ink/50">{b.sub}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive floating scroll indicator with smooth gentle bobbing loop */}
      <div className="relative z-10 mt-auto flex flex-col items-center gap-2 pt-6 text-ink/65">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="eyebrow text-[0.62rem] font-semibold tracking-[0.22em] text-ink/75">SCROLL</span>
          <span className="h-9 w-px bg-cobalt/60" />
        </motion.div>
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
    <section ref={ref} className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 py-24 md:grid-cols-2 md:px-10 md:py-36">
      <div>
        <p className="eyebrow text-cobalt font-bold tracking-[0.14em]">{approach.eyebrow}</p>
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
const cardConfigs = [
  {
    bgClass: 'bg-[#2A24BD]',
    bgColor: '#2A24BD',
    shadow: 'shadow-[0_-8px_32px_rgba(0,0,0,0.22),0_20px_48px_rgba(18,18,18,0.25)]',
  },
  {
    bgClass: 'bg-[#201A9E]',
    bgColor: '#201A9E',
    shadow: 'shadow-[0_-8px_32px_rgba(0,0,0,0.28),0_20px_48px_rgba(18,18,18,0.30)]',
  },
  {
    bgClass: 'bg-[#16127A]',
    bgColor: '#16127A',
    shadow: 'shadow-[0_-8px_32px_rgba(0,0,0,0.32),0_20px_48px_rgba(18,18,18,0.35)]',
  },
] as const;

function StackedCards() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-28 md:px-10">
      <div className="mb-12 text-center md:mb-16">
        <p className="eyebrow text-cobalt font-bold tracking-[0.14em]">How it works</p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl">
          Formulation with precision.
        </h2>
      </div>

      <div className="space-y-12 md:space-y-0">
        {howItWorks.map((c, i) => (
          <div
            key={c.n}
            className="sticky mb-12 md:mb-20"
            style={{
              top: `${90 + i * 44}px`,
              zIndex: i + 1,
            }}
          >
            <article
              className={`${cardConfigs[i].bgClass} ${cardConfigs[i].shadow} relative grid min-h-[480px] gap-8 overflow-hidden rounded-[32px] p-8 text-ivory transition-transform duration-500 ease-out md:min-h-[540px] md:grid-cols-2 md:p-12`}
              style={{
                backgroundColor: cardConfigs[i].bgColor,
                opacity: 1,
              }}
            >
              <div className="pointer-events-none absolute inset-3 rounded-[24px] border border-ivory/15" />
              <div className="relative flex flex-col justify-between gap-8">
                <div>
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-2xl font-bold text-accent md:text-3xl">{c.n}</span>
                    <h3 className="font-display text-3xl font-medium tracking-tight md:text-5xl">{c.title}</h3>
                  </div>
                </div>
                <p className="max-w-md text-base leading-relaxed text-ivory/80 md:text-lg">{c.body}</p>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-ivory/50">
                  <span>Principle 0{i + 1} of 03</span>
                  <span className="h-px w-8 bg-ivory/20" />
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-[240px] overflow-hidden rounded-[28px] border border-ivory/10 shadow-2xl md:max-w-[420px]">
                  <img
                    src={cardImg[c.image]}
                    alt={c.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
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
  useMotionValueEvent(scrollYProgress, 'change', (v) => setStep(Math.min(4, Math.floor(v * 4.98))));
  const s = molecule.steps[step] ?? molecule.steps[0]!;

  return (
    <section ref={ref} className="relative" style={{ height: '260vh' }}>
      <div className="sticky top-16 flex min-h-[calc(100vh-4rem)] flex-col justify-between overflow-hidden py-8 md:py-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lilac/45 blur-[120px]" />
        
        <div className="relative mx-auto my-auto grid w-full max-w-[1440px] flex-1 items-center gap-8 px-5 md:grid-cols-[1fr_1.15fr] md:px-10">
          <div className="order-2 md:order-1">
            <p className="eyebrow text-cobalt font-bold tracking-[0.14em]">{molecule.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.02] tracking-tight md:text-6xl">{molecule.headline}</h2>
            <div className="mt-6 min-h-[160px] md:mt-8">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.5, ease }}>
                  <p className="eyebrow text-cobalt font-bold">Step 0{step + 1}</p>
                  <h3 className="mt-2 font-display text-2xl font-medium md:text-3xl">{s.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/70 md:text-base">{s.body}</p>
                </motion.div>
              </AnimatePresence>
              <p className="mt-4 text-[0.7rem] italic text-ink/45">{molecule.note}</p>
            </div>
          </div>
          
          <motion.div style={{ rotate }} className="relative order-1 mx-auto aspect-square w-[52vw] max-w-[540px] md:order-2 md:w-full">
            <AnimatePresence>
              <motion.img
                key={step}
                src={mols[step]}
                alt={`Molecule step ${step + 1}`}
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-contain mix-blend-multiply [mask-image:radial-gradient(circle,black_45%,transparent_70%)]"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.7, ease }}
              />
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 pt-4 md:px-10">
          <div className="flex gap-2">
            {molecule.steps.map((_, i) => (
              <span key={i} className={`h-2 rounded-full transition-all duration-500 ${i === step ? 'w-8 bg-cobalt' : 'w-2 bg-silver'}`} />
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
    <svg viewBox="0 0 48 48" className="size-12 text-lime" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 42V22l10 6v-6l10 6v-6l10 6V8h6v34z" />
      <path d="M14 36h4M24 36h4M34 36h4" />
    </svg>
  ) : (
    <svg viewBox="0 0 48 48" className="size-12 text-lime" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 6h12M20 6v14L9 38a3 3 0 0 0 3 4h24a3 3 0 0 0 3-4L28 20V6" />
      <path d="M14 30h20" />
    </svg>
  );
}

function Transparency() {
  return (
    <section className="relative overflow-hidden bg-transparency text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:grid-cols-2 md:px-10 md:py-36">
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-lime font-bold tracking-[0.14em]">{transparency.eyebrow}</p>
          <Lines lines={[transparency.headline]} className="mt-5 text-4xl font-medium md:text-6xl font-display text-white" />
          <p className="mt-5 text-base text-ivory/80 md:text-lg">{transparency.line}</p>
        </div>
        <div className="space-y-6">
          {transparency.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="glass-dark rounded-[32px] p-8 md:p-10">
                <Icon name={c.icon} />
                <h3 className="mt-8 font-display text-2xl font-medium text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-ivory/65 leading-relaxed">{c.body}</p>
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
        <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-24 text-ivory md:flex-row md:items-end md:justify-between md:px-10 md:py-36">
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

/* 6. CONSULT */
function Consult() {
  return (
    <section id="consult" className="relative overflow-hidden bg-lilac px-5 py-24 text-center md:py-32">
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
