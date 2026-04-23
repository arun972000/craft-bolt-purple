'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Partners', href: '/#partners' },
  { name: 'Leadership', href: '/#leadership' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const syncScrollState = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Keep navbar state correct on initial load and hash-based navigation.
    syncScrollState();

    const syncAfterFrame = () => {
      requestAnimationFrame(syncScrollState);
      window.setTimeout(syncScrollState, 250);
    };

    window.addEventListener('scroll', syncScrollState, { passive: true });
    window.addEventListener('hashchange', syncAfterFrame);
    window.addEventListener('popstate', syncAfterFrame);

    return () => {
      window.removeEventListener('scroll', syncScrollState);
      window.removeEventListener('hashchange', syncAfterFrame);
      window.removeEventListener('popstate', syncAfterFrame);
    };
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    requestAnimationFrame(() => setIsScrolled(window.scrollY > 50));
    window.setTimeout(() => setIsScrolled(window.scrollY > 50), 250);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-11 w-11 md:h-12 md:w-12 flex-shrink-0 overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="ContentCraft Infotech logo"
                fill
                sizes="(max-width: 768px) 48px, 48px"
                className="object-contain scale-[1.00]"
                priority
              />
            </div>
            <div className="hidden sm:block text-2xl md:text-3xl font-bold leading-none">
              <span
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-[#5B2D82]' : 'text-white'
                }`}
              >
                ContentCraft
              </span>
              <span
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-[#111111]' : 'text-white/90'
                }`}
              >
                {' '}
                Infotech
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 group ${
                  isScrolled ? 'text-gray-700 hover:text-[#5B2D82]' : 'text-white hover:text-white/80'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-5 right-5 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  isScrolled ? 'bg-[#5B2D82]' : 'bg-white'
                }`} />
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden lg:block px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 gradient-purple text-white hover:shadow-lg hover:shadow-[#5B2D82]/30 hover:scale-105"
          >
            Get in Touch
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    className="px-4 py-3 text-gray-700 hover:text-[#5B2D82] hover:bg-[#F7F4FB] rounded-lg transition-all duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-center rounded-full font-semibold gradient-purple text-white hover:shadow-lg transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
