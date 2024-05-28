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
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'bg-blue-50 hover:bg-blue-60 text-white'
    : 'bg-grey-50 hover:bg-grey-60 text-white';

  const sizeClass = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-3 py-2',
    large: 'text-lg px-4 py-3',
  };

  return (
    <button
      type='button'
      className={`font-bold rounded ${sizeClass[size]} ${mode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
