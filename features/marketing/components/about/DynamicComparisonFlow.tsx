"use client";

import { useEffect, useState, RefObject } from "react";

type FlowProps = {
  containerRef: RefObject<HTMLDivElement | null>;
  vsRef: RefObject<HTMLDivElement | null>;
  leftItemRefs: RefObject<(HTMLSpanElement | null)[]>;
  rightIconRefs: RefObject<(HTMLSpanElement | null)[]>;
};

type PathData = {
  d: string;
};

type RightRay = {
  path: string;
  arrowX: number;
  arrowY: number;
};

export default function DynamicComparisonFlow({
  containerRef,
  vsRef,
  leftItemRefs,
  rightIconRefs,
}: FlowProps) {
  const [leftPaths, setLeftPaths] = useState<PathData[]>([]);
  const [rightRays, setRightRays] = useState<RightRay[]>([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  const calculatePositions = () => {
    if (!containerRef.current || !vsRef.current) return;

    const contBox = containerRef.current.getBoundingClientRect();
    const vsBox = vsRef.current.getBoundingClientRect();

    setSvgSize({ width: contBox.width, height: contBox.height });

    const vsLeftX = vsBox.left - contBox.left;
    const vsRightX = vsBox.right - contBox.left;
    const vsCenterY = vsBox.top - contBox.top + vsBox.height / 2;

    // Red Wavy S-Curves from text to VS
    const newLeftPaths: PathData[] = [];
    const offsets = [-35, 45, -55, 50, -40, 30];

    leftItemRefs.current?.forEach((item, idx) => {
      if (!item) return;
      const itemBox = item.getBoundingClientRect();
      const startX = itemBox.right - contBox.left + 6;
      const startY = itemBox.top - contBox.top + itemBox.height / 2;

      const midX = (startX + vsLeftX) / 2;
      const wave = offsets[idx % offsets.length];

      const c1x = startX + (midX - startX) * 0.85;
      const c1y = startY + wave;
      const c2x = midX + (vsLeftX - midX) * 0.15;
      const c2y = vsCenterY - wave * 0.35;

      const d = `M ${startX} ${startY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${vsLeftX} ${vsCenterY}`;
      newLeftPaths.push({ d });
    });

    // Cyan Branching Lines with Arrowheads into Right Icons
    const newRightRays: RightRay[] = [];
    rightIconRefs.current?.forEach((icon) => {
      if (!icon) return;
      const iconBox = icon.getBoundingClientRect();
      const endX = iconBox.left - contBox.left - 8;
      const endY = iconBox.top - contBox.top + iconBox.height / 2;

      const c1x = vsRightX + (endX - vsRightX) * 0.4;
      const c1y = vsCenterY;
      const c2x = vsRightX + (endX - vsRightX) * 0.6;
      const c2y = endY;

      const path = `M ${vsRightX} ${vsCenterY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${endX} ${endY}`;
      newRightRays.push({ path, arrowX: endX, arrowY: endY });
    });

    setLeftPaths(newLeftPaths);
    setRightRays(newRightRays);
  };

  useEffect(() => {
    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  if (svgSize.width === 0) return null;

  return (
    <svg
      style={{ width: svgSize.width, height: svgSize.height }}
      className="pointer-events-none absolute inset-0 z-30 hidden sm:block"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          @keyframes dashFlow {
            from { stroke-dashoffset: 28; }
            to { stroke-dashoffset: 0; }
          }
          .animate-red-flow {
            animation: dashFlow 1.3s linear infinite;
          }
        `}</style>
      </defs>

      {/* Red Wavy Dashed Paths */}
      {leftPaths.map((item, idx) => (
        <path
          key={`l-path-${idx}`}
          d={item.d}
          fill="none"
          stroke="#f43f5e"
          strokeWidth="1.4"
          strokeDasharray="3 3.5"
          strokeOpacity="0.85"
          className="animate-red-flow"
        />
      ))}

      {/* Cyan Rays + Directional Arrowheads */}
      {rightRays.map((ray, idx) => (
        <g key={`r-ray-${idx}`}>
          <path
            d={ray.path}
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="1.3"
            strokeOpacity="0.8"
          />
          <polygon
            points={`${ray.arrowX + 5},${ray.arrowY} ${ray.arrowX - 2},${ray.arrowY - 3.5} ${ray.arrowX - 2},${ray.arrowY + 3.5}`}
            fill="#38bdf8"
          />
        </g>
      ))}
    </svg>
  );
}