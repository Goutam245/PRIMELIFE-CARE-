import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Logo({ white = false }: { white?: boolean }) {
  const green = white ? "#FFFFFF" : "#1A5C45";
  const dark = white ? "#FFFFFF" : "#1A1A2E";
  const sub = white ? "#FFFFFF" : "#1A5C45";
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
        <path d="M20 33 C8 24 6 16 12 11 C16 8 19 10 20 13 C21 10 24 8 28 11 C34 16 32 24 20 33 Z" stroke={green} strokeWidth="2.2" fill="none" strokeLinejoin="round"/>
        <path d="M28 11 C30 7 33 6 35 7 C34 10 32 12 28 11 Z" fill={green}/>
      </svg>
      <div className="leading-tight">
        <div className="font-bold text-[20px] tracking-tight" style={{ color: dark, fontFamily: "Inter" }}>PRIMELIFE</div>
        <div className="text-[10px] font-medium" style={{ color: sub, letterSpacing: "0.18em" }}>CARE GROUP LLC</div>
      </div>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About Us" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-border transition-shadow ${scrolled ? "shadow-card" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-[15px] font-medium text-charcoal hover:text-primary transition-colors" activeProps={{ className: "text-[15px] font-semibold text-primary" }} activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:+18005551234" className="flex items-center gap-2 text-sm font-medium text-primary"><Phone size={16}/> (800) 555-1234</a>
          <Link to="/contact" className="px-6 py-3 rounded-full bg-primary text-white text-[15px] font-semibold shadow-soft hover:bg-secondary transition-all hover:scale-[1.03]">Book a Visit</Link>
        </div>
        <button className="lg:hidden text-charcoal" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>
      {open && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 p-8 flex flex-col gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-2xl font-display text-charcoal">{l.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 px-6 py-4 rounded-full bg-primary text-white text-center font-semibold">Book a Visit</Link>
        </div>
      )}
    </header>
  );
}
