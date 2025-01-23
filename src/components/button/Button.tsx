import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * which variants are available?
   */
  variant?: 'info' | 'success' | 'warning' | 'delete';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const buttonStyles = {
  default: 'font-medium rounded',
  size: {
    small: 'text-xs px-1 py-1',
    medium: 'text-sm px-1.5 py-1.5',
    large: 'text-lg px-2 py-2',
  },
  variant: {
    info: 'bg-blue-80 hover:bg-blue-90 text-white',
    success: 'bg-green-80 hover:bg-green-90 text-white',
    warning: 'bg-yellow-80 hover:bg-yellow-90 text-white',
    delete: 'bg-red-80 hover:bg-red-90 text-white',
  },
  mode: {
    primary: 'bg-blue-80 hover:bg-blue-70 text-white',
    default: 'bg-grey-80 hover:bg-grey-70 text-white',
  },
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  variant,
  ...props
}: ButtonProps) => {
  const mode = primary ? buttonStyles.mode.primary : buttonStyles.mode.default;
  const variantClass = variant ? buttonStyles.variant[variant] : '';
  const sizeClass = buttonStyles.size[size];

  return (
    <button
      type='button'
      className={`${buttonStyles.default} ${sizeClass} ${variantClass} ${mode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
