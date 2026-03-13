"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const lines = ["Powering your", "business", "with technology"];

const services = [
  "Cloud Telephony", "Managed IT", "Business Connectivity",
  "Cyber Security", "Microsoft Teams", "SD-WAN",
  "Business Mobile", "Cloud Hosting", "Smart Workspaces",
];

export default function HeroV4() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden" style={{ background: "#170F49" }}>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Coral glow — top left */}
      <div
        className="absolute -top-64 -left-64 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(235,94,90,0.08) 0%, transparent 65%)" }}
      />

      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-16 w-full">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-8"
            style={{ color: "#EB5E5A" }}
          >
            UK Telecoms &amp; IT Partner
          </motion.p>

          {/* Headline — line by line stagger */}
          <div className="mb-10 overflow-hidden">
            {lines.map((line, i) => (
              <div key={line} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, delay: 0.1 + i * 0.15, ease: "easeOut" }}
                  className="leading-[1.0] tracking-tight font-bold text-white block"
                  style={{
                    fontSize: "clamp(3.5rem, 8vw, 7rem)",
                    color: line === "business" ? "#EB5E5A" : "#ffffff",
                  }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Sub + CTAs row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
          >
            <p className="text-base text-white/45 leading-relaxed max-w-sm">
              Enterprise-grade telecoms, cloud, connectivity and IT — built for businesses that demand more.
            </p>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB5E5A] text-white text-sm font-semibold rounded-lg hover:bg-[#EB5E5A]/90 transition-all duration-200 hover:scale-[1.03]"
              >
                Speak to an expert
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 text-white/60 text-sm font-medium border rounded-lg hover:text-white hover:border-white/40 transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
              >
                Explore
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom ticker strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-0 overflow-hidden">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/25 mr-8 flex-shrink-0">
            Our services
          </span>
          <div className="flex items-center gap-0 flex-1 overflow-hidden">
            {[...services, ...services].map((s, i) => (
              <span key={i} className="flex items-center flex-shrink-0">
                <span className="text-xs font-medium text-white/40 whitespace-nowrap px-4 hover:text-white/70 transition-colors duration-200 cursor-default">
                  {s}
                </span>
                <span className="w-px h-3 bg-white/15 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
