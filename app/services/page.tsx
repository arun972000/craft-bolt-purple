'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Handshake, BookText, GraduationCap, CircleCheck as CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Handshake,
      title: 'Publisher Representation',
      description:
        'Strategic representation services that connect renowned publishers with academic institutions, libraries, and research organizations.',
      features: [
        'Institutional Partnership Development',
        'Territory-Specific Market Strategies',
        'Sales and Marketing Excellence',
        'Client Relationship Management',
        'Market Intelligence and Reporting',
        'Strategic Consulting Services',
      ],
      benefits: [
        'Access to established institutional networks',
        'Local market expertise and insights',
        'Dedicated account management',
        'Customized marketing campaigns',
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340',
    },
    {
      icon: BookText,
      title: 'Publishing Services',
      description:
        'Comprehensive end-to-end publishing solutions that ensure quality, efficiency, and timely delivery of academic content.',
      features: [
        'Editorial Management and Coordination',
        'Production Planning and Execution',
        'Quality Assurance and Control',
        'Print and Digital Production',
        'Distribution and Logistics',
        'Inventory Management',
      ],
      benefits: [
        'Streamlined production workflows',
        'Cost-effective solutions',
        'Timely project delivery',
        'Quality assurance at every stage',
      ],
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2340',
    },
    {
      icon: GraduationCap,
      title: 'Conference Proceedings',
      description:
        'Specialized services for academic conferences including professional publishing, and digital dissemination.',
      features: [
        'Professional Editing and Formatting',
        'ISBN',
        'Indexing Support (Scopus, Web of Science)',
        'Digital Distribution Platforms',
        'Open Access Publishing Options',
      ],
      benefits: [
        'Enhanced academic credibility',
        'Global visibility and reach',
        'Compliance with indexing standards',
      ],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2340',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#5B2D82] via-[#452064] to-[#8E6BB5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Comprehensive publishing solutions tailored to your academic and institutional needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-[#F7F4FB]">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5B2D82] to-[#8E6BB5] flex items-center justify-center mb-6">
                    <service.icon className="text-white" size={36} />
                  </div>

                  <h2 className="text-4xl font-bold text-[#111111] mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#111111] mb-4">Key Features</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-2">
                          <CheckCircle className="flex-shrink-0 text-[#5B2D82] mt-1" size={18} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#111111] mb-4">Benefits</h3>
                    <div className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#5B2D82] mt-2" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="rounded-2xl overflow-hidden premium-shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-[#5B2D82] to-[#452064]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Let us help you achieve your publishing goals with our proven expertise and comprehensive solutions
            </p>
            <a
              href="/contact"
              className="inline-block px-12 py-4 bg-white text-[#5B2D82] rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
