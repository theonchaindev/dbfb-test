"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Headphones, Shield, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "20+",    label: "Years in business",    accent: "#1E183D" },
  { value: "2,400+", label: "UK businesses served",  accent: "#359D9E" },
  { value: "99.9%",  label: "Uptime SLA guarantee",  accent: "#1E183D" },
  { value: "24/7",   label: "UK-based support",      accent: "#EB5E5A" },
];

const reasons = [
  {
    icon: Server,
    title: "Fully Managed IT",
    desc: "End-to-end management from deployment through to daily operations, freeing your team to focus on growth.",
    accent: "#359D9E",
  },
  {
    icon: Headphones,
    title: "UK-Based Support",
    desc: "Expert engineers based in the UK, available around the clock with fast, accountable response times.",
    accent: "#215273",
  },
  {
    icon: Shield,
    title: "Enterprise Infrastructure",
    desc: "Carrier-grade networks with 99.9% SLA uptime — the same backbone trusted by major enterprises.",
    accent: "#EB5E5A",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    desc: "From 5 to 5,000 users — our platforms scale seamlessly alongside your business as it grows.",
    accent: "#359D9E",
  },
  {
    icon: Users,
    title: "Dedicated Account Team",
    desc: "A named account manager who knows your business and proactively supports your strategic goals.",
    accent: "#215273",
  },
];

export default function WhyDBFB() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold text-[#359D9E] uppercase tracking-widest mb-4"
            >
              Why choose us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.07 }}
              className="text-4xl lg:text-5xl font-bold text-[#1E183D] leading-tight"
            >
              Why businesses<br />choose <span className="text-[#EB5E5A]">dbfb</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="text-gray-400 text-sm leading-relaxed max-w-sm lg:text-right"
          >
            We&apos;re not just a supplier — we&apos;re a long-term technology partner. Our clients stay because we deliver, not because they&apos;re locked in.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden mb-16"
          style={{ border: "1px solid #EAEAF0" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-7 px-4 lg:py-10 lg:px-6 text-center"
              style={{
                background: i % 2 === 0 ? "#FAFAFA" : "#ffffff",
                borderRight: i < stats.length - 1 ? "1px solid #EAEAF0" : undefined,
              }}
            >
              <p
                className="text-3xl lg:text-5xl font-black leading-none mb-2"
                style={{ color: stat.accent }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Reasons — 5-col grid joined by 1px borders */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 rounded-2xl overflow-hidden mb-12"
          style={{ border: "1px solid #EAEAF0" }}
        >
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white p-6 flex flex-col gap-4"
                style={{
                  borderRight: i < reasons.length - 1 ? "1px solid #EAEAF0" : undefined,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${item.accent}12`,
                    border: `1px solid ${item.accent}25`,
                  }}
                >
                  <Icon size={18} style={{ color: item.accent }} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#1E183D] mb-1.5">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>

                <div
                  className="mt-auto h-0.5 w-8 rounded-full"
                  style={{ background: item.accent }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="/why-dbfb"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB5E5A] text-white text-sm font-semibold rounded-lg hover:bg-[#EB5E5A]/90 transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-[#EB5E5A]/20"
          >
            Learn more about us <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
