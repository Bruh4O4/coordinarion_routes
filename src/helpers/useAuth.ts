import { useState, useContext, type SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContextInstance';

export const useAuth = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (!auth) return;
      const user = await auth.login({ email, password });
      const target = user.role === 'employer' ? '/employer/vacations' : '/employee/application';
      navigate(target, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Неверный email или пароль');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isSubmitting,
    handleSubmit,
  };
};
