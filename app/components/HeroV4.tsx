"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const lines = ["POWERING YOUR", "BUSINESS", "WITH TECHNOLOGY"];

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

      {/* Coral glow — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(235,94,90,0.10) 0%, transparent 65%)" }}
      />

      {/* Content */}
      <div className="relative flex-1 flex items-end">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-44 pb-12 w-full">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-bold uppercase tracking-[0.25em] mb-10"
            style={{ color: "#EB5E5A" }}
          >
            UK Telecoms &amp; IT Partner
          </motion.p>

          {/* Headline — line by line slide up */}
          <div className="mb-12">
            {lines.map((line, i) => (
              <div key={line} style={{ overflow: "hidden", paddingTop: "0.06em", paddingBottom: "0.06em" }}>
                <motion.p
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.08 + i * 0.18, ease: "easeOut" }}
                  className="font-black leading-none block"
                  style={{
                    fontSize: "clamp(3.8rem, 10.5vw, 10rem)",
                    letterSpacing: "-0.03em",
                    color: line === "BUSINESS" ? "#EB5E5A" : "#ffffff",
                  }}
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Sub + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
          >
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
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
        transition={{ duration: 0.6, delay: 1.0 }}
        className="relative border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center overflow-hidden">
          <span className="text-[10px] font-bold uppercase tracking-widest flex-shrink-0 mr-8" style={{ color: "rgba(255,255,255,0.25)" }}>
            Services
          </span>
          <div className="flex items-center overflow-hidden">
            {[...services, ...services].map((s, i) => (
              <span key={i} className="flex items-center flex-shrink-0">
                <span className="text-xs font-medium whitespace-nowrap px-4 cursor-default transition-colors duration-200 hover:text-white/70" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {s}
                </span>
                <span className="w-px h-3 flex-shrink-0" style={{ background: "rgba(255,255,255,0.12)" }} />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
