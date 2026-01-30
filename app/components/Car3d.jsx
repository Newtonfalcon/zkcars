"use client"

import React from 'react';
import { SiAudi, SiBmw, SiMercedes, SiVolkswagen, SiRenault, SiVolvo, SiNissan, SiMini, SiLandrover, SiJaguar, SiKia } from 'react-icons/si';

export default function ZKCarsBrands() {
  // Brand data with icons or image URLs
  const brands = [
    { name: 'Alpine', icon: '/images/alpine.png' },
    { name: 'Audi', Icon: SiAudi },
    { name: 'BMW', Icon: SiBmw },
    { name: 'BMW Motorrad', icon: '/images/bmw1.png' },
    { name: 'BYD', icon: '/images/byd.png' },
    { name: 'Cupra', icon: '/images/cupra.png' },
    { name: 'Dacia', icon: '/images/dacia.png' },
    { name: 'Clark Commercials', icon: 'https://via.placeholder.com/120x60/1e40af/ffffff?text=Clark' },
    { name: 'Geely', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Geely_Logo.svg/200px-Geely_Logo.svg.png' },
    { name: 'Ineos Grenadier', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/INEOS_Grenadier_logo.svg/200px-INEOS_Grenadier_logo.svg.png' },
    { name: 'Jaguar', Icon: SiJaguar },
    { name: 'KIA', Icon: SiKia },
    { name: 'Range Rover', Icon: SiLandrover },
    { name: 'Defender', icon: 'https://logos-world.net/wp-content/uploads/2021/09/Land-Rover-Defender-Logo.png' },
    { name: 'Discovery', icon: 'https://logos-world.net/wp-content/uploads/2021/09/Land-Rover-Discovery-Logo.png' },
    { name: 'MG', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MG_Motor.svg/200px-MG_Motor.svg.png' },
    { name: 'Mini', Icon: SiMini },
    { name: 'Nissan', Icon: SiNissan },
    
    { name: 'Mercedes-Benz', Icon: SiMercedes },
    { name: 'Renault', Icon: SiRenault },
    { name: 'Seat', icon: '/images/seat.png' },
    { name: 'Skoda', icon: '/images/skoda.png' },
    { name: 'Volkswagen', Icon: SiVolkswagen },
    { name: 'Volvo', Icon: SiVolvo },
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Header */}
      <div className="relative z-10 pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10">
            <span className="text-cyan-400 text-sm font-medium tracking-wider">PREMIUM AUTOMOTIVE SELECTION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
            Proud to Offer a Diverse Selection of Brands
          </h1>
          <p className="text-slate-400 text-lg">
            Discover excellence across our curated collection of world-class automotive brands
          </p>
        </div>
      </div>

      {/* Animated Brand Scroll */}
      <div className="relative py-16">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-48 h-32 flex items-center justify-center bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Brand icon/image */}
                  <div className="relative z-10 flex items-center justify-center w-full h-full p-6">
                    {brand.Icon ? (
                      <brand.Icon className="w-20 h-20 text-white group-hover:text-cyan-400 transition-colors duration-300" />
                    ) : (
                      <img
                        src={brand.icon}
                        alt={brand.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second row - reverse direction */}
      <div className="relative py-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll-reverse">
            {duplicatedBrands.reverse().map((brand, index) => (
              <div
                key={`reverse-${brand.name}-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-48 h-32 flex items-center justify-center bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-center justify-center w-full h-full p-6">
                    {brand.Icon ? (
                      <brand.Icon className="w-20 h-20 text-white group-hover:text-cyan-400 transition-colors duration-300" />
                    ) : (
                      <img
                        src={brand.icon}
                        alt={brand.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-white">Ready to Find Your Perfect Vehicle?</h3>
          <p className="text-slate-400 mb-8">Explore our inventory or contact our team for personalized assistance</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
             <a href="/products">Browse Inventory</a>
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}