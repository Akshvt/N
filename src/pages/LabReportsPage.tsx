import { SiteShell } from '@/components/site/chrome';
import { LabTable } from './SciencePage';

export function LabReportsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1100px] px-5 py-24">
        <p className="eyebrow text-cobalt font-bold tracking-[0.14em]">Total transparency</p>
        <h1 className="mt-4 text-4xl font-medium md:text-6xl font-display">Lab reports</h1>
        <p className="mt-4 mb-12 text-ink/70">Batch-level third-party lab reports for N° products.</p>
        <LabTable />
      </section>
    </SiteShell>
  );
}
