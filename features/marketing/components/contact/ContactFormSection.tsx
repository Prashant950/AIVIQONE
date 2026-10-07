"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import FormInput from "@/components/ui/FormInput";
import FormSelect from "@/components/ui/FormSelect";
import FormTextarea from "@/components/ui/FormTextarea";
import { trackContact } from "@/lib/fpixel";

const businessTypes = [
  "Loan DSA",
  "Credit Card Agent",
  "Insurance Advisor",
  "NBFC",
  "Sales Team",
  "Other",
];

const teamSizes = ["1-5", "6-20", "21-50", "51-200", "200+"];

const interestOptions = [
  "Book a Demo",
  "Sales Inquiry",
  "Partnership",
  "General Inquiry",
];

interface FormData {
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  businessType: string;
  teamSize: string;
  interest: string;
  message: string;
  agreeTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  phone?: string;
  companyName?: string;
  interest?: string;
  message?: string;
  agreeTerms?: string;
}

const initialFormData: FormData = {
  fullName: "",
  workEmail: "",
  phone: "",
  companyName: "",
  businessType: "",
  teamSize: "",
  interest: "",
  message: "",
  agreeTerms: false,
};

export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function validate(data: FormData): FormErrors {
    const errs: FormErrors = {};

    if (!data.fullName.trim()) {
      errs.fullName = "Full name is required";
    } else if (data.fullName.trim().length < 2) {
      errs.fullName = "Name must be at least 2 characters";
    }

    if (!data.workEmail.trim()) {
      errs.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.workEmail.trim())) {
      errs.workEmail = "Please enter a valid work email address";
    }

    if (data.phone.trim() && !/^[0-9+\s\-()]{7,15}$/.test(data.phone.trim())) {
      errs.phone = "Please enter a valid phone number";
    }

    if (!data.companyName.trim()) {
      errs.companyName = "Company name is required";
    } else if (data.companyName.trim().length < 2) {
      errs.companyName = "Company name must be at least 2 characters";
    }

    if (!data.interest) {
      errs.interest = "Please select what you are interested in";
    }

    if (!data.message.trim()) {
      errs.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }

    if (!data.agreeTerms) {
      errs.agreeTerms = "You must agree to the Privacy Policy to submit";
    }

    return errs;
  }

  function handleChange(field: keyof FormData, value: string | boolean) {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    if (touched[field]) {
      const validationErrors = validate(updated);
      setErrors(validationErrors);
    }
  }

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(formData));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTouched({
      fullName: true,
      workEmail: true,
      phone: true,
      companyName: true,
      interest: true,
      message: true,
      agreeTerms: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      trackContact({
        content_name: formData.interest || "Contact Inquiry",
        content_category: "Lead / Contact Form",
      });
      setIsSuccess(true);
      setFormData(initialFormData);
      setTouched({});
      setErrors({});
    } catch {
      // Handle error if needed
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="form" className="relative overflow-hidden bg-[#020617] py-8 sm:py-10 md:py-12">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-3xl rounded-3xl border border-sky-900/50 border-t-sky-500/40 bg-[#050c1e]/95 p-6 shadow-[0_0_50px_rgba(2,132,199,0.1),inset_0_1px_0_0_rgba(56,189,248,0.2)] backdrop-blur-xl sm:p-10 md:p-12">
          {isSuccess ? (
            <div className="flex flex-col items-center py-10 text-center animate-fade-in-up">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/40 bg-sky-500/10 text-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                Thank You for Reaching Out!
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
                Your message has been received successfully. A member of our team will review your inquiry and get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all hover:opacity-90 active:scale-95"
              >
                <Sparkles size={16} />
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              {/* Form Heading */}
              <div className="mb-8 flex flex-col items-center text-center">
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                  Let&rsquo;s Connect
                </span>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Tell Us How We Can Help
                </h2>
                <p className="mt-2 text-sm text-slate-400 max-w-lg">
                  Share a few details below and our team will get back to you with the right solution.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Row 1: Full Name, Work Email, Phone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <FormInput
                    id="fullName"
                    name="fullName"
                    label="Full Name *"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    onBlur={() => handleBlur("fullName")}
                    error={touched.fullName ? errors.fullName : undefined}
                    required
                  />
                  <FormInput
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    label="Work Email *"
                    placeholder="name@company.com"
                    value={formData.workEmail}
                    onChange={(e) => handleChange("workEmail", e.target.value)}
                    onBlur={() => handleBlur("workEmail")}
                    error={touched.workEmail ? errors.workEmail : undefined}
                    required
                  />
                  <FormInput
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone Number (Optional)"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    error={touched.phone ? errors.phone : undefined}
                  />
                </div>

                {/* Row 2: Company Name, Business Type, Team Size */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <FormInput
                    id="companyName"
                    name="companyName"
                    label="Company Name *"
                    placeholder="Enter company name"
                    value={formData.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                    onBlur={() => handleBlur("companyName")}
                    error={touched.companyName ? errors.companyName : undefined}
                    required
                  />
                  <FormSelect
                    id="businessType"
                    name="businessType"
                    label="Business Type"
                    options={businessTypes}
                    placeholder="Select business type"
                    value={formData.businessType}
                    onChange={(e) => handleChange("businessType", e.target.value)}
                  />
                  <FormSelect
                    id="teamSize"
                    name="teamSize"
                    label="Team Members (Optional)"
                    options={teamSizes}
                    placeholder="Select team size"
                    value={formData.teamSize}
                    onChange={(e) => handleChange("teamSize", e.target.value)}
                  />
                </div>

                {/* Row 3: Interest */}
                <FormSelect
                  id="interest"
                  name="interest"
                  label="What are you interested in? *"
                  options={interestOptions}
                  placeholder="Select an option"
                  value={formData.interest}
                  onChange={(e) => handleChange("interest", e.target.value)}
                  onBlur={() => handleBlur("interest")}
                  error={touched.interest ? errors.interest : undefined}
                  required
                />

                {/* Row 4: Message */}
                <FormTextarea
                  id="message"
                  name="message"
                  label="Message *"
                  rows={4}
                  placeholder="Tell us about your requirements or what you'd like to discuss..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  error={touched.message ? errors.message : undefined}
                  required
                />

                {/* Privacy Policy Checkbox */}
                <div className="flex flex-col gap-1">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => handleChange("agreeTerms", e.target.checked)}
                      onBlur={() => handleBlur("agreeTerms")}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-700 bg-[#060d22] accent-sky-500 focus:ring-1 focus:ring-sky-400"
                    />
                    <span>
                      I agree to the{" "}
                      <a href="/legal/privacy-policy" className="text-sky-400 hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to AIVIQONE contacting me regarding my inquiry.
                    </span>
                  </label>
                  {touched.agreeTerms && errors.agreeTerms && (
                    <span className="text-xs font-medium text-rose-400 pl-7">
                      {errors.agreeTerms}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(2,132,199,0.4)] transition-all hover:opacity-95 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}