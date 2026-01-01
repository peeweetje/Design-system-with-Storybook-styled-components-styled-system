import React from 'react';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'info' | 'success' | 'warning' | 'delete';

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
  size?: ButtonSize;
  /**
   * Which variants are available?
   */
  variant?: ButtonVariant;
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
    info: 'bg-blue-60 hover:bg-blue-70 text-white',
    success: 'bg-green-60 hover:bg-green-70 text-white',
    warning: 'bg-yellow-60 hover:bg-yellow-70 text-white',
    delete: 'bg-red-60 hover:bg-red-70 text-white',
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
  const mode = primary
    ? buttonStyles.mode.primary
    : variant
      ? ''
      : buttonStyles.mode.default;
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
