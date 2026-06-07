export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<IButton> = ({ variant = 'primary', ...props }) => {
  const base =
    'px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap';

  const variants = {
    primary: `border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300 ${base}`,
    secondary: `border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 ${base}`,
  };

  return (
    <button {...props} className={`${variants[variant ?? 'primary']} ${props.className ?? ''}`}>
      {props.children}
    </button>
  );
};

export default Button;
