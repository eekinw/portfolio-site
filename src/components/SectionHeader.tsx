interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="flex items-center gap-6 mb-12">
      <h2 className="text-2xl font-bold text-zinc-50 whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>
  );
};

export default SectionHeader;
