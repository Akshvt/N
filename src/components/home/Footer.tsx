import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'Daily Nourish', href: '/#shop' },
      { label: 'Daily Strength', href: '/#shop' },
      { label: 'Daily Gut', href: '/#shop' },
      { label: 'Sachets', href: '/#shop' },
    ],
  },
  {
    title: 'Science',
    links: [
      { label: 'Science overview', href: '/science' },
      { label: 'Lab reports', href: '/lab-reports' },
      { label: 'Our standards', href: '/science' },
      { label: 'Batch lookup', href: '/lab-reports' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];

const policies = ['Privacy', 'Terms', 'Refunds', 'Shipping'];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer id="about" className="bg-lilac text-ink">
      <div className="mx-auto max-w-content px-6 pb-10 pt-20 md:px-10 md:pt-32">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Brand Logo & Tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <img
                src="/brand/namhya-icon-clean.png"
                alt="By Namhya"
                className="h-16 w-auto object-contain md:h-20 [filter:drop-shadow(0_0_1px_rgba(0,0,0,0.85))_drop-shadow(0_1px_2px_rgba(0,0,0,0.25))]"
              />
              <div className="flex flex-col">
                <span className="font-display text-[11px] font-bold tracking-[0.25em] text-cobalt uppercase">
                  By
                </span>
                <span className="font-display text-[32px] font-bold tracking-[0.04em] text-ink uppercase leading-none md:text-[42px]">
                  Namhya
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[16px] font-medium leading-[26px] text-cobalt">
              Modern nutrition for real life. Rooted in Ayurveda, backed by published research, and made in India.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 md:col-span-4 md:col-start-7 md:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="eyebrow text-cobalt font-bold tracking-[0.14em] uppercase text-[12px]">
                  {column.title}
                </p>
                <ul className="mt-6 space-y-4">
                  {column.links.map((link) => {
                    const isInternal = link.href.startsWith('/') && !link.href.includes('#');
                    return (
                      <li key={link.label}>
                        {isInternal ? (
                          <Link
                            to={link.href}
                            className="text-[15px] font-medium text-cobalt transition-colors duration-300 hover:text-accent"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="text-[15px] font-medium text-cobalt transition-colors duration-300 hover:text-accent"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 grid gap-8 border-t border-ink/15 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-[24px] font-medium leading-[30px] tracking-[-0.02em] text-ink">
              Stay in the loop
            </p>
            <p className="mt-2 text-[15px] text-ink-muted">
              New batches, lab reports and launches. No noise.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            {subscribed ? (
              <p role="status" className="flex h-14 items-center text-[15px] font-semibold text-cobalt">
                Thanks, you are on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex h-14 items-center rounded-full border border-ink/20 bg-white/90 pl-6 pr-2 shadow-xs transition-colors duration-300 focus-within:border-cobalt focus-within:ring-2 focus-within:ring-cobalt/20"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  className="h-full min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-ink/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-accent px-5 text-[14px] font-bold text-ink transition-all duration-300 hover:bg-ink hover:text-white shadow-xs"
                >
                  Subscribe
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & policies */}
        <div className="mt-16 flex flex-col gap-6 border-t border-ink/15 pt-8 text-[13px] text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} By Namhya. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {policies.map((policy) => (
              <li key={policy}>
                <a
                  href="#"
                  className="text-[12px] font-medium uppercase tracking-[0.08em] text-ink-muted transition-colors duration-300 hover:text-ink"
                >
                  {policy}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
