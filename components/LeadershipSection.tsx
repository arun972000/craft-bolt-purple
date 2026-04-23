'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Linkedin, UserRound } from 'lucide-react';

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const leaders = [
    {
      name: 'C Kumareson',
      role: 'Founder & Director',
      image: '/employees/kumaresan.jpg',
      linkedIn: 'https://www.linkedin.com/in/c-kumareson-3722699/',
    },
    {
      name: 'Laxmi',
      role: 'Customer Service Management',
      linkedIn: null,
    },
    {
      name: 'Siddharth Padapati',
      role: 'Business Head',
      linkedIn: null,
    },
  ];

  return (
    <section id="leadership" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#8E6BB5] rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#5B2D82] rounded-full blur-3xl opacity-5" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#5B2D82] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
            Meet Our{' '}
            <span className="text-gradient-purple">Leadership Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Guided by industry veterans committed to excellence, innovation, and building lasting partnerships in
            the academic publishing ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
              className="group h-full"
            >
              <div className={`relative h-full bg-white rounded-2xl overflow-hidden premium-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                leader.image ? 'hover:shadow-[0_25px_70px_rgba(91,45,130,0.2)]' : ''
              }`}>
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5B2D82] via-[#6F4599] to-[#8E6BB5]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5B2D82]/80 via-[#5B2D82]/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {leader.image ? (
                      <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/30 shadow-lg group-hover:scale-105 transition-transform duration-700">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="112px"
                          className="object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div className="w-28 h-28 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        <UserRound className="text-white" size={56} />
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-purple-200 font-medium">{leader.role}</p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-white/95 border-t border-gray-100">
                  {leader.linkedIn ? (
                    <a
                      href={leader.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} LinkedIn profile`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F7F4FB] text-[#5B2D82] hover:bg-[#5B2D82] hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin size={18} />
                    </a>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F7F4FB] text-[#8E6BB5]/70 transition-colors duration-300"
                    >
                      <Linkedin size={18} />
                    </span>
                  )}
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8E6BB5]/10 to-transparent rounded-bl-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
