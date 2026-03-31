'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Unwavering commitment to delivering the highest quality in every project we undertake.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships based on trust, transparency, and mutual success.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Embracing new technologies and methodologies to stay ahead in a dynamic industry.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Driving continuous improvement and expansion for our clients and partners.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#5B2D82] via-[#452064] to-[#8E6BB5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About ContentCraft Infotech
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Pioneering excellence in academic publishing and publisher representation since our inception
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
                Our <span className="text-gradient-purple">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  ContentCraft Infotech was founded with a clear vision: to bridge the gap between world-class
                  academic publishers and institutions across India and South Asia. Our journey began with a team
                  of experienced publishing professionals who recognized the need for specialized representation
                  and comprehensive publishing services in the academic sector.
                </p>
                <p>
                  Headquartered in Chennai, India, we have grown from our humble beginnings to become a trusted
                  partner for leading international publishers and prestigious academic institutions. Our success
                  is built on a foundation of expertise spanning book production, strategic sales, innovative
                  marketing, exceptional customer service, and efficient distribution management.
                </p>
                <p>
                  Today, we continue to evolve, embracing new technologies and methodologies while maintaining
                  the personal touch and commitment to excellence that have become our hallmarks. Our mission
                  remains unchanged: to facilitate the dissemination of knowledge and foster academic growth
                  through superior publishing solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden premium-shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340"
                  alt="Team collaboration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              Our <span className="text-gradient-purple">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 premium-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5B2D82] to-[#8E6BB5] flex items-center justify-center mb-6">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
