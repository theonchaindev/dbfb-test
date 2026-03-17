"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "DBFB transformed our communications infrastructure. The migration was seamless and the ongoing support has been exceptional — a genuine partner, not just a vendor.",
    name: "Sarah Mitchell",
    role: "IT Director",
    company: "Meridian Group",
  },
  {
    quote: "We needed a telecoms partner that could scale with us. DBFB delivered enterprise-grade connectivity across all 12 of our sites within 6 weeks. Outstanding.",
    name: "James Hollingsworth",
    role: "Operations Manager",
    company: "Apex Construction",
  },
  {
    quote: "From initial consultation to full deployment, the DBFB team demonstrated deep technical knowledge and genuine care for our business outcomes.",
    name: "Dr. Rachel Chen",
    role: "Head of Digital",
    company: "Northfield Health Trust",
  },
];

const logos = [
  "Meridian Group",
  "Apex Construction",
  "Northfield Health Trust",
  "Kingston Finance",
  "Bloom Education",
  "Vertex Corp",
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 lg:py-32" style={{ background: "#F4F6F9" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Client logos */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8"
          >
            Trusted by leading organisations
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
            {logos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="px-5 py-2.5 rounded-lg bg-white cursor-default transition-all duration-300 hover:shadow-md"
                style={{ border: "1px solid #E8EAF0" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(53,157,158,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#E8EAF0";
                }}
              >
                <span className="text-sm font-semibold text-gray-400 hover:text-[#215273] transition-colors duration-200">
                  {logo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-[#359D9E] uppercase tracking-widest mb-10"
          >
            What our clients say
          </motion.p>

          <div className="relative min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <Quote size={28} className="text-[#359D9E]/25 mb-5" />
                <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1E183D] leading-relaxed mb-7 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-bold text-[#1E183D]">{testimonials[current].name}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {testimonials[current].role},{" "}
                    <span className="text-[#359D9E] font-medium">{testimonials[current].company}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-300"
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "#EB5E5A" : "#D1D5DB",
                  }}
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
