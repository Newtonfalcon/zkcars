"use client"

import React from 'react';
import { Zap, Fuel, ShieldCheck, CreditCard, RefreshCw, Wrench, Award, HeadphonesIcon, TrendingUp, CheckCircle, Car, Users } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const heading = { fontFamily: "'Montserrat', sans-serif" };
const body = { fontFamily: "'Inter', sans-serif" };

export default function Services() {
  const servicesData = {
    hero: {
      title: 'Our Services',
      subtitle: 'Comprehensive Automotive Solutions',
      description: 'From premium electric vehicles to powerful fuel-powered cars, we offer a complete range of services for Northern Nigeria.',
      backgroundImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80'
    },
    vehicleTypes: [
      {
        type: 'Electric Vehicles', icon: Zap, tagline: 'Drive the Future',
        description: 'Experience the next generation of automotive technology with our premium selection of electric vehicles. Enjoy zero emissions, lower running costs, and cutting-edge innovation.',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
        features: ['Zero Emissions', 'Lower Operating Costs', 'Advanced Technology', 'Instant Torque', 'Silent Operation', 'Government Incentives'],
        brands: ['BMW iX', 'Mercedes EQS', 'Audi e-tron', 'Porsche Taycan'],
        colorClass: 'text-[#7c6af7]', gradientClass: 'from-[#7c6af7] to-[#a594f9]', bgClass: 'bg-[#7c6af7]'
      },
      {
        type: 'Fuel Vehicles', icon: Fuel, tagline: 'Proven Performance',
        description: 'Choose from our extensive range of traditional fuel-powered vehicles, featuring the latest in combustion engine technology, proven reliability, and exceptional performance.',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
        features: ['Extended Range', 'Quick Refueling', 'Wide Selection', 'Proven Technology', 'High Performance', 'Easy Maintenance'],
        brands: ['BMW M Series', 'Mercedes AMG', 'Audi RS', 'Range Rover Sport'],
        colorClass: 'text-orange-500', gradientClass: 'from-orange-500 to-red-500', bgClass: 'bg-orange-500'
      }
    ],
    mainServices: [
      { icon: Car, title: 'New Vehicle Sales', description: 'Browse our extensive inventory of brand-new vehicles from world-renowned manufacturers.', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80', benefits: ['Latest Models', 'Factory Warranty', 'Customization Options', 'Competitive Pricing'] },
      { icon: RefreshCw, title: 'Certified Pre-Owned', description: 'Quality pre-owned vehicles that have undergone rigorous inspection and certification.', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', benefits: ['Multi-Point Inspection', 'Extended Warranty', 'Vehicle History Report', 'Best Value Pricing'] },
      { icon: CreditCard, title: 'Hire Purchase Financing', description: 'Drive your dream car today with our flexible Hire Purchase schemes — low deposit, fast approval, transparent terms.', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80', benefits: ['Competitive Terms', '12–48 Month Plans', 'Quick Approval', 'No Hidden Fees'] },
      { icon: RefreshCw, title: 'Trade-In Services', description: 'Looking to upgrade? We offer competitive trade-in values for your current vehicle.', image: 'https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?w=600&q=80', benefits: ['Fair Market Value', 'Quick Evaluation', 'Hassle-Free Process', 'Any Make/Model'] },
      { icon: Wrench, title: 'After-Sales Service', description: "Our commitment doesn't end at purchase. Enjoy comprehensive after-sales support.", image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=80', benefits: ['Expert Technicians', 'Genuine Parts', 'Regular Maintenance', 'Warranty Support'] },
      { icon: HeadphonesIcon, title: 'Customer Support', description: "Our dedicated support team is always ready to assist you throughout your automotive journey.", image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80', benefits: ['Available 6 Days', 'Expert Advice', 'Personalized Service', 'Multiple Channels'] },
    ],
    additionalServices: [
      { icon: ShieldCheck, title: 'Extended Warranty', description: 'Protect your investment with our comprehensive extended warranty packages.' },
      { icon: Award, title: 'Vehicle Registration', description: 'We handle all documentation and registration processes for your convenience.' },
      { icon: Users, title: 'Test Drives', description: 'Experience your dream car firsthand with our flexible test drive arrangements.' },
      { icon: TrendingUp, title: 'Vehicle Valuation', description: 'Get accurate market valuations for your current or prospective vehicle.' }
    ],
    whyChooseUs: [
      { title: 'Diverse Selection', description: 'Both electric and fuel vehicles from premium brands', stat: '15+', label: 'Brands' },
      { title: 'Expert Team', description: 'Knowledgeable staff to guide your purchase', stat: '50+', label: 'Experts' },
      { title: 'Customer Satisfaction', description: 'Proven track record of happy customers', stat: '98%', label: 'Satisfaction' },
      { title: 'Northern Nigeria', description: 'Trusted dealership across the region', stat: '5+', label: 'Years' }
    ],
    testimonial: {
      quote: 'ZK Motors made my transition to electric vehicles seamless. Their expertise and after-sales support are exceptional.',
      author: 'Ibrahim Mohammed',
      role: 'BMW iX Owner — Kano',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="relative h-[560px] overflow-hidden">
          <div className="absolute inset-0">
            <img src={servicesData.hero.backgroundImage} alt="ZK Motors Services" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0a0a0a]/85" />
          </div>
          <div className="relative h-full flex items-end pb-20 px-6">
            <div className="max-w-7xl mx-auto w-full">
              <div className="inline-block mb-4 px-5 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#a594f9]" style={heading}>Premium Automotive Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-3" style={heading}>{servicesData.hero.title}</h1>
              <p className="text-xl text-[#9ca3af] mb-2 font-light" style={body}>{servicesData.hero.subtitle}</p>
              <p className="text-base text-[#6b7280] max-w-2xl leading-relaxed" style={body}>{servicesData.hero.description}</p>
            </div>
          </div>
        </div>

        {/* Electric vs Fuel */}
        <div className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-3" style={heading}>Choose Your Power</h2>
              <p className="text-[#6b7280] max-w-3xl mx-auto text-sm leading-relaxed" style={body}>
                Whether you're ready for the electric revolution or prefer traditional fuel power, we have exceptional options for every preference.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-7">
              {servicesData.vehicleTypes.map((vehicle, i) => {
                const Icon = vehicle.icon;
                return (
                  <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] hover:shadow-xl transition-all duration-400 hover:-translate-y-1">
                    <div className="relative h-72 overflow-hidden">
                      <img src={vehicle.image} alt={vehicle.type} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${vehicle.gradientClass} opacity-70`} />
                      <div className="absolute top-5 left-5">
                        <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                          <Icon className="w-5 h-5 text-white" />
                          <span className="text-white font-bold text-sm" style={heading}>{vehicle.type}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-5 left-5">
                        <h3 className="text-white text-2xl font-black" style={heading}>{vehicle.tagline}</h3>
                      </div>
                    </div>
                    <div className="p-7">
                      <p className="text-[#6b7280] text-sm mb-5 leading-relaxed" style={body}>{vehicle.description}</p>
                      <div className="grid grid-cols-2 gap-2 mb-5">
                        {vehicle.features.map((feat, fi) => (
                          <div key={fi} className="flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 ${vehicle.colorClass}`} />
                            <span className="text-[#374151] text-xs font-medium" style={body}>{feat}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-[#f3f4f6] pt-5">
                        <p className="text-xs font-bold text-[#0a0a0a] mb-3 uppercase tracking-wider" style={heading}>Popular Models:</p>
                        <div className="flex flex-wrap gap-2">
                          {vehicle.brands.map((brand, bi) => (
                            <span key={bi} className={`px-3 py-1.5 bg-gradient-to-r ${vehicle.gradientClass} text-white text-xs font-bold rounded-full`} style={heading}>{brand}</span>
                          ))}
                        </div>
                      </div>
                      <button className={`w-full mt-5 bg-gradient-to-r ${vehicle.gradientClass} text-white py-3.5 rounded-xl font-bold text-sm hover:scale-[1.01] transition-transform shadow-lg`} style={heading}>
                        EXPLORE {vehicle.type.toUpperCase()}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Services */}
        <div className="py-24 px-6 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-3" style={heading}>Our Complete Service Portfolio</h2>
              <p className="text-[#6b7280] max-w-3xl mx-auto text-sm" style={body}>From purchase to maintenance, we provide end-to-end automotive solutions</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.mainServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] hover:border-[#7c6af7] hover:shadow-xl transition-all duration-400">
                    <div className="relative h-52 overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-[#7c6af7]" />
                        </div>
                        <h3 className="text-white text-lg font-black" style={heading}>{service.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-[#6b7280] mb-4 text-sm leading-relaxed" style={body}>{service.description}</p>
                      <div className="space-y-1.5">
                        {service.benefits.map((b, bi) => (
                          <div key={bi} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#7c6af7] rounded-full" />
                            <span className="text-[#374151] text-xs font-medium" style={body}>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#0a0a0a] mb-3" style={heading}>Additional Services</h2>
              <p className="text-[#6b7280] text-sm" style={body}>More ways we support your automotive journey</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {servicesData.additionalServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div key={i} className="group bg-[#f9fafb] p-7 rounded-2xl border border-[#e5e7eb] hover:border-[#7c6af7] hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-[#7c6af7] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-[#0a0a0a] mb-2" style={heading}>{service.title}</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed" style={body}>{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-24 px-6 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#0a0a0a] mb-3" style={heading}>Why Choose ZK Motors</h2>
              <p className="text-[#6b7280] text-sm" style={body}>Numbers that speak for themselves</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.whyChooseUs.map((item, i) => (
                <div key={i} className="text-center p-8 bg-white rounded-2xl border border-[#e5e7eb] hover:border-[#7c6af7] hover:shadow-lg transition-all duration-300">
                  <div className="text-5xl font-black text-[#7c6af7] mb-1" style={heading}>{item.stat}</div>
                  <div className="text-[#6b7280] font-semibold text-xs mb-3 uppercase tracking-wider" style={heading}>{item.label}</div>
                  <h3 className="text-sm font-bold text-[#0a0a0a] mb-1" style={heading}>{item.title}</h3>
                  <p className="text-[#9ca3af] text-xs" style={body}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="py-24 px-6 bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div>
                <img src={servicesData.testimonial.image} alt={servicesData.testimonial.author}
                  className="w-44 h-44 rounded-2xl object-cover mx-auto shadow-2xl" />
              </div>
              <div className="md:col-span-2 text-white">
                <div className="mb-5">
                  <svg className="w-10 h-10 text-[#7c6af7]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-xl text-[#9ca3af] mb-6 italic leading-relaxed" style={body}>"{servicesData.testimonial.quote}"</p>
                <p className="font-bold text-white text-base" style={heading}>{servicesData.testimonial.author}</p>
                <p className="text-[#6b7280] text-sm mt-0.5" style={body}>{servicesData.testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-5" style={heading}>Ready to Experience Premium Service?</h2>
            <p className="text-[#6b7280] text-base mb-10" style={body}>Let our experts help you find the perfect vehicle and service package</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/2347048556600" target="_blank" rel="noopener noreferrer"
                className="bg-[#7c6af7] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-[#6b59e8] transition-all hover:scale-105 shadow-lg"
                style={heading}>
                CHAT ON WHATSAPP
              </a>
              <a href="/offers"
                className="border border-[#0a0a0a] text-[#0a0a0a] px-10 py-4 rounded-xl font-bold text-sm hover:bg-[#0a0a0a] hover:text-white transition-all hover:scale-105"
                style={heading}>
                VIEW INVENTORY
              </a>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}