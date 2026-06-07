'use client';

const cards = [
  {
    span: 'md:col-span-2',
    eyebrow: 'Currently',
    title: 'MerchantSpring',
    sub: 'Software Engineer · Kuala Lumpur, Malaysia · May 2026 – Present',
    accent: true,
  },
  {
    span: 'md:col-span-1',
    eyebrow: 'Based in',
    title: 'Kuala Lumpur',
    sub: 'Malaysia',
    accent: false,
  },
  {
    span: 'md:col-span-1',
    eyebrow: 'Experience',
    title: '3+ years',
    sub: 'Full-stack engineering',
    accent: false,
  },
  {
    span: 'md:col-span-2',
    eyebrow: 'Languages',
    title: 'EN · 中文 · BM · 日本語',
    sub: 'JLPT N2 certified',
    accent: false,
  },
];

const icons: Record<string, React.ReactNode> = {
  Currently: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  'Based in': (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  Experience: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20.25 14.15v4.073a2.25 2.25 0 01-2.122 2.247 23.996 23.996 0 01-4.255 0 2.25 2.25 0 01-2.122-2.247V14.15M15 3.75h.375a1.875 1.875 0 011.875 1.875v.75" />
      <path d="M9 3.75H8.625A1.875 1.875 0 006.75 5.625v.75M9 3.75h6M9 3.75V2.25M15 3.75V2.25M3 9.375a48.474 48.474 0 0118 0" />
    </svg>
  ),
  Languages: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
    </svg>
  ),
};

const Bento = () => {
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
      {cards.map((card) => (
        <div
          key={card.eyebrow}
          className={`${
            card.span
          } group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 ${
            card.accent
              ? 'bg-indigo-500/8 border-indigo-500/30 hover:border-indigo-500/60 hover:bg-indigo-500/12'
              : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
          }`}
        >
          <div className={`mb-3 ${card.accent ? 'text-indigo-400' : 'text-zinc-500'}`}>
            {icons[card.eyebrow]}
          </div>
          <p className="text-xs font-mono text-zinc-500 mb-1 tracking-wider uppercase">
            {card.eyebrow}
          </p>
          <p className="text-zinc-100 font-semibold text-base">{card.title}</p>
          <p className="text-xs text-zinc-500 mt-1">{card.sub}</p>
        </div>
      ))}
    </div>
  );
};

export default Bento;
