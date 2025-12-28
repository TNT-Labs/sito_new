"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Servizi", href: "/servizi" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Documenti", href: "/documenti" },
  { name: "News", href: "/news" },
  { name: "Area Clienti", href: "/area-clienti" },
  { name: "Contatti", href: "/contatti" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar con info rapide */}
      <div className="bg-primary-700 text-white py-2">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+39XXXXXXXXXX" className="flex items-center gap-2 hover:text-primary-200">
                <FiPhone size={14} />
                <span>Tel: XXX XXX XXXX</span>
              </a>
              <a href="mailto:info@studiobiava.com" className="flex items-center gap-2 hover:text-primary-200">
                <FiMail size={14} />
                <span>info@studiobiava.com</span>
              </a>
            </div>
            <div className="text-xs">
              Lun-Ven: 9:00-12:30 / 14:30-18:00
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-primary-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl">
              SB
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">Studio Biava</div>
              <div className="text-xs text-gray-600">Consulenza Automobilistica</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
