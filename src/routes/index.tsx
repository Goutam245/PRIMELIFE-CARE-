import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Check, Star, ArrowRight, Phone, Mail, Clock, Heart, Users, Award, ShieldCheck, ChevronLeft, ChevronRight, Sparkles, HandHeart, Stethoscope, Utensils, Brain, HomeIcon } from "lucide-react";
import { IMG, SERVICES, TESTIMONIALS, TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRIMELIFE CARE GROUP LLC — Premium In-Home Care You Can Trust" },
      { name: "description", content: "Compassionate, licensed in-home caregivers serving 500+ families since 2009. Personal care, dementia care, skilled nursing & more. Schedule a free consultation today." },
      { property: "og:title", content: "PRIMELIFE CARE GROUP — Premium In-Home Care" },
      { property: "og:description", content: "Expert care delivered with compassion. Trusted by 500+ families." },
      { property: "og:image", content: IMG.hero },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "MedicalBusiness"],
          name: "PRIMELIFE CARE GROUP LLC",
          description: "Premium in-home care services",
          telephone: "+1-800-555-1234",
          email: "care@primelife.com",
          address: { "@type": "PostalAddress", streetAddress: "200 Wellness Blvd", addressLocality: "Boston", addressRegion: "MA" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
        }),
      },
    ],
  }),
  component: Home,
});

function useCountUp(target: number, ref: React.RefObject<HTMLElement | null>) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / 1500, 1);
          setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, ref]);
  return val;
}

