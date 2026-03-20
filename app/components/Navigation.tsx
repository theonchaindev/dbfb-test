"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Star, Layers, BookOpen, Info } from "lucide-react";
import Link from "next/link";

const megaColumns = [
  {
    title: "Cloud Communications",
    href: "/solutions/cloud",
    links: [
      "Cloud telephony",
      "Microsoft Teams for Voice",
      "SIP Trunking",
      "Cloud Contact Centre",
      "Music & Messaging on Hold",
    ],
  },
  {
    title: "Connectivity & Networks",
    href: "/solutions/connectivity",
    links: [
      "Business Broadband",
      "Dedicated Connectivity",
      "Network Resilience",
      "SD WAN",
      "Business Wi-Fi",
      "IoT Connectivity",
      "Rapid Deployment",
      "Private 5G",
    ],
  },
  {
    title: "Mobile Workforce",
    href: "/solutions/mobile",
    links: [
      "Business Mobile Plans",
      "Business SIM Plans",
      "Manage Mobility",
      "Mobile Security",
      "MDM",
      "Devices & Lifecycle",
      "Multi Network",
      "Roaming",
    ],
  },
  {
    title: "IT Services",
    href: "/solutions/it",
    links: [
      "Fully Managed IT",
      "Cyber Security",
      "Backup & Recovery",
      "Microsoft 365",
      "Cloud Hosting",
    ],
  },
  {
    title: "Smart Workspaces",
    href: "/solutions/workspaces",
    links: [
      "Meeting room solutions",
      "Video conferencing",
      "Interactive displays",
      "Digital Signage",
    ],
  },
  {
    title: "Operational Enhancements",
    href: "/solutions/operations",
    links: [
      "Managed print",
      "Business messaging",
      "Workflow automation",
      "Analytics & reporting",
    ],
  },
];

const bottomCards = [
  { icon: Star,      label: "Features",   desc: "Explore what's included" },
  { icon: Layers,    label: "Use Cases",   desc: "See how it works" },
  { icon: BookOpen,  label: "Resources",   desc: "Guides & whitepapers" },
  { icon: Info,      label: "About dbfb",  desc: "Our story & mission" },
];

const navLinks = [
  { label: "Sectors",          href: "/sectors" },
  { label: "Why dbfb?",        href: "/why-dbfb" },
  { label: "Insights & Blogs", href: "/insights" },
  { label: "Contact us",       href: "/contact" },
];

