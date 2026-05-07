import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { IMG, TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — PRIMELIFE CARE GROUP LLC" },
      { name: "description", content: "Since 2009, PRIMELIFE has provided premium in-home care across the United States. Meet our mission, values, and the team behind our care." },
      { property: "og:title", content: "About PRIMELIFE CARE GROUP" },
      { property: "og:description", content: "Premium in-home care delivered with compassion since 2009." },
      { property: "og:image", content: IMG.about },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: Heart, title: "Compassion First", desc: "Every interaction begins with genuine care for the person in front of us." },
    { icon: ShieldCheck, title: "Uncompromising Integrity", desc: "We do the right thing — even when no one is watching." },
    { icon: Award, title: "Clinical Excellence", desc: "We hold ourselves to the highest professional and medical standards." },
    { icon: Users, title: "Family Partnership", desc: "We treat your family like our own — communicating openly, always." },
  ];
  return (
    <>
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-slate-body"><Link to="/" className="hover:text-primary">Home</Link> / <span className="text-primary font-medium">About Us</span></p>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold text-charcoal">Caring for Families<br/>Like Our Own</h1>
          <p className="mt-6 text-lg">Founded in 2009 by a team of nurses and care advocates, PRIMELIFE CARE GROUP LLC was built on a simple promise: to provide the kind of in-home care we'd want for our own parents.</p>
        </div>
      </section>

      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <img src={IMG.about} alt="Our founder" className="w-full h-[520px] object-cover rounded-2xl shadow-soft"/>
          <div>
            <p className="label-eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-charcoal">15 Years of Compassionate Care</h2>
            <p className="mt-5">What began as a small team of three nurses serving a handful of families has grown into one of the most trusted home care providers in the country — but our heart hasn't changed.</p>
            <p className="mt-4">We still believe that great care starts with great relationships. That every elder has a story worth honoring. That families deserve transparency, communication, and partnership. And that home is where healing and dignity belong.</p>
            <p className="mt-4">Today, PRIMELIFE serves over 500 families across multiple states, with a team of 200+ licensed caregivers, nurses, and care coordinators — all chosen for their skill and their heart.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="label-eyebrow">Our Values</p>
            <h2 className="mt-3 font-display text-5xl font-bold text-charcoal">What Guides Our Care</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-xl p-7 shadow-card hover:shadow-soft transition border-t-[3px] border-transparent hover:border-primary">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5"><Icon className="text-primary" size={26}/></div>
                  <h3 className="font-semibold text-xl text-charcoal mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-body">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="label-eyebrow">Our Team</p>
            <h2 className="mt-3 font-display text-5xl font-bold text-charcoal">The People Behind the Care</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {TEAM.map(m => (
              <div key={m.name} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-soft hover:-translate-y-1 transition">
                <img src={m.img} alt={m.name} className="w-full aspect-square object-cover"/>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-charcoal">{m.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{m.title}</p>
                  <p className="text-sm text-slate-body mt-3">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition">Talk With Our Team <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>
    </>
  );
}
