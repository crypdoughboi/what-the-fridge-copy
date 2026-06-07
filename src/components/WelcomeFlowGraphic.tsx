export function WelcomeFlowGraphic() {
  return (
    <div className="-mx-2 mt-5 h-[118px] text-sage" aria-hidden="true">
      <svg viewBox="0 0 360 118" className="h-full w-full" fill="none">
        <defs>
          <filter id="welcome-flow-shadow" x="-20%" y="-20%" width="140%" height="150%" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="8" stdDeviation="4" floodColor="#16150F" floodOpacity="0.08" />
          </filter>
        </defs>

        <path
          d="M101 58C113 58 120 67 133 64C138 63 141 60 145 59M215 58C227 58 235 67 247 64C252 63 256 60 259 59"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="5 9"
          opacity="0.6"
        />

        <g filter="url(#welcome-flow-shadow)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="28" y="18" width="60" height="78" rx="10" strokeWidth="4" fill="none" />
          <path d="M28 56H88" strokeWidth="4" />
          <path d="M38 36V49" strokeWidth="4" />
          <path d="M38 67V80" strokeWidth="4" />
          <path d="M39 96V101" strokeWidth="4" />
          <path d="M77 96V101" strokeWidth="4" />
        </g>

        <g filter="url(#welcome-flow-shadow)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="150" y="22" width="60" height="76" rx="9" strokeWidth="4" fill="none" />
          <path d="M165 16V30M180 16V30M195 16V30" strokeWidth="4" />
          <path d="M160 48L165 53L173 44" strokeWidth="3.25" />
          <path d="M184 48H205" strokeWidth="3.5" />
          <path d="M160 67L165 72L173 63" strokeWidth="3.25" />
          <path d="M184 67H205" strokeWidth="3.5" />
          <path d="M160 86L165 91L173 82" strokeWidth="3.25" />
          <path d="M184 86H205" strokeWidth="3.5" />
        </g>

        <g filter="url(#welcome-flow-shadow)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M265 58H339C336 80 321 94 302 94C283 94 268 80 265 58Z" strokeWidth="4" fill="none" />
          <path d="M284 94H320C319 101 314 105 307 105H297C290 105 285 101 284 94Z" strokeWidth="4" />
          <path d="M276 58C277 47 286 41 296 45C299 33 311 30 319 39C329 39 337 46 337 58" strokeWidth="4" />
          <path d="M323 39C329 27 342 24 342 24C342 24 342 38 330 45" strokeWidth="4" />
          <path d="M296 53C296 53.2 296 53.2 296 53.4M311 53C311 53.2 311 53.2 311 53.4" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}
