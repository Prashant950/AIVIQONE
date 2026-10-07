import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FormInput({
  label,
  id,
  className = "",
  type = "text",
  error,
  ...props
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      <label htmlFor={id} className="text-xs sm:text-sm font-semibold text-slate-200">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`w-full rounded-xl border ${
          error
            ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20"
            : "border-slate-800 focus:border-sky-400 focus:ring-sky-400/20"
        } bg-[#060d22]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 ${className}`}
        {...props}
      />
      {error && <span className="text-xs font-medium text-rose-400 mt-0.5">{error}</span>}
    </div>
  );
}
