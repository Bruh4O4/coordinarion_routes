import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import authImg from '../../assets/auth-image.jpg';
import { useLanding } from '../../helpers/useLanding';
import styles from './Landing.module.css';

export const Landing = () => {
  const navigate = useNavigate();

  const { redirectTo } = useLanding();

  if (redirectTo) {
    return <Navigate to={redirectTo} replace />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src={authImg}
            alt="Сервис отпусков и командировок"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Сервис отпусков и командировок</h1>
          <p className={styles.description}>
            Удобное оформление заявлений и быстрое согласование отсутствий сотрудников.
          </p>

          <Button
            className={styles.loginBtn}
            onClick={() => navigate('/auth')}
          >
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};
