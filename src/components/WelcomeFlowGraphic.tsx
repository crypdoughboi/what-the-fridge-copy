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
          d="M101 58C112 58 117 68 128 66C133 65 136 61 138 59M225 58C236 58 241 68 252 66C257 65 260 61 262 59"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="5 9"
          opacity="0.6"
        />

        <g filter="url(#welcome-flow-shadow)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="28" y="18" width="57" height="78" rx="10" strokeWidth="4" fill="none" />
          <path d="M28 56H85" strokeWidth="4" />
          <path d="M38 36V49" strokeWidth="4" />
          <path d="M38 67V80" strokeWidth="4" />
          <path d="M39 96V101" strokeWidth="4" />
          <path d="M75 96V101" strokeWidth="4" />
        </g>

        <g filter="url(#welcome-flow-shadow)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="150" y="22" width="61" height="74" rx="9" strokeWidth="4" fill="none" />
          <path d="M165 15V30M181 15V30M197 15V30" strokeWidth="4" />
          <path d="M164 47L171 54L184 39" strokeWidth="4" />
          <path d="M194 48H207" strokeWidth="4" />
          <path d="M164 66L171 73L184 58" strokeWidth="4" />
          <path d="M194 67H207" strokeWidth="4" />
          <path d="M164 85L171 92L184 77" strokeWidth="4" />
          <path d="M194 86H207" strokeWidth="4" />
        </g>

        <g filter="url(#welcome-flow-shadow)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M272 58H347C344 80 329 94 310 94C291 94 276 80 272 58Z" strokeWidth="4" fill="none" />
          <path d="M292 94H329C328 102 323 106 315 106H306C298 106 293 102 292 94Z" strokeWidth="4" />
          <path d="M283 58C284 47 293 41 303 45C306 33 318 30 326 39C336 39 344 46 344 58" strokeWidth="4" />
          <path d="M330 39C336 27 349 24 349 24C349 24 349 38 337 45" strokeWidth="4" />
          <path d="M303 53C303 53.2 303 53.2 303 53.4M318 53C318 53.2 318 53.2 318 53.4" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}
