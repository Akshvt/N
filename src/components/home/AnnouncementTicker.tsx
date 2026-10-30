const claims = ['Third-party lab tested', 'Whole-food based', 'Made in India'];

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
                className="flex items-center whitespace-nowrap px-8 text-[13px] font-medium uppercase tracking-[0.08em]"
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
