import { Outlet } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar';
// import { useUnreadNotifications } from '../../../helpers/useUnreadNotifications';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  // const unreadCount = useUnreadNotifications();
  const unreadCount = 0;

  return (
    <div className={styles.layout}>
      <SideBar unreadCount={unreadCount} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
