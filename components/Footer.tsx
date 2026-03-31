'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Leadership', href: '/#leadership' },
      { name: 'Partners', href: '/#partners' },
    ],
    services: [
      { name: 'Publisher Representation', href: '/services' },
      { name: 'Publishing Services', href: '/services' },
      { name: 'Conference Proceedings', href: '/services' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#111111] via-[#452064] to-[#5B2D82] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#8E6BB5] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#5B2D82] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <h2 className="text-3xl font-bold">
                  <span className="text-white">ContentCraft</span>
                  <span className="text-purple-300"> Infotech</span>
                </h2>
              </Link>
              <p className="text-purple-200 mb-6 leading-relaxed max-w-md">
                A distinguished publishing and representation company delivering excellence in academic publishing
                services and strategic institutional partnerships.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-[#5B2D82] flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-purple-200 hover:text-white transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-white mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-purple-200 hover:text-white transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-white mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="flex-shrink-0 text-purple-300 mt-1" size={18} />
                  <span className="text-purple-200 text-sm leading-relaxed">
                    No.18 Defence Enclave, AFS<br />Chennai - 600055, India
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="flex-shrink-0 text-purple-300" size={18} />
                  <span className="text-purple-200 text-sm">+91-9971177226</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="flex-shrink-0 text-purple-300" size={18} />
                  <a
                    href="mailto:ck@contentcraftinfotech.com"
                    className="text-purple-200 text-sm hover:text-white transition-colors"
                  >
                    ck@contentcraftinfotech.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-purple-200 text-sm">
                &copy; {currentYear} ContentCraft Infotech Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-purple-200 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
