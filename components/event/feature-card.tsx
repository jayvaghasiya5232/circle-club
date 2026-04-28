import ThumbnailVideoPlayer from "@/components/shared/thumbnail-video-player";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FeatureItem } from "@/constants/features";
import Link from "next/link";

interface FeatureSectionProps extends FeatureItem {
  className?: string;
  reverse?: boolean;
}

const FeatureCard = ({
  title,
  description,
  buttonText,
  videoSrc,
  thumbnail,
  href,
  secondaryButtonText,
  secondaryHref,
  className,
  reverse,
}: FeatureSectionProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 min-h-125",
          reverse ? "md:[&>*:first-child]:order-2" : "",
        )}
      >
        {/* Left Content */}
        <motion.div
          className="order-2 md:order-0 bg-gray-dark px-4 py-4 lg:py-16 lg:px-16 flex flex-col justify-center items-center min-h-[280px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="w-full md:max-w-xs 2xl:max-w-sm space-y-6">
            <h2 className="text-xl md:text-4xl font-bold uppercase leading-tight text-[#0E0E0E]">
              {title}
            </h2>

            <p className="text-sm md:text-[20px] text-[#0E0E0E] leading-[100%]">
              {description}
            </p>

            <div className="flex flex-col gap-3">
              <motion.button
                className="inline-block w-full lg:w-auto gray-gradient px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition cursor-pointer text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href={href}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {buttonText}
                </Link>
              </motion.button>

              {secondaryButtonText && secondaryHref ? (
                <motion.button
                  className="inline-block w-full lg:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition cursor-pointer text-black border-[1.5px] border-black/25 bg-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link
                    href={secondaryHref}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {secondaryButtonText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </motion.button>
              ) : (
                <div className="h-[42px] invisible pointer-events-none" />
              )}
            </div>
          </div>
        </motion.div>

        {/* Right Video */}
        <motion.div
          className="order-1 md:order-0 relative h-87.5 md:h-auto p-4 md:p-0 bg-gray-dark"
          initial={{
            opacity: 0,
            x: reverse ? -80 : 80,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ThumbnailVideoPlayer videoSrc={videoSrc} thumbnail={thumbnail} />
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCard;
