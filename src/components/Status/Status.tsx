import React from 'react';
import type { RequestStatus } from '../../types/interface';
import styles from './Status.module.css';

const STATUS_LABELS: Record<RequestStatus, string> = {
  pending: 'На рассмотрении',
  revision: 'На доработке',
  approved: 'Согласовано',
  rejected: 'Отказано',
};

export const Status: React.FC<{ status: RequestStatus }> = ({ status }) => {
  return (
    <div className={styles.status}>
      <span className={styles.label}>Статус:</span>
      <span className={`${styles[status]} ${styles.statusInfo}`}>
          {STATUS_LABELS[status]}
      </span>
    </div>
  );
};