const claims = [
  'Ancient Wisdom • Modern Science',
  'Third-Party Lab Tested',
  'Rooted in Ayurveda',
  'Whole-Food Based Formulas',
  'Made in India',
];

export function AnnouncementTicker() {
  return (
    <aside
      aria-label="Brand announcements"
      className="fixed inset-x-0 top-0 z-50 h-10 overflow-hidden bg-lilac text-ink select-none"
    >
      {/* Smooth continuous marquee track without any overlapping logo box */}
      <div className="flex h-full w-max items-center">
        <div className="flex shrink-0 items-center animate-ticker">
          {claims.map((claim, index) => (
            <span
              key={`c1-${index}`}
              className="flex items-center whitespace-nowrap px-8 text-[11px] font-semibold tracking-[0.14em] uppercase text-ink"
            >
              {claim}
              <span className="ml-8 h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden="true" />
            </span>
          ))}
        </div>

        <div className="flex shrink-0 items-center animate-ticker" aria-hidden="true">
          {claims.map((claim, index) => (
            <span
              key={`c2-${index}`}
              className="flex items-center whitespace-nowrap px-8 text-[11px] font-semibold tracking-[0.14em] uppercase text-ink"
            >
              {claim}
              <span className="ml-8 h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden="true" />
            </span>
          ))}
        </div>

        <div className="flex shrink-0 items-center animate-ticker" aria-hidden="true">
          {claims.map((claim, index) => (
            <span
              key={`c3-${index}`}
              className="flex items-center whitespace-nowrap px-8 text-[11px] font-semibold tracking-[0.14em] uppercase text-ink"
            >
              {claim}
              <span className="ml-8 h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
