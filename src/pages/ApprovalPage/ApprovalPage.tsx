import { PageHeader } from '../../layout/PageHeader/PageHeader';
import { Status } from '../../components/Status/Status';
import { Button } from '../../components/Button/Button';
import { InfoField } from '../../components/InfoField/InfoField';
import { BarChart } from '../../modules/BarChart/BarChart';
import { Textarea } from '../../components/Textarea/Textarea';
import { useApprovalPage } from '../../helpers/useApprovalPage';
import styles from './ApprovalPage.module.css';

export const ApprovalPage = () => {
  const {
    request,
    comment,
    setComment,
    isLoading,
    isSubmitting,
    goBackToList,
    handleDecision,
  } = useApprovalPage();


  if (isLoading) {
    return <p className={styles.emptyText}>Загрузка данных заявления...</p>;
  }

  if (!request) {
    return (
      <div>
        <p className={styles.emptyText}>Заявление не найдено</p>
        <Button variant="secondary" onClick={goBackToList}>
          Вернуться к списку
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <PageHeader
        title={`Заявление #${request.number} / ${request.employee.fullName}`}
        rightSlot={
          <div className={styles.headerRight}>
            <Status status={request.status} />
            <Button variant="ghost" onClick={goBackToList} aria-label="Закрыть">
              ✕
            </Button>
          </div>
        }
        className={styles.approvalPageHeader}
      />

      <section>
        <h3 className={styles.sectionTitle}>Данные заявления</h3>
        <div className={styles.card}>
          <InfoField label="Сотрудник" value={request.employee.fullName} />
          <InfoField label="Отдел" value={request.employee.department} />
          <InfoField label="Должность" value={request.employee.position} />
          <InfoField
            label="Тип заявления"
            value={request.type === 'vacation' ? 'Отпуск' : 'Командировка'}
          />
          <InfoField label="Дата начала" value={request.dateFrom} />
          <InfoField label="Дата окончания" value={request.dateTo} />

          {request.type === 'trip' && (
            <>
              <InfoField label="Суточные" value={`${request.dailyAllowance} ₽`} />
              <InfoField label="Направление" value={request.destination} />
            </>
          )}

          <InfoField label="Причина" value={request.reason} />
        </div>
      </section>

      {request.analytics && (
        <div className={styles.analyticsGrid}>
          <section className={styles.analyticsSection}>
            <h3 className={styles.sectionTitle}>Статистика отсутствий</h3>
            <div className={styles.card}>
              <BarChart data={request.analytics.absenceStats} />
            </div>
          </section>

          <section className={styles.analyticsSection}>
            <h3 className={styles.sectionTitle}>Оценка влияния на работу</h3>
            <div className={styles.card}>
              <p className={styles.importanceText}>Этот сотрудник нужен на:</p>
              <p className={styles.importancePercent}>{request.analytics.importancePercent}%</p>
              <p className={styles.recommendation}>{request.analytics.recommendationText}</p>
            </div>
          </section>
        </div>
      )}

      <section>
        <h3 className={styles.sectionTitle}>Комментарий</h3>
        <div className={styles.card}>
          <Textarea
            placeholder="Оставьте комментарий для сотрудника..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={styles.textarea}
          />
        </div>
      </section>

      <div className={styles.actions}>
        <div className={styles.goodActions}>
          <Button
            variant="primary"
            disabled={isSubmitting}
            onClick={() => handleDecision('approved')}
            className={styles.approvalBtn}
          >
            Согласовать
          </Button>
          <Button
            variant="secondary"
            disabled={isSubmitting}
            onClick={() => handleDecision('revision')}
            className={styles.approvalBtn}
          >
            Отправить на доработку
          </Button>
        </div>
        <Button
          variant="withBorder"
          disabled={isSubmitting}
          onClick={() => handleDecision('rejected')}
          className={styles.approvalBtn}
        >
          Отказать
        </Button>
      </div>
    </div>
  );
};
