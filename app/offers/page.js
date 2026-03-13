"use client"

import React from 'react';
import { MapPin, Phone, Instagram, MessageCircle, Award, Users, Car, Shield, Clock, TrendingUp } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const heading = { fontFamily: "'Montserrat', sans-serif" };
const body = { fontFamily: "'Inter', sans-serif" };

export default function Offers() {
  const companyData = {
    name: 'ZK Motors',
    tagline: 'Your Trusted Automotive Partner in Northern Nigeria',
    description: 'At ZK Motors, we are passionate about connecting people with their dream vehicles. Established as a premier automotive dealership, we specialize in providing high-quality vehicles from world-renowned brands to customers across Northern Nigeria.',
    mission: 'To deliver exceptional automotive solutions with integrity, transparency, and customer satisfaction at the heart of everything we do.',
    vision: 'To become the most trusted and preferred automotive dealership in Northern Nigeria, setting new standards in quality service and customer experience.',
    heroImage: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
    location: { state: 'Kano State', country: 'Nigeria', serviceArea: 'Northern Nigeria' },
    contact: {
      phone: '0704 855 6600',
      whatsapp: '0704 855 6600',
      instagram: 'https://www.instagram.com/zk_motoz?igsh=cWhjYTNmN291ZmJh&utm_source=qr',
      instagramHandle: '@zk_motoz'
    },
    stats: [
      { icon: Car, value: '500+', label: 'Vehicles Sold' },
      { icon: Users, value: '1,000+', label: 'Happy Customers' },
      { icon: Award, value: '15+', label: 'Brand Partners' },
      { icon: TrendingUp, value: '5+', label: 'Years Experience' }
    ],
    values: [
      { icon: Shield, title: 'Quality Assurance', description: 'Every vehicle undergoes rigorous quality checks to ensure you get nothing but the best.' },
      { icon: Users, title: 'Customer First', description: 'Your satisfaction is our priority. We provide personalized service tailored to your specific needs.' },
      { icon: Award, title: 'Trusted Brands', description: 'We partner with globally recognized automotive brands to offer a diverse selection of premium vehicles.' },
      { icon: Clock, title: 'Fast Service', description: 'From inquiry to delivery, we ensure a smooth and efficient process, saving you time and hassle.' }
    ],
    leadership: {
      message: "We believe in building lasting relationships with our customers. At ZK Motors, you're not just buying a car — you're joining a family that cares about your automotive journey.",
      founders: "Augustine Sunday Obri & Jibril Umar Gabi",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="relative bg-[#0a0a0a] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-10">
              <div className="inline-block mb-4 px-5 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#a594f9]" style={heading}>Northern Nigeria's Premier Dealership</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-3 text-white tracking-tight" style={heading}>{companyData.name}</h1>
              <p className="text-base text-[#9ca3af] max-w-3xl mx-auto leading-relaxed" style={body}>{companyData.tagline}</p>
            </div>

            <div className="max-w-5xl mx-auto mb-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={companyData.heroImage} alt="ZK Motors" className="w-full h-[440px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                <div className="absolute bottom-7 left-7 right-7">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/15">
                    <p className="text-white text-base font-medium" style={body}>
                      "Experience the joy of driving your dream car with ZK Motors"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10" style={body}>
                <MapPin className="w-4 h-4 text-[#7c6af7]" />
                <span className="font-semibold text-white text-sm">{companyData.location.state}, {companyData.location.country}</span>
                <span className="text-[#4b5563]">•</span>
                <span className="text-[#6b7280] text-sm">Serving {companyData.location.serviceArea}</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-5" style={heading}>Who We Are</h2>
              <p className="text-base text-[#6b7280] max-w-4xl mx-auto leading-relaxed" style={body}>{companyData.description}</p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-7 mb-20">
              <div className="bg-[#faf9ff] p-8 rounded-2xl border border-[#ede9fe] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#7c6af7] rounded-xl flex items-center justify-center mb-5">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3" style={heading}>Our Mission</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm" style={body}>{companyData.mission}</p>
              </div>
              <div className="bg-[#f9fafb] p-8 rounded-2xl border border-[#e5e7eb] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3" style={heading}>Our Vision</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm" style={body}>{companyData.vision}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
              {companyData.stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="text-center p-7 bg-white rounded-2xl border border-[#e5e7eb] hover:border-[#7c6af7] hover:shadow-md transition-all group">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-[#d1d5db] group-hover:text-[#7c6af7] transition-colors" />
                    <div className="text-3xl font-black text-[#0a0a0a] mb-1" style={heading}>{stat.value}</div>
                    <div className="text-[#6b7280] font-medium text-xs uppercase tracking-wider" style={heading}>{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Values */}
            <h2 className="text-3xl font-black text-[#0a0a0a] text-center mb-10" style={heading}>Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
              {companyData.values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i} className="group p-7 bg-white rounded-2xl border border-[#f3f4f6] hover:border-[#7c6af7] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-[#7c6af7] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0a0a0a] mb-2" style={heading}>{value.title}</h3>
                    <p className="text-[#6b7280] leading-relaxed text-sm" style={body}>{value.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Leadership Message */}
            <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2">
                  <img src={companyData.leadership.image} alt="ZK Motors Leadership"
                    className="w-full h-full object-cover min-h-[280px]" />
                </div>
                <div className="md:col-span-3 p-10 text-white flex flex-col justify-center">
                  <p className="text-xs font-bold text-[#a594f9] uppercase tracking-widest mb-3" style={heading}>From Our Founders</p>
                  <h3 className="text-2xl font-black mb-4 text-white" style={heading}>{companyData.leadership.founders}</h3>
                  <p className="text-lg text-[#9ca3af] leading-relaxed mb-7 italic" style={body}>
                    "{companyData.leadership.message}"
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href={`tel:${companyData.contact.phone}`}
                      className="inline-flex items-center gap-2 bg-[#7c6af7] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#6b59e8] transition-all hover:scale-105"
                      style={heading}>
                      <Phone className="w-4 h-4" /> CALL US
                    </a>
                    <a href={companyData.contact.instagram} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105"
                      style={heading}>
                      <Instagram className="w-4 h-4" /> FOLLOW US
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#f9fafb] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-[#0a0a0a] mb-3" style={heading}>Get in Touch</h2>
            <p className="text-[#6b7280] mb-10 text-sm" style={body}>Ready to find your perfect vehicle? Contact us today.</p>
            <div className="grid md:grid-cols-3 gap-5">
              <a href={`tel:${companyData.contact.phone}`}
                className="group bg-white p-7 rounded-2xl border border-[#e5e7eb] hover:border-[#7c6af7] hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#f0eeff] group-hover:bg-[#7c6af7] rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors">
                  <Phone className="w-5 h-5 text-[#7c6af7] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-[#0a0a0a] mb-1" style={heading}>Call Us</h3>
                <p className="text-[#6b7280] font-medium text-sm" style={body}>{companyData.contact.phone}</p>
              </a>
              <a href={`https://wa.me/${companyData.contact.whatsapp.replace(/\s/g, '')}`}
                target="_blank" rel="noopener noreferrer"
                className="group bg-white p-7 rounded-2xl border border-[#e5e7eb] hover:border-green-500 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-50 group-hover:bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-[#0a0a0a] mb-1" style={heading}>WhatsApp</h3>
                <p className="text-[#6b7280] font-medium text-sm" style={body}>{companyData.contact.whatsapp}</p>
              </a>
              <a href={companyData.contact.instagram} target="_blank" rel="noopener noreferrer"
                className="group bg-white p-7 rounded-2xl border border-[#e5e7eb] hover:border-pink-500 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-pink-50 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all">
                  <Instagram className="w-5 h-5 text-pink-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-[#0a0a0a] mb-1" style={heading}>Instagram</h3>
                <p className="text-[#6b7280] font-medium text-sm" style={body}>{companyData.contact.instagramHandle}</p>
              </a>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}