export default function Navigation({ forceActive = false }: { forceActive?: boolean }) {
  const [scrolled,          setScrolled]          = useState(false);
  const [navHovered,        setNavHovered]         = useState(false);
  const [solutionsOpen,     setSolutionsOpen]      = useState(false);
  const [mobileOpen,        setMobileOpen]         = useState(false);
  const [mobileSolOpen,     setMobileSolOpen]      = useState(false);
  const [openCategory,      setOpenCategory]       = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const openSolutions = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  }, []);

  const scheduleSolutionsClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 120);
  }, []);

  const cancelSolutionsClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const isActive = forceActive || scrolled || navHovered || solutionsOpen;

  return (
    <>
      {/* Desktop mega-menu backdrop */}
      <AnimatePresence>
        {solutionsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0"
            style={{
              zIndex: 40,
              background: "rgba(10,8,30,0.45)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
            onClick={() => setSolutionsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Nav header ── */}
      <header
        className="fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-300"
        style={
          isActive
            ? {
                background: "rgba(17, 17, 17, 0.96)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(235,230,222,0.08)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              }
            : { background: "transparent" }
        }
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => { setNavHovered(false); scheduleSolutionsClose(); }}
      >
        <nav className="relative max-w-7xl mx-auto px-6 h-16 flex items-center">

          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="inline-flex items-center">
              <img src="/logo.png" alt="dbfb" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Centre links — desktop only */}
          <div className="hidden lg:flex items-center gap-1">
            <button
              onMouseEnter={openSolutions}
              onMouseLeave={scheduleSolutionsClose}
              className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200"
              style={{ color: "#EBE6DE", borderColor: "rgba(235,230,222,0.3)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(235,230,222,0.7)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(235,230,222,0.3)"; }}
            >
              Solutions
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(235,230,222,0.65)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#EBE6DE"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(235,230,222,0.65)"; }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA buttons — desktop only */}
          <div className="flex-1 hidden lg:flex items-center justify-end gap-3">
            <Link
              href="/billing"
              className="px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ color: "#EBE6DE", border: "1px solid rgba(235,230,222,0.25)" }}
            >
              Billing Portal
            </Link>
            <Link
              href="/portal"
              className="px-4 py-1.5 text-sm font-semibold text-white bg-[#EB5E5A] rounded-lg hover:bg-[#EB5E5A]/90 transition-all duration-200 hover:scale-[1.03] shadow-md shadow-[#EB5E5A]/30"
            >
              Self-Service Portal
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors ml-auto"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>

        {/* Desktop mega menu */}
        <AnimatePresence>
          {solutionsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 right-0 px-6 pb-4"
              onMouseEnter={cancelSolutionsClose}
              onMouseLeave={scheduleSolutionsClose}
            >
              <div
                className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
                style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
              >
                <div className="grid grid-cols-6 gap-0 p-6 pb-0">
                  {megaColumns.map((col) => (
                    <div key={col.title} className="pr-5">
                      <Link
                        href={col.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="block text-xs font-bold text-[#1E183D] uppercase tracking-wide mb-3 hover:text-[#EB5E5A] transition-colors"
                      >
                        {col.title}
                      </Link>
                      <div className="h-px bg-gray-200 mb-3" />
                      <ul className="space-y-2 pb-5">
                        {col.links.map((link) => (
                          <li key={link}>
                            <Link
                              href="#"
                              onClick={() => setSolutionsOpen(false)}
                              className="text-xs text-gray-500 hover:text-[#215273] transition-colors leading-relaxed block"
                            >
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-4 border-t border-gray-100" style={{ background: "#f8f8f8" }}>
                  {bottomCards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                      <button
                        key={card.label}
                        onClick={() => setSolutionsOpen(false)}
                        className={`flex items-center gap-3 px-5 py-4 hover:bg-gray-100 transition-colors text-left ${
                          i < bottomCards.length - 1 ? "border-r border-gray-200" : ""
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-gray-500" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-800">{card.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{card.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Mobile drawer — rendered OUTSIDE header to avoid backdrop-filter stacking context ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
              style={{ zIndex: 998 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs lg:hidden overflow-y-auto"
              style={{
                zIndex: 999,
                background: "rgba(17, 17, 17, 0.99)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderLeft: "1px solid rgba(235,230,222,0.08)",
              }}
            >
              {/* Close button */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                <img src="/logo.png" alt="dbfb" className="h-7 w-auto" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4">

                {/* Solutions accordion */}
                <button
                  onClick={() => { setMobileSolOpen(!mobileSolOpen); setOpenCategory(null); }}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  Solutions
                  <ChevronDown
                    size={16}
                    className={`text-white/50 transition-transform duration-200 ${mobileSolOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileSolOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 border-l border-white/10 pl-3 mb-2 space-y-0.5">
                        {megaColumns.map((col) => (
                          <div key={col.title}>
                            {/* Category row */}
                            <button
                              onClick={() => setOpenCategory(openCategory === col.title ? null : col.title)}
                              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
                            >
                              {col.title}
                              <ChevronDown
                                size={13}
                                className={`text-white/30 flex-shrink-0 transition-transform duration-200 ${openCategory === col.title ? "rotate-180" : ""}`}
                              />
                            </button>

                            {/* Sub-links */}
                            <AnimatePresence initial={false}>
                              {openCategory === col.title && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-3 border-l border-white/10 pl-3 pb-1 space-y-0.5">
                                    <Link
                                      href={col.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-3 py-2 text-xs font-semibold text-[#359D9E] hover:text-white transition-colors rounded-lg hover:bg-white/5"
                                    >
                                      View all →
                                    </Link>
                                    {col.links.map((link) => (
                                      <Link
                                        key={link}
                                        href="#"
                                        onClick={() => setMobileOpen(false)}
                                        className="block px-3 py-2 text-xs text-white/50 hover:text-white/90 hover:bg-white/5 rounded-lg transition-colors"
                                      >
                                        {link}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Other nav links */}
                <div className="mt-1 space-y-0.5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="space-y-3">
                  <Link
                    href="/billing"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center px-4 py-3 text-sm font-medium text-white border border-white/20 rounded-lg hover:border-white/40 transition-colors"
                  >
                    Billing Portal
                  </Link>
                  <Link
                    href="/portal"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-[#EB5E5A] rounded-lg hover:bg-[#EB5E5A]/90 transition-colors"
                  >
                    Self-Service Portal
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
