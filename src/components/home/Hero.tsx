import { ArrowRight, FlaskConical, Leaf } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';
import { Reveal, RevealLines } from '@/components/motion/Reveal';
import { ProductRender } from '@/components/home/ProductRender';
import { products } from '@/components/home/productData';

const [nourish, strength] = products;

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-12 sm:pb-16 md:pb-24 pt-[140px] sm:pt-[160px] md:pt-[176px]">
      <div className="mx-auto grid w-full max-w-content items-center gap-16 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-7 flex flex-col items-center text-center">
          <Reveal className="text-center">
            <p className="eyebrow text-center">Science-backed daily formulas</p>
          </Reveal>

          <h1 className="mt-6 font-display text-[38px] font-medium leading-[42px] tracking-[-0.02em] text-ink min-[390px]:text-[50px] min-[390px]:leading-[54px] md:text-[88px] md:leading-[92px] text-center">
            <RevealLines
              lines={[
                'Nutrition for a',
                <span key="highlight" className="inline-block rounded-[20px] bg-accent text-ink font-semibold px-3 md:px-5 selection:bg-cobalt selection:text-white">
                  stronger
                </span>,
                'you.',
              ]}
            />
          </h1>

          <Reveal delay={500} className="text-center">
            <p className="mt-8 max-w-md mx-auto text-[17px] leading-[28px] text-ink-muted text-center">
              Lab-tested, whole-food based supplements for real women and active adults. Made in India, one
              tub or sachet at a time.
            </p>
          </Reveal>

          <Reveal delay={600} className="text-center">
            <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
              <PillButton href="/#shop">
                Shop now
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </PillButton>
              <PillButton variant="secondary" href="/science">
                See the science
              </PillButton>
            </div>
          </Reveal>

          <Reveal delay={750} className="text-center">
            <div className="mt-14 flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-[13px] font-medium uppercase tracking-[0.08em] text-cobalt">
              <span className="flex items-center gap-2">
                <FlaskConical size={16} strokeWidth={1.75} className="text-cobalt" aria-hidden="true" />
                Lab tested
              </span>
              <span className="flex items-center gap-2">
                <Leaf size={16} strokeWidth={1.75} className="text-cobalt" aria-hidden="true" />
                Plant-based
              </span>
              <span className="flex h-9 items-center gap-2 rounded-full border border-cobalt/30 bg-cobalt/5 px-4 font-semibold text-cobalt">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                Ayurvedic Science
              </span>
            </div>
          </Reveal>
        </div>

        <div className="relative h-[440px] md:h-[560px] lg:col-span-5">
          <div
            aria-hidden="true"
            className="absolute right-[4%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-lilac md:h-[380px] md:w-[380px]"
          />
          <Reveal variant="image" delay={200} className="absolute right-[10%] top-[10%]">
            <div className="animate-float-hero-tub">
              <ProductRender product={nourish} format="tub" />
            </div>
          </Reveal>
          <Reveal variant="image" delay={400} className="absolute bottom-[4%] left-[6%]">
            <div className="animate-float-hero-sachet">
              <ProductRender product={strength} format="sachet" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
