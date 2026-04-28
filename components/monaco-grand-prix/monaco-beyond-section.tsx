"use client";

import { useState } from "react";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";
import { BEYOND_ITEMS, BeyondItem } from "@/constants/monaco";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ICONS: Record<string, React.ReactNode> = {
  "Luxury Car Rentals": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 4v4h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  "Yacht Charters": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <path d="M2 20h20" />
      <path d="M5 20V9l7-5 7 5v11" />
      <path d="M9 20v-5h6v5" />
    </svg>
  ),
  "Villa Reservations": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  "Helicopter Transfers": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <path d="M4 8h16" />
      <path d="M12 4v4" />
      <ellipse cx="12" cy="8" rx="9" ry="3" />
      <path d="M5 11l-2 9h18l-2-9" />
      <path d="M12 11v9" />
    </svg>
  ),
  "Private Chauffeurs": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </svg>
  ),
  "Restaurant & Club Bookings": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
};

const MonacoBeyondSection = () => {
  return (
    <Container className="relative z-50 px-6 lg:px-0 font-sans">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-col gap-8 lg:gap-14"
      >
        {/* Mobile: label → title → subtitle stacked */}
        <motion.div
          variants={itemVariants}
          className="lg:hidden flex flex-col gap-3 md:gap-4"
        >
          <SectionLabel
            number="004"
            label="Circle Club Ecosystem"
            colorClassName="text-white/30!"
            labelClassName="text-white/30!"
            descriptionClassName="text-white/30!"
            squareClassName="bg-white/30!"
          />
          <SectionTitle
            title={
              <>
                Beyond
                <br />
                the Grand Prix.
              </>
            }
            colorClassName="text-[40px]! md:text-[52px]! font-bold! uppercase text-white! leading-[0.93] tracking-[-1.5px]"
          />
          <p className="text-sm md:text-base text-white/40 leading-[1.7] tracking-[-0.01em]">
            Circle Club manages the entire Monaco experience. In Monaco, there
            are no limits. We handle every detail so you never have to.
          </p>
        </motion.div>

        {/* Desktop: title left, label + subtitle right */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:grid grid-cols-2 items-end gap-16"
        >
          <SectionTitle
            title={
              <>
                Beyond
                <br />
                the Grand
                <br />
                Prix.
              </>
            }
            colorClassName="lg:text-[72px]! font-black! uppercase text-white! leading-[0.95] tracking-[-0.03em]"
          />
          <div className="flex flex-col gap-4">
            <SectionLabel
              number="004"
              label="Circle Club Ecosystem"
              colorClassName="text-white/40!"
              labelClassName="text-white/40!"
              descriptionClassName="text-white/40!"
              squareClassName="bg-white/30!"
            />
            <p className="text-lg text-white/50 leading-[1.6] tracking-[-0.01em]">
              Circle Club manages the entire Monaco experience. In Monaco,
              there are no limits. We handle every detail so you never have to.
            </p>
          </div>
        </motion.div>

        {/* Mobile: accordion */}
        <motion.div
          variants={itemVariants}
          className="lg:hidden flex flex-col gap-px bg-white/[0.06] -mx-6"
        >
          {BEYOND_ITEMS.map((item) => (
            <BeyondAccordionItem item={item} key={item.name} />
          ))}
        </motion.div>

        {/* Desktop: card grid */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:grid grid-cols-3 gap-px bg-white/10"
        >
          {BEYOND_ITEMS.map((item) => (
            <BeyondCard item={item} key={item.name} />
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default MonacoBeyondSection;

const BeyondAccordionItem = ({ item }: { item: BeyondItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#0C0C0C]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-4 px-7 py-5 transition-colors duration-200 ${
          open ? "bg-[#111]" : "active:bg-[#161616]"
        }`}
      >
        <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 flex-shrink-0">
          <span
            className="text-white/35"
            style={{
              strokeWidth: 1.5,
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
          >
            {ICONS[item.name]}
          </span>
        </span>
        <span className="flex-1 text-left text-xs font-semibold tracking-[0.12em] uppercase text-white/65">
          {item.name}
        </span>
        <span
          className={`text-xl font-extralight leading-none flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45 text-white/50" : "text-white/20"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#111] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className="relative w-full h-[180px] flex items-end px-6 py-4 overflow-hidden bg-[linear-gradient(160deg,#161616_0%,#252525_50%,#161616_100%)]"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 41px)",
              }}
            />
            <span className="relative text-[9px] font-semibold tracking-[0.22em] uppercase text-white/25">
              Photo &middot; {item.name}
            </span>
          </div>
          <div className="px-6 pt-5 pb-7">
            <div className="text-sm font-bold tracking-[0.06em] uppercase text-white/80 mb-2">
              {item.name}
            </div>
            <p className="text-[13px] font-normal text-white/40 leading-[1.65]">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeyondCard = ({ item }: { item: BeyondItem }) => {
  return (
    <div className="bg-[#0A0A0A] aspect-[4/5] flex items-end overflow-hidden transition-colors duration-300 hover:bg-[#111]">
      <div className="w-full px-6 md:px-7 py-5 md:py-6 border-t border-white/10">
        <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/70">
          {item.name}
        </div>
      </div>
    </div>
  );
};
