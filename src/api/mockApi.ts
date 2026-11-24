import type { NotificationItem } from '../types/INotificationItem';
import type { RequestWithAnalytics } from '../types/interface';
import { MOCK_NOTIFICATIONS, MOCK_REQUESTS } from '../mocks/mockData';

const STORAGE_KEY = 'mock_requests_data';

export const getMockRequests = (): RequestWithAnalytics[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_REQUESTS));

    return MOCK_REQUESTS;
  }
  catch (e: unknown) {
    console.error('Ошибка чтения моков из localStorage:', e);
    return MOCK_REQUESTS;
  }
};

export const addMockRequest = (newReq: RequestWithAnalytics) => {
  const current = getMockRequests();
  const updated = [newReq, ...current];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const updateMockRequestDecision = (
  id: string,
  status: RequestWithAnalytics['status'],
  comment: string
) => {
  const current = getMockRequests();
  const updated = current.map((req) =>
    req.id === id ? { ...req, status, comment: comment || null } : req
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};



const NOTIF_STORAGE_KEY = 'mock_notifications_data';

export const getMockNotifications = (): NotificationItem[] => {
  try {
  const saved = localStorage.getItem(NOTIF_STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  localStorage.setItem(NOTIF_STORAGE_KEY, JSON.stringify(MOCK_NOTIFICATIONS));

  return MOCK_NOTIFICATIONS;
  }
  catch (e: unknown) {
    console.error('Ошибка чтения моков из localStorage:', e);
    return MOCK_NOTIFICATIONS;
  }
};

export const markAllMockNotificationsRead = (): NotificationItem[] => {
  const updated = getMockNotifications().map((n) => ({ ...n, isRead: true }));
  localStorage.setItem(NOTIF_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const addMockNotification = (
  status: NotificationItem['status'],
  text: string
) => {
  const current = getMockNotifications();
  const newNotif: NotificationItem = {
    id: `notif-${Date.now()}`,
    status,
    text,
    createdAt: new Date().toISOString(),
    isRead: false,
  };
  localStorage.setItem(NOTIF_STORAGE_KEY, JSON.stringify([newNotif, ...current]));

  // Переписать оповещение с помощью context !!!
  // window.dispatchEvent(new Event('notifications:updated'));
};

export const updateMockRequestContent = (
  id: string,
  payload: {
    dateFrom: string;
    dateTo: string;
    reason: string;
    dailyAllowance?: number;
    destination?: string;
  }
) => {
  const current = getMockRequests();
  const updated = current.map((req) => {
    if (req.id !== id) return req;
    const baseUpdated = {
      ...req,
      status: 'pending' as const,
      dateFrom: payload.dateFrom,
      dateTo: payload.dateTo,
      reason: payload.reason,
    };
    return req.type === 'trip'
      ? {
          ...baseUpdated,
          dailyAllowance: payload.dailyAllowance ?? req.dailyAllowance,
          destination: payload.destination ?? req.destination,
        }
      : baseUpdated;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};