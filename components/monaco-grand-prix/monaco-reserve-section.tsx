"use client";

import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { ACCESS_PACKAGES } from "@/constants/monaco";

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

const formSchema = z.object({
  firstName: z.string().min(1, "First name required"),
  lastName: z.string().min(1, "Last name required"),
  email: z.string().email("Enter valid email"),
  phone: z.string().optional(),
  pkg: z.string().min(1, "Select a package"),
  message: z.string().optional(),
});

const fieldClass =
  "w-full bg-white border-none outline-none font-sans text-[13px] font-normal tracking-[0.04em] text-[#1C1917] px-[18px] lg:px-5 py-5 resize-none focus:bg-[#FAFAFA] transition-colors placeholder:uppercase placeholder:font-medium placeholder:text-[10px] lg:placeholder:text-[11px] placeholder:tracking-[0.14em] lg:placeholder:tracking-[0.12em] placeholder:text-[#BBBBBB] lg:placeholder:text-[#AAAAAA]";

const MonacoReserveSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      pkg: "",
      message: "",
    },
  });

  const onSubmit = () => {
    toast(
      "Thanks! Your request has been submitted. Our team will contact you shortly.",
    );
    form.reset();
  };

  return (
    <Container className="relative z-50 px-6 lg:px-0 font-sans">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <SectionLabel
            number="005"
            label="Reserve Your Access"
            squareClassName="bg-[#0E0E0E29]!"
          />
          <div className="mt-6 lg:mt-10">
            <SectionTitle
              title={
                <>
                  Reserve
                  <br />
                  Your Access.
                </>
              }
              colorClassName="text-[50px]! md:text-[64px]! lg:text-[96px]! font-black! uppercase text-black! leading-[0.9] md:leading-[0.95] tracking-[-2.5px] md:tracking-[-2px] lg:tracking-[-4px]"
            />
          </div>
          <p className="mt-3 lg:mt-6 text-[11px] lg:text-[13px] font-normal tracking-[0.16em] lg:tracking-[0.14em] uppercase text-[#6B6B6B]">
            Limited capacity &middot; Private confirmation required
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 w-full max-w-[600px]"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-0.5 lg:gap-12"
            >
              <div className="flex flex-col gap-px bg-[#0000001a] text-left">
                <div className="grid grid-cols-2 gap-px bg-[#0000001a]">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="bg-white">
                        <FormControl>
                          <input
                            type="text"
                            placeholder="First Name"
                            autoComplete="off"
                            className={fieldClass}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs px-5 pb-3" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="bg-white">
                        <FormControl>
                          <input
                            type="text"
                            placeholder="Last Name"
                            autoComplete="off"
                            className={fieldClass}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs px-5 pb-3" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="bg-white">
                      <FormControl>
                        <input
                          type="email"
                          placeholder="Email Address"
                          autoComplete="off"
                          className={fieldClass}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs px-5 pb-3" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="bg-white">
                      <FormControl>
                        <input
                          type="tel"
                          placeholder="Phone / WhatsApp"
                          autoComplete="off"
                          className={fieldClass}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pkg"
                  render={({ field }) => (
                    <FormItem className="bg-white">
                      <FormControl>
                        <select
                          className={`${fieldClass} appearance-none cursor-pointer ${
                            field.value
                              ? "text-[#1C1917]"
                              : "text-[#AAAAAA] uppercase tracking-[0.08em] text-[11px] font-medium"
                          }`}
                          {...field}
                        >
                          <option value="" disabled>
                            Select Your Package
                          </option>
                          {ACCESS_PACKAGES.map((p) => (
                            <option
                              key={p.name}
                              value={p.name}
                              className="text-[#1C1917] normal-case"
                            >
                              {p.price} — {p.name} · {p.date}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage className="text-xs px-5 pb-3" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="bg-white">
                      <FormControl>
                        <textarea
                          placeholder="Additional requests — transfers, villa, yacht..."
                          autoComplete="off"
                          className={`${fieldClass} h-[88px] block`}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <button
                type="submit"
                className="block w-full gray-gradient text-[#1C1917] font-sans text-[11px] lg:text-xs font-bold tracking-[0.22em] lg:tracking-[0.2em] uppercase h-[54px] lg:h-12 cursor-pointer transition-opacity hover:opacity-90"
              >
                Request Private Access
              </button>
            </form>
          </Form>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-[18px] lg:mt-12 flex items-center gap-2 lg:gap-2.5 text-[10px] lg:text-[11px] font-medium tracking-[0.18em] uppercase text-[#6B6B6B]"
        >
          <span className="block w-[5px] h-[5px] lg:w-1.5 lg:h-1.5 rounded-full bg-[#1C1917] animate-pulse" />
          Requests reviewed discreetly
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-[52px] lg:mt-12 w-full max-w-[600px] pt-10 border-t border-[#0000001a] flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-y-8 lg:gap-y-6 gap-x-14"
        >
          <div className="text-center">
            <span className="block text-[9px] lg:text-[10px] font-bold tracking-[0.3em] uppercase text-[#6B6B6B] mb-1.5 lg:mb-2">
              Website
            </span>
            <div className="font-semibold lg:font-bold text-lg tracking-[-0.3px] lg:tracking-[-0.01em] text-[#1C1917]">
              <a
                href="https://circle-club.co"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                circle-club.co
              </a>
            </div>
          </div>
          <div className="text-center">
            <span className="block text-[9px] lg:text-[10px] font-bold tracking-[0.3em] uppercase text-[#6B6B6B] mb-1.5 lg:mb-2">
              Switzerland
            </span>
            <div className="font-semibold lg:font-bold text-lg tracking-[-0.3px] lg:tracking-[-0.01em] text-[#1C1917]">
              <a
                href="tel:+41783038313"
                className="hover:opacity-60 transition-opacity"
              >
                +41 78 303 83 13
              </a>
            </div>
          </div>
          <div className="text-center">
            <span className="block text-[9px] lg:text-[10px] font-bold tracking-[0.3em] uppercase text-[#6B6B6B] mb-1.5 lg:mb-2">
              France &amp; Monaco
            </span>
            <div className="font-semibold lg:font-bold text-lg tracking-[-0.3px] lg:tracking-[-0.01em] text-[#1C1917]">
              <a
                href="tel:+33627085355"
                className="hover:opacity-60 transition-opacity"
              >
                +33 6 27 08 53 55
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default MonacoReserveSection;
