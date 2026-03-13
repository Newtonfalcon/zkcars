"use client"

import React, { useState } from 'react';
import { FileText, Play, Zap, Battery, Gauge, Award, Download, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const heading = { fontFamily: "'Montserrat', sans-serif" };
const body = { fontFamily: "'Inter', sans-serif" };

export default function TulaMotoShowcase() {
  const [activeProduct, setActiveProduct] = useState(null);

  const productsData = [
    {
      id: 1, name: 'Thunder Beast', category: 'Electric Bike', type: 'Performance',
      mediaType: 'video', mediaSrc: '/tula/ebike.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      price: 'Contact for Price', tagline: 'Pure Electric Adrenaline',
      description: 'Built to dominate with peak power up to 5000W. Experience the surge, the silence, and smooth control as you glide past limits.',
      specs: [
        { label: 'Power', value: '3000W (Peak 5000W)', icon: Zap },
        { label: 'Battery', value: '72V 60AH Lithium', icon: Battery },
        { label: 'Top Speed', value: '80 KM/H', icon: Gauge },
        { label: 'Range', value: '90–120 KM', icon: Award }
      ],
      features: ['Peak 5000W Power', '80km/h Top Speed', 'Lithium Battery', 'Long Range', 'Silent Operation', 'Zero Emissions']
    },
    {
      id: 2, name: 'Bolt', category: 'Electric Bike', type: 'Advanced',
      mediaType: 'video', mediaSrc: '/tula/ebike2.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
      price: 'Contact for Price', tagline: 'Advanced Urban Mobility',
      description: 'Designed for advanced riders and heavier-duty urban commuting. 3000W motor with Bluetooth unlocking and dual disc brakes.',
      specs: [
        { label: 'Motor', value: '3000W', icon: Zap },
        { label: 'Battery', value: '72V 58AH', icon: Battery },
        { label: 'Range', value: '≥150 KM', icon: Gauge },
        { label: 'Controller', value: '24-tube Intelligent', icon: Award }
      ],
      features: ['3000W Motor', '150km+ Range', 'Bluetooth Unlocking', 'Dual Disc Brakes', 'Hydraulic Suspension', 'Smart Tech']
    },
    {
      id: 3, name: 'TULA Keke Napep', category: 'Electric Tricycle', type: 'Passenger',
      mediaType: 'video', mediaSrc: '/tula/keke.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
      price: 'Contact for Price', tagline: 'The New-Age Keke',
      description: 'Modern, eco-friendly twist on the familiar Nigerian Keke Napep. Carries 7 passengers with powerful 3000W motor and lithium battery.',
      specs: [
        { label: 'Motor', value: '3000W', icon: Zap },
        { label: 'Battery', value: '72V 120AH Lithium', icon: Battery },
        { label: 'Capacity', value: '7 Passengers', icon: Gauge },
        { label: 'Controller', value: '30-tube', icon: Award }
      ],
      features: ['7 Passenger Capacity', 'Lithium Battery', 'Full Suspension', 'Quiet Operation', 'Zero Fuel Cost', 'Easy Maintenance']
    },
    {
      id: 4, name: 'Avatar', category: 'Electric Bike', type: 'City Smart',
      mediaType: 'image', mediaSrc: '/tula/bike.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
      price: '₦1.7M', tagline: 'Urban Elegance',
      description: 'Sleek, city-smart electric bike with digital dashboard, oil brake system, and full suspension. Perfect for smooth rides and quick stops.',
      specs: [
        { label: 'Motor', value: '1500W Full Disc', icon: Zap },
        { label: 'Display', value: 'Digital Instrument', icon: Battery },
        { label: 'Range', value: '100 KM', icon: Gauge },
        { label: 'Brakes', value: 'Oil Brake System', icon: Award }
      ],
      features: ['Digital Dashboard', 'Oil Brake System', 'Full Suspension', '100km Range', 'Carbon Steel Frame', 'LED Lighting']
    },
    {
      id: 5, name: 'The Bull-Cruiser', category: 'Electric Bike', type: 'Heavy Duty',
      mediaType: 'image', mediaSrc: '/tula/bike2.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
      price: 'Contact for Price', tagline: 'Built for the Distance',
      description: 'Powerful, full-sized electric bike with 2000W motor and reinforced frame. Designed for serious load-bearing tasks and long routes.',
      specs: [
        { label: 'Motor', value: '2000W (80H)', icon: Zap },
        { label: 'Battery', value: '72V 58AH', icon: Battery },
        { label: 'Load', value: 'Up to 1000 kg', icon: Gauge },
        { label: 'Gear', value: 'Integral 180', icon: Award }
      ],
      features: ['2000W Motor', 'Spare Tire Included', 'Heavy Load Capacity', 'Reinforced Frame', 'Hydraulic Suspension', 'Business Ready']
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">

        {/* Top Bar */}
        <div className="bg-[#0a0a0a] border-b border-white/5 py-4 px-6 mt-16">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#7c6af7] rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-black text-white" style={heading}>TULA Moto</h1>
            </div>
            <a href="/tula.pdf" target="_blank"
              className="inline-flex items-center gap-2 bg-[#7c6af7] text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#6b59e8] transition-all hover:scale-105"
              style={heading}>
              <FileText className="w-4 h-4" />
              VIEW CATALOG
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hero */}
        <div className="relative py-24 px-6 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block mb-5 px-5 py-2 bg-[#7c6af7] text-white rounded-full text-xs font-bold tracking-widest" style={heading}>
              ELECTRIC REVOLUTION
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-5" style={heading}>Premium Electric Vehicles</h2>
            <p className="text-base text-[#6b7280] max-w-3xl mx-auto mb-12 leading-relaxed" style={body}>
              Experience the future of sustainable transportation with TULA Moto's cutting-edge electric bikes and tricycles.
              Built for strength, comfort, and lasting performance.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { val: '100%', lbl: 'Electric' },
                { val: '0', lbl: 'Emissions' },
                { val: '150km+', lbl: 'Range' },
              ].map((s, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e7eb]">
                  <div className="text-3xl font-black text-[#7c6af7] mb-1" style={heading}>{s.val}</div>
                  <div className="text-[#6b7280] text-sm" style={body}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-black text-[#0a0a0a] mb-3" style={heading}>Our Collection</h3>
              <p className="text-[#6b7280] text-sm" style={body}>Discover power, performance, and sustainability</p>
            </div>

            <div className="space-y-24">
              {productsData.map((product, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={product.id}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>

                    {/* Media */}
                    <div className={`relative group ${!isEven ? 'lg:col-start-2' : ''}`}
                      onMouseEnter={() => setActiveProduct(product.id)}
                      onMouseLeave={() => setActiveProduct(null)}>
                      <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        {product.mediaType === 'video' ? (
                          <>
                            <video autoPlay loop muted playsInline className="w-full h-[520px] object-cover" poster={product.thumbnail}>
                              <source src={product.mediaSrc} type="video/mp4" />
                            </video>
                            <div className="absolute top-5 right-5 bg-[#0a0a0a]/80 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5" style={heading}>
                              <Play className="w-3.5 h-3.5" /> VIDEO
                            </div>
                          </>
                        ) : (
                          <img src={product.mediaSrc} alt={product.name} className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-5 left-5">
                          <span className="bg-white text-[#0a0a0a] px-3 py-1.5 rounded-full text-xs font-bold" style={heading}>{product.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="inline-block mb-3 px-3 py-1.5 bg-[#f0eeff] text-[#7c6af7] rounded-full text-xs font-bold" style={heading}>
                        {product.type}
                      </div>
                      <h4 className="text-4xl font-black text-[#0a0a0a] mb-3" style={heading}>{product.name}</h4>
                      <p className="text-lg text-[#9ca3af] italic mb-5" style={body}>{product.tagline}</p>
                      <p className="text-base text-[#6b7280] leading-relaxed mb-7" style={body}>{product.description}</p>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-3 mb-7">
                        {product.specs.map((spec, si) => {
                          const Icon = spec.icon;
                          return (
                            <div key={si} className="bg-[#f9fafb] p-4 rounded-xl border border-[#e5e7eb] hover:border-[#7c6af7] hover:shadow-sm transition-all">
                              <Icon className="w-5 h-5 text-[#7c6af7] mb-2" />
                              <div className="text-xs text-[#9ca3af] mb-0.5" style={body}>{spec.label}</div>
                              <div className="font-bold text-[#0a0a0a] text-sm" style={heading}>{spec.value}</div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Features */}
                      <div className="mb-7">
                        <h5 className="font-bold text-[#0a0a0a] mb-3 text-sm uppercase tracking-wider" style={heading}>Key Features</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feat, fi) => (
                            <div key={fi} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[#7c6af7] rounded-full" />
                              <span className="text-[#6b7280] text-sm" style={body}>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-5 border-t border-[#f3f4f6]">
                        <div>
                          <div className="text-xs text-[#9ca3af] mb-0.5" style={body}>Starting from</div>
                          <div className="text-2xl font-black text-[#0a0a0a]" style={heading}>{product.price}</div>
                        </div>
                        <button
                          className="bg-[#7c6af7] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#6b59e8] transition-all hover:scale-105 flex items-center gap-2"
                          style={heading}>
                          GET DETAILS <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why TULA */}
        <div className="py-20 px-6 bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h3 className="text-4xl font-black mb-3" style={heading}>Why Choose TULA Moto</h3>
              <p className="text-[#6b7280] text-sm" style={body}>Built on principles that matter</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: 'High Technology', desc: 'Cutting-edge EV technology with smart controllers, efficient motors, and advanced battery systems.' },
                { icon: Award, title: 'Superior Quality', desc: 'Durable construction, reliable performance, and rigorous quality standards ensure vehicles that last.' },
                { icon: Battery, title: 'Green Energy', desc: 'Zero emissions, reduced environmental impact, and commitment to sustainable transportation for Nigeria.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white/5 p-9 rounded-2xl border border-white/10 hover:border-[#7c6af7]/50 transition-all duration-300">
                    <div className="w-14 h-14 bg-[#7c6af7] rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-white" style={heading}>{item.title}</h4>
                    <p className="text-[#6b7280] text-sm leading-relaxed" style={body}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-black text-[#0a0a0a] mb-5" style={heading}>Ready to Go Electric?</h3>
            <p className="text-[#6b7280] text-base mb-12" style={body}>Join the electric revolution and power your business with clean, reliable vehicles</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/2347048556600" target="_blank" rel="noopener noreferrer"
                className="bg-[#7c6af7] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-[#6b59e8] transition-all hover:scale-105 shadow-lg"
                style={heading}>
                CONTACT SALES
              </a>
              <a href="/tula.pdf" target="_blank"
                className="inline-flex items-center gap-2 border border-[#e5e7eb] text-[#0a0a0a] px-10 py-4 rounded-xl font-bold text-sm hover:border-[#7c6af7] hover:text-[#7c6af7] transition-all"
                style={heading}>
                <FileText className="w-5 h-5" />
                VIEW FULL CATALOG
              </a>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}