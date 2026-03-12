"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MoveRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "20+",    label: "Years in business" },
  { value: "2,400+", label: "UK businesses served" },
  { value: "99.9%",  label: "Uptime SLA" },
];

const accreditations = ["IASME Certified", "Cyber Essentials", "Cyber Essentials+"];

const services = ["Telecoms", "Cloud", "Connectivity", "Managed IT", "Cyber Security"];

export default function HeroV3() {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center pt-24 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center py-14">

          {/* ── LEFT COLUMN ── */}
          <div>

            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#170F49]/6 border border-[#170F49]/12 text-xs font-semibold text-[#170F49] tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB5E5A] flex-shrink-0" />
                UK Telecoms &amp; IT Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07 }}
              className="text-5xl lg:text-6xl xl:text-[68px] font-bold leading-[1.05] tracking-tight text-[#170F49] mb-6"
            >
              Powering your<br />
              <span className="text-[#EB5E5A]">business</span><br />
              with technology
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-base text-gray-500 leading-relaxed max-w-[420px] mb-8"
            >
              Enterprise-grade telecoms, cloud, connectivity and IT services —
              built for businesses that demand reliability, security, and scale.
            </motion.p>

            {/* Service tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 mb-10"
            >
              {services.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                >
                  {s}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#170F49] text-white text-sm font-semibold rounded-lg hover:bg-[#170F49]/90 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#170F49]/20"
              >
                Speak to an expert
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 text-[#170F49] text-sm font-medium border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                View all solutions
                <MoveRight size={14} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="flex items-center gap-8 pt-8 border-t border-gray-100"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-start gap-3">
                  {i > 0 && <div className="w-px h-8 bg-gray-200 flex-shrink-0 self-center" />}
                  <div>
                    <p className="text-2xl font-black text-[#170F49] leading-none tabular-nums">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1 leading-snug">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Main image */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "480px", boxShadow: "0 24px 64px rgba(23,15,73,0.12)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=80"
                alt="Professional team at work"
                className="w-full h-full object-cover"
              />
              {/* Subtle bottom vignette */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(23,15,73,0.18) 100%)" }}
              />

              {/* Floating coral accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#EB5E5A]" />
            </div>

            {/* Accreditation card + activity card — side by side below image */}
            <div className="grid grid-cols-2 gap-4">

              {/* Accreditations */}
              <div
                className="p-4 rounded-xl bg-white border border-gray-100"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}
              >
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Accreditations</p>
                <div className="space-y-2">
                  {accreditations.map((a) => (
                    <div key={a} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#EB5E5A] flex-shrink-0" />
                      <span className="text-xs font-medium text-[#170F49]">{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live uptime indicator */}
              <div
                className="p-4 rounded-xl bg-[#170F49] flex flex-col justify-between"
                style={{ boxShadow: "0 4px 16px rgba(23,15,73,0.2)" }}
              >
                <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">Network Status</p>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    <span className="text-xs font-semibold text-white">All systems operational</span>
                  </div>
                  <p className="text-3xl font-black text-white leading-none">99.9<span className="text-lg text-white/50">%</span></p>
                  <p className="text-[10px] text-white/40 mt-1">30-day uptime</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom border separator */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="border-t border-gray-100" />
      </div>
    </section>
  );
}
