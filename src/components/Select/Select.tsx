import cn from 'classnames';
import type { SelectProps } from './Select.props';
import styles from '../Input/Input.module.css';

export const Select = ({
  label,
  labelClassName,
  options,
  placeholder,
  classNameFont,
  className,
  ...props
}: SelectProps) => {
  return (
    <div className={cn(styles.field, className)}>
      {label && <label className={cn(styles.label, labelClassName)}>{label}</label>}
      <select className={cn(styles.control, classNameFont)} {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
