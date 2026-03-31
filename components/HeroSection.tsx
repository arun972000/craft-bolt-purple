'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#452064] via-[#5B2D82] to-[#8E6BB5]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2428')] bg-cover bg-center opacity-20 mix-blend-overlay" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#8E6BB5] rounded-full blur-3xl opacity-30"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#452064] rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                Premium Publishing Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Publishing & Representation Solutions for{' '}
              <span className="inline-block bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Academic Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl"
            >
              Trusted by institutions, publishers, and professionals for delivering advanced publishing services,
              conference proceedings, and strategic academic representation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/#services"
                className="group px-8 py-4 bg-white text-[#5B2D82] rounded-full font-semibold text-lg inline-flex items-center justify-center hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>

              <Link
                href="/contact"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold text-lg inline-flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
