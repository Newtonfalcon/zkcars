"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const dropVariant = {
  hidden: { opacity: 0, y: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.16, 1, 0.3, 1], // cinematic ease
    },
  }),
};

export default function ZKCinematicSection() {
  return (
    <section className="relative h-100 w-full overflow-hidden bg-black text-white">
      {/* Background Car (Zoom In & Out) */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/mercedes-26184.png"
          alt="ZK Motors Hero"
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            custom={0}
            variants={dropVariant}
            initial="hidden"
            animate="visible"
            className="font-titanium text-5xl md:text-7xl tracking-tight"
          >
            ZK MOTORS
          </motion.h1>

          <motion.p
            custom={0.15}
            variants={dropVariant}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-lg md:text-xl text-gray-300"
          >
            Engineered presence.  
            Driven by precision.
          </motion.p>

          <motion.p
            custom={0.3}
            variants={dropVariant}
            initial="hidden"
            animate="visible"
            className="mt-3 max-w-xl text-sm md:text-base text-gray-400"
          >
            Premium vehicles. Zero compromise.
          </motion.p>

          <motion.div
            custom={0.45}
            variants={dropVariant}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-5"
          >
            <button className="rounded-2xl bg-white px-8 py-3 text-black font-medium tracking-wide hover:bg-gray-200 transition">
              View Inventory
            </button>

            <button className="rounded-2xl border border-white/40 px-8 py-3 text-white tracking-wide hover:bg-white/10 transition">
              About ZK
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
