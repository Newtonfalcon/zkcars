"use client"
import React, { useState } from 'react';
import { MapPin, Phone, Instagram, MessageCircle, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const heading = { fontFamily: "'Montserrat', sans-serif" };
const body = { fontFamily: "'Inter', sans-serif" };

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const contactData = {
    tagline: 'Get in Touch with Us',
    description: "Have questions about our vehicles or services? We're here to help! Reach out through any of the channels below.",
    location: {
      address: 'Kano State, Nigeria',
      serviceArea: 'Serving Northern Nigeria',
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
      { icon: Phone, title: 'Call Us', value: '0704 855 6600', description: 'Speak with our sales team', link: 'tel:07048556600', color: 'purple', image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&q=80' },
      { icon: MessageCircle, title: 'WhatsApp', value: '0704 855 6600', description: 'Chat with us instantly', link: 'https://wa.me/2347048556600', color: 'green', image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80' },
      { icon: Instagram, title: 'Instagram', value: '@zk_motoz', description: 'Follow our latest updates', link: 'https://www.instagram.com/zk_motoz?igsh=cWhjYTNmN291ZmJh&utm_source=qr', color: 'pink', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80' },
      { icon: Mail, title: 'Email', value: 'info@zkmotors.com', description: 'Send us a detailed inquiry', link: 'mailto:info@zkmotors.com', color: 'slate', image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&q=80' }
    ],
    faqs: [
      { question: 'What areas do you serve?', answer: 'We proudly serve customers across Northern Nigeria, with our main office in Kano State.' },
      { question: 'Do you offer financing options?', answer: 'Yes, we offer flexible Hire Purchase schemes that allow you to drive today and pay over 12–48 months.' },
      { question: 'Can I schedule a test drive?', answer: 'Absolutely! Contact us via phone or WhatsApp to schedule a convenient test drive appointment.' }
    ]
  };

  const colorMap = {
    purple: 'from-[#7c6af7] to-[#5b4de0]',
    green: 'from-green-500 to-green-600',
    pink: 'from-purple-500 via-pink-500 to-pink-600',
    slate: 'from-slate-700 to-slate-800',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="relative bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-block mb-4 px-5 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a594f9]" style={heading}>Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-5 text-white" style={heading}>{contactData.tagline}</h1>
            <p className="text-base text-[#9ca3af] max-w-3xl mx-auto mb-8 leading-relaxed" style={body}>{contactData.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:07048556600"
                className="inline-flex items-center gap-2 bg-white text-[#0a0a0a] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-zinc-100 transition-all hover:scale-105"
                style={heading}>
                <Phone className="w-4 h-4" /> {contactData.contact.phone}
              </a>
              <a href={`https://wa.me/2347048556600`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-green-600 transition-all hover:scale-105"
                style={heading}>
                <MessageCircle className="w-4 h-4" /> WHATSAPP US
              </a>
            </div>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="py-20 px-6 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-[#0a0a0a] mb-3" style={heading}>Choose How to Connect</h2>
              <p className="text-[#6b7280] text-sm" style={body}>We're available through multiple channels for your convenience</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {contactData.contactMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <a key={i} href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1">
                    <div className="absolute inset-0">
                      <img src={method.image} alt={method.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[method.color]} opacity-90`} />
                    </div>
                    <div className="relative p-7 text-white">
                      <Icon className="w-10 h-10 mb-4" />
                      <h3 className="text-xl font-bold mb-1" style={heading}>{method.title}</h3>
                      <p className="text-white/90 font-semibold text-sm mb-1" style={body}>{method.value}</p>
                      <p className="text-white/70 text-xs" style={body}>{method.description}</p>
                      <div className="mt-5 inline-flex items-center text-xs font-bold" style={heading}>
                        <span className="mr-2 uppercase tracking-wider">Connect</span>
                        <Send className="w-3 h-3 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-black text-[#0a0a0a] mb-3" style={heading}>Send Us a Message</h2>
                <p className="text-[#6b7280] mb-8 text-sm" style={body}>Fill out the form below and we'll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-2 uppercase tracking-wider" style={heading}>Your Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] focus:border-[#7c6af7] focus:outline-none transition-colors text-sm"
                        style={body} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-2 uppercase tracking-wider" style={heading}>Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] focus:border-[#7c6af7] focus:outline-none transition-colors text-sm"
                        style={body} placeholder="0704 855 6600" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-2 uppercase tracking-wider" style={heading}>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                      className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] focus:border-[#7c6af7] focus:outline-none transition-colors text-sm"
                      style={body} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-2 uppercase tracking-wider" style={heading}>Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required
                      className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] focus:border-[#7c6af7] focus:outline-none transition-colors text-sm"
                      style={body} placeholder="Vehicle Inquiry" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-2 uppercase tracking-wider" style={heading}>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="5"
                      className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] focus:border-[#7c6af7] focus:outline-none transition-colors resize-none text-sm"
                      style={body} placeholder="Tell us about your requirements..." />
                  </div>
                  <button type="submit" disabled={submitted}
                    className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${submitted ? 'bg-green-500 text-white' : 'bg-[#7c6af7] text-white hover:bg-[#6b59e8]'}`}
                    style={heading}>
                    {submitted ? <><CheckCircle className="w-5 h-5" /> MESSAGE SENT!</> : <><Send className="w-4 h-4" /> SEND MESSAGE</>}
                  </button>
                </form>
              </div>

              {/* Info */}
              <div>
                <div className="bg-[#f9fafb] rounded-2xl p-7 mb-6">
                  <h3 className="text-xl font-black text-[#0a0a0a] mb-5" style={heading}>Visit Our Showroom</h3>
                  <div className="relative rounded-xl overflow-hidden mb-5 h-56">
                    <img src={contactData.location.mapImage} alt="ZK Motors Location" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0a0a0a]/50 flex items-center justify-center">
                      <div className="text-center text-white">
                        <MapPin className="w-10 h-10 mx-auto mb-2" />
                        <p className="font-bold text-base" style={heading}>{contactData.location.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#7c6af7] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#0a0a0a] text-sm" style={body}>{contactData.location.address}</p>
                        <p className="text-[#6b7280] text-xs" style={body}>{contactData.location.serviceArea}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#7c6af7] flex-shrink-0" />
                      <a href="tel:07048556600" className="text-[#0a0a0a] text-sm hover:text-[#7c6af7]" style={body}>{contactData.contact.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#7c6af7] flex-shrink-0" />
                      <a href={`mailto:${contactData.contact.email}`} className="text-[#0a0a0a] text-sm hover:text-[#7c6af7]" style={body}>{contactData.contact.email}</a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <Clock className="w-6 h-6 text-[#7c6af7]" />
                    <h3 className="text-lg font-black text-[#0a0a0a]" style={heading}>Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {contactData.businessHours.map((s, i) => (
                      <div key={i} className="flex justify-between items-center py-2.5 border-b border-[#f3f4f6] last:border-0">
                        <span className="font-semibold text-[#374151] text-sm" style={body}>{s.day}</span>
                        <span className="text-[#6b7280] text-sm" style={body}>{s.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#f9fafb] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-[#0a0a0a] mb-3" style={heading}>Frequently Asked Questions</h2>
              <p className="text-[#6b7280] text-sm" style={body}>Quick answers to common inquiries</p>
            </div>
            <div className="space-y-4">
              {contactData.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-7 border border-[#e5e7eb] hover:border-[#7c6af7]/50 hover:shadow-md transition-all">
                  <h3 className="text-base font-bold text-[#0a0a0a] mb-2" style={heading}>{faq.question}</h3>
                  <p className="text-[#6b7280] leading-relaxed text-sm" style={body}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}