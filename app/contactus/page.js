"use client"
import React, { useState } from 'react';
import { MapPin, Phone, Instagram, MessageCircle, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Company contact data array for easy editing
  const contactData = {
    name: 'ZK Motors',
    tagline: 'Get in Touch with Us',
    description: 'Have questions about our vehicles or services? We\'re here to help! Reach out to us through any of the channels below.',
    
    location: {
      address: 'Kano State, Nigeria',
      serviceArea: 'Serving Northwest and Northeast States',
      mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80'
    },
    
    contact: {
      phone: '0704 855 6600',
      email: 'info@zkmotors.com',
      whatsapp: '0704 855 6600',
      instagram: 'https://www.instagram.com/zk_motoz?igsh=cWhjYTNmN291ZmJh&utm_source=qr',
      instagramHandle: '@zk_motoz'
    },
    
    businessHours: [
      { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ],
    
    contactMethods: [
      {
        icon: Phone,
        title: 'Call Us',
        value: '0704 855 6600',
        description: 'Speak with our sales team',
        link: 'tel:07048556600',
        color: 'blue',
        image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&q=80'
      },
      {
        icon: MessageCircle,
        title: 'WhatsApp',
        value: '0704 855 6600',
        description: 'Chat with us instantly',
        link: 'https://wa.me/2347048556600',
        color: 'green',
        image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80'
      },
      {
        icon: Instagram,
        title: 'Instagram',
        value: '@zk_motoz',
        description: 'Follow our latest updates',
        link: 'https://www.instagram.com/zk_motoz?igsh=cWhjYTNmN291ZmJh&utm_source=qr',
        color: 'pink',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80'
      },
      {
        icon: Mail,
        title: 'Email',
        value: 'info@zkmotors.com',
        description: 'Send us a detailed inquiry',
        link: 'mailto:info@zkmotors.com',
        color: 'slate',
        image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&q=80'
      }
    ],

    faqs: [
      {
        question: 'What areas do you serve?',
        answer: 'We proudly serve customers across Northwest and Northeast Nigeria, with our main office in Kano State.'
      },
      {
        question: 'Do you offer financing options?',
        answer: 'Yes, we work with various financial institutions to provide flexible financing solutions tailored to your needs.'
      },
      {
        question: 'Can I schedule a test drive?',
        answer: 'Absolutely! Contact us via phone or WhatsApp to schedule a convenient test drive appointment.'
      }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
      <>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[slide_20s_linear_infinite]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-sm font-semibold tracking-wider">CONTACT US</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{contactData.tagline}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {contactData.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={contactData.contact.link}
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {contactData.contact.phone}
            </a>
            <a
              href={`https://wa.me/${contactData.contact.whatsapp.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <div className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Preferred Way to Connect</h2>
            <p className="text-lg text-slate-600">We're available through multiple channels for your convenience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactData.contactMethods.map((method, index) => {
              const Icon = method.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
                green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
                pink: 'from-purple-500 via-pink-500 to-pink-600 hover:from-purple-600 hover:via-pink-600 hover:to-pink-700',
                slate: 'from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900'
              };

              return (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={method.image}
                      alt={method.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[method.color]} opacity-90`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 text-white">
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                    <p className="text-white/90 font-semibold mb-2">{method.value}</p>
                    <p className="text-white/80 text-sm">{method.description}</p>
                    
                    <div className="mt-6 inline-flex items-center text-sm font-semibold">
                      <span className="mr-2">Connect Now</span>
                      <Send className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="0704 855 6600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Vehicle Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    submitted
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-[1.02]'
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div>
              <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Visit Our Showroom</h3>
                
                {/* Map Image */}
                <div className="relative rounded-xl overflow-hidden mb-6 h-64">
                  <img
                    src={contactData.location.mapImage}
                    alt="ZK Motors Location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-bold text-lg">{contactData.location.address}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">{contactData.location.address}</p>
                      <p className="text-slate-600 text-sm">{contactData.location.serviceArea}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <a href={`tel:${contactData.contact.phone}`} className="text-slate-600 hover:text-blue-500">
                        {contactData.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a href={`mailto:${contactData.contact.email}`} className="text-slate-600 hover:text-blue-500">
                        {contactData.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-blue-500" />
                  <h3 className="text-2xl font-bold text-slate-900">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  {contactData.businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                      <span className="font-semibold text-slate-700">{schedule.day}</span>
                      <span className="text-slate-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Quick answers to common inquiries</p>
          </div>

          <div className="space-y-6">
            {contactData.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
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