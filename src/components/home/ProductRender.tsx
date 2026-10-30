import type { Product, ProductFormat } from '@/components/home/productData';

interface ProductRenderProps {
  product: Product;
  format: ProductFormat;
  className?: string;
}

export function ProductRender({ product, format, className = '' }: ProductRenderProps) {
  const { palette } = product;

  if (format === 'sachet') {
    return (
      <div aria-hidden="true" className={`relative h-[260px] w-[170px] select-none ${className}`}>
        {/* Sachet Body (Apothecary Matte Obsidian Pouch) */}
        <div className="absolute inset-0 rounded-[22px] bg-[#141414] shadow-[0_16px_32px_-8px_rgba(0,0,0,0.35)] overflow-hidden">
          {/* Surface Lighting */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-white/[0.05] to-black/30 pointer-events-none" />

          {/* Top Crimped Seal */}
          <div className="absolute inset-x-0 top-0 h-6 border-b border-white/10 bg-gradient-to-b from-white/15 to-transparent flex items-center justify-between px-3">
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="text-[7px] tracking-[0.2em] uppercase font-mono text-white/40">SEALED</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
          </div>

          {/* Tear Notch */}
          <div className="absolute left-0 top-8 h-2.5 w-1.5 rounded-r-full bg-[#202020] border-y border-r border-white/10" />

          {/* Centered Formula Sachet Label */}
          <div className={`absolute inset-x-3 top-1/2 -translate-y-1/2 rounded-[14px] p-4 shadow-[0_4px_12px_rgba(0,0,0,0.22)] ${palette.label} ${palette.labelText}`}>
            <div className="flex items-center justify-between border-b border-current/15 pb-1.5">
              <span className="font-display text-[8px] font-bold tracking-[0.22em] uppercase opacity-90">By Namhya</span>
              <span className="font-mono text-[8px] font-bold tracking-wider opacity-80">{product.code}</span>
            </div>
            <div className="py-2.5 text-center">
              <p className="font-display text-[15px] font-bold leading-tight tracking-[-0.01em]">{product.name}</p>
              <p className="mt-1 text-[9px] font-semibold tracking-wide uppercase opacity-80">{product.spec}</p>
            </div>
            <div className="border-t border-current/15 pt-1.5 text-center">
              <span className="font-mono text-[7px] font-medium tracking-[0.16em] uppercase opacity-75">Single Dose • Active Care</span>
            </div>
          </div>

          {/* Bottom Crimped Seal */}
          <div className="absolute inset-x-0 bottom-0 h-5 border-t border-white/10 bg-gradient-to-t from-white/15 to-transparent" />
        </div>
      </div>
    );
  }

  // Tub Rendering: Apothecary Matte Obsidian Tub with Formula-Specific Label
  return (
    <div aria-hidden="true" className={`relative h-[255px] w-[215px] select-none ${className}`}>
      {/* Tub Lid */}
      <div className={`absolute inset-x-1.5 top-0 h-[48px] rounded-t-[20px] rounded-b-[4px] shadow-[0_6px_14px_rgba(0,0,0,0.3)] overflow-hidden ${palette.lid}`}>
        {/* Cylindrical Lid Lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/5 to-black/40 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-white/30" />
        {/* Lid accent rim indicator */}
        {palette.lidAccent && (
          <div className={`absolute inset-x-0 bottom-0 h-[2px] opacity-75 ${palette.lidAccent}`} />
        )}
      </div>

      {/* Neck Thread Seam */}
      <div className="absolute inset-x-4 top-[46px] h-[5px] bg-[#0A0A0A]" />

      {/* Tub Body */}
      <div className="absolute inset-x-0 bottom-0 top-[50px] rounded-b-[26px] rounded-t-[6px] bg-[#121212] shadow-[0_22px_36px_-10px_rgba(0,0,0,0.4)] overflow-hidden">
        {/* Cylindrical 3D Lighting Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.09] via-transparent to-black/50 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />

        {/* Formula Wrap Label */}
        <div className={`absolute inset-x-3.5 top-1/2 -translate-y-[45%] rounded-[14px] p-4 shadow-[0_4px_14px_rgba(0,0,0,0.25)] ${palette.label} ${palette.labelText}`}>
          {/* Label Header */}
          <div className="flex items-center justify-between border-b border-current/15 pb-1.5">
            <span className="font-display text-[9px] font-bold tracking-[0.24em] uppercase opacity-90">By Namhya</span>
            <span className="rounded-sm bg-black/10 px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-wider">
              {product.code}
            </span>
          </div>

          {/* Formula Identity */}
          <div className="py-2.5 text-center">
            <p className="font-display text-[17px] font-bold leading-tight tracking-[-0.02em]">{product.name}</p>
            <p className="mt-1 text-[10px] font-semibold tracking-wide uppercase opacity-85">{product.spec}</p>
          </div>

          {/* Label Specifications */}
          <div className="flex items-center justify-between border-t border-current/15 pt-1.5 font-mono text-[7.5px] font-semibold tracking-[0.14em] uppercase opacity-80">
            <span>30 Servings</span>
            <span>Made in India</span>
          </div>
        </div>

        {/* Base Rim Highlight */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/10" />
      </div>
    </div>
  );
}
