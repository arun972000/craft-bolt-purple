'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const partners = [
    { name: 'JoVE', description: 'Journal of Visualized Experiments' },
    { name: 'Taylor & Francis', description: 'Academic Publishing Excellence' },
    { name: 'Brill', description: 'International Academic Publisher' },
    { name: 'De Gruyter', description: 'Independent Academic Publisher' },
    { name: 'Cambridge University Press', description: 'University of Cambridge' },
    { name: 'Manohar Publishers', description: 'Indian Academic Publishing' },
  ];

  return (
    <section id="partners" ref={ref} className="section-padding bg-gradient-to-b from-white to-[#F7F4FB]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#5B2D82] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
            Trusted Publisher{' '}
            <span className="text-gradient-purple">Network</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proud to represent world-leading publishers and facilitate their growth across academic institutions
            and research organizations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 premium-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B2D82]/0 to-[#5B2D82]/0 group-hover:from-[#5B2D82]/5 group-hover:to-transparent rounded-2xl transition-all duration-500" />

              <div className="relative">
                <div className="h-20 flex items-center justify-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-400 group-hover:text-[#5B2D82] transition-colors duration-500 text-center">
                    {partner.name}
                  </h3>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />

                <p className="text-center text-gray-600 text-sm">{partner.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5B2D82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#F7F4FB] to-white border border-[#8E6BB5]/20">
            <span className="text-gray-600">And many more prestigious publishers worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
