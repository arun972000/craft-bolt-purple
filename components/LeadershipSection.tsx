'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const leaders = [
    {
      name: 'C Kumareson',
      role: 'Co-founder & Director',
      bio: 'With over two decades of experience in academic publishing, C Kumareson brings strategic vision and deep industry knowledge to ContentCraft Infotech. His expertise spans publisher relations, institutional partnerships, and market development across South Asia.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987',
    },
    {
      name: 'KK Lakshmi',
      role: 'Customer Service Manager',
      bio: 'KK Lakshmi leads our customer excellence initiatives, ensuring exceptional service delivery and building lasting relationships with institutions and publishers. Her commitment to quality and client satisfaction drives our reputation for excellence.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987',
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

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden premium-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5B2D82]/80 via-[#5B2D82]/40 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-purple-200 font-medium">{leader.role}</p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{leader.bio}</p>

                  <div className="flex items-center space-x-4">
                    <button className="w-10 h-10 rounded-full bg-[#F7F4FB] hover:bg-[#5B2D82] flex items-center justify-center transition-all duration-300 group/btn">
                      <Linkedin className="text-[#5B2D82] group-hover/btn:text-white transition-colors" size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#F7F4FB] hover:bg-[#5B2D82] flex items-center justify-center transition-all duration-300 group/btn">
                      <Mail className="text-[#5B2D82] group-hover/btn:text-white transition-colors" size={18} />
                    </button>
                  </div>
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
