import BannerSection from "@/components/shared/banner-section";
import MonacoHero from "@/components/monaco-grand-prix/monaco-hero";
import AnimatedHeader from "@/components/layout/animated-header";
import BorderGrid from "@/components/shared/border-grid";
import MonacoProgramSection from "@/components/monaco-grand-prix/monaco-program-section";
import MonacoHospitalitySection from "@/components/monaco-grand-prix/monaco-hospitality-section";
import MonacoPackagesSection from "@/components/monaco-grand-prix/monaco-packages-section";
import MonacoBeyondSection from "@/components/monaco-grand-prix/monaco-beyond-section";
import MonacoReserveSection from "@/components/monaco-grand-prix/monaco-reserve-section";
import MonacoOneSection from "@/components/monaco-grand-prix/monaco-one-section";
import MonacoTwoSection from "@/components/monaco-grand-prix/monaco-two-section";
import ChooseSection from "@/components/monaco-grand-prix/choose-section";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: `Monaco F1 Grand Prix | ${SITE_CONFIG.name}`,
};

const MonacoF1GrandPrix = () => {
  return (
    <>
      {/* <section className="bg-white relative py-11">
        <BorderGrid />
        <MonacoHero />
      </section> */}
      <section className="bg-white pt-32 md:pt-40 pb-10 md:pb-20 relative">
        <BorderGrid />
        <AnimatedHeader phase="reveal" />
        <MonacoProgramSection />
      </section>
      <section className="bg-[#FAFAFA] py-10 md:py-20 relative">
        <BorderGrid />
        <MonacoHospitalitySection />
      </section>
      <section className="bg-white py-10 md:py-20 relative">
        <BorderGrid />
        <MonacoPackagesSection />
      </section>
      <section className="bg-[#0A0A0A] py-10 md:py-20 relative">
        <BorderGrid />
        <MonacoBeyondSection />
      </section>
      <section className="bg-white py-10 md:py-20 relative">
        <BorderGrid />
        <MonacoReserveSection />
      </section>
      {/* <section className="bg-gray-dark py-10 md:py-20 relative">
        <BorderGrid />
        <MonacoOneSection />
      </section>
      <section className="bg-white py-10 md:py-20 relative">
        <BorderGrid />
        <MonacoTwoSection />
      </section>
      <section className="py-10 md:py-20 relative">
        <BorderGrid />
        <ChooseSection />
      </section>
      <section className="relative bg-gray-dark py-11 lg:py-30">
        <BorderGrid />
        <div className="relative z-50 px-6 lg:px-0">
          <BannerSection
            number={"005"}
            label={"Global Reach"}
            title={"SECURE YOUR POSITION"}
            description={
              "Claim your place within an exclusive circle where access, influence, and visibility converge."
            }
            btnLabel={"Send a Request"}
            href="/request-access"
          />
        </div>
      </section> */}
    </>
  );
};

export default MonacoF1GrandPrix;
