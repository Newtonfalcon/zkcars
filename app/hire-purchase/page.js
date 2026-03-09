"use client"

import React, { useState } from 'react';
import { CheckCircle, Phone, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HirePurchasePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const benefits = [
    { icon: "🚗", title: "Drive Today", desc: "Pay a deposit and take your car home the same day. No waiting for full payment." },
    { icon: "💳", title: "Flexible Monthly Payments", desc: "Spread the cost over 12, 24, 36, or 48 months at terms that suit your income." },
    { icon: "📋", title: "Simple Documentation", desc: "Minimal paperwork required. We guide you through the entire process step by step." },
    { icon: "🔍", title: "Transparent Terms", desc: "Every fee and charge is disclosed upfront. Absolutely no hidden costs or surprises." },
    { icon: "⚡", title: "Fast Approval", desc: "Most applications are reviewed within 24 hours. We move as fast as you do." },
    { icon: "🏆", title: "All Vehicle Categories", desc: "HP is available on all our vehicles — electric, fuel, SUV, saloon, and luxury." },
  ];

  const steps = [
    {
      num: "01",
      title: "Browse & Select",
      desc: "Explore our full inventory online or visit us in Kano. Choose the vehicle you want — from budget-friendly options to premium luxury cars.",
      tip: "Tip: Our team can help you match the right car to your budget.",
    },
    {
      num: "02",
      title: "Apply for HP",
      desc: "Contact us via phone or WhatsApp to start your hire purchase application. We'll ask for basic documentation to process your request.",
      tip: "Tip: Have your ID, proof of income, and a recent utility bill ready.",
    },
    {
      num: "03",
      title: "Agreement & Deposit",
      desc: "Once approved, we present your hire purchase agreement with clear monthly payment figures. Pay your initial deposit to confirm the vehicle.",
      tip: "Tip: Read the agreement carefully. Ask us any questions you have.",
    },
    {
      num: "04",
      title: "Take Delivery",
      desc: "Your car is prepared and handed over to you. Monthly repayments begin as agreed, and full ownership transfers to you upon final payment.",
      tip: "Tip: We provide full after-sales support throughout your repayment period.",
    },
  ];

  const faqs = [
    {
      q: "What is Hire Purchase (HP)?",
      a: "Hire Purchase is a financing arrangement where you pay a deposit to secure a vehicle, then make fixed monthly payments over an agreed period. You effectively 'hire' the car until the final payment, at which point full ownership transfers to you.",
    },
    {
      q: "How much deposit is required?",
      a: "The required deposit varies depending on the vehicle and your financial profile. Our team will discuss the most suitable deposit amount during your application. We aim to make the deposit as affordable as possible.",
    },
    {
      q: "What documents do I need to apply?",
      a: "Typically you'll need a valid government-issued ID (NIN, voter's card, international passport), proof of income (pay slip or bank statement), and a recent utility bill for address verification. Our team will guide you through the specific requirements.",
    },
    {
      q: "How long does the approval process take?",
      a: "Most applications are reviewed within 24 hours. In many cases, same-day approval is possible. We prioritize speed without compromising on thoroughness.",
    },
    {
      q: "Can I pay off my hire purchase early?",
      a: "Yes. Early settlement is possible. Please speak to our team to understand any early settlement figures and applicable terms.",
    },
    {
      q: "What happens if I miss a payment?",
      a: "We encourage all customers to contact us immediately if they anticipate difficulty with a payment. We work with our customers to find solutions. Open communication is always the best approach.",
    },
    {
      q: "Is hire purchase available on all your vehicles?",
      a: "Yes, hire purchase is available across our entire inventory — from affordable family saloons to premium luxury and electric vehicles.",
    },
    {
      q: "Do you offer nationwide delivery?",
      a: "Yes. While we're based in Kano State, we serve customers across Northern Nigeria and can arrange delivery to various locations. Contact us to discuss delivery to your area.",
    },
  ];

  const vehicleCategories = [
    { name: "Budget Saloons", price: "₦8M – ₦20M", monthly: "From ₦150k/month", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&q=80" },
    { name: "Executive Saloons", price: "₦20M – ₦50M", monthly: "From ₦350k/month", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80" },
    { name: "Premium SUVs", price: "₦50M – ₦100M", monthly: "From ₦700k/month", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80" },
    { name: "Luxury Vehicles", price: "₦100M+", monthly: "Bespoke terms", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&q=80" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="relative pt-24 pb-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          </div>
          <div className="relative max-w-7xl mx-auto text-center">
            <span className="inline-block bg-amber-500 text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🎯 Hire Purchase Programme
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none" style={{ fontFamily: "'Georgia', serif" }}>
              Drive Now.<br />
              <span className="text-amber-400">Pay Over Time.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              ZK Motors' Hire Purchase scheme puts you behind the wheel of your dream car today. 
              With flexible monthly payments and transparent terms, quality vehicle ownership has never been more accessible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/2347048556600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl"
              >
                💬 Apply on WhatsApp
              </a>
              <a
                href="tel:07048556600"
                className="border-2 border-white/60 hover:border-white text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:bg-white/10"
              >
                📞 Call 0704 855 6600
              </a>
            </div>
          </div>
        </div>

        {/* Key Numbers */}
        <div className="bg-amber-500 py-10 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-black">12–48</div>
              <div className="text-black/70 font-semibold text-sm mt-1">Month Terms Available</div>
            </div>
            <div className="border-x border-black/20 px-4">
              <div className="text-4xl font-black text-black">Low</div>
              <div className="text-black/70 font-semibold text-sm mt-1">Initial Deposit Required</div>
            </div>
            <div>
              <div className="text-4xl font-black text-black">24hrs</div>
              <div className="text-black/70 font-semibold text-sm mt-1">Application Turnaround</div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
                Why Choose HP with ZK Motors?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="group p-8 rounded-2xl border-2 border-slate-100 hover:border-amber-400 hover:shadow-xl transition-all duration-400 hover:-translate-y-1">
                  <div className="text-4xl mb-5">{b.icon}</div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{b.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Categories + HP Estimates */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
                HP Available on All Categories
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Indicative monthly payments based on 36-month term with standard deposit. Exact figures determined at application.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicleCategories.map((cat, i) => (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">HP Available</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-slate-900 mb-2">{cat.name}</h3>
                    <p className="text-slate-500 text-sm mb-3">{cat.price}</p>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                      <p className="text-amber-700 text-xs font-bold uppercase tracking-wider mb-1">Monthly from</p>
                      <p className="text-slate-900 font-black">{cat.monthly}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-8">*Indicative figures only. Contact us for your personalized HP quote.</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
                How Hire Purchase Works
              </h2>
            </div>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 items-start p-8 bg-white border-2 border-slate-100 hover:border-amber-300 rounded-3xl hover:shadow-lg transition-all duration-400">
                  <div className="shrink-0 w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center">
                    <span className="text-black font-black text-2xl">{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                      <p className="text-amber-700 text-sm">{step.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border-2 border-slate-200 hover:border-amber-300 transition-colors overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-black text-slate-900 text-lg pr-4">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-amber-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Start Your HP Application Today
            </h2>
            <p className="text-slate-400 text-xl mb-10">
              Reach out via WhatsApp or call us directly. Our team is ready to find the right HP plan for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/2347048556600" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:scale-105 shadow-xl flex items-center gap-3">
                <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
              </a>
              <a href="tel:07048556600" className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:scale-105 shadow-xl flex items-center gap-3">
                <Phone className="w-6 h-6" /> Call 0704 855 6600
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}