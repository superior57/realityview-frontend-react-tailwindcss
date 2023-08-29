import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

// ----------------------------------------------------------------------
export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'inherit' | 'primary' | 'secondary';
  variant?: 'contained' | 'outlined' | 'text' | 'icon';
  size?: 'medium' | 'small';
};

const Button = ({
  className,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  children,
  ...other
}: Props) => {
  return (
    <button
      className={classNames(
        'w-fit rounded-5 font-semibold leading-23 text-18 font-montserrat disabled:bg-button-disabled cursor-pointer',
        {
          ['bg-button-primary hover:bg-button-primary-hover text-white']:
            color === 'primary' && variant === 'contained',
          ['border-1 border-primary text-primary']:
            color === 'primary' && variant === 'outlined',
          ['px-4']: variant !== 'icon',
          ['px-1']: variant === 'icon',
          ['h-10']: size === 'medium',
          ['h-5']: size === 'small',
        },
        className
      )}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
