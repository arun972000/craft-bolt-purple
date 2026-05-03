'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Linkedin, UserRound } from 'lucide-react';

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({});

  const leaders = [
    {
      name: 'C Kumareson',
      role: 'Founder & Director',
      image: '/employees/kumaresan.jpeg',
      linkedIn: 'https://www.linkedin.com/in/c-kumareson-3722699/',
      bio: 'Founder and Director at ContentCraft Infotech, C Kumareson brings decades of publishing and representation experience, with deep expertise in institutional partnerships, strategic growth, and long-term relationship building across the academic ecosystem.\n\nHe has led strategic collaborations with universities, research institutions, and global publishing partners, enabling stronger scholarly visibility and high-impact publication outcomes.\n\nKnown for his relationship-first leadership style, he continues to mentor teams in delivering trusted representation and publishing support across South Asia and international markets.',
    },
    {
      name: 'Laxmi',
      role: 'Customer Service Management',
      linkedIn: null,
      bio: 'Laxmi leads customer service management with a strong focus on responsiveness, quality assurance, and client success, ensuring seamless coordination between institutions, publishers, and internal teams.\n\nShe plays a key role in streamlining communication workflows, tracking delivery timelines, and maintaining operational consistency across high-volume publishing engagements.\n\nWith a people-centric and detail-oriented approach, Laxmi strengthens long-term client confidence through proactive support, transparent updates, and dependable issue resolution.',
    },
    {
      name: 'Siddharth Padmapati',
      role: 'Business Head',
      linkedIn: null,
      image: '/employees/sidarth.jpeg',
      bio: 'Siddhartha Padmapati, with over 23 years of experience in enterprise risk, data & analytics, and security solutions in South Asia, is a results-oriented commercial leader.\n\nPreviously, Siddhartha excelled as the Head of Sales – Indian Subcontinent at International SOS, overseeing operations across six countries and providing expert advice to global clients on duty-of-care and risk mitigation. His tenure at Dun & Bradstreet India involved leading the national GTM strategy and ensuring customer success for platforms such as Hoovers, Optimizer, DataVision, and DaaS offerings.\n\nWith a background that includes leadership roles at Thomson Reuters, LexisNexis, Infogroup, and Monster India, Siddhartha has demonstrated expertise in B2B sales, digital transformation, and strategic account growth.\n\nHe holds an MBA in Marketing & International Business from JAGSoM and is an alumnus of the Organizational Leadership Program at IIM Lucknow. Known for his consultative approach and leadership style, he brings strong market insight and business expertise.',
    },
  ];

  const toggleBio = (name: string) => {
    setExpandedBios((prev) => ({ ...prev, [name]: !prev[name] }));
  };

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
          transition={{ duration: 0.42 }}
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
              transition={{ duration: 0.42, delay: 0.15 + index * 0.12 }}
              className="group h-full"
            >
              <div className={`relative h-full bg-white rounded-2xl overflow-hidden premium-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                leader.image ? 'hover:shadow-[0_25px_70px_rgba(91,45,130,0.2)]' : ''
              }`}>
                <div className="relative h-80 overflow-hidden">
                  {leader.image ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5B2D82] via-[#6F4599] to-[#8E6BB5]" />
                  )}
                  {!leader.image && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-xl bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        <UserRound className="text-white" size={56} />
                      </div>
                    </div>
                  )}

                </div>

                <div className="px-6 py-5 bg-white/95 border-t border-gray-100">
                  <h3 className="text-2xl font-bold text-[#111111] mb-2">{leader.name}</h3>
                  <p className="text-[#5B2D82] font-semibold mb-4">{leader.role}</p>
                  <p className={`text-sm text-gray-600 leading-relaxed whitespace-pre-line ${expandedBios[leader.name] ? '' : 'line-clamp-6'}`}>
                    {leader.bio}
                  </p>
                  {leader.bio.length > 260 && (
                    <button
                      type="button"
                      onClick={() => toggleBio(leader.name)}
                      className="mt-3 text-sm font-semibold text-[#5B2D82] hover:text-[#452064] transition-colors"
                    >
                      {expandedBios[leader.name] ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                  <div className="mt-4">
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
