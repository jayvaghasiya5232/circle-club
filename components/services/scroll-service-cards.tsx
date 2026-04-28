"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../shared/container";
import { serviceList, SERVICES_LIST } from "@/constants/service";
import Image from "next/image";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import Link from "next/link";

interface StackingCardProps {
  index: number;
  totalCards: number;
  children: React.ReactNode;
}

const StackingCard = ({ index, children }: StackingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="flex items-center justify-center"
      style={{
        position: "sticky",
        top: "2vh",
        zIndex: index + 1,
      }}
    >
      {/* <motion.div className="w-full max-w-full px-0 lg:px-6 bg-gold-40 flex flex-col"> */}
      <motion.div className="w-full max-w-full px-0 lg:px-6 bg-[linear-gradient(50.91deg,_rgba(184,_190,_198,_0.4)_5.2%,_rgba(192,_198,_206,_0.4)_13.24%,_rgba(209,_216,_222,_0.4)_23.46%,_rgba(200,_207,_213,_0.4)_27.84%,_rgba(176,_182,_189,_0.4)_34.41%,_rgba(146,_152,_160,_0.4)_41.72%,_rgba(178,_184,_191,_0.4)_51.94%,_rgba(209,_216,_222,_0.4)_59.97%,_rgba(200,_207,_213,_0.4)_64.35%,_rgba(176,_182,_189,_0.4)_70.92%,_rgba(145,_151,_159,_0.4)_78.23%)] flex flex-col">
        {children}
      </motion.div>
    </div>
  );
};

const StackingCards = () => {
  return (
    <>
      <Container className="relative min-w-0 z-50">
        {SERVICES_LIST.map((service, index) => (
          <StackingCard
            key={service.id}
            index={index}
            totalCards={SERVICES_LIST.length}
          >
            <ServiceCard {...service} />
          </StackingCard>
        ))}
      </Container>
    </>
  );
};

export default StackingCards;

const ServiceCard = ({
  id,
  title,
  bullets,
  cta,
  src,
  overlay,
  description,
  href,
}: serviceList) => {
  return (
    <div className="w-full bg-white border border-transparent md:border-[#0000004D] p-5 md:p-8 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 h-full">
      {/* IMAGE */}
      <div className="order-1 lg:order-2 lg:col-span-6 flex justify-end">
        <div className="relative w-full aspect-2/2 md:aspect-5/4 lg:aspect-4/3 overflow-hidden">
          {src ? (
            <Image src={src} alt={title} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 bg-[#111] flex items-center justify-center">
              <div className="text-center text-white/20 p-8">
                <svg
                  className="w-16 h-16 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 64 64"
                  aria-hidden
                >
                  <path
                    d="M4 42L16 22L48 22L60 42L4 42Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="16" cy="48" r="5" />
                  <circle cx="48" cy="48" r="5" />
                  <path
                    d="M32 6L32 22M24 12L32 4L40 12"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-xs font-semibold tracking-widest uppercase block">
                  Photo coming soon
                </span>
              </div>
            </div>
          )}

          {overlay && (
            <div className="absolute bottom-0 inset-x-0 bg-white/10 backdrop-blur-2xl p-4 md:p-6">
              <p className="text-white/70 font-bold uppercase text-lg md:text-2xl leading-tight">
                {overlay}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* TEXT */}
      {/* <div className="order-2 lg:order-1 flex flex-col justify-between lg:w-[52%]"> */}
      <div className="order-2 lg:order-1 flex flex-col lg:col-span-6">
        <div className="flex flex-col gap-4">
          <SectionLabel
            number={id}
            label="Service"
            squareClassName="bg-[#0E0E0E29]!"
          />

          <SectionTitle
            title={title}
            colorClassName="text-2xl! md:text-4xl lg:text-[56px]! font-bold leading-[100%] md:leading-tight"
          />

          {description && (
            <p className="text-sm md:text-base text-foreground max-w-md">
              {description}
            </p>
          )}

          {bullets && (
            <ul className="flex flex-col gap-2 mt-2">
              {bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm md:text-base flex items-start gap-2"
                >
                  <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-black shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="mt-6 w-full lg:w-fit inline-flex items-center gap-2 gray-gradient text-black px-6 py-3 text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition">
          <Link
            href={href}
            className="flex items-center justify-center w-full gap-2.5"
          >
            {cta}
            <ArrowRight size={16} />
          </Link>
        </button>
      </div>
    </div>
  );
};

// const ServiceCard = ({
//   id,
//   title,
//   bullets,
//   cta,
//   src,
//   overlay,
//   description,
// }: serviceList) => {
//   return (
//     <div className="w-full bg-[#FFF9E7] border border-[#E9E4D6] p-6 md:p-8 flex-1 h-full">
//       {/* <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row h-full"> */}
//       <div className="flex flex-col gap-6 lg:flex-row h-full">
//         {/* Left content */}
//         <div className="order-2 lg:order-0 flex-1 h-full flex flex-col lg:justify-between">
//           <SectionLabel
//             number={id}
//             label="Service"
//             squareClassName="bg-[#0E0E0E29]!"
//           />

//           <div className="flex flex-col gap-3 mt-3 lg:mt-5">
//             <SectionTitle
//               title={title}
//               colorClassName="text-2xl! font-bold! md:text-[56px]! leading-[100%]! md:leading-19!"
//             />

//             {bullets && (
//               <ul className="flex flex-col gap-3 mb-8">
//                 {bullets.map((bullet, i) => (
//                   <li
//                     key={i}
//                     className="text-base font-body text-foreground flex items-start gap-2"
//                   >
//                     <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground shrink-0" />
//                     {bullet}
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {description && <p className="space-y-2 mb-8">{description}</p>}
//           </div>

//           <button className="inline-flex items-center gap-2 bg-brown-100 text-white px-5 py-3 text-xs font-body font-semibold tracking-widest uppercase w-fit hover:opacity-90 transition-opacity">
//             {cta}
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Right image */}
//         {/* <div className="order-1 lg:order-0 flex-1 flex items-center justify-end mt-3 lg:mt-5 p-4 lg:p-8"> */}
//         <div className="order-1 lg:order-0 flex-1 flex items-center justify-end p-4 lg:p-8">
//           <div className="relative w-full lg:w-[85%] h-[385px] md:h-[460px] overflow-hidden">
//             <Image src={src} alt={title} fill className="object-cover" />

//             {overlay && (
//               <div className="absolute inset-x-0 bottom-0 bg-[#FFFFFF1A] backdrop-blur-3xl h-[105px] lg:h-[161px] p-5 lg:p-8">
//                 <p className="font-display text-2xl md:text-3xl font-bold text-[#FFFFFF5E]! uppercase leading-tight">
//                   {overlay}
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
