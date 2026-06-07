interface NumberedListProps {
  number: string;
  title: string;
}

const NumberedList = ({ number, title }: NumberedListProps) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-gold font-mono text-sm">{number}.</span>
      <h2 className="text-2xl font-bold text-[#e6edf3] whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent max-w-xs" />
    </div>
  );
};

export default NumberedList;
