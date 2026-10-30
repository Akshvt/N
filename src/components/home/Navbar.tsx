import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const links = [
  { label: 'Shop', href: '#shop' },
  { label: 'Science', href: '#science' },
  { label: 'About', href: '#about' },
];

const iconButton =
  'flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-500 hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-11 z-40 transition-[background-color,backdrop-filter,border-color] duration-500 ease-editorial ${
        scrolled ? 'border-b border-silver/60 bg-ivory/80 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-content items-center justify-between px-6 md:px-10" aria-label="Main">
        <a href="#top" aria-label="By Namhya home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group relative py-2 text-[15px] font-medium text-ink"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button type="button" aria-label="Search" className={`${iconButton} hidden md:flex`}>
            <Search size={20} strokeWidth={1.75} />
          </button>
          <button type="button" aria-label="Account" className={`${iconButton} hidden md:flex`}>
            <User size={20} strokeWidth={1.75} />
          </button>
          <button type="button" aria-label="Cart" className={iconButton}>
            <ShoppingBag size={20} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`${iconButton} md:hidden`}
          >
            {menuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-silver/60 bg-ivory md:hidden">
          <ul className="mx-auto flex max-w-content flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.label} className="border-b border-silver/60 last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-5 font-display text-[28px] font-medium tracking-[-0.02em] text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
