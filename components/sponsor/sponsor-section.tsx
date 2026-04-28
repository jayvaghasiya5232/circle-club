"use client";

import { motion } from "framer-motion";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import Image from "next/image";
import Link from "next/link";

const SponsorSection = () => {
  return (
    <div className="grid lg:grid-cols-12 lg:items-start">
      <div className="order-2 lg:order-0 lg:col-span-6">
        <Container className="max-w-lg! px-6 lg:px-0">
          <motion.div
            className="flex flex-col gap-6 lg:gap-8 py-11"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionLabel
              number="006"
              label="Become a Sponsor"
              descriptionClassName="text-muted-foreground"
              squareClassName="bg-[#0E0E0E29]!"
              labelClassName="text-foreground! md:text-sm"
              colorClassName="text-black"
            />

            <div className="flex flex-col gap-6">
              <SectionTitle
                title={
                  <>
                    <p className="hidden lg:block">
                      Become a <br /> Sponsor
                    </p>
                    <p className="block lg:hidden">Become a Sponsor</p>
                  </>
                }
                colorClassName="text-2xl! font-bold! lg:text-[56px]! leading-[100%]! md:leading-[77px]!"
              />

              <p className="w-full md:max-w-sm 2xl:max-w-md text-foreground text-sm md:text-[20px] leading-[100%]">
                Partner with Circle Club during Monaco’s most prestigious events.
              </p>

              <p className="w-full md:max-w-md 2xl:max-w-lg text-foreground text-sm md:text-[20px] leading-[100%]">
                We collaborate with brands aligned with excellence and discretion.
              </p>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block w-full lg:w-5/12 2xl:1/4 gray-gradient px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition cursor-pointer mt-6 md:mt-0"
            >
              <Link href="/sponsors">Sponsor Inquiry</Link>
            </motion.button>
          </motion.div>
        </Container>
      </div>

      <div className="order-1 lg:order-0 lg:col-span-6 relative z-50">
        <div className="w-full p-4 lg:p-0">
          <Image
            src="/images/sponsor/sponsor.webp"
            className="w-full aspect-square object-cover"
            width={720}
            height={697}
            alt="sponsor"
          />
          <video
            className="absolute inset-0 block w-full h-full object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/sponsor.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
