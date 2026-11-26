import { useContext } from 'react';
import { AuthContext } from '../context/authContextInstance';

export const useLanding = () => {
  const auth = useContext(AuthContext);

  const redirectTo =
    auth?.isAuth && auth.user
      ? auth.user.role === 'employer'
        ? '/employer/vacations'
        : '/my-requests'
      : null;

  return { redirectTo };
};
