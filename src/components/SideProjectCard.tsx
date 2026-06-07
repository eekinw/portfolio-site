import { FaGithub } from 'react-icons/fa';

interface SideProjectCardProps {
  name: string;
  description: string;
  lang: string[];
  href: string;
}

const SideProjectCard = ({ name, description, lang, href }: SideProjectCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500/40 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex justify-between items-start mb-5">
        <div className="text-zinc-600 group-hover:text-indigo-500 transition-colors">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
          </svg>
        </div>
        <FaGithub size={18} className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
      </div>

      <h5 className="text-zinc-100 font-semibold text-base mb-2 group-hover:text-indigo-300 transition-colors">
        {name}
      </h5>
      <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-5">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {lang.map((language) => (
          <span
            key={language}
            className="text-xs font-mono text-indigo-400/70 px-2 py-0.5 rounded border border-indigo-500/20 bg-indigo-500/5"
          >
            {language}
          </span>
        ))}
      </div>
    </a>
  );
};

export default SideProjectCard;
