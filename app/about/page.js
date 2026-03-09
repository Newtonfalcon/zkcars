"use client"

import React from 'react';
import { MapPin, Phone, Instagram, MessageCircle, Award, Users, Car, Shield, Clock, TrendingUp } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function AboutUs() {
  const leaders = [
    {
      name: "Augustine Sunday Obri",
      role: "Co-Founder & Chief Executive Officer",
      bio: "Augustine is the visionary driving force behind ZK Motors. With years of experience in the automotive and finance sectors, he identified a gap in Northern Nigeria's car market — quality vehicles with accessible financing. He founded ZK Motors to bridge that gap, championing the Hire Purchase model that has helped over a thousand Nigerian families drive their dream cars.",
      image: "/person.jpg", // replace with actual image path
      fallback: "AO",
      color: "from-amber-400 to-amber-600",
    },
    {
      name: "Jibril Umar Gabi",
      role: "Co-Founder & Managing Director",
      bio: "Jibril brings deep roots in Northern Nigeria and a passion for business that transforms communities. As Managing Director, he oversees day-to-day operations, customer relationships, and ZK Motors' expansion across the Northwest and Northeast states. His leadership ensures every customer receives world-class service from enquiry to delivery.",
      image: "/person2.jpg", // replace with actual image path
      fallback: "JG",
      color: "from-slate-600 to-slate-800",
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
    { icon: Clock, title: 'Fast & Transparent', description: 'From application to delivery — smooth, fast, and with zero hidden charges. You always know exactly what you\'re paying.' },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-24 pb-20 px-4">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
          </div>
          <div className="relative max-w-7xl mx-auto text-center">
            <span className="inline-block bg-amber-500 text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              About ZK Motors
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none" style={{ fontFamily: "'Georgia', serif" }}>
              Nigeria's Premier<br />
              <span className="text-amber-400">Automotive Partner</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              ZK Motors was built on a single belief — every Nigerian deserves to drive a quality vehicle. 
              We make that possible through exceptional service, premium brands, and flexible Hire Purchase financing.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="font-semibold">Kano State, Nigeria</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">Serving Northwest & Northeast States</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-amber-500 py-10 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i}>
                  <Icon className="w-8 h-8 mx-auto mb-2 text-black/60" />
                  <div className="text-4xl font-black text-black">{stat.value}</div>
                  <div className="text-black/70 font-medium text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Who We Are</h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                At ZK Motors, we are passionate about connecting people with their dream vehicles. Established as a premier automotive dealership, 
                we specialize in providing high-quality vehicles from world-renowned brands to customers across Northwest and Northeast Nigeria — 
                with flexible Hire Purchase options that make ownership accessible to all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl border-2 border-amber-100 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To deliver exceptional automotive solutions with integrity, transparency, and customer satisfaction at the heart of everything we do — 
                  making quality vehicles accessible to every Nigerian through our Hire Purchase schemes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border-2 border-slate-200 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To become the most trusted and preferred automotive dealership in Northern Nigeria, setting new standards in quality service, 
                  customer experience, and accessible vehicle financing.
                </p>
              </div>
            </div>

            {/* Values */}
            <h2 className="text-4xl font-black text-slate-900 text-center mb-12" style={{ fontFamily: "'Georgia', serif" }}>Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i} className="group p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-amber-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="py-20 px-4 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-white/10 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                Founding Team
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                Meet Our Founders
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Two Nigerians with one shared vision — to make quality car ownership accessible to all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {leaders.map((leader, i) => (
                <div key={i} className="bg-white/5 border border-white/10 hover:border-amber-400/60 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10 group">
                  <div className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      {/* Photo slot */}
                      <div className={`w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-gradient-to-br ${leader.color} flex items-center justify-center`}>
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover object-top"
                          onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                        />
                        <span className="text-white font-black text-2xl hidden items-center justify-center w-full h-full">{leader.fallback}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">{leader.name}</h3>
                        <p className="text-amber-400 font-semibold text-sm mt-1">{leader.role}</p>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hire Purchase Callout */}
        <div className="py-20 px-4 bg-amber-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              We Offer Hire Purchase on All Vehicles
            </h2>
            <p className="text-black/70 text-xl mb-10">
              Don't have the full amount upfront? No problem. Drive your dream car today with a manageable deposit and spread the rest over 12–48 months.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:07048556600" className="bg-black text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-900 transition-all hover:scale-105">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Us
              </a>
              <a href="https://wa.me/2347048556600" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-all hover:scale-105">
                <MessageCircle className="w-5 h-5 inline mr-2" />
                WhatsApp
              </a>
              <a href="https://www.instagram.com/zk_motoz" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
                <Instagram className="w-5 h-5 inline mr-2" />
                Follow Us
              </a>
            </div>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="bg-slate-50 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Get in Touch</h2>
            <p className="text-lg text-slate-600 mb-12">Ready to find your perfect vehicle? Contact us today!</p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="tel:07048556600" className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Phone className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600 font-semibold">0704 855 6600</p>
              </a>
              <a href="https://wa.me/2347048556600" target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 group-hover:bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <MessageCircle className="w-8 h-8 text-green-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-slate-600 font-semibold">0704 855 6600</p>
              </a>
              <a href="https://www.instagram.com/zk_motoz" target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-pink-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-500 group-hover:to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all">
                  <Instagram className="w-8 h-8 text-pink-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Instagram</h3>
                <p className="text-slate-600 font-semibold">@zk_motoz</p>
              </a>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}