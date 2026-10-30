export type ProductFormat = 'tub' | 'sachet';
export type ProductTint = 'ivory' | 'ink' | 'lilac' | 'cobalt';

export interface ProductPalette {
  body: string;
  lid: string;
  label: string;
  labelText: string;
}

export interface Product {
  id: string;
  name: string;
  descriptor: string;
  tint: ProductTint;
  palette: ProductPalette;
  lifestyleImage: string;
  lifestyleAlt: string;
  prices: Record<ProductFormat, string>;
  sizes: Record<ProductFormat, string>;
}

export const products: Product[] = [
  {
    id: 'nourish',
    name: 'Daily Nourish',
    descriptor: 'Whole-food nutrition blend',
    tint: 'ivory',
    palette: {
      body: 'bg-ink',
      lid: 'bg-ink-soft',
      label: 'bg-accent',
      labelText: 'text-ink',
    },
    lifestyleImage: 'https://images.pexels.com/photos/3756512/pexels-photo-3756512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    lifestyleAlt: 'Healthy breakfast routine with whole foods',
    prices: { tub: '₹2,490', sachet: '₹199' },
    sizes: { tub: 'Tub, 30 servings', sachet: 'Single-serve sachet' },
  },
  {
    id: 'strength',
    name: 'Daily Strength',
    descriptor: 'Creatine + Ayurvedic botanicals',
    tint: 'cobalt',
    palette: {
      body: 'bg-cobalt',
      lid: 'bg-cobalt-deep',
      label: 'bg-accent',
      labelText: 'text-cobalt',
    },
    lifestyleImage: 'https://images.pexels.com/photos/16961403/pexels-photo-16961403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    lifestyleAlt: 'Active training and daily performance',
    prices: { tub: '₹2,890', sachet: '₹229' },
    sizes: { tub: 'Tub, 30 servings', sachet: 'Single-serve sachet' },
  },
  {
    id: 'gut',
    name: 'Daily Gut',
    descriptor: 'Prebiotic + probiotic blend',
    tint: 'lilac',
    palette: {
      body: 'bg-ivory',
      lid: 'bg-ink',
      label: 'bg-lilac',
      labelText: 'text-ink',
    },
    lifestyleImage: 'https://images.pexels.com/photos/6019947/pexels-photo-6019947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    lifestyleAlt: 'Mindful routine with botanical gut care',
    prices: { tub: '₹2,390', sachet: '₹189' },
    sizes: { tub: 'Tub, 30 servings', sachet: 'Single-serve sachet' },
  },
];
