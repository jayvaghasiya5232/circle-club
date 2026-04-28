"use client";

import Image from "next/image";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";
import { HOSPITALITY_ITEMS, HospitalityItem } from "@/constants/monaco";

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

const MonacoHospitalitySection = () => {
  return (
    <Container className="relative z-50 px-6 lg:px-0 font-sans">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-col gap-10 lg:gap-16"
      >
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 items-end gap-6 lg:gap-16"
        >
          <div className="flex flex-col gap-3 md:gap-4">
            <SectionLabel
              number="002"
              label="All-Inclusive Hospitality"
              squareClassName="bg-[#0E0E0E29]!"
            />
            <SectionTitle
              title={
                <>
                  Every detail.
                  <br />
                  Taken <span className="text-brown-100">care of</span> .
                </>
              }
              colorClassName="text-[38px]! md:text-[42px]! lg:text-[56px]! text-[#1C1917]! font-bold! leading-[0.93] tracking-[-1px] md:tracking-normal"
            />
            <p className="text-sm md:text-base text-[#6B6B6B] leading-[1.7] md:leading-[1.65] lg:max-w-[420px]">
              Every package includes a full all-inclusive experience. Premium
              service, curated cuisine, and an atmosphere shaped for the
              world&apos;s most exclusive circles.
            </p>
          </div>
        </motion.div>

        {/* Mobile: dark gradient strip */}
        <motion.div
          variants={itemVariants}
          className="lg:hidden -mx-6 relative h-[200px] overflow-hidden flex items-end px-7 py-6 bg-[linear-gradient(160deg,#1a1a1a_0%,#2c2c2c_40%,#1a1a1a_100%)]"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 41px)",
            }}
          />
          <span className="relative text-[11px] font-bold tracking-[0.2em] uppercase text-white/40">
            Private Terrace &middot; Monaco GP 2026
          </span>
        </motion.div>

        {/* Desktop: photo */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:flex relative w-full h-[420px] bg-[#E4E4E4] overflow-hidden items-end px-8 py-7"
        >
          <Image
            src="/images/monaco/terrace.webp"
            alt="all-inclusive hospitality"
            fill
            className="object-cover"
          />
          <span className="relative z-10 text-xs font-semibold tracking-[0.25em] uppercase text-white/40">
            Hospitality
          </span>
        </motion.div>

        {/* Mobile: list items */}
        <motion.div variants={itemVariants} className="lg:hidden flex flex-col">
          {HOSPITALITY_ITEMS.map((item, idx) => (
            <HospitalityListItem
              item={item}
              isLast={idx === HOSPITALITY_ITEMS.length - 1}
              key={item.num}
            />
          ))}
        </motion.div>

        {/* Desktop: 3-col card grid */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:grid grid-cols-3 gap-px bg-[#0000001a]"
        >
          {HOSPITALITY_ITEMS.map((item) => (
            <HospitalityCard item={item} key={item.num} />
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default MonacoHospitalitySection;

const HospitalityListItem = ({
  item,
  isLast,
}: {
  item: HospitalityItem;
  isLast: boolean;
}) => {
  return (
    <div
      className={`grid grid-cols-[28px_1fr] gap-4 py-5 border-t border-[#0000001a] items-start ${
        isLast ? "border-b" : ""
      }`}
    >
      <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#6B6B6B] pt-0.5">
        {item.num}
      </span>
      <div>
        <div className="text-[13px] font-bold tracking-[0.04em] uppercase text-[#1C1917] mb-1">
          {item.title}
        </div>
        <p className="text-[13px] font-normal text-[#6B6B6B] leading-[1.6]">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const HospitalityCard = ({ item }: { item: HospitalityItem }) => {
  return (
    <div className="bg-[#FAFAFA] px-7 md:px-8 py-8 md:py-9 transition-colors duration-300 hover:bg-[#F0EFEE]">
      <span className="block text-xs font-bold tracking-[0.28em] uppercase text-[#6B6B6B] mb-5">
        {item.num}
      </span>
      <div className="text-sm font-bold tracking-[0.06em] uppercase text-[#1C1917] leading-[1.3] mb-2.5">
        {item.title}
      </div>
      <p className="text-sm font-normal text-[#6B6B6B] leading-[1.65] tracking-[-0.01em]">
        {item.description}
      </p>
    </div>
  );
};