const SERVICE_ICONS = [HandHeart, Heart, Stethoscope, Utensils, Brain, HomeIcon];

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <ServicesSection />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <TeamSection />
      <BookingCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-white px-6 pt-16 pb-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[55%_45%] gap-14 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/30 text-sm">
            <Star size={14} className="fill-[--color-gold] text-[--color-gold]" />
            <span className="font-medium text-charcoal">Trusted by 500+ Families Since 2009</span>
          </div>
          <h1 className="mt-6 font-display font-bold text-[clamp(42px,6vw,68px)] text-charcoal leading-[1.05]">
            Expert Home Care<br/>Delivered With<br/><span className="text-primary">Compassion</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl">PRIMELIFE CARE GROUP LLC provides professional, personalized in-home care services — helping your loved ones live with dignity, comfort, and independence.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="px-7 py-4 rounded-full bg-primary text-white font-semibold shadow-soft hover:bg-secondary transition-all hover:scale-[1.03] inline-flex items-center gap-2">Schedule a Free Consultation <ArrowRight size={18}/></Link>
            <Link to="/services" className="px-7 py-4 rounded-full bg-white border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all">View Our Services</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {["Licensed & Bonded", "24/7 Emergency Support", "Verified Caregivers"].map(t => (
              <div key={t} className="flex items-center gap-2 text-sm font-medium text-charcoal">
                <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center"><Check size={12} className="text-primary"/></span>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border-l-4 border-primary shadow-soft">
            <img src={IMG.hero} alt="Caregiver holding elderly woman's hands with warmth" className="w-full h-[560px] object-cover"/>
          </div>
          <div className="hidden md:flex absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-soft items-center gap-3 animate-float">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Users className="text-primary" size={22}/></div>
            <div>
              <div className="font-display text-2xl font-bold text-charcoal">500+</div>
              <div className="text-xs text-slate-body">Families Served</div>
            </div>
          </div>
          <div className="hidden md:flex absolute -top-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-soft items-center gap-2 animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="flex">{[...Array(5)].map((_,i)=><Star key={i} size={14} className="fill-[--color-gold] text-[--color-gold]"/>)}</div>
            <span className="font-display text-lg font-bold text-charcoal">4.9</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const certs = ["Joint Commission", "Medicare Certified", "BBB Accredited", "State Licensed", "NAHC Member"];
  return (
    <section className="bg-white border-y border-border py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center label-eyebrow text-slate-body mb-6">Trusted & Certified By</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {certs.map(c => (
            <div key={c} className="flex items-center gap-2 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition">
              <Award size={20} className="text-primary"/>
              <span className="font-semibold text-sm text-charcoal tracking-wide">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);
  const r4 = useRef<HTMLDivElement>(null);
  const v1 = useCountUp(500, r1);
  const v2 = useCountUp(15, r2);
  const v3 = useCountUp(98, r3);
  const v4 = useCountUp(24, r4);

  const items = [
    { ref: r1, icon: Users, val: `${v1}+`, label: "Families Served" },
    { ref: r2, icon: Award, val: `${v2}+`, label: "Years Experience" },
    { ref: r3, icon: Heart, val: `${v3}%`, label: "Satisfaction Rate" },
    { ref: r4, icon: Clock, val: `${v4}/7`, label: "Availability" },
  ];

  return (
    <section className="bg-offwhite py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-border">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <div key={i} ref={it.ref as any} className="text-center px-6">
              <Icon className="mx-auto text-primary mb-3" size={28}/>
              <div className="font-display text-5xl lg:text-6xl font-bold text-primary">{it.val}</div>
              <div className="mt-2 text-sm font-medium text-slate-body">{it.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="label-eyebrow">What We Offer</p>
          <h2 className="mt-3 font-display text-5xl font-bold text-charcoal">Comprehensive Care<br/>Tailored to Your Needs</h2>
          <p className="mt-5">From a few hours of companionship to round-the-clock skilled nursing, our services adapt to meet your family exactly where you are — with the dignity and expertise your loved one deserves.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <article key={s.slug} className="group bg-white rounded-xl shadow-card overflow-hidden hover:shadow-soft hover:-translate-y-2 transition-all border-t-[3px] border-transparent hover:border-primary">
                <img src={s.img} alt={s.title} className="w-full h-[180px] object-cover"/>
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={22}/>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">{s.title}</h3>
                  <p className="text-[15px] text-slate-body">{s.desc}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">Learn More <ArrowRight size={16}/></Link>
                </div>
              </article>
            );
          })}
        </div>
        <div className="text-center mt-14">
          <Link to="/services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all">View All Services <ArrowRight size={18}/></Link>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const features = [
    { title: "Personalized Care Plans", desc: "Every care plan is custom-built around your loved one's unique needs, preferences, and medical requirements." },
    { title: "Thoroughly Vetted Caregivers", desc: "All caregivers pass rigorous background checks, reference verifications, and skills assessments." },
    { title: "Family Communication Portal", desc: "Stay connected with real-time updates, daily reports, and direct caregiver messaging." },
    { title: "Flexible Scheduling", desc: "From a few hours a week to full-time live-in care — we adapt to your family's schedule." },
  ];
  return (
    <section className="bg-offwhite py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src={IMG.care2} alt="Caregiver with elderly woman" className="w-full h-[600px] object-cover rounded-2xl shadow-soft"/>
          <div className="absolute -bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:max-w-xs bg-white rounded-xl p-5 border-l-4 border-primary shadow-soft">
            <p className="font-display text-lg font-bold text-charcoal">Est. 2009</p>
            <p className="text-sm text-slate-body">15 Years of Compassionate Care</p>
          </div>
        </div>
        <div>
          <p className="label-eyebrow">Why Families Choose Us</p>
          <h2 className="mt-3 font-display text-5xl font-bold text-charcoal">Care That Feels Like<br/>Family</h2>
          <p className="mt-5">We believe great care starts with great relationships. Our caregivers don't just provide services — they become trusted companions who understand your loved one's story, preferences, and personality.</p>
          <div className="mt-8 space-y-6">
            {features.map(f => (
              <div key={f.title} className="flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center"><Sparkles size={18}/></div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-1">{f.title}</h3>
                  <p className="text-[15px] text-slate-body">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition">Meet Our Team <ArrowRight size={16}/></Link>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Free Consultation", desc: "We listen to your needs and answer every question — at no cost or obligation." },
    { n: "02", title: "Custom Care Plan", desc: "Our nurses design a plan tailored to medical needs, schedule, and preferences." },
    { n: "03", title: "Caregiver Matching", desc: "We match your loved one with a caregiver based on personality and skills." },
    { n: "04", title: "Care Begins", desc: "Compassionate care starts — with continuous family updates every step of the way." },
  ];
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="label-eyebrow">The Process</p>
          <h2 className="mt-3 font-display text-5xl font-bold text-charcoal">Getting Started is Simple</h2>
        </div>
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] border-t-2 border-dashed border-primary/30"/>
          {steps.map(s => (
            <div key={s.n} className="relative bg-white rounded-xl p-7 text-center shadow-card hover:shadow-soft transition">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary text-white font-display font-bold text-xl flex items-center justify-center mb-5 relative z-10">{s.n}</div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-2">{s.title}</h3>
              <p className="text-sm text-slate-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const visible = [0, 1, 2].map(o => TESTIMONIALS[(idx + o) % TESTIMONIALS.length]);
  return (
    <section className="bg-offwhite py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="label-eyebrow">Client Stories</p>
          <h2 className="mt-3 font-display text-5xl font-bold text-charcoal">What Families Are Saying<br/>About Our Care</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {visible.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-8 shadow-card">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_,j)=><Star key={j} size={16} className="fill-[--color-gold] text-[--color-gold]"/>)}</div>
              <p className="text-[15px] italic text-slate-body leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover"/>
                <div>
                  <div className="font-semibold text-charcoal">{t.name}</div>
                  <div className="text-xs text-slate-body">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-10">
          <button onClick={() => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center hover:border-primary hover:text-primary transition" aria-label="Previous"><ChevronLeft size={18}/></button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`h-2 rounded-full transition-all ${i===idx?"w-8 bg-primary":"w-2 bg-border"}`} aria-label={`Slide ${i+1}`}/>
            ))}
          </div>
          <button onClick={() => setIdx(i => (i + 1) % TESTIMONIALS.length)} className="w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center hover:border-primary hover:text-primary transition" aria-label="Next"><ChevronRight size={18}/></button>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="label-eyebrow">Our People</p>
          <h2 className="mt-3 font-display text-5xl font-bold text-charcoal">The Compassionate<br/>Experts Behind Your Care</h2>
          <p className="mt-5">Every member of our team is licensed, background-checked, and chosen for both skill and heart.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {TEAM.map(m => (
            <div key={m.name} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-soft hover:-translate-y-1 transition border border-transparent hover:border-primary/30">
              <img src={m.img} alt={m.name} className="w-full aspect-square object-cover"/>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-charcoal">{m.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{m.title}</p>
                <p className="text-sm text-slate-body mt-3">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingCTA() {
  return (
    <section className="bg-primary text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-5xl font-bold text-white">Ready to Give Your Loved One<br/>the Care They Deserve?</h2>
          <p className="mt-5 text-white/85 text-lg max-w-xl">Speak with a care advisor today. We'll listen to your needs, answer your questions, and design a plan that works for your family — with no obligation.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="px-7 py-4 rounded-full bg-white text-primary font-semibold hover:scale-[1.03] transition shadow-lg">Book a Free Consultation</Link>
            <a href="tel:+18005551234" className="px-7 py-4 rounded-full border-2 border-white/60 text-white font-semibold hover:bg-white hover:text-primary transition">Call Us Now</a>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { icon: Phone, title: "Call Anytime", val: "(800) 555-1234" },
            { icon: Mail, title: "Email Us", val: "care@primelife.com" },
            { icon: Clock, title: "Office Hours", val: "Mon–Sun, 8AM–8PM" },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-white text-charcoal rounded-xl p-5 flex items-center gap-4 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Icon className="text-primary" size={22}/></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-body font-semibold">{c.title}</div>
                  <div className="font-display text-xl font-bold">{c.val}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
