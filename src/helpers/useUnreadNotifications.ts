import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/authContextInstance';
import { getMockNotifications } from '../api/mockApi';

export const useUnreadNotifications = () => {
  const auth = useContext(AuthContext);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const loadUnreadCount = async () => {
      if (auth?.user?.role !== 'employee') return;

      try {
        const list = getMockNotifications();
        if (isMounted) {
          setUnreadCount(list.filter((n) => !n.isRead).length);
        }
      } catch {
        // Игнорируем фоновую ошибку
      }
    };

    void loadUnreadCount();
    window.addEventListener('notifications:updated', loadUnreadCount);

    const intervalId = setInterval(() => {
      void loadUnreadCount();
    }, 30000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
      window.removeEventListener('notifications:updated', loadUnreadCount);
    };
  }, [auth?.user?.role]);

  return unreadCount;
};
