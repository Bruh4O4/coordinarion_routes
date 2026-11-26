export interface NavItem {
  to: string;
  label: string;
  badge?: number;
}

export interface SideBarProps {
  unreadCount?: number;
}
