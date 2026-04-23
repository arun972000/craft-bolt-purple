'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Handshake, BookText, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Handshake,
      title: 'Publisher Representation',
      description:
        'Strategic representation services connecting world-renowned publishers with academic institutions, libraries, and research organizations across India and South Asia.',
      features: [
        'Institutional Partnerships',
        'Sales & Marketing Excellence',
        'Territory Management',
        'Strategic Consulting',
      ],
      gradient: 'from-[#5B2D82] to-[#452064]',
    },
    {
      icon: BookText,
      title: 'Publishing Services',
      description:
        'Comprehensive end-to-end publishing solutions encompassing editorial excellence, production management, quality assurance, and distribution logistics for academic content.',
      features: [
        'Editorial Management',
        'Production Coordination',
        'Quality Control',
        'Distribution Networks',
      ],
      gradient: 'from-[#8E6BB5] to-[#5B2D82]',
    },
    {
      icon: GraduationCap,
      title: 'Conference Proceedings',
      description:
        'Specialized services for academic conferences including professional publishing, indexing support, and digital dissemination of scholarly proceedings.',
      features: [

        'Professional Publishing',
        'Indexing & Citations',
        'Digital Distribution',
      ],
      gradient: 'from-[#452064] to-[#8E6BB5]',
    },
  ];

  return (
    <section id="services" ref={ref} className="section-padding bg-gradient-to-b from-[#F7F4FB] to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#5B2D82] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
            Comprehensive Publishing{' '}
            <span className="text-gradient-purple">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering excellence across the publishing spectrum with tailored services designed for academic and
            institutional success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 premium-shadow transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5B2D82]/5 to-transparent rounded-bl-full -mr-16 -mt-16" />

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <service.icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-[#111111] mb-4 group-hover:text-[#5B2D82] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5B2D82]" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center text-[#5B2D82] font-semibold text-sm group-hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </Link>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5B2D82]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
