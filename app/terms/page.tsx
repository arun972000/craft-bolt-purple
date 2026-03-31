'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using the ContentCraft Infotech website and services, you accept and agree to be bound by these Terms and Conditions.',
        'If you do not agree to these terms, please do not use our website or services.',
      ],
    },
    {
      title: 'Services Description',
      content: [
        'ContentCraft Infotech provides publisher representation, publishing services, and conference proceedings management.',
        'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.',
        'Service specifications, timelines, and deliverables will be defined in separate service agreements with clients.',
      ],
    },
    {
      title: 'Intellectual Property Rights',
      content: [
        'All content on this website, including text, graphics, logos, and software, is the property of ContentCraft Infotech or its content suppliers and is protected by international copyright laws.',
        'You may not reproduce, distribute, or create derivative works from our content without express written permission.',
        'Client-provided materials remain the property of the respective clients, and we claim no ownership over such materials.',
      ],
    },
    {
      title: 'User Responsibilities',
      content: [
        'You agree to provide accurate and complete information when requesting our services or communicating with us.',
        'You are responsible for maintaining the confidentiality of any account credentials.',
        'You agree not to use our services for any unlawful or prohibited purpose.',
      ],
    },
    {
      title: 'Limitation of Liability',
      content: [
        'ContentCraft Infotech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.',
        'Our total liability for any claim arising from these terms or our services shall not exceed the amount paid by you for the specific service in question.',
        'We do not guarantee uninterrupted or error-free service and shall not be liable for any delays or failures in performance.',
      ],
    },
    {
      title: 'Confidentiality',
      content: [
        'We are committed to maintaining the confidentiality of all information shared by our clients.',
        'We will not disclose confidential information to third parties without your consent, except as required by law.',
        'Specific confidentiality terms will be outlined in service agreements with clients.',
      ],
    },
    {
      title: 'Payment Terms',
      content: [
        'Payment terms, including fees, schedules, and methods, will be specified in individual service agreements.',
        'Late payments may incur additional charges as specified in the service agreement.',
        'All fees are non-refundable unless otherwise stated in the service agreement.',
      ],
    },
    {
      title: 'Termination',
      content: [
        'Either party may terminate the service agreement by providing written notice as specified in the agreement.',
        'We reserve the right to suspend or terminate services immediately if you breach these terms.',
        'Upon termination, you must cease using our services and materials provided by us.',
      ],
    },
    {
      title: 'Governing Law',
      content: [
        'These Terms and Conditions shall be governed by and construed in accordance with the laws of India.',
        'Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, India.',
      ],
    },
    {
      title: 'Changes to Terms',
      content: [
        'We reserve the right to modify these Terms and Conditions at any time.',
        'Changes will be effective immediately upon posting on this website.',
        'Your continued use of our services after changes are posted constitutes acceptance of the modified terms.',
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#5B2D82] via-[#452064] to-[#8E6BB5]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Last updated: March 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Please read these Terms and Conditions carefully before using the ContentCraft Infotech website
                or services. These terms constitute a legally binding agreement between you and ContentCraft
                Infotech Pvt. Ltd.
              </p>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-8 premium-shadow"
                  >
                    <h2 className="text-2xl font-bold text-[#111111] mb-6 flex items-center">
                      <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5B2D82] to-[#8E6BB5] flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </span>
                      {section.title}
                    </h2>
                    <div className="space-y-4 ml-14">
                      {section.content.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#F7F4FB] to-white border border-[#8E6BB5]/20"
              >
                <h2 className="text-2xl font-bold text-[#111111] mb-4">Questions About These Terms?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:ck@contentcraftinfotech.com" className="text-[#5B2D82] hover:underline">
                      ck@contentcraftinfotech.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong> +91-9971177226
                  </p>
                  <p>
                    <strong>Address:</strong> No.18 Defence Enclave, AFS, Chennai - 600055, India
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
