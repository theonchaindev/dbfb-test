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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/23218/23218-720.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark purple/navy overlay matching your design */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(23,15,73,0.92) 0%, rgba(23,15,73,0.85) 40%, rgba(23,15,73,0.75) 70%, rgba(23,15,73,0.65) 100%)",
        }}
      />

      {/* Fade to white for next section — tall, multi-stop for a smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "280px",
          background: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.1) 80%, transparent 100%)",
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
            className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6"
          >
            <span className="whitespace-nowrap">Powering your <span className="text-[#EB5E5A]">business</span></span>
            <br />
            with technology
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-white/75 leading-relaxed max-w-lg mb-10"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB5E5A] text-white text-sm font-semibold rounded-lg hover:bg-[#EB5E5A]/90 transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-[#EB5E5A]/30"
            >
              Speak to an expert
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-medium border border-white/30 rounded-lg hover:border-white/60 transition-all duration-200"
            >
              Explore solutions
            </Link>
          </motion.div>

          {/* Certification badges — circular, white background */}
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
                className="w-16 h-16 rounded-full bg-white flex flex-col items-center justify-center shadow-lg shadow-black/30 flex-shrink-0"
              >
                <span className="text-[8px] font-black text-[#1E183D] leading-tight text-center whitespace-pre-line uppercase tracking-tight">
                  {badge.label}
                </span>
                <span className="text-[7px] font-semibold text-[#EB5E5A] mt-0.5 leading-tight text-center">
                  {badge.sub}
                </span>
              </div>
            ))}
            <p className="text-xs text-white/50 ml-2 max-w-[180px] leading-relaxed">
              Fully accredited across cyber security &amp; compliance standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
