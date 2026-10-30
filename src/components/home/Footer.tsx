import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

const columns = [
  { title: 'Shop', links: ['Daily Nourish', 'Daily Strength', 'Daily Gut', 'Sachets'] },
  { title: 'Science', links: ['Lab reports', 'Our standards', 'Batch lookup'] },
  { title: 'Company', links: ['About', 'Careers', 'Contact'] },
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
    <footer id="about" className="bg-cobalt text-white">
      <div className="mx-auto max-w-content px-6 pb-10 pt-20 md:px-10 md:pt-32">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Brand Logo & Tagline */}
          <div className="md:col-span-5">
            <div className="flex flex-col items-start gap-4">
              <div className="overflow-hidden rounded-2xl bg-white/10 p-2 shadow-lg border border-white/20">
                <img
                  src="/brand/namhya-logo-rect.png"
                  alt="By Namhya"
                  className="h-16 w-auto object-contain md:h-20"
                />
              </div>
              <div className="mt-2 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 p-1.5 shadow-sm border border-white/20 overflow-hidden">
                  <img
                    src="/brand/namhya-icon-tight.png"
                    alt="By Namhya mark"
                    className="h-full w-full object-contain scale-110"
                  />
                </span>
                <span className="font-display text-[15px] font-semibold tracking-wider uppercase text-white/90">
                  Ayurvedic Science &bull; Modern Daily Care
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[16px] leading-[26px] text-white/80">
              Modern nutrition for real life. Rooted in Ayurveda, backed by published research, and made in India.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 md:col-span-4 md:col-start-7 md:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="eyebrow text-accent font-semibold">{column.title}</p>
                <ul className="mt-6 space-y-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[15px] text-white/85 transition-colors duration-500 hover:text-accent">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 grid gap-8 border-t border-white/20 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-[24px] font-medium leading-[30px] tracking-[-0.02em] text-white">Stay in the loop</p>
            <p className="mt-2 text-[15px] text-white/75">New batches, lab reports and launches. No noise.</p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            {subscribed ? (
              <p role="status" className="flex h-14 items-center text-[15px] font-semibold text-accent">
                Thanks, you are on the list.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex h-14 items-center rounded-full border border-white/30 bg-white/10 pl-6 pr-2 focus-within:border-accent">
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
                  className="h-full min-w-0 flex-1 bg-transparent text-[15px] text-white placeholder:text-white/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-accent px-5 text-[14px] font-semibold text-cobalt transition-colors duration-500 hover:bg-white hover:text-cobalt"
                >
                  Subscribe
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & policies */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/20 pt-8 text-[13px] text-white/70 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} By Namhya. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {policies.map((policy) => (
              <li key={policy}>
                <a href="#" className="uppercase tracking-[0.08em] transition-colors duration-500 hover:text-accent">
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
