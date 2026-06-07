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
          d="M96 59C119 60 121 76 143 66C161 58 166 53 184 58M223 58C241 59 248 74 268 66C282 60 286 55 303 57"
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
          <rect x="161" y="22" width="61" height="74" rx="9" strokeWidth="4" fill="none" />
          <path d="M176 15V30M192 15V30M208 15V30" strokeWidth="4" />
          <path d="M175 47L182 54L195 39" strokeWidth="4" />
          <path d="M205 48H218" strokeWidth="4" />
          <path d="M175 66L182 73L195 58" strokeWidth="4" />
          <path d="M205 67H218" strokeWidth="4" />
          <path d="M175 85L182 92L195 77" strokeWidth="4" />
          <path d="M205 86H218" strokeWidth="4" />
        </g>

        <g filter="url(#welcome-flow-shadow)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M291 61H340C338 82 326 96 307 96C290 96 279 82 276 61H291Z" strokeWidth="4" fill="none" />
          <path d="M291 96C292 104 297 108 307 108H323C332 108 337 104 338 96" strokeWidth="4" />
          <path d="M291 61C292 48 300 41 310 45C312 31 326 28 334 38C342 37 348 42 349 51" strokeWidth="4" />
          <path d="M337 39C343 29 354 27 354 27C354 27 354 39 344 46" strokeWidth="4" />
          <path d="M307 53C307 53.2 307 53.2 307 53.4M322 53C322 53.2 322 53.2 322 53.4" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}
