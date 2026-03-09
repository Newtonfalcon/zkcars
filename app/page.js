"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=90",
      tag: "Premium Collection",
      headline: ["Drive the", "Extraordinary"],
      sub: "World-class vehicles delivered to your door. Hire purchase available.",
    },
    {
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1800&q=90",
      tag: "Hire Purchase",
      headline: ["Own it", "Today"],
      sub: "Flexible monthly payments. Low deposit. Fast approval across Nigeria.",
    },
    {
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1800&q=90",
      tag: "Electric Vehicles",
      headline: ["The Future", "Is Here"],
      sub: "Premium electric vehicles — sustainable performance, zero compromise.",
    },
  ];

  useEffect(() => {
    setLoaded(true);
    const t = setInterval(() => setActive(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms]"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <img
            src={s.img}
            alt=""
            className="w-full h-full object-cover scale-[1.04]"
            style={{
              transform: i === active ? "scale(1.0)" : "scale(1.04)",
              transition: "transform 6s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
        {/* Tag pill */}
        <div
          className="mb-5 transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "100ms",
          }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60 border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {slides[active].tag}
          </span>
        </div>

        {/* Headline */}
        <div
          className="mb-6 transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "200ms",
          }}
        >
          <h1
            className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.9] text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {slides[active].headline[0]}
            <br />
            <span className="text-transparent"
              style={{
                WebkitTextStroke: "2px rgba(255,255,255,0.4)",
              }}
            >
              {slides[active].headline[1]}
            </span>
          </h1>
        </div>

        {/* Sub + CTA row */}
        <div
          className="flex flex-col md:flex-row md:items-end gap-8 transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "350ms",
          }}
        >
          <p className="text-white/60 text-base md:text-lg max-w-sm leading-relaxed">
            {slides[active].sub}
          </p>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/offers"
              className="group flex items-center gap-2 bg-white text-black font-bold text-sm px-7 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 hover:gap-4"
            >
              Browse Cars
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/hire-purchase"
              className="flex items-center gap-2 border border-white/30 text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Hire Purchase
            </Link>
          </div>
        </div>

        {/* Slide progress */}
        <div className="absolute bottom-8 right-6 md:right-16 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative h-0.5 bg-white/20 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: i === active ? "48px" : "20px" }}
            >
              {i === active && (
                <span
                  className="absolute inset-y-0 left-0 bg-white rounded-full"
                  style={{ animation: "progress 6s linear forwards" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <div className="w-px h-10 bg-white/40 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-white animate-bounce" />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress { from { width: 0% } to { width: 100% } }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TICKER / MARQUEE
───────────────────────────────────────────── */
function Ticker() {
  const items = ["BMW", "Mercedes-Benz", "Audi", "Range Rover", "Porsche", "Jaguar", "Volvo", "KIA", "Nissan", "Toyota", "Lexus", "Volkswagen", "Hire Purchase Available"];
  const rep = [...items, ...items];
  return (
    <div className="bg-zinc-950 border-y border-zinc-800 py-4 overflow-hidden">
      <div className="flex whitespace-nowrap" style={{ animation: "ticker 35s linear infinite" }}>
        {rep.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 text-zinc-400 text-xs font-bold uppercase tracking-[0.18em]">
            {item}
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HIRE PURCHASE FEATURE STRIP
───────────────────────────────────────────── */
function HPStrip() {
  return (
    <section className="bg-zinc-950 py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-5">
              Hire Purchase — Available on All Vehicles
            </p>
            <h2
              className="text-5xl md:text-6xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Your dream car,<br />
              <span className="text-zinc-500">your timeline.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">
              We believe quality vehicles shouldn't require full upfront payment. Our Hire Purchase scheme offers flexible monthly plans, 
              low deposits, and fast approval — so you can drive today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hire-purchase"
                className="group inline-flex items-center gap-3 bg-white text-black font-bold text-sm px-7 py-4 rounded-full hover:bg-zinc-100 transition-all"
              >
                Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="https://wa.me/2347048556600"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-zinc-700 text-white font-semibold text-sm px-7 py-4 rounded-full hover:border-zinc-400 transition-all"
              >
                Apply on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "12–48", unit: "months", label: "Flexible repayment terms" },
              { num: "Low", unit: "deposit", label: "Manageable initial payment" },
              { num: "24hrs", unit: "approval", label: "Fast application review" },
              { num: "100%", unit: "transparent", label: "No hidden fees ever" },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 group"
              >
                <div className="text-3xl font-black text-white mb-1">{card.num}</div>
                <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">{card.unit}</div>
                <div className="text-zinc-500 text-sm leading-snug">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VEHICLES GRID
───────────────────────────────────────────── */
function VehiclesGrid() {
  const cars = [
    {
      name: "BMW 5 Series",
      cat: "Executive Saloon",
      price: "₦35M+",
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=85",
      badge: "Popular",
    },
    {
      name: "Mercedes-Benz GLE",
      cat: "Luxury SUV",
      price: "₦65M+",
      img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=85",
      badge: "New In",
    },
    {
      name: "Range Rover Sport",
      cat: "Premium 4x4",
      price: "₦85M+",
      img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=85",
      badge: "HP Ready",
    },
    {
      name: "Audi A6",
      cat: "Business Saloon",
      price: "₦42M+",
      img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=85",
      badge: "HP Ready",
    },
    {
      name: "Toyota Land Cruiser",
      cat: "SUV",
      price: "₦95M+",
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=85",
      badge: "Best Seller",
    },
    {
      name: "Porsche Cayenne",
      cat: "Sport SUV",
      price: "₦120M+",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85",
      badge: "Luxury",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3">Our Inventory</p>
            <h2
              className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Featured Vehicles
            </h2>
          </div>
          <Link
            href="/offers"
            className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:border-zinc-400 hover:text-zinc-400 transition-all"
          >
            View Full Inventory <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, i) => (
            <Link
              href="/offers"
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[4/3] block"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-zinc-900 text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                  {car.badge}
                </span>
              </div>

              {/* HP badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.1em] px-3 py-1.5 rounded-full">
                  HP Available
                </span>
              </div>

              {/* Info card — slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">{car.cat}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-white text-xl font-black" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {car.name}
                  </h3>
                  <span className="text-white font-black text-lg">{car.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TULA MOTO SECTION (embed for the MS doc link)
───────────────────────────────────────────── */
function TulaSection() {
  return (
    <section className="bg-zinc-950 py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-[520px]">
            <div className="absolute top-0 left-0 w-[65%] h-[70%] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                alt="Electric bike"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-zinc-950">
              <img
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80"
                alt="Electric mobility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent */}
            <div className="absolute top-[30%] right-[28%] w-20 h-20 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-2xl z-10">
              <span className="text-white text-2xl font-black">⚡</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-5">
              Also Available — TULA Moto
            </p>
            <h2
              className="text-5xl md:text-6xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Electric<br />
              <span className="text-zinc-500">Bikes &</span><br />
              Tricycles
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6 max-w-md">
              Beyond premium cars, ZK Motors is proud to offer TULA Moto's cutting-edge electric bikes and tricycles. 
              Built for Nigerian roads — powerful, eco-friendly, and cost-efficient.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Electric bikes from 1500W to 5000W peak power",
                "Range up to 150km+ per charge",
                "TULA Keke Napep — carries 7 passengers",
                "Zero fuel cost. Zero emissions.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                  <span className="mt-1 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 bg-emerald-500 text-black font-bold text-sm px-7 py-4 rounded-full hover:bg-emerald-400 transition-all"
              >
                Explore TULA Moto <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="/tula.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 border border-zinc-700 text-white font-semibold text-sm px-7 py-4 rounded-full hover:border-zinc-400 transition-all"
              >
                View Catalog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY ZK — EDITORIAL LAYOUT
───────────────────────────────────────────── */
function WhyZK() {
  const pillars = [
    { n: "01", title: "Hire Purchase", body: "Drive today with a low deposit. Spread payments over 12 to 48 months with fully transparent terms." },
    { n: "02", title: "Premium Brands", body: "BMW, Mercedes, Range Rover, Audi and more — only globally certified vehicles in our inventory." },
    { n: "03", title: "Trusted Since Day One", body: "500+ vehicles sold. 1,000+ Nigerian families served across Kano, Kaduna, Lagos and beyond." },
    { n: "04", title: "Fast Delivery", body: "From enquiry to delivery in the shortest possible time. We handle paperwork so you don't have to." },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Top row */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">Why ZK Motors</p>
            <h2
              className="text-5xl md:text-6xl font-black text-zinc-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Redefining how<br />Nigeria buys cars.
            </h2>
          </div>
          <p className="text-zinc-500 text-lg leading-relaxed">
            We combine world-class vehicles, accessible financing, and Nigerian-rooted customer service into one seamless experience.
            Based in Kano. Serving the entire country.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-4 gap-0 border border-zinc-100 rounded-3xl overflow-hidden">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group p-8 lg:p-10 border-r border-zinc-100 last:border-r-0 hover:bg-zinc-950 transition-all duration-500 cursor-default"
            >
              <div className="text-zinc-200 group-hover:text-zinc-700 text-xs font-black uppercase tracking-widest mb-6 transition-colors duration-500">
                {p.n}
              </div>
              <h3
                className="text-xl font-black text-zinc-900 group-hover:text-white mb-4 transition-colors duration-500"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {p.title}
              </h3>
              <p className="text-zinc-500 group-hover:text-zinc-400 text-sm leading-relaxed transition-colors duration-500">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
function Testimonials() {
  const quotes = [
    {
      q: "ZK Motors made buying a BMW feel straightforward. The hire purchase terms were the most competitive I found in Northern Nigeria.",
      name: "Alhaji Musa S.",
      loc: "Kano State",
      car: "BMW 3 Series",
    },
    {
      q: "From WhatsApp enquiry to driving my car home — three days. The team is professional, honest, and genuinely helpful.",
      name: "Mrs. Fatima Ibrahim",
      loc: "Kaduna State",
      car: "Toyota Camry",
    },
    {
      q: "Ordered from Lagos, delivered on time. No stress, no drama. ZK Motors is the real deal.",
      name: "Emmanuel O.",
      loc: "Lagos",
      car: "Range Rover Sport",
    },
  ];

  return (
    <section className="bg-zinc-50 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3">Testimonials</p>
          <h2
            className="text-4xl md:text-5xl font-black text-zinc-900"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What our customers say.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <div key={i} className="bg-white border border-zinc-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-zinc-700 text-base leading-relaxed mb-8 italic">
                "{t.q}"
              </blockquote>
              <div className="border-t border-zinc-100 pt-5">
                <p className="font-black text-zinc-900">{t.name}</p>
                <p className="text-zinc-400 text-sm mt-0.5">{t.loc}</p>
                <p className="text-emerald-600 text-xs font-bold mt-1 uppercase tracking-wider">{t.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STATS BAND
───────────────────────────────────────────── */
function StatsBand() {
  const stats = [
    { v: "500+", l: "Vehicles Sold" },
    { v: "1,000+", l: "Happy Customers" },
    { v: "15+", l: "Premium Brands" },
    { v: "5+", l: "Years Experience" },
    { v: "2", l: "Regions Served" },
  ];
  return (
    <div className="bg-zinc-950 py-14 px-6 md:px-16 lg:px-24 border-t border-zinc-900">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i} className="group">
            <div
              className="text-4xl md:text-5xl font-black text-white mb-1 group-hover:text-emerald-400 transition-colors"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {s.v}
            </div>
            <div className="text-zinc-600 text-xs uppercase tracking-widest font-bold">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CONTACT CTA
───────────────────────────────────────────── */
function ContactCTA() {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-zinc-950 rounded-3xl overflow-hidden relative">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
          />
          <div className="relative grid md:grid-cols-2 gap-0 items-stretch">
            {/* Image */}
            <div className="hidden md:block relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=85"
                alt="Luxury car"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950" />
            </div>
            {/* Text */}
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-5">Get in Touch</p>
              <h2
                className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Ready to find<br />your car?
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-10">
                Contact us now. Our team will match you with the right vehicle and walk you through our Hire Purchase options — no pressure, just honest advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/2347048556600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-emerald-500 text-black font-bold text-sm px-7 py-4 rounded-full hover:bg-emerald-400 transition-all"
                >
                  💬 WhatsApp Us
                </a>
                <a
                  href="tel:07048556600"
                  className="flex items-center justify-center gap-3 border border-zinc-700 text-white font-semibold text-sm px-7 py-4 rounded-full hover:border-zinc-500 transition-all"
                >
                  📞 0704 855 6600
                </a>
                <Link
                  href="/contactus"
                  className="flex items-center justify-center gap-3 border border-zinc-700 text-white font-semibold text-sm px-7 py-4 rounded-full hover:border-zinc-500 transition-all"
                >
                  Contact Page →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Ticker />
      <HPStrip />
      <VehiclesGrid />
      <TulaSection />
      <WhyZK />
      <StatsBand />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}