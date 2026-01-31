"use client"

import React, { useState } from 'react';
import { FileText, Play, Zap, Battery, Gauge, Award, Download, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TulaMotoShowcase() {
  const [activeProduct, setActiveProduct] = useState(null);

  // Products data array with mixed media (videos and images)
  const productsData = [
    {
      id: 1,
      name: 'Thunder Beast',
      category: 'Electric Bike',
      type: 'Performance',
      mediaType: 'video',
      mediaSrc: '/tula/ebike.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      price: 'Contact for Price',
      tagline: 'Pure Electric Adrenaline',
      description: 'Built to dominate with peak power up to 5000W. Experience the surge, the silence, and smooth control as you glide past limits.',
      specs: [
        { label: 'Power', value: '3000W (Peak 5000W)', icon: Zap },
        { label: 'Battery', value: '72V 60AH Lithium', icon: Battery },
        { label: 'Top Speed', value: '80 KM/H', icon: Gauge },
        { label: 'Range', value: '90-120 KM', icon: Award }
      ],
      features: ['Peak 5000W Power', '80km/h Top Speed', 'Lithium Battery', 'Long Range', 'Silent Operation', 'Zero Emissions']
    },
    {
      id: 2,
      name: 'Bolt',
      category: 'Electric Bike',
      type: 'Advanced',
      mediaType: 'video',
      mediaSrc: '/tula/ebike2.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
      price: 'Contact for Price',
      tagline: 'Advanced Urban Mobility',
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
      id: 3,
      name: 'TULA Keke Napep',
      category: 'Electric Tricycle',
      type: 'Passenger',
      mediaType: 'video',
      mediaSrc: '/tula/keke.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
      price: 'Contact for Price',
      tagline: 'The New-Age Keke',
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
      id: 4,
      name: 'Avatar',
      category: 'Electric Bike',
      type: 'City Smart',
      mediaType: 'image',
      mediaSrc: '/tula/bike.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
      price: '₦1.7M',
      tagline: 'Urban Elegance',
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
      id: 5,
      name: 'The Bull-Cruiser',
      category: 'Electric Bike',
      type: 'Heavy Duty',
      mediaType: 'image',
      mediaSrc: '/tula/bike2.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
      price: 'Contact for Price',
      tagline: 'Built for the Distance',
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
      <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Top Bar with PDF Link */}
      <div className="bg-black text-white py-4 px-4  mt-14 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-green-400" />
            <h1 className="text-2xl font-bold">TULA Moto</h1>
          </div>
          <a
            href="/tula.pdf"
            target='_blank'
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            View Catalog
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-black text-white rounded-full text-sm font-semibold tracking-wider">
            ELECTRIC REVOLUTION
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-black mb-6">
            Premium Electric Vehicles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Experience the future of sustainable transportation with TULA Moto's cutting-edge electric bikes and tricycles. 
            Built for strength, comfort, and lasting performance.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <div className="text-gray-600">Electric</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-black mb-2">0</div>
              <div className="text-gray-600">Emissions</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-black mb-2">150km+</div>
              <div className="text-gray-600">Range</div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Display */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-black mb-4">Our Collection</h3>
            <p className="text-xl text-gray-600">Discover power, performance, and sustainability</p>
          </div>

          <div className="space-y-24">
            {productsData.map((product, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={product.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Media Section */}
                  <div
                    className={`relative group ${!isEven ? 'lg:col-start-2' : ''}`}
                    onMouseEnter={() => setActiveProduct(product.id)}
                    onMouseLeave={() => setActiveProduct(null)}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      {product.mediaType === 'video' ? (
                        <>
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-[600px] object-cover"
                            poster={product.thumbnail}
                            
                          >
                            <source src={product.mediaSrc} type="video/mp4" />
                          </video>
                          <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                            <Play className="w-4 h-4" />
                            Video
                          </div>
                        </>
                      ) : (
                        <img
                          src={product.mediaSrc}
                          alt={product.name}
                          className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 bg-white text-black px-4 py-2 rounded-full text-sm font-bold">
                        {product.category}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="inline-block mb-4 px-4 py-1 bg-gray-100 text-black rounded-full text-sm font-semibold">
                      {product.type}
                    </div>
                    
                    <h4 className="text-5xl font-bold text-black mb-4">
                      {product.name}
                    </h4>
                    
                    <p className="text-2xl text-gray-500 italic mb-6">
                      {product.tagline}
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {product.specs.map((spec, idx) => {
                        const Icon = spec.icon;
                        return (
                          <div
                            key={idx}
                            className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300"
                          >
                            <Icon className="w-6 h-6 text-black mb-2" />
                            <div className="text-xs text-gray-500 mb-1">{spec.label}</div>
                            <div className="font-bold text-black">{spec.value}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h5 className="font-bold text-black mb-4">Key Features</h5>
                      <div className="grid grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Starting from</div>
                        <div className="text-3xl font-bold text-black">{product.price}</div>
                      </div>
                      <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2">
                        Get Details
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose TULA Section */}
      <div className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4">Why Choose TULA Moto</h3>
            <p className="text-xl text-gray-400">Built on principles that matter</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">High Technology</h4>
              <p className="text-gray-400 leading-relaxed">
                Cutting-edge electric vehicle technology with smart controllers, efficient motors, and advanced battery systems.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Superior Quality</h4>
              <p className="text-gray-400 leading-relaxed">
                Durable construction, reliable performance, and rigorous quality standards ensure vehicles that last.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Green Energy</h4>
              <p className="text-gray-400 leading-relaxed">
                Zero emissions, reduced environmental impact, and commitment to sustainable transportation for Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-bold text-black mb-6">
            Ready to Go Electric?
          </h3>
          <p className="text-xl text-gray-600 mb-12">
            Join the electric revolution and power your business with clean, reliable vehicles
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-black text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl">
              Contact Sales
            </button>
            <a
            href="/tula.pdf"
            target='_blank'
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
              <FileText className="w-6 h-6" />
              View Full Catalog
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}