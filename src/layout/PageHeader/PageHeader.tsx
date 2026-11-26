import cn from 'classnames';
import type { PageHeaderProps } from './PageHeader.props';
import styles from './PageHeader.module.css';

export const PageHeader = ({ title, rightSlot, className }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={cn(styles.title, className)}>{title}</h1>
      {rightSlot && <div>{rightSlot}</div>}
    </header>
  );
};
