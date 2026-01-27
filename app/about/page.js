"use client"

import React from 'react';
import { MapPin, Phone, Instagram, MessageCircle, Award, Users, Car, Shield, Clock, TrendingUp } from 'lucide-react';
import Footer from '../components/Footer';

export default function AboutUs() {
  // Company data array for easy editing
  const companyData = {
    name: 'ZK Motors',
    tagline: 'Your Trusted Automotive Partner in Northern Nigeria',
    description: 'At ZK Motors, we are passionate about connecting people with their dream vehicles. Established as a premier automotive dealership, we specialize in providing high-quality vehicles from world-renowned brands to customers across Northwest and Northeast Nigeria.',
    mission: 'To deliver exceptional automotive solutions with integrity, transparency, and customer satisfaction at the heart of everything we do.',
    vision: 'To become the most trusted and preferred automotive dealership in Northern Nigeria, setting new standards in quality service and customer experience.',
    heroImage: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
    location: {
      state: 'Kano State',
      country: 'Nigeria',
      serviceArea: 'Northwest and Northeast States'
    },
    contact: {
      phone: '0704 855 6600',
      whatsapp: '0704 855 6600',
      instagram: 'https://www.instagram.com/zk_motoz?igsh=cWhjYTNmN291ZmJh&utm_source=qr',
      instagramHandle: '@zk_motoz'
    },
    stats: [
      { icon: Car, value: '500+', label: 'Vehicles Sold' },
      { icon: Users, value: '1000+', label: 'Happy Customers' },
      { icon: Award, value: '15+', label: 'Brand Partners' },
      { icon: TrendingUp, value: '5+', label: 'Years Experience' }
    ],
    values: [
      {
        icon: Shield,
        title: 'Quality Assurance',
        description: 'Every vehicle in our inventory undergoes rigorous quality checks to ensure you get nothing but the best.'
      },
      {
        icon: Users,
        title: 'Customer First',
        description: 'Your satisfaction is our priority. We provide personalized service tailored to your specific needs and preferences.'
      },
      {
        icon: Award,
        title: 'Trusted Brands',
        description: 'We partner with globally recognized automotive brands to offer you a diverse selection of premium vehicles.'
      },
      {
        icon: Clock,
        title: 'Fast Service',
        description: 'From inquiry to delivery, we ensure a smooth and efficient process, saving you time and hassle.'
      }
    ],
    team: {
      ceo: {
        name: 'Leadership Team',
        message: 'We believe in building lasting relationships with our customers. At ZK Motors, you\'re not just buying a car—you\'re joining a family that cares about your automotive journey.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
      }
    }
  };

  return (
      <>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[slide_20s_linear_infinite]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
              {companyData.name}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {companyData.tagline}
            </p>
          </div>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src={companyData.heroImage}
                alt="Happy customer at ZK Motors"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-white text-lg font-medium">
                    "Experience the joy of driving your dream car with ZK Motors"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">{companyData.location.state}, {companyData.location.country}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-300">Serving {companyData.location.serviceArea}</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              {companyData.description}
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-shadow duration-500">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                {companyData.mission}
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow duration-500">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                {companyData.vision}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {companyData.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyData.values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CEO Message */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2">
                <img
                  src={companyData.team.ceo.image}
                  alt={companyData.team.ceo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 p-12 text-white flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6">{companyData.team.ceo.name}</h3>
                <p className="text-xl text-slate-300 leading-relaxed mb-8 italic">
                  "{companyData.team.ceo.message}"
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`tel:${companyData.contact.phone}`}
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                  <a
                    href={companyData.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
                  >
                    <Instagram className="w-5 h-5" />
                    Follow Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-slate-600 mb-12">
            Ready to find your perfect vehicle? Contact us today!
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <a
              href={`tel:${companyData.contact.phone}`}
              className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <Phone className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 font-semibold">{companyData.contact.phone}</p>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${companyData.contact.whatsapp.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-green-100 group-hover:bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <MessageCircle className="w-8 h-8 text-green-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">WhatsApp</h3>
              <p className="text-slate-600 font-semibold">{companyData.contact.whatsapp}</p>
            </a>

            {/* Instagram */}
            <a
              href={companyData.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-pink-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-500 group-hover:to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Instagram className="w-8 h-8 text-pink-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Instagram</h3>
              <p className="text-slate-600 font-semibold">{companyData.contact.instagramHandle}</p>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-250px);
          }
        }
      `}</style>
    </div>
    <Footer/>
    </>
  );
}