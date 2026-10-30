import type { Product, ProductFormat } from '@/components/home/productData';

interface ProductRenderProps {
  product: Product;
  format: ProductFormat;
  className?: string;
}

function Label({ product }: { product: Product }) {
  return (
    <div className={`text-center ${product.palette.labelText}`}>
      <p className="font-display text-[9px] font-bold tracking-[0.18em] uppercase opacity-80">By Namhya</p>
      <p className="mt-1 font-display text-[16px] font-semibold leading-[1.1] tracking-[-0.02em]">{product.name}</p>
    </div>
  );
}

export function ProductRender({ product, format, className = '' }: ProductRenderProps) {
  const { palette } = product;

  if (format === 'sachet') {
    return (
      <div aria-hidden="true" className={`relative h-[260px] w-[170px] ${className}`}>
        <div className={`absolute inset-0 rounded-[22px] shadow-sm ${palette.body}`} />
        <div className="absolute inset-x-0 top-0 h-5 rounded-t-[22px] bg-white/20" />
        <div className="absolute inset-x-0 bottom-0 h-5 rounded-b-[22px] bg-black/10" />
        <div className={`absolute inset-x-4 top-1/2 flex -translate-y-1/2 flex-col justify-center rounded-[14px] px-3 py-6 shadow-inner ${palette.label}`}>
          <Label product={product} />
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`relative h-[250px] w-[220px] ${className}`}>
      <div className={`absolute inset-x-0 top-0 h-[54px] rounded-[18px] ${palette.lid}`} />
      <div className={`absolute inset-x-[6px] bottom-0 top-[44px] rounded-[28px] ${palette.body}`}>
        <div className={`absolute inset-x-5 top-1/2 flex -translate-y-1/2 flex-col justify-center rounded-[18px] px-3 py-6 shadow-inner ${palette.label}`}>
          <Label product={product} />
        </div>
      </div>
    </div>
  );
}
