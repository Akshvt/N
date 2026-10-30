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
    <div className="fixed inset-x-0 top-0 z-50 h-9 overflow-hidden bg-ink text-ivory">
      <div className="marquee-track flex h-full w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {group.map((claim, index) => (
              <span
                key={`${copy}-${index}`}
                className="flex items-center whitespace-nowrap px-8 text-[12px] font-medium uppercase tracking-[0.08em]"
              >
                {claim}
                <span
                  className={`ml-8 h-1.5 w-1.5 rounded-full ${
                    index % 2 === 0 ? 'bg-accent' : 'bg-cobalt'
                  }`}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
