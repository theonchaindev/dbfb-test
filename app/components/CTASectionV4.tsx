"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTASectionV4() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#170F49" }}>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold text-[#EB5E5A] uppercase tracking-widest mb-5"
        >
          Get started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.07 }}
          className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
        >
          Ready to transform your<br />
          <span className="text-[#EB5E5A]">business communications?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.14 }}
          className="text-base mb-10 max-w-lg mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Join 2,400+ UK businesses that trust dbfb for telecoms, cloud and IT.
          Let&apos;s build something great together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#EB5E5A] text-white font-semibold text-sm rounded-lg hover:bg-[#EB5E5A]/90 transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-[#EB5E5A]/20"
          >
            <PhoneCall size={15} />
            Speak to an expert
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-4 font-medium text-sm rounded-lg border transition-all duration-200 hover:bg-white/5"
            style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.15)" }}
          >
            Explore solutions
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {["No long-term lock-in", "Free initial consultation", "UK-based support", "30-day onboarding guarantee"].map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              <span className="w-1 h-1 rounded-full bg-[#EB5E5A]" />
              {item}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
