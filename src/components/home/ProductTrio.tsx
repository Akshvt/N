import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/home/SectionHeading';
import { ProductRender } from '@/components/home/ProductRender';
import { products, type Product, type ProductFormat } from '@/components/home/productData';

export function ProductTrio() {
  return (
    <section id="shop" className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-40">
      <SectionHeading eyebrow="The daily formulas" title="Three formulas. One daily routine." />
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={index * 120} className="h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

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
    <article className="group flex h-full flex-col rounded-card border border-silver/60 bg-white p-6 shadow-sm transition-all duration-500 ease-editorial hover:-translate-y-1.5 hover:shadow-xl">
      {/* Product Display Canvas */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-ivory/70 border border-silver/30">
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.03]">
          {/* Lifestyle photo on hover */}
          <img
            src={product.lifestyleImage}
            alt={product.lifestyleAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[900ms] ease-editorial group-hover:opacity-100"
          />
          {/* Tactile Product Render */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-[900ms] ease-editorial group-hover:opacity-0">
            <div className="transition-transform duration-700 ease-editorial group-hover:-translate-y-2">
              <ProductRender product={product} format={format} />
            </div>
          </div>
        </div>

        {/* Top Controls: Format Switcher (Left) & Formula Badge (Right) */}
        <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between">
          {/* Format Switcher */}
          <div className="flex rounded-full bg-white/95 p-1 text-[11px] font-semibold text-ink shadow-sm backdrop-blur-sm border border-silver/40">
            {formats.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={format === option.value}
                onClick={() => setFormat(option.value)}
                className={`rounded-full px-3 py-1 transition-all duration-300 ${
                  format === option.value
                    ? 'bg-ink text-ivory shadow-xs'
                    : 'text-ink/70 hover:text-ink hover:bg-black/5'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Formula Badge Pill */}
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider uppercase border shadow-2xs backdrop-blur-sm ${product.formulaBadge.bg} ${product.formulaBadge.text} ${product.formulaBadge.border}`}
          >
            {product.formulaNumber}
          </span>
        </div>
      </div>

      {/* Product Details & Actions */}
      <div className="flex flex-1 flex-col px-1 pb-2 pt-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-muted">
            {product.code}
          </span>
          <span className="h-1 w-1 rounded-full bg-ink/20" />
          <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-cobalt">
            {product.spec}
          </span>
        </div>

        <h3 className="mt-2 font-display text-[30px] font-medium leading-[36px] tracking-[-0.02em] text-ink">
          {product.name}
        </h3>
        <p className="mt-2 text-[15px] leading-[24px] text-ink-muted">
          {product.descriptor}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <div>
            <p className="font-display text-[26px] font-medium leading-none text-ink">
              {product.prices[format]}
            </p>
            <p className="mt-2 text-[13px] text-ink-muted">
              {product.sizes[format]}
            </p>
          </div>

          {/* Unified Add to Cart Button */}
          <button
            type="button"
            onClick={() => setAdded(true)}
            aria-label={`Add ${product.name} ${format} to cart`}
            className={`relative flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-500 ease-editorial active:scale-95 ${
              added
                ? 'w-12 bg-ink text-accent shadow-md'
                : 'w-[146px] bg-accent text-ink hover:bg-ink hover:text-white hover:shadow-lg'
            }`}
          >
            <span
              className={`absolute whitespace-nowrap text-[14px] font-semibold tracking-wide transition-all duration-500 ease-editorial ${
                added ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              Add to cart
            </span>
            <Check
              size={20}
              strokeWidth={2.5}
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
