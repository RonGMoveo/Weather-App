import type { ReactNode } from 'react';
import { Button } from './ui/button';

interface ActionButtonProps {
  variant: 'search' | 'temperature' | 'history';
  onClick: () => void;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const ActionButton = ({ 
  variant, 
  onClick, 
  children, 
  size = 'medium', 
  disabled = false 
}: ActionButtonProps) => {
  const getShadcnVariant = () => {
    switch (variant) {
      case 'search':
        return 'default'; 
      case 'temperature':
        return 'outline'; 
      case 'history':
        return 'ghost'; 
      default:
        return 'default';
    }
  };

  const getShadcnSize = () => {
    switch (size) {
      case 'small':
        return 'sm';
      case 'medium':
        return 'default';
      case 'large':
        return 'lg';
      default:
        return 'default';
    }
  };

  const getCustomSizeClasses = () => {
    switch (size) {
      case 'large':
        return 'px-8 py-4 text-lg h-15'; 
      case 'medium':
        return 'px-4 py-3';
      case 'small':
        return 'px-3 py-2 text-sm';
      default:
        return '';
    }
  };

  return (
    <Button
      variant={getShadcnVariant()}
      size={getShadcnSize()}
      onClick={onClick}
      disabled={disabled}
      title={variant === 'temperature' ? 'Switch temperature unit' : undefined}
      className={getCustomSizeClasses()}
    >
      {children}
    </Button>
  );
};

export default ActionButton;