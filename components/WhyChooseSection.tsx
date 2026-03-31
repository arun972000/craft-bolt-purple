'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Award, Network, Shield, Zap } from 'lucide-react';

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const metrics = [
    {
      value: 20,
      suffix: '+',
      label: 'Years Industry Experience',
      icon: Award,
    },
    {
      value: 100,
      suffix: '+',
      label: 'Institutional Connections',
      icon: Network,
    },
    {
      value: 15,
      suffix: '+',
      label: 'Global Publisher Partners',
      icon: Shield,
    },
    {
      value: 1000,
      suffix: '+',
      label: 'Projects Delivered',
      icon: Zap,
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4FB] via-white to-white" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 right-10 w-96 h-96 bg-[#8E6BB5] rounded-full blur-3xl opacity-10"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#5B2D82] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
            Trusted by Industry{' '}
            <span className="text-gradient-purple">Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. Delivering exceptional results through expertise, innovation, and
            unwavering commitment to excellence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
              End-to-End Publishing Excellence
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From manuscript to market, we provide comprehensive solutions that ensure your content reaches the right
              audience with maximum impact. Our integrated approach combines industry expertise with innovative
              strategies.
            </p>
            <div className="space-y-4">
              {[
                'Strategic Publisher Representation',
                'Advanced Production Management',
                'Global Distribution Networks',
                'Digital Transformation Support',
              ].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#5B2D82] to-[#8E6BB5] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden premium-shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5B2D82]/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index, isInView }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = metric.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= metric.value) {
        setCount(metric.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, metric.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="group relative bg-white rounded-2xl p-8 premium-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#5B2D82]/5 to-transparent rounded-bl-full -mr-12 -mt-12" />

      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B2D82] to-[#8E6BB5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <metric.icon className="text-white" size={24} />
        </div>

        <div className="text-5xl font-bold text-[#5B2D82] mb-3">
          {count}
          {metric.suffix}
        </div>

        <div className="text-gray-600 font-medium">{metric.label}</div>
      </div>
    </motion.div>
  );
}
