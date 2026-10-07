export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-widest text-brand uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-text-secondary leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}