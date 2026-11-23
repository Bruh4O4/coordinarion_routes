export interface NotificationItem {
    id: string;
    status: 'approved' | 'rejected' | 'pending';
    text: string;
    createdAt: string;
    isRead: boolean;
}