"use client";

import { motion, type Variants } from "framer-motion";
import { Cloud, Wifi, Smartphone, Monitor, Building2, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    number: "01",
    icon: Cloud,
    title: "Cloud Communications",
    desc: "Unified communications built for the modern enterprise — hosted VoIP, Microsoft Teams voice, and cloud contact centre.",
    bullets: ["Hosted VoIP & telephony", "Microsoft Teams for Voice", "Cloud contact centre"],
    accent: "#359D9E",
    href: "/solutions/cloud",
  },
  {
    number: "02",
    icon: Wifi,
    title: "Connectivity & Networks",
    desc: "Carrier-grade connectivity with full redundancy — leased lines, SD-WAN, and multi-site networking across your estate.",
    bullets: ["Leased lines up to 100Gbps", "SD-WAN & automatic failover", "Multi-site networking"],
    accent: "#215273",
    href: "/solutions/connectivity",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Mobile Workforce",
    desc: "Keep every team member connected and productive — business mobile, MDM, and IoT SIM solutions under one contract.",
    bullets: ["Business mobile contracts", "Device management (MDM)", "IoT & SIM solutions"],
    accent: "#EB5E5A",
    href: "/solutions/mobile",
  },
  {
    number: "04",
    icon: Monitor,
    title: "IT Services",
    desc: "Fully managed IT support, proactive monitoring, and cyber security so your business stays secure and operational.",
    bullets: ["Managed IT & helpdesk", "Cyber security & compliance", "Backup & disaster recovery"],
    accent: "#359D9E",
    href: "/solutions/it",
  },
  {
    number: "05",
    icon: Building2,
    title: "Smart Workspaces",
    desc: "Modern workplace technology — from Microsoft 365 deployment to AV, video conferencing, and digital signage.",
    bullets: ["Microsoft 365 deployment", "AV & video conferencing", "Digital signage"],
    accent: "#215273",
    href: "/solutions/workspaces",
  },
  {
    number: "06",
    icon: Zap,
    title: "Operational Enhancements",
    desc: "Automation, analytics, and integrations that streamline your operations and unlock genuine business efficiency.",
    bullets: ["Workflow automation", "Business intelligence", "CRM & ERP integrations"],
    accent: "#EB5E5A",
    href: "/solutions/operations",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Solutions() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(30,24,61,0.04) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold text-[#359D9E] uppercase tracking-widest mb-4"
            >
              What we offer
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.07 }}
              className="text-4xl lg:text-5xl font-bold text-[#1E183D]"
            >
              Our Solutions
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="text-gray-400 max-w-sm text-sm leading-relaxed lg:text-right"
          >
            Everything your business needs to communicate, connect, and grow — under one roof.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={cardVariants} className="h-full">
                <Link
                  href={item.href}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1.5"
                  style={{ border: "1px solid #EAEAF0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${item.accent}50`;
                    el.style.boxShadow = `0 16px 48px rgba(0,0,0,0.1), 0 0 0 1px ${item.accent}30`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#EAEAF0";
                    el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                  }}
                >
                  {/* Banner zone with gradient + icon */}
                  <div
                    className="relative h-32 flex items-center justify-center overflow-hidden transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${item.accent}12 0%, ${item.accent}05 100%)` }}
                  >
                    {/* Ghost number */}
                    <span
                      className="absolute right-4 bottom-1 text-7xl font-black leading-none select-none pointer-events-none transition-opacity duration-300"
                      style={{ color: `${item.accent}18` }}
                    >
                      {item.number}
                    </span>

                    {/* Icon container */}
                    <div
                      className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${item.accent}25, ${item.accent}10)`,
                        border: `1px solid ${item.accent}35`,
                        boxShadow: `0 4px 16px ${item.accent}20`,
                      }}
                    >
                      <Icon size={24} style={{ color: item.accent }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-base font-bold text-[#1E183D] mb-2 group-hover:text-[#215273] transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">
                      {item.desc}
                    </p>

                    <ul className="space-y-1.5 mb-6">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: item.accent }}
                          />
                          <span className="text-xs text-gray-400">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div
                      className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200"
                      style={{ color: item.accent }}
                    >
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(to right, ${item.accent}, transparent)` }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white bg-[#EB5E5A] hover:bg-[#EB5E5A]/90 transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-[#EB5E5A]/20"
          >
            View all solutions <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
