import cn from 'classnames';
import type { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(styles.btn, styles[variant], className)}
      {...props}
    >
      {isLoading ? 'Загрузка...' : children}
    </button>
  );
};
