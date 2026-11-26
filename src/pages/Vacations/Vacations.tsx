import { PageHeader } from '../../layout/PageHeader/PageHeader';
import { Select } from '../../components/Select/Select';
import { Input } from '../../components/Input/Input';
import { RequestCard } from '../../modules/RequestCard/RequestCard';
import type { VacationsProps } from './Vacations.props';
import { useVacations } from '../../helpers/useVacations';
import styles from './Vacations.module.css';

export const Vacations = ({ type }: VacationsProps) => {
  const {
    filteredRequests,
    dictionaries,
    isLoading,
    department,
    setDepartment,
    position,
    setPosition,
    search,
    setSearch,
    handleSelectRequest,
  } = useVacations(type);

  return (
    <div>
      <PageHeader title={type === 'vacation' ? 'Отпуска' : 'Командировки'} className={styles.lkTitle} />

      <div className={styles.filters}>
        <Select
          label="Отдел"
          labelClassName={styles.filter}
          placeholder="Все отделы"
          classNameFont={styles.filterInput}
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          options={dictionaries.departments.map((d) => ({ value: d, label: d }))}
        />
        <Select
          label="Должность"
          labelClassName={styles.filter}
          placeholder="Все должности"
          classNameFont={styles.filterInput}
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          options={dictionaries.positions.map((p) => ({ value: p, label: p }))}
        />
        <Input
          label="Поиск по сотруднику"
          labelClassName={styles.filter}
          classNameInput={styles.filterInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.list}>
        {isLoading ? (
          <p className={styles.emptyText}>Загрузка заявлений...</p>
        ) : filteredRequests.length === 0 ? (
          <p className={styles.emptyText}>Заявлений по выбранным фильтрам не найдено.</p>
        ) : (
          filteredRequests.map((req) => (
            <RequestCard
              key={req.id}
              // request={req}
              showEmployeeInfo
              onClick={() => handleSelectRequest(req.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};
