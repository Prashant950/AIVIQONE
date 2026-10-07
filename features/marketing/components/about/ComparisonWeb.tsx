export default function ComparisonWeb() {
    const centerY = 195;
    const vsCenterX = 500;
    const vsRadius = 26;
    const vsLeftX = vsCenterX - vsRadius;
    const vsRightX = vsCenterX + vsRadius;
    const rightIconX = 665; // Position where arrows touch the icons

    // Exact coordinates matching the weave/wave patterns in image
    const beforePaths = [
        // Spreadsheets (top) -> dips low then rises to VS
        "M 230 84 C 330 84, 320 180, 410 180 S 450 195, 474 195",
        // WhatsApp -> dips down then flows up into VS
        "M 195 128 C 300 128, 340 230, 420 205 S 455 195, 474 195",
        // Phone Calls -> swoops downwards crossing others
        "M 220 172 C 320 172, 330 270, 410 220 S 450 195, 474 195",
        // Notes -> travels across with a wave
        "M 160 216 C 280 216, 330 140, 400 185 S 450 195, 474 195",
        // Manual Follow-ups -> loops high then down
        "M 265 260 C 350 260, 360 120, 430 180 S 455 195, 474 195",
        // Scattered Customer Data -> flows from bottom up into VS
        "M 330 304 C 400 304, 380 230, 440 200 S 460 195, 474 195",
    ];

    // Right side 6 target Y positions (exact row centers)
    const afterRows = [84, 128, 172, 216, 260, 304];

    return (
        <svg
            viewBox="0 0 1000 390"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            aria-hidden="true"
        >
            <defs>
                {/* Glow behind VS */}
                <radialGradient id="vsRadialGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#0284c7" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </radialGradient>

                {/* Animated flow style */}
                <style>{`
          @keyframes dashMove {
            from { stroke-dashoffset: 30; }
            to { stroke-dashoffset: 0; }
          }
          .animate-red-flow {
            animation: dashMove 1.6s linear infinite;
          }
        `}</style>
            </defs>

            {/* Radial soft glow behind VS */}
            <circle cx={vsCenterX} cy={centerY} r="90" fill="url(#vsRadialGlow)" />

            {/* LEFT: S-curve wavy red dashed lines converging into VS */}
            {beforePaths.map((pathD, idx) => (
                <path
                    key={`before-path-${idx}`}
                    d={pathD}
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="1.3"
                    strokeDasharray="2.5 3.5"
                    strokeOpacity="0.75"
                    className="animate-red-flow"
                />
            ))}

            {/* RIGHT: Branching clean cyan lines with arrow heads pointing to icons */}
            {afterRows.map((y, idx) => {
                // Precise branching control points from VS to icon
                const branchPath = `M ${vsRightX} ${centerY} C ${vsRightX + 45} ${centerY}, 585 ${y}, ${rightIconX} ${y}`;

                return (
                    <g key={`after-arrow-${idx}`}>
                        <path
                            d={branchPath}
                            fill="none"
                            stroke="#0284c7"
                            strokeWidth="1.3"
                            strokeOpacity="0.7"
                        />
                        {/* Arrowhead */}
                        <polygon
                            points={`${rightIconX + 6},${y} ${rightIconX - 1},${y - 3} ${rightIconX - 1},${y + 3}`}
                            fill="#38bdf8"
                        />
                    </g>
                );
            })}
        </svg>
    );
}