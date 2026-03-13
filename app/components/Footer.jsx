"use client"

import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Facebook, Radio } from 'lucide-react';

export default function Footer() {
  const footerData = {
    company: {
      name: 'ZK Motors',
      tagline: 'Your Trusted Automotive Partner',
      description: 'Premium vehicles from world-renowned brands, serving Northern Nigeria with excellence and integrity.',
      logo: 'ZK',
    },
    contact: {
      address: 'Kano State, Nigeria',
      serviceArea: 'Serving Northern Nigeria',
      phone: '0704 855 6600',
      email: 'info@zkmotors.com',
    },
    social: {
      instagram: {
        url: 'https://www.instagram.com/zk_motoz?igsh=cWhjYTNmN291ZmJh&utm_source=qr',
        handle: '@zk_motoz'
      },
      facebook: {
        url: 'https://www.facebook.com/share/1DWXcW6pXh/?mibextid=wwXIfr',
        handle: 'ZK Motors'
      },
      whatsapp: {
        phone: '0704 855 6600',
        url: 'https://wa.me/2347048556600'
      },
      whatsappChannel: {
        url: 'https://whatsapp.com/channel/0029Vb6TBnvIXnlmXQNcTF3a',
        name: 'WhatsApp Channel'
      }
    },
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'What We Offer', href: '/offers' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contactus' },
      { name: 'Browse Brands', href: '/products' }
    ],
    services: [
      { name: 'New Vehicles', href: '/products' },
      { name: 'Used Vehicles', href: '/offers' },
      { name: 'Hire Purchase', href: '/hire-purchase' },
      { name: 'Trade-In', href: '/' },
      { name: 'After Sales Service', href: '/services' }
    ],
    brands: ['BMW', 'Mercedes-Benz', 'Audi', 'Range Rover', 'Porsche', 'Jaguar', 'Volvo', 'KIA'],
    businessHours: {
      weekdays: 'Mon – Fri: 9:00 AM – 6:00 PM',
      saturday: 'Sat: 10:00 AM – 4:00 PM',
      sunday: 'Sun: Closed'
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ fontFamily: "'Inter', sans-serif" }} className="bg-[#0a0a0a] border-t border-white/5">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                <span
                  className="text-white font-black text-base"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {footerData.company.logo}
                </span>
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {footerData.company.name}
                </h3>
                <p className="text-[10px] text-[#6b7280] uppercase tracking-wider">{footerData.company.tagline}</p>
              </div>
            </div>
            <p className="text-[#6b7280] mb-6 leading-relaxed text-sm">
              {footerData.company.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href={footerData.social.instagram.url} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-pink-600 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Instagram">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href={footerData.social.facebook.url} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Facebook">
                <Facebook className="w-4 h-4 text-white fill-white" />
              </a>
              <a href={footerData.social.whatsapp.url} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
              <a href={footerData.social.whatsappChannel.url} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-green-700 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="WhatsApp Channel">
                <Radio className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold text-white mb-5 uppercase tracking-widest"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href}
                    className="text-[#6b7280] hover:text-white text-sm transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-bold text-white mb-5 uppercase tracking-widest"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerData.services.map((service, i) => (
                <li key={i}>
                  <a href={service.href}
                    className="text-[#6b7280] hover:text-white text-sm transition-colors duration-200">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-sm font-bold text-white mb-5 uppercase tracking-widest"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#7c6af7] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">{footerData.contact.address}</p>
                  <p className="text-[#6b7280] text-xs mt-0.5">{footerData.contact.serviceArea}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#7c6af7] flex-shrink-0" />
                <a href={`tel:${footerData.contact.phone.replace(/\s/g, '')}`}
                  className="text-white text-sm hover:text-[#a594f9] transition-colors">
                  {footerData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#7c6af7] flex-shrink-0" />
                <a href={`mailto:${footerData.contact.email}`}
                  className="text-white text-sm hover:text-[#a594f9] transition-colors">
                  {footerData.contact.email}
                </a>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-semibold text-white mb-2 uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Business Hours</p>
                <p className="text-xs text-[#6b7280]">{footerData.businessHours.weekdays}</p>
                <p className="text-xs text-[#6b7280]">{footerData.businessHours.saturday}</p>
                <p className="text-xs text-[#6b7280]">{footerData.businessHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <p className="text-center text-xs font-semibold text-[#4b5563] mb-4 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Featured Brands</p>
          <div className="flex flex-wrap justify-center gap-6">
            {footerData.brands.map((brand, i) => (
              <span key={i} className="text-[#4b5563] hover:text-[#a594f9] transition-colors text-xs font-medium cursor-pointer tracking-wide uppercase">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#4b5563] text-xs">
              © {currentYear} <span className="font-semibold text-[#6b7280]">{footerData.company.name}</span>. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="text-[#4b5563] hover:text-white text-xs transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-[#4b5563] hover:text-white text-xs transition-colors">Terms of Service</a>
              <a href="/cookie-policy" className="text-[#4b5563] hover:text-white text-xs transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bar */}
      <div className="bg-[#7c6af7]">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p
                className="text-black font-bold text-sm"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Ready to find your dream car?
              </p>
              <p className="text-white text-xs mt-0.5">Contact us today for exclusive deals</p>
            </div>
            <div className="flex gap-3">
              <a href={`tel:${footerData.contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 bg-white text-[#7c6af7] px-5 py-2.5 rounded-full font-bold text-xs transition-all hover:scale-105"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.03em' }}>
                <Phone className="w-3.5 h-3.5" />
                CALL NOW
              </a>
              <a href={footerData.social.whatsapp.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white px-5 py-2.5 rounded-full font-bold text-xs transition-all hover:bg-white/25"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.03em' }}>
                <MessageCircle className="w-3.5 h-3.5" />
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}