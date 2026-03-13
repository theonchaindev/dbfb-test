"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sectors = [
  {
    title: "Public Sector",
    tags: ["G-Cloud", "PSN", "GDPR"],
    href: "/sectors/public",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=75",
  },
  {
    title: "Enterprise",
    tags: ["Multi-site", "SLA-backed"],
    href: "/sectors/corporate",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75",
  },
  {
    title: "Finance",
    tags: ["FCA", "Audit trails"],
    href: "/sectors/finance",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=75",
  },
  {
    title: "Healthcare",
    tags: ["NHS Digital", "CQC"],
    href: "/sectors/healthcare",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=75",
  },
  {
    title: "Education",
    tags: ["Schools", "BYOD", "Wi-Fi"],
    href: "/sectors/education",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=75",
  },
  {
    title: "Legal",
    tags: ["High availability", "Encrypted"],
    href: "/sectors/legal",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=75",
  },
  {
    title: "Retail",
    tags: ["EPOS", "Multi-branch"],
    href: "/sectors/retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75",
  },
  {
    title: "Hospitality",
    tags: ["Guest Wi-Fi", "IoT"],
    href: "/sectors/hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=75",
  },
  {
    title: "Construction",
    tags: ["Mobile", "Rapid deploy"],
    href: "/sectors/construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
  },
  {
    title: "Manufacturing",
    tags: ["Industrial", "IoT", "5G"],
    href: "/sectors/manufacturing",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=75",
  },
];

export default function SectorsV4() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#EB5E5A" }}
            >
              Industries
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.07 }}
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "#170F49" }}
            >
              Sectors we serve
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="text-sm leading-relaxed max-w-xs lg:text-right text-gray-500"
          >
            Deep regulatory and operational knowledge across every major UK industry.
          </motion.p>
        </div>

        {/* Image card grid — 5 col on lg, 2 col on sm */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <Link
                href={sector.href}
                className="group relative flex flex-col justify-end overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ height: "200px" }}
              >
                {/* Background image */}
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(23,15,73,0.96) 0%, rgba(23,15,73,0.55) 55%, rgba(23,15,73,0.1) 100%)" }}
                />

                {/* Arrow */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowUpRight size={14} className="text-white/70" />
                </div>

                {/* Content */}
                <div className="relative p-4">
                  <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                    {sector.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {sector.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
