'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [inventoryOpen, setInventoryOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/95 border-b border-neutral-200 font-titillium">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-neutral-900">ZK</span>
          <span className="text-2xl font-black text-amber-500">Motors</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-neutral-800 font-medium text-sm">

          <Link href="/" className="nav-link">Home</Link>

          {/* Inventory Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 nav-link"
              onMouseEnter={() => setInventoryOpen(true)}
              onMouseLeave={() => setInventoryOpen(false)}
            >
              Inventory <AiOutlineDown className="text-sm" />
            </button>

            <div
              className={`absolute top-8 left-0 w-44 rounded-xl bg-white shadow-xl border border-slate-100 transition-all duration-300 ease-in-out
                ${inventoryOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
              `}
              onMouseEnter={() => setInventoryOpen(true)}
              onMouseLeave={() => setInventoryOpen(false)}
            >
              <Link href="/offers" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-t-xl font-medium">All Cars</Link>
              <Link href="/offers" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-700 transition-colors font-medium">Electric</Link>
              <Link href="/offers" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-b-xl font-medium">Luxury</Link>
            </div>
          </div>

          <Link href="/hire-purchase" className="nav-link text-amber-600 font-bold">
            Hire Purchase
          </Link>

          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/products" className="nav-link">Products</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contactus" className="nav-link">Contact</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/hire-purchase"
            className="rounded-full bg-amber-500 hover:bg-amber-400 px-5 py-2 text-sm font-bold text-black transition-all hover:scale-105"
          >
            Apply for HP
          </Link>
          <Link
            href="/offers"
            className="rounded-full bg-slate-900 hover:bg-slate-800 px-5 py-2 text-sm font-semibold text-white transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-2xl text-neutral-900 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white text-neutral-900 px-6 py-8 space-y-4 border-t border-slate-100 shadow-xl">
          <Link href="/" className="block text-lg font-medium" onClick={() => setMobileOpen(false)}>Home</Link>

          <div className="space-y-2">
            <button
              className="flex w-full items-center justify-between text-lg font-medium"
              onClick={() => setInventoryOpen(!inventoryOpen)}
            >
              Inventory <AiOutlineDown className="text-xl" />
            </button>
            {inventoryOpen && (
              <div className="ml-4 space-y-2">
                <Link href="/offers" className="block text-base" onClick={() => setMobileOpen(false)}>All Cars</Link>
                <Link href="/offers" className="block text-base" onClick={() => setMobileOpen(false)}>Electric</Link>
                <Link href="/offers" className="block text-base" onClick={() => setMobileOpen(false)}>Luxury</Link>
              </div>
            )}
          </div>

          <Link href="/hire-purchase" className="block text-lg font-bold text-amber-600" onClick={() => setMobileOpen(false)}>
            🎯 Hire Purchase
          </Link>
          <Link href="/services" className="block text-lg font-medium" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/products" className="block text-lg font-medium" onClick={() => setMobileOpen(false)}>Products</Link>
          <Link href="/about" className="block text-lg font-medium" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contactus" className="block text-lg font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>

          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/hire-purchase"
              className="block rounded-full bg-amber-500 px-5 py-3 text-center text-black font-bold"
              onClick={() => setMobileOpen(false)}
            >
              Apply for Hire Purchase
            </Link>
            <Link
              href="/offers"
              className="block rounded-full bg-slate-900 px-5 py-3 text-center text-white font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Browse Inventory
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}