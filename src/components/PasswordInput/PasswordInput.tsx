import { useState} from 'react';
import cn from 'classnames';
import eyeOpenIcon from '../../assets/eye-open.svg';
import eyeClosedIcon from '../../assets/eye-closed.svg';
import styles from './PasswordInput.module.css';
import stylesInput from '../Input/Input.module.css';
import type { InputProps } from '../Input/Input.props';


export const PasswordInput = ({
  label = 'Пароль',
  labelClassName,
  error, 
  classNameInput,
  className,
  ...props
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={cn(stylesInput.field, className)}>
      {label && <label className={cn(stylesInput.label, labelClassName)}>{label}</label>}
      <div className={stylesInput.wrapper}>
        <input
          type={isVisible ? 'text' : 'password'}
          className={cn(stylesInput.control, styles.withIcon, classNameInput)}
          {...props}
        />
        <button
          type="button"
          className={styles.iconBtn}
          onClick={() => setIsVisible((prev) => !prev)}
          aria-label="Показать или скрыть пароль"
        >
          <img
            src={isVisible ? eyeOpenIcon : eyeClosedIcon}
            alt=""
          />
        </button>
      </div>
      {error && <span className={stylesInput.error}>{error}</span>}
    </div>
  );
};
