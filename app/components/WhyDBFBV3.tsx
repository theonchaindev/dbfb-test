"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "20+",    label: "Years in business",    sub: "Established 2004" },
  { value: "2,400+", label: "UK businesses served",  sub: "Across every sector" },
  { value: "99.9%",  label: "Uptime SLA guarantee",  sub: "Carrier-grade networks" },
  { value: "24/7",   label: "UK-based support",      sub: "Named engineers, always" },
];

const reasons = [
  {
    num: "01",
    title: "Single point of accountability",
    desc: "One team. One contract. One number to call. We own the outcome end to end — no finger-pointing between vendors.",
  },
  {
    num: "02",
    title: "Fully managed, not just supplied",
    desc: "We don't just sell you a product and disappear. Every service is actively monitored, managed and supported by our engineers.",
  },
  {
    num: "03",
    title: "Carrier-grade infrastructure",
    desc: "Our network is built on the same backbone trusted by major enterprises, with 99.9% uptime SLA and true redundancy built in.",
  },
  {
    num: "04",
    title: "Named account manager",
    desc: "You get a dedicated contact who knows your business — not a call centre. Someone who proactively looks after your account.",
  },
  {
    num: "05",
    title: "Scales with your business",
    desc: "From 5 to 5,000 seats — our platforms grow with you. No renegotiation, no migration pain, just seamless scale.",
  },
];

export default function WhyDBFBV3() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#F9F8F6" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 xl:gap-24">

          {/* LEFT — stats */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold text-[#EB5E5A] uppercase tracking-widest mb-4"
            >
              Why DBFB
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="text-4xl lg:text-5xl font-bold text-[#170F49] leading-tight mb-10"
            >
              Numbers<br />that speak<br />for us
            </motion.h2>

            <div className="grid grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="bg-white p-6 flex flex-col gap-1"
                >
                  <p className="text-3xl xl:text-4xl font-black text-[#170F49] leading-none tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-gray-700 mt-1">{stat.label}</p>
                  <p className="text-xs text-gray-400">{stat.sub}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Link
                href="/why-dbfb"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#170F49] border border-[#170F49]/20 px-5 py-2.5 rounded-lg hover:border-[#170F49]/50 hover:bg-[#170F49]/4 transition-all duration-200"
              >
                Our story <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — reasons */}
          <div className="flex flex-col justify-center">
            <div className="space-y-0 border-t border-gray-200">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.num}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="group flex gap-6 py-6 border-b border-gray-200 hover:bg-white/60 transition-colors duration-200 rounded-sm px-2 -mx-2"
                >
                  <span className="text-xs font-mono font-bold text-gray-300 mt-1 flex-shrink-0 w-6 group-hover:text-[#EB5E5A] transition-colors duration-200">
                    {reason.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#170F49] mb-1.5 group-hover:text-[#EB5E5A] transition-colors duration-200">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
