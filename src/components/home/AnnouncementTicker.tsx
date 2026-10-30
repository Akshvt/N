const claims = [
  'Ancient Wisdom • Modern Science',
  'Third-Party Lab Tested',
  'Rooted in Ayurveda',
  'Whole-Food Based Formulas',
  'Made in India',
];

export function AnnouncementTicker() {
  const group = [...claims, ...claims];

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-10 overflow-hidden bg-cobalt text-white shadow-sm">
      {/* Centered cropped rectangular blue logo above navbar */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-20 flex items-center px-4 bg-cobalt shadow-md border-x border-white/10">
        <img
          src="/brand/namhya-logo-rect.png"
          alt="By Namhya"
          className="h-7 w-auto object-contain"
        />
      </div>

      {/* Ticker marquee gliding smoothly */}
      <div className="marquee-track flex h-full w-max items-center opacity-90">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {group.map((claim, index) => (
              <span
                key={`${copy}-${index}`}
                className="flex items-center whitespace-nowrap px-8 text-[12px] font-medium tracking-[0.08em] text-white/90"
              >
                {claim}
                <span className="ml-8 h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
