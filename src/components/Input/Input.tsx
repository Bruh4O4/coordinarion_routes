import cn from 'classnames';
import type { InputProps } from './Input.props';
import styles from './Input.module.css';

export const Input = ({
  label,
  labelClassName,
  error,
  classNameInput,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={cn(styles.field, className)}>
      {label && <label className={cn(styles.label, labelClassName)}>{label}</label>}
      <div className={cn(styles.wrapper)}>
        <input
          className={cn(styles.control, classNameInput)}
          {...props}
        />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};