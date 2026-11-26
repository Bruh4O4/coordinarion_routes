import type { ReactNode } from 'react';

export interface PageHeaderProps {
  title: string;
  rightSlot?: ReactNode;
  className?: string;
}
