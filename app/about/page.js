"use client"

import React from 'react';
import { MapPin, Phone, Instagram, MessageCircle, Award, Users, Car, Shield, Clock, TrendingUp } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const heading = { fontFamily: "'Montserrat', sans-serif" };
const body = { fontFamily: "'Inter', sans-serif" };

export default function AboutUs() {
  const leaders = [
    {
      name: "Augustine Sunday Obri",
      role: "Co-Founder & Chief Executive Officer",
      bio: "Augustine is the visionary driving force behind ZK Motors. With years of experience in the automotive and finance sectors, he identified a gap in Northern Nigeria's car market — quality vehicles with accessible financing. He founded ZK Motors to bridge that gap, championing the Hire Purchase model that has helped over a thousand Nigerian families drive their dream cars.",
      image: "/person.jpg",
      fallback: "AO",
      color: "from-[#7c6af7] to-[#5b4de0]",
    },
    {
      name: "Jibril Umar Gabi",
      role: "Co-Founder & Managing Director",
      bio: "Jibril brings deep roots in Northern Nigeria and a passion for business that transforms communities. As Managing Director, he oversees day-to-day operations, customer relationships, and ZK Motors' expansion across Northern Nigeria. His leadership ensures every customer receives world-class service from enquiry to delivery.",
      image: "/person2.jpg",
      fallback: "JG",
      color: "from-[#1a1a1a] to-[#0a0a0a]",
    },
  ];

  const stats = [
    { icon: Car, value: '500+', label: 'Vehicles Sold' },
    { icon: Users, value: '1,000+', label: 'Happy Customers' },
    { icon: Award, value: '15+', label: 'Brand Partners' },
    { icon: TrendingUp, value: '5+', label: 'Years Experience' }
  ];

  const values = [
    { icon: Shield, title: 'Quality Assurance', description: 'Every vehicle undergoes rigorous quality checks. We stock only from verified, globally recognized brands.' },
    { icon: Users, title: 'Customer First', description: 'Your satisfaction drives everything we do. Personalized service from first enquiry to post-purchase support.' },
    { icon: Award, title: 'Hire Purchase Access', description: 'We believe quality cars should be accessible to all. Our HP schemes make premium driving a reality for everyone.' },
    { icon: Clock, title: 'Fast & Transparent', description: "From application to delivery — smooth, fast, and with zero hidden charges. You always know exactly what you're paying." },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="relative bg-[#0a0a0a] text-white overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <span
              className="inline-block bg-[#7c6af7] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={heading}
            >
              About ZK Motors
            </span>
            <h1
              className="text-5xl md:text-7xl font-black mb-6 leading-none text-white"
              style={heading}
            >
              Nigeria's Premier<br />
              <span className="text-[#a594f9]">Automotive Partner</span>
            </h1>
            <p className="text-lg text-[#9ca3af] max-w-3xl mx-auto mb-10 leading-relaxed" style={body}>
              ZK Motors was built on a single belief — every Nigerian deserves to drive a quality vehicle.
              We make that possible through exceptional service, premium brands, and flexible Hire Purchase financing.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10" style={body}>
              <MapPin className="w-4 h-4 text-[#7c6af7]" />
              <span className="font-semibold text-white text-sm">Kano State, Nigeria</span>
              <span className="text-[#4b5563]">•</span>
              <span className="text-[#6b7280] text-sm">Serving Northern Nigeria</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#7c6af7] py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i}>
                  <Icon className="w-7 h-7 mx-auto mb-2 text-white/60" />
                  <div className="text-4xl font-black text-white" style={heading}>{stat.value}</div>
                  <div className="text-white/70 text-sm mt-1" style={body}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-4" style={heading}>Who We Are</h2>
              <p className="text-base text-[#6b7280] max-w-4xl mx-auto leading-relaxed" style={body}>
                At ZK Motors, we are passionate about connecting people with their dream vehicles. Established as a premier automotive dealership,
                we specialize in providing high-quality vehicles from world-renowned brands to customers across Northern Nigeria —
                with flexible Hire Purchase options that make ownership accessible to all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-[#faf9ff] p-8 rounded-2xl border border-[#ede9fe] hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-[#7c6af7] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3" style={heading}>Our Mission</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm" style={body}>
                  To deliver exceptional automotive solutions with integrity, transparency, and customer satisfaction at the heart of everything we do —
                  making quality vehicles accessible to every Nigerian through our Hire Purchase schemes.
                </p>
              </div>
              <div className="bg-[#f9fafb] p-8 rounded-2xl border border-[#e5e7eb] hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3" style={heading}>Our Vision</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm" style={body}>
                  To become the most trusted and preferred automotive dealership in Northern Nigeria, setting new standards in quality service,
                  customer experience, and accessible vehicle financing.
                </p>
              </div>
            </div>

            {/* Values */}
            <h2 className="text-4xl font-black text-[#0a0a0a] text-center mb-12" style={heading}>Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i} className="group p-7 bg-white rounded-2xl border border-[#f3f4f6] hover:border-[#7c6af7] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-[#7c6af7] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-[#0a0a0a] mb-2" style={heading}>{value.title}</h3>
                    <p className="text-[#6b7280] leading-relaxed text-sm" style={body}>{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="py-20 px-6 bg-[#0a0a0a] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-white/5 text-[#a594f9] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-white/10" style={heading}>
                Founding Team
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white" style={heading}>
                Meet Our Founders
              </h2>
              <p className="text-[#6b7280] max-w-2xl mx-auto text-sm" style={body}>
                Two Nigerians with one shared vision — to make quality car ownership accessible to all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {leaders.map((leader, i) => (
                <div key={i} className="bg-white/5 border border-white/10 hover:border-[#7c6af7]/50 rounded-2xl overflow-hidden transition-all duration-400 group">
                  <div className="p-8">
                    <div className="flex items-start gap-5 mb-6">
                      <div className={`w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br ${leader.color} flex items-center justify-center`}>
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover object-top"
                          onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                        />
                        <span className="text-white font-black text-xl hidden items-center justify-center w-full h-full" style={heading}>{leader.fallback}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white" style={heading}>{leader.name}</h3>
                        <p className="text-[#a594f9] font-medium text-sm mt-1" style={body}>{leader.role}</p>
                      </div>
                    </div>
                    <p className="text-[#9ca3af] leading-relaxed text-sm" style={body}>{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hire Purchase Callout */}
        <div className="py-20 px-6 bg-[#7c6af7]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5" style={heading}>
              We Offer Hire Purchase on All Vehicles
            </h2>
            <p className="text-white/75 text-lg mb-10" style={body}>
              Don't have the full amount upfront? No problem. Drive your dream car today with a manageable deposit and spread the rest over 12–48 months.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:07048556600"
                className="bg-white text-[#7c6af7] font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all hover:scale-105 flex items-center gap-2"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.875rem', letterSpacing: '0.03em' }}
              >
                <Phone className="w-4 h-4" />
                CALL US
              </a>
              <a
                href="https://wa.me/2347048556600"
                target="_blank" rel="noopener noreferrer"
                className="bg-white/10 border border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-2"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.875rem', letterSpacing: '0.03em' }}
              >
                <MessageCircle className="w-4 h-4" />
                WHATSAPP
              </a>
              <a
                href="https://www.instagram.com/zk_motoz"
                target="_blank" rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-700 to-pink-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 flex items-center gap-2"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.875rem', letterSpacing: '0.03em' }}
              >
                <Instagram className="w-4 h-4" />
                FOLLOW US
              </a>
            </div>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="bg-[#f9fafb] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-[#0a0a0a] mb-3" style={heading}>Get in Touch</h2>
            <p className="text-[#6b7280] mb-12 text-base" style={body}>Ready to find your perfect vehicle? Contact us today.</p>
            <div className="grid md:grid-cols-3 gap-5">
              <a href="tel:07048556600"
                className="group bg-white p-7 rounded-2xl border border-[#e5e7eb] hover:border-[#7c6af7] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#f0eeff] group-hover:bg-[#7c6af7] rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Phone className="w-6 h-6 text-[#7c6af7] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-[#0a0a0a] mb-1" style={heading}>Call Us</h3>
                <p className="text-[#6b7280] font-medium text-sm" style={body}>0704 855 6600</p>
              </a>
              <a href="https://wa.me/2347048556600" target="_blank" rel="noopener noreferrer"
                className="group bg-white p-7 rounded-2xl border border-[#e5e7eb] hover:border-green-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-green-50 group-hover:bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-[#0a0a0a] mb-1" style={heading}>WhatsApp</h3>
                <p className="text-[#6b7280] font-medium text-sm" style={body}>0704 855 6600</p>
              </a>
              <a href="https://www.instagram.com/zk_motoz" target="_blank" rel="noopener noreferrer"
                className="group bg-white p-7 rounded-2xl border border-[#e5e7eb] hover:border-pink-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-pink-50 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all">
                  <Instagram className="w-6 h-6 text-pink-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-[#0a0a0a] mb-1" style={heading}>Instagram</h3>
                <p className="text-[#6b7280] font-medium text-sm" style={body}>@zk_motoz</p>
              </a>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}