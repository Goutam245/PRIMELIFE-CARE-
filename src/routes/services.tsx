import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowRight, Plus, Minus } from "lucide-react";
import { IMG, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — PRIMELIFE CARE GROUP LLC" },
      { name: "description", content: "Personal care, companionship, skilled nursing, dementia care, meal prep, and respite care — all delivered by licensed, compassionate professionals." },
      { property: "og:title", content: "Our Services — PRIMELIFE CARE GROUP" },
      { property: "og:description", content: "Comprehensive in-home care services tailored to your family." },
      { property: "og:image", content: IMG.servicesBg },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative bg-white pt-16 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.servicesBg} alt="" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"/>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-sm text-slate-body"><Link to="/" className="hover:text-primary">Home</Link> / <span className="text-primary font-medium">Services</span></p>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold text-charcoal">Comprehensive Home Care Services</h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto">From everyday companionship to specialized clinical support, our services are designed to keep your loved one safe, comfortable, and thriving — right where they belong: at home.</p>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section key={s.slug} className={`py-20 px-6 ${i % 2 === 0 ? "bg-offwhite" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img src={s.img} alt={s.title} className="w-full h-[460px] object-cover rounded-2xl shadow-soft"/>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="label-eyebrow">Service {String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-charcoal">{s.title}</h2>
              <p className="mt-5">{s.desc} Our team works closely with you and your loved one's healthcare providers to ensure every detail of care is coordinated, documented, and continuously improved.</p>
              <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                {s.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-charcoal text-[15px]">
                    <Check size={18} className="text-primary mt-1 shrink-0"/> {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition">Book This Service <ArrowRight size={16}/></Link>
            </div>
          </div>
        </section>
      ))}

      <Pricing />
      <FAQ />
    </>
  );
}

function Pricing() {
  const tiers = [
    { name: "Basic", price: "$28", per: "/hour", features: ["Companionship", "Light housekeeping", "Meal preparation", "Medication reminders", "Up to 20 hrs/week"] },
    { name: "Standard", price: "$36", per: "/hour", recommended: true, features: ["Everything in Basic", "Personal care & hygiene", "Mobility assistance", "Transportation", "Up to 40 hrs/week", "Family portal access"] },
    { name: "Premium", price: "$52", per: "/hour", features: ["Everything in Standard", "Skilled nursing (RN)", "24/7 live-in option", "Dementia specialist", "Unlimited hours", "Dedicated care manager"] },
  ];
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="label-eyebrow">Pricing</p>
          <h2 className="mt-3 font-display text-5xl font-bold text-charcoal">Transparent, Honest Rates</h2>
          <p className="mt-5">Choose the plan that fits your family. All plans include free care assessment, background-checked caregivers, and 24/7 support.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
          {tiers.map(t => (
            <div key={t.name} className={`bg-white rounded-2xl p-8 shadow-card transition hover:shadow-soft ${t.recommended ? "border-2 border-primary relative" : "border border-border"}`}>
              {t.recommended && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full uppercase tracking-wider">Recommended</span>}
              <h3 className="font-display text-2xl font-bold text-charcoal">{t.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-5xl font-bold text-primary">{t.price}</span>
                <span className="text-slate-body mb-2">{t.per}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map(f => <li key={f} className="flex gap-2 text-[15px]"><Check size={18} className="text-primary shrink-0 mt-0.5"/> {f}</li>)}
              </ul>
              <Link to="/contact" className={`mt-8 block text-center w-full py-3.5 rounded-full font-semibold transition ${t.recommended ? "bg-primary text-white hover:bg-secondary" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"}`}>Get Started</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "How quickly can care begin?", a: "In most cases, we can begin care within 24–48 hours of your initial consultation. For urgent situations, same-day care is often possible." },
    { q: "Are your caregivers licensed and insured?", a: "Yes. Every caregiver is fully licensed, bonded, insured, background-checked, and continuously trained to our high clinical standards." },
    { q: "Can I choose my caregiver?", a: "Absolutely. We carefully match you with caregivers based on personality, skills, and needs — and you always have the right to request a change." },
    { q: "Do you accept insurance or Medicare?", a: "We accept long-term care insurance, Medicare for qualifying skilled services, and most private payment options. We'll help you navigate coverage." },
    { q: "What if our needs change over time?", a: "Care plans are reviewed regularly and adjusted as needs evolve — from a few hours weekly to full live-in care." },
    { q: "How do you handle emergencies?", a: "Caregivers are trained in emergency response. Our 24/7 support line connects families and caregivers to clinical leadership any hour of the day." },
    { q: "Can family members get updates remotely?", a: "Yes — through our secure family portal you'll receive daily reports, photos, and direct messaging with the caregiver." },
    { q: "Is there a long-term contract?", a: "No. Our services are month-to-month with no cancellation fees. We earn your trust through quality, not contracts." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-offwhite py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="label-eyebrow">FAQ</p>
          <h2 className="mt-3 font-display text-5xl font-bold text-charcoal">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-xl border border-border overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-semibold text-charcoal text-[17px]">{it.q}</span>
                {open === i ? <Minus className="text-primary shrink-0" size={20}/> : <Plus className="text-primary shrink-0" size={20}/>}
              </button>
              <div className={`overflow-hidden transition-all ${open === i ? "max-h-96" : "max-h-0"}`}>
                <p className="px-6 pb-6 text-slate-body">{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
