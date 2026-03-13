"use client"

import React, { useState } from 'react';
import { CheckCircle, Phone, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const heading = { fontFamily: "'Montserrat', sans-serif" };
const body = { fontFamily: "'Inter', sans-serif" };

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
    { num: "01", title: "Browse & Select", desc: "Explore our full inventory online or visit us in Kano. Choose the vehicle you want — from budget-friendly options to premium luxury cars.", tip: "Tip: Our team can help you match the right car to your budget." },
    { num: "02", title: "Apply for HP", desc: "Contact us via phone or WhatsApp to start your hire purchase application. We'll ask for basic documentation to process your request.", tip: "Tip: Have your ID, proof of income, and a recent utility bill ready." },
    { num: "03", title: "Agreement & Deposit", desc: "Once approved, we present your hire purchase agreement with clear monthly payment figures. Pay your initial deposit to confirm the vehicle.", tip: "Tip: Read the agreement carefully. Ask us any questions you have." },
    { num: "04", title: "Take Delivery", desc: "Your car is prepared and handed over to you. Monthly repayments begin as agreed, and full ownership transfers to you upon final payment.", tip: "Tip: We provide full after-sales support throughout your repayment period." },
  ];

  const faqs = [
    { q: "What is Hire Purchase (HP)?", a: "Hire Purchase is a financing arrangement where you pay a deposit to secure a vehicle, then make fixed monthly payments over an agreed period. You effectively 'hire' the car until the final payment, at which point full ownership transfers to you." },
    { q: "How much deposit is required?", a: "The required deposit varies depending on the vehicle and your financial profile. Our team will discuss the most suitable deposit amount during your application. We aim to make the deposit as affordable as possible." },
    { q: "What documents do I need to apply?", a: "Typically you'll need a valid government-issued ID (NIN, voter's card, international passport), proof of income (pay slip or bank statement), and a recent utility bill for address verification." },
    { q: "How long does the approval process take?", a: "Most applications are reviewed within 24 hours. In many cases, same-day approval is possible. We prioritize speed without compromising on thoroughness." },
    { q: "Can I pay off my hire purchase early?", a: "Yes. Early settlement is possible. Please speak to our team to understand any early settlement figures and applicable terms." },
    { q: "What happens if I miss a payment?", a: "We encourage all customers to contact us immediately if they anticipate difficulty with a payment. We work with our customers to find solutions. Open communication is always the best approach." },
    { q: "Is hire purchase available on all your vehicles?", a: "Yes, hire purchase is available across our entire inventory — from affordable family saloons to premium luxury and electric vehicles." },
    { q: "Do you offer nationwide delivery?", a: "Yes. While we're based in Kano State, we serve customers across Northern Nigeria and can arrange delivery to various locations. Contact us to discuss delivery to your area." },
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
        <div className="relative pt-28 pb-20 px-6 bg-[#0a0a0a] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <span className="inline-block bg-[#7c6af7] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6" style={heading}>
              Hire Purchase Programme
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none text-white" style={heading}>
              Drive Now.<br />
              <span className="text-[#a594f9]">Pay Over Time.</span>
            </h1>
            <p className="text-base text-[#9ca3af] max-w-3xl mx-auto mb-10 leading-relaxed" style={body}>
              ZK Motors' Hire Purchase scheme puts you behind the wheel of your dream car today.
              With flexible monthly payments and transparent terms, quality vehicle ownership has never been more accessible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/2347048556600" target="_blank" rel="noopener noreferrer"
                className="bg-[#7c6af7] hover:bg-[#6b59e8] text-white font-bold px-10 py-4 rounded-xl text-sm transition-all hover:scale-105 shadow-xl"
                style={heading}>
                💬 APPLY ON WHATSAPP
              </a>
              <a href="tel:07048556600"
                className="border border-white/20 hover:border-white/40 text-white font-bold px-10 py-4 rounded-xl text-sm transition-all hover:bg-white/5"
                style={heading}>
                📞 CALL 0704 855 6600
              </a>
            </div>
          </div>
        </div>

        {/* Key Numbers */}
        <div className="bg-[#7c6af7] py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-white" style={heading}>12–48</div>
              <div className="text-white/70 text-xs font-semibold mt-1 uppercase tracking-wider" style={heading}>Month Terms Available</div>
            </div>
            <div className="border-x border-white/20 px-4">
              <div className="text-4xl font-black text-white" style={heading}>Low</div>
              <div className="text-white/70 text-xs font-semibold mt-1 uppercase tracking-wider" style={heading}>Initial Deposit Required</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white" style={heading}>24hrs</div>
              <div className="text-white/70 text-xs font-semibold mt-1 uppercase tracking-wider" style={heading}>Application Turnaround</div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a]" style={heading}>Why Choose HP with ZK Motors?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="group p-7 rounded-2xl border border-[#f3f4f6] hover:border-[#7c6af7] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="text-base font-bold text-[#0a0a0a] mb-2" style={heading}>{b.title}</h3>
                  <p className="text-[#6b7280] leading-relaxed text-sm" style={body}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Categories */}
        <section className="py-24 px-6 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a]" style={heading}>HP Available on All Categories</h2>
              <p className="text-[#6b7280] mt-3 max-w-2xl mx-auto text-sm" style={body}>Indicative monthly payments based on 36-month term with standard deposit. Exact figures determined at application.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {vehicleCategories.map((cat, i) => (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] hover:border-[#7c6af7] hover:shadow-xl transition-all duration-400 hover:-translate-y-1">
                  <div className="relative h-44 overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="bg-[#7c6af7] text-white text-xs font-bold px-3 py-1 rounded-full" style={heading}>HP Available</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-black text-[#0a0a0a] mb-1" style={heading}>{cat.name}</h3>
                    <p className="text-[#9ca3af] text-xs mb-3" style={body}>{cat.price}</p>
                    <div className="bg-[#faf9ff] border border-[#ede9fe] rounded-xl p-3">
                      <p className="text-[#7c6af7] text-[10px] font-bold uppercase tracking-wider mb-1" style={heading}>Monthly from</p>
                      <p className="text-[#0a0a0a] font-black text-sm" style={heading}>{cat.monthly}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-[#9ca3af] text-xs mt-6" style={body}>*Indicative figures only. Contact us for your personalized HP quote.</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a]" style={heading}>How Hire Purchase Works</h2>
            </div>
            <div className="space-y-5">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-7 items-start p-7 bg-white border border-[#f3f4f6] hover:border-[#7c6af7]/50 rounded-2xl hover:shadow-md transition-all duration-300">
                  <div className="shrink-0 w-16 h-16 bg-[#7c6af7] rounded-xl flex items-center justify-center">
                    <span className="text-white font-black text-lg" style={heading}>{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-[#0a0a0a] mb-2" style={heading}>{step.title}</h3>
                    <p className="text-[#6b7280] leading-relaxed mb-3 text-sm" style={body}>{step.desc}</p>
                    <div className="bg-[#faf9ff] border border-[#ede9fe] rounded-xl px-4 py-3">
                      <p className="text-[#7c6af7] text-sm" style={body}>{step.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 px-6 bg-[#f9fafb]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a]" style={heading}>Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#e5e7eb] hover:border-[#7c6af7]/50 transition-colors overflow-hidden">
                  <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="font-bold text-[#0a0a0a] text-base pr-4" style={heading}>{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-[#7c6af7] shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-[#9ca3af] shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-[#6b7280] leading-relaxed text-sm" style={body}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#0a0a0a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-5" style={heading}>Start Your HP Application Today</h2>
            <p className="text-[#6b7280] text-base mb-10" style={body}>Reach out via WhatsApp or call us directly. Our team is ready to find the right HP plan for you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/2347048556600" target="_blank" rel="noopener noreferrer"
                className="bg-[#7c6af7] hover:bg-[#6b59e8] text-white font-bold px-10 py-4 rounded-xl text-sm transition-all hover:scale-105 flex items-center gap-3"
                style={heading}>
                <MessageCircle className="w-5 h-5" /> CHAT ON WHATSAPP
              </a>
              <a href="tel:07048556600"
                className="border border-white/20 text-white font-bold px-10 py-4 rounded-xl text-sm transition-all hover:bg-white/5 flex items-center gap-3"
                style={heading}>
                <Phone className="w-5 h-5" /> CALL 0704 855 6600
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}