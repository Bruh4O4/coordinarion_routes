import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { Button } from '../../components/Button/Button';
import type { SideBarProps } from './SideBar.props';
import { useSideBar } from '../../helpers/useSideBar';
import styles from './SideBar.module.css';

export const SideBar = ({ unreadCount = 0 }: SideBarProps) => {
  const { fullName, roleLabel, navItems, handleLogout } = useSideBar(unreadCount);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(styles.link, { [styles.active]: isActive });

  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.userBlock}>
          <span className={styles.userName}>{fullName}</span>
          <span className={styles.userRole}>{roleLabel}</span>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={getLinkClass}>
              <span>{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className={styles.badge}>{item.badge}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <Button variant="ghost" onClick={handleLogout}>
        Выйти
      </Button>
    </aside>
  );
};
