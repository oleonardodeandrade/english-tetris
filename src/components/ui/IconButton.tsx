import { ButtonHTMLAttributes, ReactNode } from 'react';

type IconButtonVariant = 'ghost' | 'solid' | 'outline';
type IconButtonSize = 'sm' | 'md' | 'lg';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon: ReactNode;
  'aria-label': string;
}

const variantStyles: Record<IconButtonVariant, string> = {
  ghost: 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30',
  solid: 'bg-white text-purple-600 hover:bg-purple-50 shadow-lg',
  outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
};

const sizeStyles: Record<IconButtonSize, string> = {
  sm: 'w-8 h-8 text-lg',
  md: 'w-10 h-10 text-xl',
  lg: 'w-12 h-12 text-2xl',
};

export const IconButton = ({
  variant = 'ghost',
  size = 'md',
  icon,
  className = '',
  disabled,
  ...props
}: IconButtonProps) => {
  const baseStyles = 'rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon}
    </button>
  );
};
