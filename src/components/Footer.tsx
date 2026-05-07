import { Link } from "@tanstack/react-router";
import { Logo } from "./Navbar";
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="bg-[#1A1A2E] text-white/80 pt-20 pb-8 px-6 mt-0">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <div>
            <Logo white />
            <p className="mt-6 text-sm leading-relaxed text-white/70">Premium in-home care services delivered with compassion, dignity, and clinical excellence — for the people who matter most.</p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition"><Icon size={16}/></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home","About Us","Services","Our Team","Testimonials","Contact"].map(l => <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {["Personal Care","Companionship","Skilled Nursing","Meal Preparation","Dementia Care","Respite Care"].map(l => <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>📞 (800) 555-1234</li>
              <li>📧 care@primelife.com</li>
              <li>📍 200 Wellness Blvd, Boston MA</li>
              <li>⏰ Mon–Sun, 8AM–8PM</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-white/60 gap-3">
          <div>© {new Date().getFullYear()} PRIMELIFE CARE GROUP LLC. All rights reserved.</div>
          <div className="flex gap-6"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">HIPAA Notice</a></div>
        </div>
      </footer>
      <button aria-label="Live chat" className="live-chat-trigger fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-soft hover:scale-110 transition" title="Chat with us">
        <MessageCircle size={24}/>
      </button>
    </>
  );
}
