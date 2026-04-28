"use client";

import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";
import {
  ACCESS_PACKAGES,
  AccessPackage,
  PACKAGE_INCLUDED,
} from "@/constants/monaco";

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

const MonacoPackagesSection = () => {
  return (
    <Container className="relative z-50 px-6 lg:px-0 font-sans">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-col"
      >
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 items-end gap-4 lg:gap-16 mb-10 lg:mb-16"
        >
          <div className="flex flex-col gap-3 md:gap-4">
            <SectionLabel
              number="003"
              label="Private Access Packages"
              squareClassName="bg-[#0E0E0E29]!"
            />
            <SectionTitle
              title={
                <>
                  Select
                  <br />
                  your<span className="text-brown-100"> access</span>.
                </>
              }
              colorClassName="text-[38px]! md:text-[42px]! lg:text-[56px]! text-[#1C1917]! font-bold! leading-[0.93] tracking-[-1px] md:tracking-normal"
            />
          </div>
          <div className="flex flex-col gap-3 lg:gap-4">
            {/* Mobile subtitle (mobile.html) */}
            <p className="lg:hidden text-sm text-[#6B6B6B] leading-[1.7]">
              Private terrace, second floor, direct views over the most
              legendary section of the Monaco circuit. All-inclusive every day.
            </p>
            {/* Desktop subtitle (test.html) */}
            <p className="hidden lg:block text-base text-[#6B6B6B] leading-[1.65]">
              Each package grants private terrace access from a second-floor
              apartment with direct elevated views over the most legendary
              section of the Monaco circuit.
            </p>
            {/* Availability tag — desktop only */}
            <span className="hidden lg:inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#6B6B6B]">
              Limited availability
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          {ACCESS_PACKAGES.map((pkg, idx) => (
            <PackageRow
              pkg={pkg}
              isFirst={idx === 0}
              isLast={idx === ACCESS_PACKAGES.length - 1}
              key={pkg.name}
            />
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pt-12 lg:pt-8 lg:mt-10 border-t border-[#0000001a] lg:text-center"
        >
          <span className="block text-[10px] lg:text-xs font-semibold lg:font-bold tracking-[0.24em] lg:tracking-[0.25em] uppercase text-[#6B6B6B] mb-7 lg:mb-5">
            Every package includes
          </span>

          {/* Mobile: checkmark list */}
          <div className="lg:hidden flex flex-col">
            {PACKAGE_INCLUDED.map((item, idx) => (
              <span
                key={item}
                className={`flex items-center gap-3.5 py-3.5 text-sm font-normal text-[#1C1917] tracking-[-0.01em] border-b border-[#0000001a] ${
                  idx === PACKAGE_INCLUDED.length - 1 ? "border-b-0" : ""
                }`}
              >
                <CheckmarkBullet />
                {item}
              </span>
            ))}
          </div>

          {/* Desktop: dotted inline list */}
          <div className="hidden lg:flex flex-row flex-wrap justify-center items-center">
            {PACKAGE_INCLUDED.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-xs text-[#6B6B6B] tracking-[0.02em] whitespace-nowrap py-3 pr-5 mr-5 border-r border-[#0000001a] last:border-r-0 last:mr-0 last:pr-0"
              >
                <span className="w-1 h-1 rounded-full bg-[#6B6B6B] opacity-50 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default MonacoPackagesSection;

const CheckmarkBullet = () => (
  <span className="flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] border-[#0000002e] flex-shrink-0">
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      stroke="#767370"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 4l3 3 5-6" />
    </svg>
  </span>
);

const PackageRow = ({
  pkg,
  isFirst,
  isLast,
}: {
  pkg: AccessPackage;
  isFirst: boolean;
  isLast: boolean;
}) => {
  return (
    <div
      className={`py-7 lg:grid lg:grid-cols-[200px_1fr_auto] lg:items-center lg:gap-10 lg:py-7 border-[#0000001a] cursor-default transition-[background,padding,margin] duration-200 lg:hover:bg-[#FAFAFA] lg:hover:px-5 lg:hover:-mx-5 ${
        isFirst ? "border-t" : ""
      } ${isLast ? "lg:border-b" : "border-b"}`}
    >
      {/* Mobile: price + badge inline (top), then name + date */}
      <div className="flex items-start justify-between mb-2.5 lg:hidden">
        <div className="font-medium text-[46px] leading-none tracking-[-2px] text-black">
          {pkg.price}
        </div>
        <span className="mt-1.5 text-[9px] font-bold tracking-[0.2em] uppercase text-[#6B6B6B] border border-[#0000001a] px-2.5 py-1 whitespace-nowrap">
          {pkg.tag}
        </span>
      </div>
      <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#1C1917] mb-1 lg:hidden">
        {pkg.name}
      </div>
      <div className="text-xs tracking-[-0.01em] text-[#6B6B6B] lg:hidden">
        {pkg.date}
      </div>

      {/* Desktop: 3-col layout */}
      <div className="hidden lg:block font-medium text-[52px] leading-none tracking-[-0.03em] text-black">
        {pkg.price}
      </div>
      <div className="hidden lg:block">
        <div className="text-sm font-bold tracking-[0.08em] uppercase text-[#1C1917] mb-1">
          {pkg.name}
        </div>
        <div className="text-sm font-normal tracking-[-0.01em] text-[#6B6B6B]">
          {pkg.date}
        </div>
      </div>
      <span className="hidden lg:inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#6B6B6B] border border-[#0000001a] px-4 py-1.5 whitespace-nowrap">
        {pkg.tag}
      </span>
    </div>
  );
};
