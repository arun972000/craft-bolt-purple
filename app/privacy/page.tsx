'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'We collect information that you provide directly to us, including name, email address, phone number, and organization details when you contact us or request our services.',
        'We may also collect information automatically through cookies and similar technologies when you visit our website, including IP address, browser type, and browsing behavior.',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide, maintain, and improve our services',
        'To communicate with you about our services, updates, and promotional materials',
        'To respond to your inquiries and fulfill your requests',
        'To comply with legal obligations and protect our rights',
      ],
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties.',
        'We may share information with trusted service providers who assist us in operating our business, subject to confidentiality obligations.',
        'We may disclose information when required by law or to protect our rights and safety.',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'While we strive to protect your information, no method of transmission over the internet is completely secure.',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'You have the right to access, correct, or delete your personal information.',
        'You may opt-out of receiving marketing communications from us.',
        'You can disable cookies through your browser settings, though this may affect website functionality.',
      ],
    },
    {
      title: 'Changes to This Policy',
      content: [
        'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page.',
        'Your continued use of our services after changes are posted constitutes acceptance of the updated policy.',
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
              Privacy Policy
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
                At ContentCraft Infotech Pvt. Ltd., we are committed to protecting your privacy and ensuring
                the security of your personal information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
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
                <h2 className="text-2xl font-bold text-[#111111] mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
