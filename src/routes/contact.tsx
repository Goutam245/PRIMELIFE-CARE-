import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Lock, ArrowRight } from "lucide-react";
import { IMG } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — PRIMELIFE CARE GROUP LLC" },
      { name: "description", content: "Get in touch with PRIMELIFE for a free care consultation. We respond within 2 hours, 7 days a week." },
      { property: "og:title", content: "Contact PRIMELIFE CARE GROUP" },
      { property: "og:description", content: "Free consultation. We respond within 2 hours." },
      { property: "og:image", content: IMG.care1 },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <div className="bg-primary text-white text-center text-sm py-3 px-4">
        <span className="font-medium">Need immediate assistance?</span> 📞 <a href="tel:+18005551234" className="underline font-semibold">Call us 24/7 at (800) 555-1234</a>
      </div>

      <section className="bg-white pt-16 pb-12 px-6 text-center">
        <p className="text-sm text-slate-body"><Link to="/" className="hover:text-primary">Home</Link> / <span className="text-primary font-medium">Contact</span></p>
        <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold text-charcoal">Let's Talk About Your Family's Care</h1>
        <p className="mt-5 text-lg max-w-2xl mx-auto">A care advisor will personally respond within 2 hours — with answers, options, and zero pressure.</p>
      </section>

      <section className="bg-white pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <img src={IMG.care1} alt="" className="w-full h-[260px] object-cover rounded-2xl shadow-soft mb-12"/>
          <div className="grid lg:grid-cols-[60%_40%] gap-10">
            <div className="bg-white rounded-2xl shadow-soft border border-border p-8 md:p-10">
              <p className="label-eyebrow">Send Us a Message</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-charcoal">We'll respond within 2 hours</h3>
              {sent ? (
                <div className="mt-8 p-8 bg-primary/5 border border-primary rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-2xl">✓</div>
                  <h4 className="mt-4 font-display text-2xl font-bold text-charcoal">Thank you!</h4>
                  <p className="mt-2 text-slate-body">A care advisor will call you within 1 hour.</p>
                </div>
              ) : (
                <form className="mt-8 grid sm:grid-cols-2 gap-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <Field label="Full Name *" name="name" required />
                  <Field label="Phone Number *" name="phone" type="tel" required />
                  <Field label="Email Address *" name="email" type="email" required full />
                  <div className="sm:col-span-2">
                    <Label>Type of Care Needed *</Label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none">
                      <option value="">Select a service...</option>
                      <option>Personal Care & Hygiene</option>
                      <option>Companionship</option>
                      <option>Skilled Medical Support</option>
                      <option>Meal Preparation</option>
                      <option>Dementia Care</option>
                      <option>Respite Care</option>
                    </select>
                  </div>
                  <Field label="When do you need care?" name="date" type="date" />
                  <Field label="Patient Age" name="age" type="number" />
                  <Field label="Relationship to Patient" name="rel" full />
                  <div className="sm:col-span-2">
                    <Label>Additional Notes</Label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"/>
                  </div>
                  <label className="sm:col-span-2 flex items-center gap-3 text-sm text-slate-body">
                    <input type="checkbox" className="w-4 h-4 accent-[--color-primary]"/>
                    I'd like to receive care tips by email
                  </label>
                  <button type="submit" className="sm:col-span-2 w-full py-4 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition flex items-center justify-center gap-2">Send My Request <ArrowRight size={18}/></button>
                  <p className="sm:col-span-2 text-xs text-slate-body text-center flex items-center justify-center gap-1.5"><Lock size={12}/> Your information is private and secure.</p>
                </form>
              )}
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, t: "Call Us", v: "(800) 555-1234", s: "Available 24/7" },
                { icon: Mail, t: "Email", v: "care@primelife.com", s: "Reply within 2 hours" },
                { icon: MapPin, t: "Location", v: "200 Wellness Blvd, Boston MA", s: "Serving the Northeast & beyond" },
                { icon: Clock, t: "Hours", v: "Mon–Sun, 8AM–8PM", s: "Emergency line: 24/7" },
              ].map(c => {
                const Icon = c.icon;
                return (
                  <div key={c.t} className="bg-white rounded-xl p-6 border-l-4 border-primary shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Icon className="text-primary" size={22}/></div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-slate-body font-semibold">{c.t}</div>
                        <div className="font-semibold text-charcoal mt-1">{c.v}</div>
                        <div className="text-sm text-slate-body">{c.s}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="rounded-xl overflow-hidden shadow-card border border-border">
                <iframe title="Map" src="https://www.openstreetmap.org/export/embed.html?bbox=-71.0915%2C42.3401%2C-71.0411%2C42.3675&layer=mapnik" className="w-full h-64 border-0"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-medium text-charcoal mb-1.5">{children}</label>;
}

function Field({ label, name, type = "text", required = false, full = false }: { label: string; name: string; type?: string; required?: boolean; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <Label>{label}</Label>
      <input type={type} name={name} required={required} className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"/>
    </div>
  );
}
