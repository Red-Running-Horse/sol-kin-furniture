
import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button.jsx';
import { cn } from '@/lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  className,
  ...props 
}) => {
  const variantStyles = {
    primary: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] active:scale-[0.98]',
    secondary: 'bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90 active:scale-[0.98]',
    destructive: 'bg-[hsl(25_48%_30%)] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(25_48%_25%)] active:scale-[0.98]',
    outline: 'border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] bg-transparent hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] active:scale-[0.98]',
    ghost: 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] active:scale-[0.98]'
  };

  return (
    <ShadcnButton
      className={cn(
        'rounded-lg font-medium transition-all duration-200',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
};

export default Button;
