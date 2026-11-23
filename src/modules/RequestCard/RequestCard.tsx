import styles from './RequestCard.module.css';
// import type { AppRequest } from '../../types/interface';
import { InfoField } from '../../components/InfoField/InfoField';
import { Status } from '../../components/Status/Status';

interface RequestCardProps {
//   request: AppRequest;
  showEmployeeInfo?: boolean;
  onClick: () => void;
}

export function RequestCard(
    { showEmployeeInfo = false, onClick }: RequestCardProps
) {
  return (
    <div className={styles.card} onClick={onClick}>
        <div className={styles.allFields}>
            {showEmployeeInfo && (
                <div className={styles.fields}>
                    <InfoField label="Сотрудник" value={'fio'} />
                    <InfoField label="Отдел" value={'departure'} />
                </div>
            )}
            <div className={styles.fields}>
                <InfoField
                    label="Тип:"
                //   value={request.type === 'vacation' ? 'Отпуск' : 'Командировка'}
                    value={'type'}
                />
                <InfoField label="Даты:" value={`request.dateFrom - request.dateTo`} />
            </div>
        </div>
      <Status status={'pending'} />
    </div>
  );
}