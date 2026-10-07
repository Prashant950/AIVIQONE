import { LucideIcon } from "lucide-react";

export default function CompoundIcon({
  mainIcon: MainIcon,
  badgeIcon: BadgeIcon,
  badgePosition = "top-right",
  color = "#38BDF8",
}: {
  mainIcon: LucideIcon;
  badgeIcon?: LucideIcon;
  badgePosition?: "top-right" | "bottom-right";
  color?: string;
}) {
  const badgePositionClass =
    badgePosition === "top-right" ? "-top-1 -right-1" : "-bottom-1 -right-1";

  return (
    <div className="relative flex h-11 w-11 items-center justify-center">
      <MainIcon size={40} strokeWidth={1.6} style={{ color }} />
      {BadgeIcon && (
        <span
          className={`absolute ${badgePositionClass} flex h-5 w-5 items-center justify-center rounded-full bg-bg-card`}
        >
          <BadgeIcon size={13} strokeWidth={2} style={{ color }} />
        </span>
      )}
    </div>
  );
}