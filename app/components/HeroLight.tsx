"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const badges = [
  { label: "IASME", sub: "Certified" },
  { label: "IASME", sub: "Assured" },
  { label: "Cyber", sub: "Essentials" },
  { label: "Cyber\nEssentials", sub: "Plus" },
];

export default function HeroLight() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F4F6F9]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/918/918-720.mp4"
          type="video/mp4"
        />
      </video>

      {/* Light wash overlay — keeps the hero pale while letting movement show through */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(244,246,249,0.96) 0%, rgba(244,246,249,0.92) 40%, rgba(244,246,249,0.80) 65%, rgba(244,246,249,0.60) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
        <div className="max-w-2xl">

          {/* Headline */}
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-[#1E183D] mb-6"
          >
            Powering your{" "}
            <span className="text-[#EB5E5A]">business</span>
            <br />
            with technology
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-[#1E183D]/60 leading-relaxed max-w-lg mb-10"
          >
            Enterprise-grade telecoms, cloud, connectivity and IT services —
            built for businesses that demand reliability, security, and scale.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB5E5A] text-white text-sm font-semibold rounded-lg hover:bg-[#EB5E5A]/90 transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-[#EB5E5A]/25"
            >
              Speak to an expert
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 text-[#1E183D] text-sm font-medium border border-[#1E183D]/20 rounded-lg hover:border-[#1E183D]/40 hover:bg-[#1E183D]/5 transition-all duration-200"
            >
              Explore solutions
            </Link>
          </motion.div>

          {/* Certification badges */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4"
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-full bg-white flex flex-col items-center justify-center shadow-md shadow-black/10 flex-shrink-0 border border-[#EAEAF0]"
              >
                <span className="text-[8px] font-black text-[#1E183D] leading-tight text-center whitespace-pre-line uppercase tracking-tight">
                  {badge.label}
                </span>
                <span className="text-[7px] font-semibold text-[#EB5E5A] mt-0.5 leading-tight text-center">
                  {badge.sub}
                </span>
              </div>
            ))}
            <p className="text-xs text-[#1E183D]/40 ml-2 max-w-[180px] leading-relaxed">
              Fully accredited across cyber security &amp; compliance standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
