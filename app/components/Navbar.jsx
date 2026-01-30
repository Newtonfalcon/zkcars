'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [inventoryOpen, setInventoryOpen] = useState(false)
  

   


  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white border-b border-neutral-200 font-titillium">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-neutral-800">
          ZK<span className="text-gray-600 ">Cars</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-neutral-800 font-medium text-sm">

          <Link href="/" className="nav-link">
            Home
          </Link>

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
              className={`absolute top-8 left-0 w-40 rounded-md bg-white shadow-lg transition-all duration-300 ease-in-out
                ${inventoryOpen ? "opacity-100 visible" : "opacity-0 invisible"}
              `}
              onMouseEnter={() => setInventoryOpen(true)}
              onMouseLeave={() => setInventoryOpen(false)}
            >
              <Link href="/offers" className="block px-4 py-2 hover:bg-neutral-100">
                All Cars
              </Link>
              <Link href="/offers" className="block px-4 py-2 hover:bg-neutral-100">
                Electric
              </Link>
              <Link href="/offers" className="block px-4 py-2 hover:bg-neutral-100">
                Luxury
              </Link>
            </div>
          </div>

          <Link href="/services" className="nav-link">
            Services
          </Link>

           <Link href="/products" className="nav-link">
            Products
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

          <Link href="/contactus" className="nav-link">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link
            href="/offers"
            className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-600 transition"
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
        <div className="lg:hidden bg-white/95 backdrop-blur-md text-neutral-900 px-6 py-8 space-y-4">
          <Link href="/" className="block text-lg font-medium">
            Home
          </Link>

          {/* Mobile dropdown logic */}
          <div className="space-y-2">
            <button
              className="flex w-full items-center justify-between text-lg font-medium"
              onClick={() => setInventoryOpen(!inventoryOpen)}
            >
              Inventory <AiOutlineDown className="text-xl" />
            </button>

            {inventoryOpen && (
              <div className="ml-4 space-y-2">
                <Link href="/offers" className="block text-base">
                  All Cars
                </Link>
                <Link href="/offers" className="block text-base">
                  Electric
                </Link>
                <Link href="/offers" className="block text-base">
                  Luxury
                </Link>
              </div>
            )}
          </div>

          <Link href="/services" className="block text-lg font-medium">
            Services
          </Link>
          <Link href="/products" className="block text-lg font-medium">
            Products
          </Link>

          <Link href="/about" className="block text-lg font-medium">
            About
          </Link>

          <Link href="/contactus" className="block text-lg font-medium">
            Contact
          </Link>

          <Link
            href="/offers"
            className="block mt-4 rounded-full bg-indigo-500 px-5 py-2 text-center text-white"
          >
            Shop Now
          </Link>
        </div>
      )}
    </header>
  )
}
