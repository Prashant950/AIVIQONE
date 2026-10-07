import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholder?: string;
  error?: string;
}

export default function FormSelect({
  label,
  options,
  placeholder = "Select an option",
  id,
  className = "",
  error,
  value,
  defaultValue,
  ...props
}: FormSelectProps) {
  const isControlled = value !== undefined;

  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      <label htmlFor={id} className="text-xs sm:text-sm font-semibold text-slate-200">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          defaultValue={isControlled ? undefined : (defaultValue ?? "")}
          className={`w-full appearance-none rounded-xl border ${
            error
              ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20"
              : "border-slate-800 focus:border-sky-400 focus:ring-sky-400/20"
          } bg-[#060d22]/90 px-4 py-3 pr-10 text-sm text-white transition-all focus:outline-none focus:ring-2 ${className}`}
          {...props}
        >
          <option value="" disabled className="bg-[#0b1329] text-slate-500">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#0b1329] text-white">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
      {error && <span className="text-xs font-medium text-rose-400 mt-0.5">{error}</span>}
    </div>
  );
}