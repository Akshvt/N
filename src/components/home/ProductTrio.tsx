import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/home/SectionHeading';
import { ProductRender } from '@/components/home/ProductRender';
import { products, type Product, type ProductFormat, type ProductTint } from '@/components/home/productData';

export function ProductTrio() {
  return (
    <section id="shop" className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-40">
      <SectionHeading eyebrow="The daily formulas" title="Three formulas. One daily routine." />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={index * 120} className="h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const tintClasses: Record<ProductTint, string> = {
  ivory: 'border border-silver/70 bg-white text-ink shadow-sm',
  ink: 'border border-silver/70 bg-white text-ink shadow-sm',
  lilac: 'bg-lilac text-ink shadow-sm',
};

const formats: { value: ProductFormat; label: string }[] = [
  { value: 'tub', label: 'Tub' },
  { value: 'sachet', label: 'Sachet' },
];

function ProductCard({ product }: { product: Product }) {
  const [format, setFormat] = useState<ProductFormat>('tub');
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timer = window.setTimeout(() => setAdded(false), 2200);
    return () => window.clearTimeout(timer);
  }, [added]);

  return (
    <article className={`group flex h-full flex-col rounded-card p-5 transition-colors duration-700 ${tintClasses[product.tint]}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-ivory/60">
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]">
          <img
            src={product.lifestyleImage}
            alt={product.lifestyleAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[900ms] ease-editorial group-hover:opacity-100"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-[900ms] ease-editorial group-hover:opacity-0">
            <div className="group-hover:-translate-y-2 transition-transform duration-700 ease-editorial">
              <ProductRender product={product} format={format} />
            </div>
          </div>
        </div>

        <div className="absolute left-4 top-4 z-10 flex rounded-full bg-ivory/95 p-1 text-[12px] font-medium text-ink shadow-sm">
          {formats.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={format === option.value}
              onClick={() => setFormat(option.value)}
              className={`rounded-full px-3 py-1.5 transition-colors duration-500 ${
                format === option.value ? 'bg-ink text-ivory' : 'text-ink hover:bg-ink/5'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-3 pt-6">
        <h3 className="font-display text-[32px] font-medium leading-[38px] tracking-[-0.02em] text-ink">{product.name}</h3>
        <p className="mt-2 text-[15px] leading-[24px] text-ink-muted">{product.descriptor}</p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <div>
            <p className="font-display text-[24px] font-medium leading-none text-ink">{product.prices[format]}</p>
            <p className="mt-2 text-[13px] text-ink-muted">{product.sizes[format]}</p>
          </div>
          <button
            type="button"
            onClick={() => setAdded(true)}
            aria-label={`Add ${product.name} ${format} to cart`}
            className={`relative flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent font-medium text-ink transition-[width,background-color,color] duration-700 ease-editorial hover:bg-cobalt hover:text-white ${
              added ? 'w-12' : 'w-[152px]'
            }`}
          >
            <span
              className={`absolute whitespace-nowrap text-[15px] font-medium transition-all duration-500 ease-editorial ${
                added ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              Add to cart
            </span>
            <Check
              size={20}
              strokeWidth={2.25}
              aria-hidden="true"
              className={`absolute transition-all duration-500 ease-editorial ${
                added ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`}
            />
          </button>
        </div>
      </div>
    </article>
  );
}
