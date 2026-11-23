import styles from './InfoField.module.css'

interface InfoFieldProps {
  label: string;
  value: string | number | null | undefined;
}

export function InfoField({ label, value }: InfoFieldProps) {
    return (
        <div className={styles['infoField']}>
            <span className={styles['label']}>{label}</span>
            <span className={styles['value']}>{value ?? '—'}</span>
        </div>
    );
}