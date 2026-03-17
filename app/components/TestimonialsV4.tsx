"use client";

import { motion } from "framer-motion";

const logos = ["Meridian Group", "Apex Construction", "Northfield Health Trust", "Kingston Finance", "Bloom Education", "Vertex Corp"];

const testimonials = [
  {
    quote: "dbfb transformed our communications infrastructure. The migration was seamless and the ongoing support has been exceptional — a genuine partner, not just a vendor.",
    name: "Sarah Mitchell",
    role: "IT Director",
    company: "Meridian Group",
    initial: "SM",
  },
  {
    quote: "Enterprise-grade connectivity across all 12 of our sites within 6 weeks. The account team are responsive, knowledgeable and genuinely care about the outcome.",
    name: "James Hollingsworth",
    role: "Operations Manager",
    company: "Apex Construction",
    initial: "JH",
  },
  {
    quote: "Deep technical knowledge and genuine care for our business outcomes — from initial consultation through to full deployment and beyond.",
    name: "Dr. Rachel Chen",
    role: "Head of Digital",
    company: "Northfield Health Trust",
    initial: "RC",
  },
];

export default function TestimonialsV4() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#F4F6F9" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest text-center mb-6">
            Trusted by leading UK organisations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {logos.map((logo) => (
              <span
                key={logo}
                className="px-5 py-2.5 text-xs font-semibold text-gray-400 bg-white rounded-lg hover:text-[#170F49] hover:shadow-md transition-all duration-200 cursor-default"
                style={{ border: "1px solid #EAEAF0" }}
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold text-[#EB5E5A] uppercase tracking-widest text-center mb-12"
        >
          Client stories
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 flex flex-col gap-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ border: "1px solid #EAEAF0" }}
            >
              {/* Top accent */}
              <div className="w-8 h-0.5 bg-[#EB5E5A]" />

              <blockquote className="text-sm text-gray-600 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: "#170F49" }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#170F49]">{t.name}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {t.role} · <span className="text-[#359D9E] font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
