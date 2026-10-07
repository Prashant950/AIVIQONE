export default function DonutChart({
  segments,
  size = 140,
  strokeWidth = 14,
  centerLabel,
  centerValue,
}: {
  segments: { value: number; color: string }[];
  size?: number;
  strokeWidth?: number;
  centerLabel?: string;
  centerValue?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;

  let offsetAccumulator = 0;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#1E293B" strokeWidth={strokeWidth} />
        {segments.map((seg, i) => {
          const segLength = (seg.value / total) * circumference;
          const dashArray = `${segLength} ${circumference - segLength}`;
          const dashOffset = -((offsetAccumulator / total) * circumference);
          offsetAccumulator += seg.value;
          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      {(centerValue || centerLabel) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {centerValue && <span className="text-xl font-bold text-text-primary">{centerValue}</span>}
          {centerLabel && <span className="text-[10px] text-text-muted">{centerLabel}</span>}
        </div>
      )}
    </div>
  );
}