import { TextareaHTMLAttributes, useState } from "react";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  maxLength?: number;
  error?: string;
}

export default function FormTextarea({
  label,
  maxLength = 1000,
  id,
  className = "",
  onChange,
  error,
  ...props
}: FormTextareaProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      <label htmlFor={id} className="text-xs sm:text-sm font-semibold text-slate-200">
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          maxLength={maxLength}
          onChange={(e) => {
            setCount(e.target.value.length);
            onChange?.(e);
          }}
          className={`w-full resize-none rounded-xl border ${
            error
              ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20"
              : "border-slate-800 focus:border-sky-400 focus:ring-sky-400/20"
          } bg-[#060d22]/90 p-4 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 ${className}`}
          {...props}
        />
        <span className="absolute bottom-3 right-4 text-xs text-slate-500">
          {count} / {maxLength}
        </span>
      </div>
      {error && <span className="text-xs font-medium text-rose-400 mt-0.5">{error}</span>}
    </div>
  );
}