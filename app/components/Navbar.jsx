'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [inventoryOpen, setInventoryOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <span
            className="text-2xl font-black text-white tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ZK
          </span>
          <span
            className="text-2xl font-black text-[#6b7280] tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Motors
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          className="hidden lg:flex items-center gap-7 text-[#9ca3af]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '0.875rem' }}
        >
          <Link href="/" className="nav-link hover:text-white transition-colors">Home</Link>

          {/* Inventory Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 nav-link hover:text-white transition-colors"
              onMouseEnter={() => setInventoryOpen(true)}
              onMouseLeave={() => setInventoryOpen(false)}
            >
              Inventory <AiOutlineDown className="text-xs" />
            </button>

            <div
              className={`absolute top-8 left-0 w-44 rounded-xl bg-[#1a1a1a] shadow-2xl border border-white/10 transition-all duration-200 ease-in-out
                ${inventoryOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}
              `}
              onMouseEnter={() => setInventoryOpen(true)}
              onMouseLeave={() => setInventoryOpen(false)}
            >
              <Link href="/offers" className="block px-4 py-3 text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors rounded-t-xl text-sm">
                All Cars
              </Link>
              <Link href="/offers" className="block px-4 py-3 text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors text-sm">
                Electric
              </Link>
              <Link href="/offers" className="block px-4 py-3 text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors rounded-b-xl text-sm">
                Luxury
              </Link>
            </div>
          </div>

          <Link href="/hire-purchase" className="nav-link text-[#a594f9] hover:text-[#c4b5fd] font-semibold transition-colors">
            Hire Purchase
          </Link>

          <Link href="/services" className="nav-link hover:text-white transition-colors">Services</Link>
          <Link href="/products" className="nav-link hover:text-white transition-colors">Products</Link>
          <Link href="/about" className="nav-link hover:text-white transition-colors">About</Link>
          <Link href="/contactus" className="nav-link hover:text-white transition-colors">Contact</Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/hire-purchase"
            className="rounded-full bg-[#7c6af7] hover:bg-[#6b59e8] px-5 py-2 text-sm font-bold text-white transition-all hover:scale-105"
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.03em' }}
          >
            APPLY FOR HP
          </Link>
          <Link
            href="/offers"
            className="rounded-full border border-white/20 hover:border-white/40 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-white/5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            SHOP NOW
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-2xl text-white cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0a] text-white px-6 py-8 space-y-4 border-t border-white/10 shadow-2xl">
          <Link
            href="/"
            className="block text-base font-medium text-[#9ca3af] hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Home
          </Link>

          <div className="space-y-2">
            <button
              className="flex w-full items-center justify-between text-base font-medium text-[#9ca3af]"
              onClick={() => setInventoryOpen(!inventoryOpen)}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Inventory <AiOutlineDown className="text-xl" />
            </button>
            {inventoryOpen && (
              <div className="ml-4 space-y-2">
                <Link href="/offers" className="block text-sm text-[#6b7280] hover:text-white" onClick={() => setMobileOpen(false)}>All Cars</Link>
                <Link href="/offers" className="block text-sm text-[#6b7280] hover:text-white" onClick={() => setMobileOpen(false)}>Electric</Link>
                <Link href="/offers" className="block text-sm text-[#6b7280] hover:text-white" onClick={() => setMobileOpen(false)}>Luxury</Link>
              </div>
            )}
          </div>

          <Link
            href="/hire-purchase"
            className="block text-base font-bold text-[#a594f9]"
            onClick={() => setMobileOpen(false)}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Hire Purchase
          </Link>
          <Link href="/services" className="block text-base font-medium text-[#9ca3af] hover:text-white" onClick={() => setMobileOpen(false)} style={{ fontFamily: "'Inter', sans-serif" }}>Services</Link>
          <Link href="/products" className="block text-base font-medium text-[#9ca3af] hover:text-white" onClick={() => setMobileOpen(false)} style={{ fontFamily: "'Inter', sans-serif" }}>Products</Link>
          <Link href="/about" className="block text-base font-medium text-[#9ca3af] hover:text-white" onClick={() => setMobileOpen(false)} style={{ fontFamily: "'Inter', sans-serif" }}>About</Link>
          <Link href="/contactus" className="block text-base font-medium text-[#9ca3af] hover:text-white" onClick={() => setMobileOpen(false)} style={{ fontFamily: "'Inter', sans-serif" }}>Contact</Link>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <Link
              href="/hire-purchase"
              className="block rounded-full bg-[#7c6af7] px-5 py-3 text-center text-white font-bold text-sm tracking-wide"
              onClick={() => setMobileOpen(false)}
              style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.05em' }}
            >
              APPLY FOR HIRE PURCHASE
            </Link>
            <Link
              href="/offers"
              className="block rounded-full border border-white/20 px-5 py-3 text-center text-white font-semibold text-sm"
              onClick={() => setMobileOpen(false)}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              BROWSE INVENTORY
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}