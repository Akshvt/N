export type ProductFormat = 'tub' | 'sachet';
export type ProductTint = 'ivory' | 'ink' | 'lilac';

export interface ProductBadge {
  bg: string;
  text: string;
  border: string;
}

export interface ProductPalette {
  body: string;
  lid: string;
  lidAccent?: string;
  label: string;
  labelText: string;
}

export interface Product {
  id: string;
  formulaNumber: string;
  code: string;
  name: string;
  descriptor: string;
  spec: string;
  netWeight: string;
  formulaBadge: ProductBadge;
  palette: ProductPalette;
  lifestyleImage: string;
  lifestyleAlt: string;
  prices: Record<ProductFormat, string>;
  sizes: Record<ProductFormat, string>;
}

export const products: Product[] = [
  {
    id: 'nourish',
    formulaNumber: 'Formula 01',
    code: 'F-01',
    name: 'Daily Nourish',
    descriptor: 'Whole-food nutrition blend',
    spec: 'Whole-Food Vitality',
    netWeight: 'NET WT 450G • 30 SERVINGS',
    formulaBadge: {
      bg: 'bg-accent/20',
      text: 'text-ink',
      border: 'border-accent/40',
    },
    palette: {
      body: 'bg-[#121212]',
      lid: 'bg-[#1E1E1E]',
      lidAccent: 'bg-accent',
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
    formulaNumber: 'Formula 02',
    code: 'F-02',
    name: 'Daily Strength',
    descriptor: 'Creatine + Ayurvedic botanicals',
    spec: 'Creatine + Botanicals',
    netWeight: 'NET WT 400G • 30 SERVINGS',
    formulaBadge: {
      bg: 'bg-cobalt/10',
      text: 'text-cobalt',
      border: 'border-cobalt/25',
    },
    palette: {
      body: 'bg-[#121212]',
      lid: 'bg-cobalt',
      lidAccent: 'bg-white',
      label: 'bg-cobalt',
      labelText: 'text-white',
    },
    lifestyleImage: 'https://images.pexels.com/photos/16961403/pexels-photo-16961403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    lifestyleAlt: 'Active training and daily performance',
    prices: { tub: '₹2,890', sachet: '₹229' },
    sizes: { tub: 'Tub, 30 servings', sachet: 'Single-serve sachet' },
  },
  {
    id: 'gut',
    formulaNumber: 'Formula 03',
    code: 'F-03',
    name: 'Daily Gut',
    descriptor: 'Prebiotic + probiotic blend',
    spec: 'Pre + Probiotic Care',
    netWeight: 'NET WT 360G • 30 SERVINGS',
    formulaBadge: {
      bg: 'bg-lilac/80',
      text: 'text-ink',
      border: 'border-lilac',
    },
    palette: {
      body: 'bg-[#121212]',
      lid: 'bg-[#1E1E1E]',
      lidAccent: 'bg-lilac',
      label: 'bg-lilac',
      labelText: 'text-ink',
    },
    lifestyleImage: 'https://images.pexels.com/photos/6019947/pexels-photo-6019947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    lifestyleAlt: 'Mindful routine with botanical gut care',
    prices: { tub: '₹2,390', sachet: '₹189' },
    sizes: { tub: 'Tub, 30 servings', sachet: 'Single-serve sachet' },
  },
];
