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
  variant?: 'info' | 'succes' | 'warning' | 'delete';
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
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-3 py-2',
    large: 'text-lg px-4 py-3',
  },
  variant: {
    info: 'bg-blue-70 hover:bg-blue-80 text-white',
    success: 'bg-green-70 hover:bg-green-80 text-white',
    warning: 'bg-yellow-70 hover:bg-yellow-80 text-white',
    delete: 'bg-red-70 hover:bg-red-80 text-white',
  },
  mode: {
    primary: 'bg-blue-60 hover:bg-blue-70 text-white',
    default: 'bg-grey-60 hover:bg-grey-70 text-white',
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
