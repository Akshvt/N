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
    <div className="fixed inset-x-0 top-0 z-50 h-11 overflow-hidden bg-cobalt text-white">
      {/* Centered brand logo: seamless blend without any borders or harsh edges */}
      <div className="absolute inset-y-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 px-8 bg-cobalt shadow-[0_0_24px_12px_#2A24BD]">
        <img
          src="/brand/namhya-icon-clean.png"
          alt="By Namhya"
          className="h-6 w-auto object-contain md:h-7"
        />
        <span className="font-display text-[12px] font-bold tracking-[0.16em] uppercase text-white whitespace-nowrap">
          By Namhya
        </span>
      </div>

      {/* Marquee claims gliding smoothly */}
      <div className="marquee-track flex h-full w-max items-center opacity-80">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {group.map((claim, index) => (
              <span
                key={`${copy}-${index}`}
                className="flex items-center whitespace-nowrap px-10 text-[12px] font-medium tracking-[0.08em] text-white/90"
              >
                {claim}
                <span className="ml-10 h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
