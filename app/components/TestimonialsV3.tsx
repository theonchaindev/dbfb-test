"use client";

import { motion } from "framer-motion";

const featured = {
  quote: "DBFB transformed our communications infrastructure. The migration was seamless and the ongoing support has been exceptional — a genuine partner, not just a vendor.",
  name: "Sarah Mitchell",
  role: "IT Director",
  company: "Meridian Group",
};

const others = [
  {
    quote: "Enterprise-grade connectivity across all 12 of our sites within 6 weeks. The account team are responsive, knowledgeable and genuinely care about the outcome.",
    name: "James Hollingsworth",
    role: "Operations Manager",
    company: "Apex Construction",
  },
  {
    quote: "Deep technical knowledge and genuine care for our business outcomes — from initial consultation through to full deployment and beyond.",
    name: "Dr. Rachel Chen",
    role: "Head of Digital",
    company: "Northfield Health Trust",
  },
  {
    quote: "We evaluated six providers. DBFB were the only ones who properly understood our regulatory requirements from day one.",
    name: "Tom Barrett",
    role: "Head of IT",
    company: "Kingston Finance",
  },
];

const logos = ["Meridian Group", "Apex Construction", "Northfield Health Trust", "Kingston Finance", "Bloom Education", "Vertex Corp"];

export default function TestimonialsV3() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#170F49" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest text-center mb-6">
            Trusted by leading UK organisations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {logos.map((logo) => (
              <span
                key={logo}
                className="px-4 py-2 text-xs font-semibold text-white/40 rounded-lg border border-white/10 hover:border-white/25 hover:text-white/70 transition-all duration-200 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-16" />

        {/* Featured quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1fr_auto] gap-12 items-start mb-16"
        >
          <div>
            <p className="text-xs font-semibold text-[#EB5E5A] uppercase tracking-widest mb-6">Client stories</p>
            <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-medium text-white leading-snug tracking-tight">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
          </div>
          <div className="lg:text-right flex-shrink-0 lg:w-48">
            <div className="w-10 h-px bg-[#EB5E5A] mb-4 lg:ml-auto" />
            <p className="text-sm font-bold text-white">{featured.name}</p>
            <p className="text-xs text-white/50 mt-1">{featured.role}</p>
            <p className="text-xs font-semibold text-[#EB5E5A] mt-0.5">{featured.company}</p>
          </div>
        </motion.div>

        {/* Three smaller quotes */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {others.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="bg-white/5 p-6 flex flex-col gap-4 hover:bg-white/10 transition-colors duration-200"
            >
              <p className="text-sm text-white/70 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-white">{t.name}</p>
                <p className="text-[10px] text-white/40 mt-0.5">{t.role}, <span className="text-[#EB5E5A]">{t.company}</span></p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
