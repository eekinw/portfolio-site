'use client';

import Link from 'next/link';
import { useState } from 'react';
import RightMenuNavbar from './RightMenuNavbar';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    document.body.style.overflow = isNavbarOpen ? 'auto' : 'hidden';
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#09090b]/80 border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 flex justify-center items-center py-4 relative">
        <button
          className="md:hidden absolute right-6 text-zinc-500 hover:text-zinc-200 transition-colors"
          onClick={toggleNavbar}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-x-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      {isNavbarOpen && <RightMenuNavbar onClose={toggleNavbar} />}
    </header>
  );
};

export default Header;
