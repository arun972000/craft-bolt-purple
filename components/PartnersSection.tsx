'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isPaused, setIsPaused] = useState(false);

  const partners = [
    { name: 'Taylor & Francis', initials: 'TF', logo: '/partners/taylor__francis_group_logo.jpg' },
    { name: 'Royal Society of Chemistry', initials: 'RSC', logo: '/partners/roysocchem_logo.jpg' },
    { name: 'Institute of Physics', initials: 'IOP', logo: '/partners/institute_of_physics_logo.jpg' },
    { name: 'Editage', initials: 'EP', logo: '/partners/editage_logo.jpg' },
    { name: 'Sage', initials: 'SG', logo: '/partners/sagepublishing_logo.jpg' },
    { name: 'Cambridge University Press', initials: 'CUP', logo: '/partners/cambridgeuniversitypress_logo.jpg' },
    { name: 'Lawcubator', initials: 'LC', logo: '/partners/lawcubator.jpg' },
    { name: 'Emerald', initials: 'EM', logo: '/partners/emeraldpublishing_logo.jpg' },
    { name: 'Magzter', initials: 'ME', logo: '/partners/magzter_logo.jpg' },
    { name: 'Bloomsbury', initials: 'BL', logo: '/partners/bloomsbury_usa_logo.jpg' },
    { name: 'JoVE', initials: 'JV', logo: '/partners/jove.jpg' },
  ];
  const marqueePartners = [...partners, ...partners];

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

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F7F4FB] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F7F4FB] to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden py-2"
          >
            <div
              className="flex w-max gap-6"
              style={{
                animation: 'partnerMarquee 42s linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group relative w-[220px] sm:w-[240px] bg-white rounded-2xl p-6 premium-shadow hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5B2D82]/0 to-[#5B2D82]/0 group-hover:from-[#5B2D82]/5 group-hover:to-transparent rounded-2xl transition-all duration-500" />
                  <div className="relative flex min-h-[160px] flex-col items-center justify-center text-center">
                    <div className="mb-5 flex h-16 w-full max-w-[170px] items-center justify-center">
                      {partner.logo ? (
                        <div className="relative h-full w-full">
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            fill
                            sizes="(max-width: 768px) 170px, 170px"
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F7F4FB] border border-[#8E6BB5]/20 text-[#5B2D82] font-bold">
                          {partner.initials}
                        </div>
                      )}
                    </div>

                    <h3 className="text-sm font-semibold text-gray-600 group-hover:text-[#5B2D82] transition-colors duration-500 leading-snug">
                      {partner.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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
      <style jsx>{`
        @keyframes partnerMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
