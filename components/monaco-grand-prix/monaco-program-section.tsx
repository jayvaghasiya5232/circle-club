"use client";

import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";
import { PROGRAM_DAYS, ProgramDay } from "@/constants/monaco";
import { cn } from "@/lib/utils";

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

const MonacoProgramSection = () => {
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
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-8 lg:gap-10"
        >
          <div className="flex flex-col gap-3 md:gap-4">
            <SectionLabel
              number="001"
              label="The Program"
              squareClassName="bg-[#0E0E0E29]!"
            />
            <SectionTitle
              title={
                <>
                  The <span className="text-brown-100">Program</span>.
                </>
              }
              colorClassName="text-[38px]! md:text-[42px]! lg:text-[56px]! text-[#1C1917]! font-bold! leading-[0.93] tracking-[-1px] md:tracking-normal"
            />
            <p className="text-sm md:text-base text-[#6B6B6B] leading-[1.7] md:leading-[1.65] max-w-[420px]">
              From Thursday practice sessions to Sunday&apos;s race climax,
              every moment unfolds beneath you.
            </p>
            <div className="lg:hidden mt-2 pt-6 border-t border-[#0000001a] flex justify-between items-center">
              <div className="font-bold text-[15px] tracking-[-0.2px] text-[#1C1917]">
                4 &ndash; 7 June 2026
              </div>
              <div className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#6B6B6B]">
                81st Edition &middot; Monaco
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:text-right">
            <span className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#6B6B6B] mb-1.5">
              Monaco Grand Prix
            </span>
            <div className="font-bold text-3xl leading-none tracking-[-0.02em] uppercase text-[#1C1917]">
              4 &ndash; 7 June
              <br />
              2026
            </div>
            <span className="block text-xs font-normal tracking-[0.12em] uppercase text-[#6B6B6B] mt-2">
              81st Edition &middot; Private Terrace
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="group/grid grid grid-cols-1 lg:grid-cols-4"
        >
          {PROGRAM_DAYS.map((day, idx) => (
            <ProgramCard
              day={day}
              isFirst={idx === 0}
              isLast={idx === PROGRAM_DAYS.length - 1}
              key={day.num}
            />
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default MonacoProgramSection;

const ProgramCard = ({
  day,
  isFirst,
  isLast,
}: {
  day: ProgramDay;
  isFirst: boolean;
  isLast: boolean;
}) => {
  return (
    <div
      className={cn(
        "group/card cursor-default py-8 lg:py-10 lg:px-8",
        "border-[#0000001a] transition-[opacity,background] duration-300",
        !isFirst && "border-t lg:border-t-0 lg:border-l",
        isLast && "border-b lg:border-b-0",
        day.isRace && "border-t-2! border-t-[#1C1917]!",
        "lg:group-hover/grid:opacity-35 lg:hover:!opacity-100 lg:hover:bg-[#F8F7F6]",
      )}
    >
      <span className="hidden lg:block text-xs font-bold tracking-[0.3em] uppercase text-[#6B6B6B] mb-3">
        {day.num}
      </span>
      <div className="flex items-center justify-between mb-6 lg:mb-0 lg:block">
        <div className="font-extrabold lg:font-bold text-3xl lg:text-[32px] leading-none tracking-[-0.8px] lg:tracking-[-0.01em] uppercase text-[#1C1917] lg:mb-1 transition-all duration-300 lg:group-hover/card:text-[38px] lg:group-hover/card:tracking-[-0.02em]">
          {day.name}
        </div>
        <div className="text-[10px] lg:text-xs font-medium lg:font-normal tracking-[0.14em] lg:tracking-[0.06em] uppercase text-[#6B6B6B] lg:mb-7">
          {day.mobileDate ?? day.date}
        </div>
      </div>
      <ul className="flex flex-col list-none">
        {day.events.map((event) => (
          <li
            key={event}
            className="flex items-center gap-4 lg:gap-3 py-3 border-b border-[#0000001a] last:border-b-0 text-sm font-normal text-[#1C1917] lg:text-[#0E0E0E] leading-[1.3] lg:tracking-[-0.01em]"
          >
            <span
              aria-hidden
              className="block w-[5px] h-[5px] rounded-full border-[1.5px] border-[#0000001a] lg:border-[#6B6B6B] flex-shrink-0 transition-colors duration-300 lg:group-hover/card:bg-[#1C1917] lg:group-hover/card:border-[#1C1917]"
            />
            {event}
          </li>
        ))}
      </ul>
    </div>
  );
};
