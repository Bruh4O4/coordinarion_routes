import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContextInstance';
import type { NavItem } from '../layout/SideBar/SideBar.props';

export const useSideBar = (unreadCount = 0) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.logout();
    navigate('/');
  };

  const role = auth?.user?.role;
  const fullName = auth?.user?.fullName || '';
  const roleLabel = role === 'employer' ? 'Работодатель' : 'Сотрудник';

  const navItems: NavItem[] =
    role === 'employer'
      ? [
          { to: '/employer/vacations', label: 'Отпуска' },
          { to: '/employer/business-trips', label: 'Командировки' },
        ]
      : [
          { to: '/application', label: 'Заявления' },
          { to: '/history', label: 'История' },
          { to: '/notification', label: 'Уведомления', badge: unreadCount },
        ];

  return {
    fullName,
    roleLabel,
    navItems,
    handleLogout,
  };
};
