'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Users, Rocket, TrendingUp, CircleCheck as CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: Search,
      title: 'Discovery & Analysis',
      description:
        'We begin by understanding your unique needs, market position, and strategic objectives through comprehensive consultation and analysis.',
      color: 'from-[#5B2D82] to-[#452064]',
    },
    {
      icon: Users,
      title: 'Partnership Development',
      description:
        'Leveraging our extensive network, we connect you with the right partners and create tailored strategies for market penetration.',
      color: 'from-[#452064] to-[#8E6BB5]',
    },
    {
      icon: Rocket,
      title: 'Implementation',
      description:
        'Our expert team executes the strategy with precision, managing production, distribution, and marketing with meticulous attention to detail.',
      color: 'from-[#8E6BB5] to-[#5B2D82]',
    },
    {
      icon: TrendingUp,
      title: 'Growth & Optimization',
      description:
        'Continuous monitoring and optimization ensure sustained growth, adapting strategies based on market feedback and performance metrics.',
      color: 'from-[#5B2D82] to-[#8E6BB5]',
    },
    {
      icon: CheckCircle,
      title: 'Long-term Success',
      description:
        'Building lasting relationships and ensuring continued excellence through ongoing support, innovation, and strategic guidance.',
      color: 'from-[#8E6BB5] to-[#452064]',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-[#F7F4FB] to-white relative overflow-hidden">
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#8E6BB5]/10 rounded-full"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#5B2D82]/10 rounded-full"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#5B2D82] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
            A Proven Path to{' '}
            <span className="text-gradient-purple">Publishing Success</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures excellence at every stage, from initial consultation to long-term growth
            and success.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#5B2D82] via-[#8E6BB5] to-[#5B2D82] transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 premium-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto relative z-10`}
                  >
                    <step.icon className="text-white" size={28} />
                  </div>

                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#5B2D82] hidden lg:block z-20" />

                  <h3 className="text-xl font-bold text-[#111111] mb-3 text-center">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {step.description}
                  </p>

                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#8E6BB5] flex items-center justify-center text-xs font-bold text-[#5B2D82]">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center space-y-4 px-12 py-8 rounded-2xl bg-gradient-to-br from-[#5B2D82] to-[#452064] premium-shadow-lg">
            <h3 className="text-2xl font-bold text-white">Ready to Get Started?</h3>
            <p className="text-purple-100 max-w-md">
              Let us help you achieve your publishing goals with our proven expertise and comprehensive solutions.
            </p>
            <a
              href="/contact"
              className="mt-4 px-8 py-3 bg-white text-[#5B2D82] rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
