import SectionHeader from './SectionHeader';

const stack = [
  {
    category: 'Frontend',
    items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'Ruby on Rails',
      'NestJS',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'TimescaleDB',
      'Redis',
      'BullMQ',
    ],
  },
  {
    category: 'Cloud',
    items: ['AWS', 'GitHub Actions', 'Docker', 'CI/CD'],
  },
  {
    category: 'AI tools',
    items: ['Claude', 'Codex'],
  },
];

const TechStack = () => {
  return (
    <>
      <SectionHeader title="Tech Stack" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stack.map(({ category, items }) => (
          <div
            key={category}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-colors"
          >
            <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-4">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-zinc-300 bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
