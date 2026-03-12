"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall, CalendarCheck } from "lucide-react";

const points = [
  "Free initial consultation",
  "No long-term lock-in",
  "UK-based support team",
  "30-day onboarding guarantee",
];

export default function CTASectionV3() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="rounded-3xl overflow-hidden grid lg:grid-cols-[1fr_auto] items-center gap-10 px-10 lg:px-16 py-14 lg:py-16"
          style={{ background: "#170F49" }}
        >
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold text-[#EB5E5A] uppercase tracking-widest mb-4"
            >
              Get started today
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.07 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6"
            >
              Ready to simplify your<br />
              technology stack?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {points.map((p) => (
                <span key={p} className="flex items-center gap-1.5 text-xs text-white/50">
                  <span className="w-1 h-1 rounded-full bg-[#EB5E5A] flex-shrink-0" />
                  {p}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="flex flex-col gap-3 flex-shrink-0"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#EB5E5A] text-white font-semibold text-sm rounded-xl hover:bg-[#EB5E5A]/90 transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-[#EB5E5A]/20 whitespace-nowrap"
            >
              <PhoneCall size={15} />
              Speak to an expert
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white/70 font-medium text-sm rounded-xl border border-white/15 hover:border-white/35 hover:text-white transition-all duration-200 whitespace-nowrap"
            >
              Explore solutions
              <ArrowRight size={14} />
            </Link>
            <p className="text-[10px] text-white/25 text-center mt-1">
              Average response time: under 2 hours
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
