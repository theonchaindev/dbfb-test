"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1800&q=80')" }}
      />
      {/* Dark navy overlay — same style as hero */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(105deg, rgba(30,24,61,0.96) 0%, rgba(38,50,105,0.92) 40%, rgba(30,24,61,0.88) 100%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold text-[#EB5E5A] uppercase tracking-widest mb-5"
        >
          Get started today
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
        >
          Ready to transform your
          <br />
          <span className="text-[#EB5E5A]">business communications?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-lg text-[#EAEAF0]/60 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Join 2,400+ UK businesses that trust DBFB for their telecoms, cloud,
          and IT needs. Let&apos;s build something great together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#EB5E5A] text-white font-semibold rounded-lg hover:bg-[#EB5E5A]/90 transition-all duration-200 hover:scale-[1.03] shadow-xl shadow-[#EB5E5A]/25 text-sm"
          >
            <PhoneCall size={16} />
            Speak to an expert
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-4 text-white/80 font-medium border border-white/20 rounded-lg hover:border-white/40 hover:text-white transition-all duration-200 text-sm"
          >
            Explore solutions
            <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/40"
        >
          {["No long-term lock-in", "Free initial consultation", "UK-based support team", "30-day onboarding guarantee"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#EB5E5A]" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
