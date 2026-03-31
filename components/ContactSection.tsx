'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'No.18 Defence Enclave, AFS',
      subDetails: 'Chennai - 600055, India',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91-9971177226',
      subDetails: 'Mon-Fri 9:00 AM - 6:00 PM IST',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'ck@contentcraftinfotech.com',
      subDetails: 'We reply within 24 hours',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4FB] via-white to-white" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#5B2D82] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
            Let's Start a{' '}
            <span className="text-gradient-purple">Conversation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to answer your questions and discuss how we can support your publishing needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group bg-white rounded-2xl p-6 premium-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B2D82] to-[#8E6BB5] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-2">{info.title}</h3>
                    <p className="text-gray-700 font-medium">{info.details}</p>
                    <p className="text-sm text-gray-500 mt-1">{info.subDetails}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="rounded-2xl overflow-hidden premium-shadow-lg h-64"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#5B2D82] to-[#8E6BB5] flex items-center justify-center">
                <MapPin className="text-white" size={48} />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 premium-shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5B2D82] focus:ring-2 focus:ring-[#5B2D82]/20 transition-all duration-300 outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5B2D82] focus:ring-2 focus:ring-[#5B2D82]/20 transition-all duration-300 outline-none"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5B2D82] focus:ring-2 focus:ring-[#5B2D82]/20 transition-all duration-300 outline-none"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5B2D82] focus:ring-2 focus:ring-[#5B2D82]/20 transition-all duration-300 outline-none"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5B2D82] focus:ring-2 focus:ring-[#5B2D82]/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us more about your requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-[#5B2D82] to-[#8E6BB5] text-white rounded-full font-semibold text-lg inline-flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
