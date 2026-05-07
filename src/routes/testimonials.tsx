import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { TESTIMONIALS, IMG } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Stories — PRIMELIFE CARE GROUP LLC" },
      { name: "description", content: "Read real testimonials from families who trust PRIMELIFE for their loved ones' in-home care." },
      { property: "og:title", content: "Client Stories — PRIMELIFE CARE GROUP" },
      { property: "og:description", content: "What families say about our compassionate care." },
      { property: "og:image", content: IMG.care2 },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-slate-body"><Link to="/" className="hover:text-primary">Home</Link> / <span className="text-primary font-medium">Testimonials</span></p>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold text-charcoal">Stories From the<br/>Families We Serve</h1>
          <p className="mt-6 text-lg">Real words from real families. Every testimonial below comes from a family whose loved one is in our care today.</p>
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-offwhite border border-border">
            <div className="flex">{[...Array(5)].map((_,i)=><Star key={i} size={18} className="fill-[--color-gold] text-[--color-gold]"/>)}</div>
            <span className="font-semibold text-charcoal">4.9 / 5 from 500+ reviews</span>
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-7">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-8 shadow-card">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_,j)=><Star key={j} size={16} className="fill-[--color-gold] text-[--color-gold]"/>)}</div>
              <p className="italic text-slate-body leading-relaxed">"{t.quote}"</p>
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
      </section>
    </>
  );
}
