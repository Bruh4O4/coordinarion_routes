import cn from 'classnames';
import { Input } from '../../components/Input/Input';
import { PasswordInput } from '../../components/PasswordInput/PasswordInput';
import { Button } from '../../components/Button/Button';
import { useAuth } from '../../helpers/useAuth';
import styles from './Auth.module.css';

export const Auth = () => {
  const { email, setEmail, password, setPassword, error, isSubmitting, handleSubmit } = useAuth();

  return (
    <div className={styles.page}>
      <div className={cn(styles.card)}>
        <h2 className={styles.title}>Войти в  аккаунт</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            label="Логин"
            labelClassName={styles.loginInputLabel}
            type="email"
            placeholder="ivanov@company.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            classNameInput={styles.loginInput}
            required
          />

          <PasswordInput
            label="Пароль"
            labelClassName={styles.loginInputLabel}
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            classNameInput={styles.loginInput}
            required
          />

          {error && <p className={styles.error}>{error}</p>}

          <Button type="submit" isLoading={isSubmitting} className={styles.loginBtn}>
            Подтвердить
          </Button>
        </form>
        
      </div>
    </div>
  );
};
