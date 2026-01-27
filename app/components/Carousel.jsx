'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { carouselData } from '../data/data'
import Link from 'next/link'

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const length = carouselData.length

  // Auto scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length)
    }, 5000)

    return () => clearInterval(timer)
  }, [length])

  return (
    <div className="relative h-120 w-full overflow-hidden">
      <AnimatePresence>
        {carouselData.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 h-full w-full"
            >
              {/* Image */}
              <div
                className="h-full w-full bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/30 px-6 md:px-24 lg:px-48">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-xl drop-shadow">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.ctaLink}
                  className="rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-600 transition"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Optional dots navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {carouselData.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full transition-all ${
              idx === current ? 'bg-indigo-500 w-6' : 'bg-white/50'
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  )
}
