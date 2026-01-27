"use client"

import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Facebook, Radio } from 'lucide-react';

export default function Footer() {
  // Footer data array for easy editing
  const footerData = {
    company: {
      name: 'ZK Motors',
      tagline: 'Your Trusted Automotive Partner',
      description: 'Premium vehicles from world-renowned brands, serving Northwest and Northeast Nigeria with excellence and integrity.',
      logo: 'ZK', // You can replace this with an actual logo image
    },
    
    contact: {
      address: 'Kano State, Nigeria',
      serviceArea: 'Serving Northwest & Northeast States',
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
      { name: 'Browse Brands', href: '/service' }
    ],
    
    services: [
      { name: 'New Vehicles', href: '/' },
      { name: 'Used Vehicles', href: '/' },
      { name: 'Financing Options', href: '/' },
      { name: 'Trade-In', href: '/' },
      { name: 'After Sales Service', href: '/service' }
    ],
    
    brands: [
      'BMW', 'Mercedes-Benz', 'Audi', 'Range Rover', 
      'Porsche', 'Jaguar', 'Volvo', 'KIA'
    ],
    
    businessHours: {
      weekdays: 'Mon - Fri: 9:00 AM - 6:00 PM',
      saturday: 'Sat: 10:00 AM - 4:00 PM',
      sunday: 'Sun: Closed'
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">{footerData.company.logo}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{footerData.company.name}</h3>
                <p className="text-xs text-slate-600">{footerData.company.tagline}</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              {footerData.company.description}
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={footerData.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-pink-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={footerData.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white fill-white" />
              </a>
              <a
                href={footerData.social.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href={footerData.social.whatsappChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg"
                aria-label="WhatsApp Channel"
              >
                <Radio className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-slate-900 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">Our Services</h4>
            <ul className="space-y-3">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-slate-600 hover:text-slate-900 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{footerData.contact.address}</p>
                  <p className="text-slate-600 text-sm">{footerData.contact.serviceArea}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a
                  href={`tel:${footerData.contact.phone.replace(/\s/g, '')}`}
                  className="text-slate-900 font-semibold text-sm hover:text-blue-600 transition-colors"
                >
                  {footerData.contact.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="text-slate-900 font-semibold text-sm hover:text-blue-600 transition-colors"
                >
                  {footerData.contact.email}
                </a>
              </div>

              {/* Business Hours */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-900 mb-2">Business Hours</p>
                <p className="text-xs text-slate-600">{footerData.businessHours.weekdays}</p>
                <p className="text-xs text-slate-600">{footerData.businessHours.saturday}</p>
                <p className="text-xs text-slate-600">{footerData.businessHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="border-t border-slate-200 pt-8 mb-8">
          <h4 className="text-center text-sm font-semibold text-slate-900 mb-4">Featured Brands</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {footerData.brands.map((brand, index) => (
              <span
                key={index}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm text-center md:text-left">
              © {currentYear} <span className="font-semibold text-slate-900">{footerData.company.name}</span>. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/privacy-policy" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-white font-semibold mb-1">Ready to find your dream car?</p>
              <p className="text-slate-400 text-sm">Contact us today for exclusive deals!</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${footerData.contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={footerData.social.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}