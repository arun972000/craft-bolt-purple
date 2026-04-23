'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, TrendingUp, Users, Globe } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: BookOpen,
      title: 'Expert Publishing',
      description: 'Decades of experience in academic and professional publishing',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Growth',
      description: 'Data-driven approaches to maximize publisher reach and impact',
    },
    {
      icon: Users,
      title: 'Relationship Excellence',
      description: 'Building lasting partnerships with institutions and publishers',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connections spanning leading academic institutions worldwide',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-[#5B2D82] font-semibold text-sm tracking-wider uppercase">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-[#111111] mb-6 leading-tight"
            >
              Pioneering Excellence in{' '}
              <span className="text-gradient-purple">Academic Publishing</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              ContentCraft Infotech is a distinguished publishing and representation company headquartered in Chennai, India.
              Founded by seasoned publishing professionals with 25+ years of deep domain expertise, we bring together strengths in book production, strategic
              sales, innovative marketing, exceptional customer experience, and comprehensive distribution management.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 mb-12 leading-relaxed"
            >
              Our mission is to bridge the gap between world-class publishers and academic institutions, providing tailored
              solutions that enhance knowledge dissemination and foster academic growth. Serving academic institutions as well as corporates,
              we pride ourselves on our commitment
              to quality, innovation, and building lasting partnerships.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#5B2D82] to-[#8E6BB5] flex items-center justify-center">
                    <feature.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden premium-shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2340"
                alt="Academic Excellence"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5B2D82]/60 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-8 premium-shadow-lg max-w-xs"
            >
              <div className="text-5xl font-bold text-[#5B2D82] mb-2">25+</div>
              <div className="text-gray-600 font-medium">Years of Industry Excellence</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-8 -right-8 w-32 h-32 bg-[#8E6BB5] rounded-full blur-3xl opacity-30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
