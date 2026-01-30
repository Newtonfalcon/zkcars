"use client"

import React from 'react';
import { Zap, Fuel, ShieldCheck, CreditCard, RefreshCw, Wrench, Award, HeadphonesIcon, TrendingUp, CheckCircle, Car, Users } from 'lucide-react';

export default function Services() {
  // Services data array for easy editing
  const servicesData = {
    hero: {
      title: 'Our Services',
      subtitle: 'Comprehensive Automotive Solutions',
      description: 'From premium electric vehicles to powerful fuel-powered cars, we offer a complete range of services to meet all your automotive needs.',
      backgroundImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80'
    },

    vehicleTypes: [
      {
        type: 'Electric Vehicles',
        icon: Zap,
        tagline: 'Drive the Future',
        description: 'Experience the next generation of automotive technology with our premium selection of electric vehicles. Enjoy zero emissions, lower running costs, and cutting-edge innovation.',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
        features: [
          'Zero Emissions',
          'Lower Operating Costs',
          'Advanced Technology',
          'Instant Torque',
          'Silent Operation',
          'Government Incentives'
        ],
        brands: ['BMW iX', 'Mercedes EQS', 'Audi e-tron', 'Porsche Taycan'],
        colorClass: 'text-blue-500',
        gradientClass: 'from-blue-500 to-cyan-500',
        bgClass: 'bg-blue-500'
      },
      {
        type: 'Fuel Vehicles',
        icon: Fuel,
        tagline: 'Proven Performance',
        description: 'Choose from our extensive range of traditional fuel-powered vehicles, featuring the latest in combustion engine technology, proven reliability, and exceptional performance.',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
        features: [
          'Extended Range',
          'Quick Refueling',
          'Wide Selection',
          'Proven Technology',
          'High Performance',
          'Easy Maintenance'
        ],
        brands: ['BMW M Series', 'Mercedes AMG', 'Audi RS', 'Range Rover Sport'],
        colorClass: 'text-orange-500',
        gradientClass: 'from-orange-500 to-red-500',
        bgClass: 'bg-orange-500'
      }
    ],

    mainServices: [
      {
        icon: Car,
        title: 'New Vehicle Sales',
        description: 'Browse our extensive inventory of brand-new vehicles from world-renowned manufacturers. Whether you prefer electric or fuel-powered, we have the perfect car for you.',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80',
        benefits: [
          'Latest Models',
          'Factory Warranty',
          'Customization Options',
          'Competitive Pricing'
        ]
      },
      {
        icon: RefreshCw,
        title: 'Certified Pre-Owned',
        description: 'Quality pre-owned vehicles that have undergone rigorous inspection and certification. Get premium vehicles at exceptional value with peace of mind.',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
        benefits: [
          'Multi-Point Inspection',
          'Extended Warranty',
          'Vehicle History Report',
          'Best Value Pricing'
        ]
      },
      {
        icon: CreditCard,
        title: 'Flexible Financing',
        description: 'We partner with leading financial institutions to offer tailored financing solutions that fit your budget. Drive your dream car today with our flexible payment plans.',
        image: 'https://images.unsplash.com/photo-1554224311-beee460201b4?w=600&q=80',
        benefits: [
          'Competitive Rates',
          'Flexible Terms',
          'Quick Approval',
          'Multiple Options'
        ]
      },
      {
        icon: RefreshCw,
        title: 'Trade-In Services',
        description: 'Looking to upgrade? We offer competitive trade-in values for your current vehicle. Our experts provide fair assessments to get you the best deal.',
        image: 'https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?w=600&q=80',
        benefits: [
          'Fair Market Value',
          'Quick Evaluation',
          'Hassle-Free Process',
          'Any Make/Model'
        ]
      },
      {
        icon: Wrench,
        title: 'After-Sales Service',
        description: 'Our commitment doesn\'t end at purchase. Enjoy comprehensive after-sales support including maintenance, repairs, and genuine parts replacement.',
        image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=80',
        benefits: [
          'Expert Technicians',
          'Genuine Parts',
          'Regular Maintenance',
          'Warranty Support'
        ]
      },
      {
        icon: HeadphonesIcon,
        title: 'Customer Support',
        description: 'Our dedicated customer support team is always ready to assist you. From inquiries to post-purchase support, we\'re here for you every step of the way.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80',
        benefits: [
          '24/7 Availability',
          'Expert Advice',
          'Personalized Service',
          'Multiple Channels'
        ]
      }
    ],

    additionalServices: [
      {
        icon: ShieldCheck,
        title: 'Extended Warranty',
        description: 'Protect your investment with our comprehensive extended warranty packages.'
      },
      {
        icon: Award,
        title: 'Vehicle Registration',
        description: 'We handle all documentation and registration processes for your convenience.'
      },
      {
        icon: Users,
        title: 'Test Drives',
        description: 'Experience your dream car firsthand with our flexible test drive arrangements.'
      },
      {
        icon: TrendingUp,
        title: 'Vehicle Valuation',
        description: 'Get accurate market valuations for your current or prospective vehicle.'
      }
    ],

    whyChooseUs: [
      {
        title: 'Diverse Selection',
        description: 'Both electric and fuel vehicles from premium brands',
        stat: '15+',
        label: 'Brands'
      },
      {
        title: 'Expert Team',
        description: 'Knowledgeable staff to guide your purchase',
        stat: '50+',
        label: 'Experts'
      },
      {
        title: 'Customer Satisfaction',
        description: 'Proven track record of happy customers',
        stat: '98%',
        label: 'Satisfaction'
      },
      {
        title: 'Regional Coverage',
        description: 'Serving Northwest and Northeast Nigeria',
        stat: '2',
        label: 'Regions'
      }
    ],

    testimonial: {
      quote: 'ZK Motors made my transition to electric vehicles seamless. Their expertise and after-sales support are exceptional.',
      author: 'Ibrahim Mohammed',
      role: 'BMW iX Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={servicesData.hero.backgroundImage}
            alt="ZK Motors Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-sm font-semibold tracking-wider">PREMIUM AUTOMOTIVE SOLUTIONS</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6">{servicesData.hero.title}</h1>
              <p className="text-2xl text-slate-200 mb-4 font-light">{servicesData.hero.subtitle}</p>
              <p className="text-lg text-slate-300 leading-relaxed">
                {servicesData.hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Electric vs Fuel Vehicles Section */}
      <div className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Choose Your Power</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're ready for the electric revolution or prefer traditional fuel power, we have exceptional options for every preference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {servicesData.vehicleTypes.map((vehicle, index) => {
              const Icon = vehicle.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.type}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${vehicle.gradientClass} opacity-60`}></div>
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-5 py-3 rounded-full border border-white/30">
                        <Icon className="w-6 h-6 text-white" />
                        <span className="text-white font-bold text-lg">{vehicle.type}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-3xl font-bold mb-2">{vehicle.tagline}</h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      {vehicle.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className={`w-5 h-5 ${vehicle.colorClass}`} />
                          <span className="text-slate-700 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Popular Brands */}
                    <div className="border-t border-slate-200 pt-6">
                      <p className="text-sm font-semibold text-slate-900 mb-3">Popular Models:</p>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.brands.map((brand, idx) => (
                          <span
                            key={idx}
                            className={`px-4 py-2 bg-gradient-to-r ${vehicle.gradientClass} text-white text-sm font-medium rounded-full`}
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className={`w-full mt-6 bg-gradient-to-r ${vehicle.gradientClass} text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform duration-300 shadow-lg`}>
                      Explore {vehicle.type}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Our Complete Service Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From purchase to maintenance, we provide end-to-end automotive solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-slate-900 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Service Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-slate-900" />
                      </div>
                      <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                          <span className="text-slate-700 text-sm font-medium">{benefit}</span>
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
      <div className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-lg text-slate-600">More ways we support your automotive journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-900 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose ZK Motors</h2>
            <p className="text-lg text-slate-600">Numbers that speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-slate-900 mb-2">{item.stat}</div>
                <div className="text-slate-600 font-semibold mb-4">{item.label}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <img
                src={servicesData.testimonial.image}
                alt={servicesData.testimonial.author}
                className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-2xl"
              />
            </div>
            <div className="md:col-span-2 text-white">
              <div className="mb-6">
                <svg className="w-12 h-12 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-2xl text-slate-200 mb-6 italic leading-relaxed">
                "{servicesData.testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-xl mb-1">{servicesData.testimonial.author}</p>
                <p className="text-slate-400">{servicesData.testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Experience Premium Service?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Let our experts help you find the perfect vehicle and service package
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-slate-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-xl">
              Schedule Consultation
            </button>
            <button className="border-2 border-slate-900 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-900 hover:text-white transition-all duration-300 hover:scale-105">
              View Inventory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}