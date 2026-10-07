import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand/90 shadow-card hover:shadow-card-hover",
  secondary:
    "bg-transparent text-text-primary border border-border hover:border-brand hover:bg-bg-elevated",
  ghost: "bg-transparent text-text-secondary hover:text-text-primary",
};

export default function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  icon,
  iconPosition = "right",
  children,
  className = "",
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 whitespace-nowrap ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </Component>
  );
}