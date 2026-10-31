import { ReactNode, useEffect } from 'react';
import { AnnouncementTicker } from '@/components/home/AnnouncementTicker';
import { Navbar } from '@/components/home/Navbar';
import { Footer } from '@/components/home/Footer';

export function LogoMark({ className = '' }: { className?: string }) {
  // Chain of connected blobs brand mark
  return (
    <svg viewBox="0 0 64 28" className={className} fill="currentColor" aria-hidden>
      <circle cx="10" cy="14" r="9" />
      <rect x="15" y="11" width="10" height="6" rx="3" />
      <circle cx="32" cy="14" r="9" />
      <rect x="37" y="11" width="10" height="6" rx="3" />
      <circle cx="54" cy="14" r="9" />
    </svg>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-ink selection:bg-accent selection:text-ink">
      <AnnouncementTicker />
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}

