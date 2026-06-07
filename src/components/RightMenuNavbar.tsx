'use client';

import Link from 'next/link';

interface RightMenuNavbarProps {
  onClose: () => void;
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const RightMenuNavbar = ({ onClose }: RightMenuNavbarProps) => {
  return (
    <div className="md:hidden fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="w-3/4 max-w-xs bg-zinc-900 border-l border-zinc-800 flex flex-col p-8">
        <button
          onClick={onClose}
          className="self-end text-zinc-500 hover:text-zinc-200 transition-colors mb-10"
          aria-label="Close menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav className="flex flex-col gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="text-zinc-400 hover:text-zinc-100 transition-colors text-lg font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default RightMenuNavbar;
