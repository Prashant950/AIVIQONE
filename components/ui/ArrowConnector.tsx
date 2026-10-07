export default function ArrowConnector() {
  return (
    <div className="flex w-4 sm:w-6 md:w-7 shrink-0 items-center justify-center">
      <svg width="100%" height="14" viewBox="0 0 32 14" fill="none" aria-hidden="true">
        <line
          x1="0"
          y1="7"
          x2="23"
          y2="7"
          stroke="#38BDF8"
          strokeWidth="1.6"
          strokeDasharray="3 3"
        />
        <path
          d="M21 2.5 L28 7 L21 11.5"
          stroke="#38BDF8"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}