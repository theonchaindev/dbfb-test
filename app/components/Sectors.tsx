"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const featured = [
  {
    title: "Public Sector",
    desc: "Compliant, secure technology built around the specific demands of public sector organisations — from G-Cloud procurement to PSN-accredited connectivity.",
    points: ["G-Cloud & Crown Commercial Service", "PSN-compliant connectivity", "Data sovereignty & GDPR", "Framework pricing available"],
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&q=80",
    href: "/sectors/public",
    accent: "#215273",
  },
  {
    title: "Enterprise",
    desc: "Enterprise-grade telecoms, cloud, and IT for organisations that demand scale, resilience, and a single point of accountability across multi-site estates.",
    points: ["Multi-site & global connectivity", "Dedicated account team", "SLA-backed infrastructure", "Custom commercial terms"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    href: "/sectors/corporate",
    accent: "#359D9E",
  },
];

const others = [
  {
    title: "Finance",
    desc: "FCA-aligned infrastructure with audit trails and regulatory compliance built in.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=75",
    href: "/sectors/finance",
  },
  {
    title: "Construction",
    desc: "Robust multi-site connectivity and mobile solutions for dispersed teams.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
    href: "/sectors/construction",
  },
  {
    title: "Healthcare",
    desc: "Secure communications meeting NHS and CQC standards.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=75",
    href: "/sectors/healthcare",
  },
  {
    title: "Education",
    desc: "Scalable networks and managed IT for schools and universities.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=75",
    href: "/sectors/education",
  },
  {
    title: "Retail",
    desc: "Reliable connectivity and unified comms keeping every store and HQ in sync.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=75",
    href: "/sectors/retail",
  },
  {
    title: "Legal",
    desc: "High-availability, secure communications for law firms of every size.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=75",
    href: "/sectors/legal",
  },
  {
    title: "Hospitality",
    desc: "Guest Wi-Fi, EPOS connectivity, and managed IT across your entire estate.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=75",
    href: "/sectors/hospitality",
  },
  {
    title: "Manufacturing",
    desc: "Industrial-grade connectivity and IoT solutions for smart factory environments.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=75",
    href: "/sectors/manufacturing",
  },
];

export default function Sectors() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold text-[#359D9E] uppercase tracking-widest mb-4"
            >
              Sector expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.07 }}
              className="text-4xl lg:text-5xl font-bold text-[#1E183D]"
            >
              Industries we serve
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="text-gray-500 text-sm max-w-sm leading-relaxed lg:text-right"
          >
            Deep sector knowledge means we understand your regulatory landscape and operational challenges.
          </motion.p>
        </div>

        {/* Featured two */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {featured.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={sector.href}
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ height: "420px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
              >
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(20,16,48,0.98) 0%, rgba(20,16,48,0.85) 45%, rgba(20,16,48,0.25) 75%, transparent 100%)" }}
                />
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: sector.accent }} />
                <div className="relative p-7">
                  <h3 className="text-2xl font-bold text-white mb-3">{sector.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-5 max-w-sm">{sector.desc}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {sector.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/60 flex-shrink-0" />
                        <span className="text-xs text-white/75">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold rounded-lg px-4 py-2 bg-white/15 border border-white/30 text-white transition-all duration-200 group-hover:gap-3 group-hover:bg-white/25">
                    Explore {sector.title} <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Carousel header row */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">More sectors</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll(-1)}
                disabled={!canPrev}
                className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ borderColor: canPrev ? "#215273" : "#E5E7EB", color: canPrev ? "#215273" : "#9CA3AF" }}
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll(1)}
                disabled={!canNext}
                className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ borderColor: canNext ? "#215273" : "#E5E7EB", color: canNext ? "#215273" : "#9CA3AF" }}
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            onScroll={updateButtons}
            className="flex gap-5 overflow-x-auto pb-1"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {others.map((sector) => (
              <Link
                key={sector.title}
                href={sector.href}
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl flex-shrink-0 transition-all duration-300 hover:-translate-y-1"
                style={{
                  width: "calc(25% - 15px)",
                  minWidth: "220px",
                  height: "220px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  scrollSnapAlign: "start",
                }}
              >
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(20,16,48,0.97) 0%, rgba(20,16,48,0.7) 50%, rgba(20,16,48,0.1) 100%)" }}
                />
                <div className="relative p-4">
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#359D9E] transition-colors drop-shadow-sm">
                    {sector.title}
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed line-clamp-2">{sector.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/sectors"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#215273] border border-[#215273]/25 px-5 py-2.5 rounded-lg hover:border-[#215273]/60 hover:bg-[#215273]/5 transition-all duration-200"
          >
            View all sectors <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
