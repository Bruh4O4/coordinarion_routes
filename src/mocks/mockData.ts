import type { NotificationItem } from '../types/INotificationItem';
import type {
  User,
  RequestWithAnalytics,
  DictionariesResponse,
} from '../types/interface';

export const MOCK_USERS: Record<'employee' | 'employer', User> = {
  employee: {
    id: 'emp-001',
    email: 'ivanov@company.ru',
    fullName: 'Иванов Иван Иванович',
    role: 'employee',
    department: 'Отдел разработки',
    position: 'Frontend-разработчик',
  },
  employer: {
    id: 'boss-001',
    email: 'petrov@company.ru',
    fullName: 'Петров Пётр Сергеевич',
    role: 'employer',
    department: 'Руководство',
    position: 'Технический директор',
  },
};

export const MOCK_DICTIONARIES: DictionariesResponse = {
  departments: ['Отдел разработки', 'Отдел дизайна', 'Бухгалтерия', 'Отдел продаж'],
  positions: ['Frontend-разработчик', 'Backend-разработчик', 'UI/UX Дизайнер', 'Менеджер'],
};

export const MOCK_REQUESTS: RequestWithAnalytics[] = [
  {
    id: 'req-101',
    number: '12345',
    type: 'vacation',
    status: 'pending',
    dateFrom: '2026-12-10',
    dateTo: '2026-12-24',
    reason: 'Ежегодный оплачиваемый отпуск',
    comment: null,
    createdAt: '2026-11-20T10:00:00Z',
    employee: {
      id: 'emp-001',
      fullName: 'Иванов Иван Иванович',
      department: 'Отдел разработки',
      position: 'Frontend-разработчик',
    },
    analytics: {
      absenceStats: [
        { month: 'Сентябрь', days: 0 },
        { month: 'Октябрь', days: 3 },
        { month: 'Ноябрь', days: 0 },
      ],
      importancePercent: 72,
      canBeReleased: true,
      recommendationText: 'Сотрудника можно отпустить: критических релизов на эти даты не запланировано.',
    },
  },
  {
    id: 'req-102',
    number: '12346',
    type: 'trip',
    status: 'approved',
    dateFrom: '2026-11-28',
    dateTo: '2026-12-02',
    destination: 'г. Санкт-Петербург, Офис партнёров',
    dailyAllowance: 2500,
    reason: 'Интеграция систем с заказчиком',
    comment: 'Согласовано, билеты забронирует офис-менеджер.',
    createdAt: '2026-11-15T14:20:00Z',
    employee: {
      id: 'emp-001',
      fullName: 'Иванов Иван Иванович',
      department: 'Отдел разработки',
      position: 'Frontend-разработчик',
    },
    analytics: {
      absenceStats: [
        { month: 'Сентябрь', days: 2 },
        { month: 'Октябрь', days: 0 },
        { month: 'Ноябрь', days: 4 },
      ],
      importancePercent: 85,
      canBeReleased: true,
      recommendationText: 'Поездка необходима для закрытия этапа проекта.',
    },
  },
];

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    status: 'approved',
    text: 'Ваше заявление #12346 (Командировка) было согласовано руководителем.',
    createdAt: '2026-11-16T09:15:00Z',
    isRead: false,
  },
  {
    id: 'notif-2',
    status: 'pending',
    text: 'Заявление #12345 (Отпуск) отправлено на рассмотрение.',
    createdAt: '2026-11-20T10:01:00Z',
    isRead: true,
  },
];