import Container from "@/components/ui/Container";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqItems } from "@/features/marketing/data/contact";

export default function FAQSection() {
  return (
    <section className="border-t border-slate-800/80 py-8 md:py-10">
      <Container className="mx-auto max-w-2xl">
        <span className="text-xs font-semibold tracking-widest text-brand-cyan uppercase">
          Frequently Asked Questions
        </span>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}