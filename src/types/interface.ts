export type UserRole = 'employee' | 'employer';

export interface User {
    id: string;
    email: string;
    fullName: string;
    role: UserRole;
    department?: string;
    position?: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}

export type RequestType = 'vacation' | 'trip';

export type RequestStatus = 'pending' | 'revision' | 'approved' | 'rejected';

interface BaseRequest {
    id: string;
    number: string;
    type: RequestType;
    status: RequestStatus;
    dateFrom: string;
    dateTo: string;
    reason: string;
    comment: string | null;
    createdAt: string;
    employee: {
        id: string;
        fullName: string;
        department: string;
        position: string;
    };
}

export interface VacationRequest extends BaseRequest {
    type: 'vacation';
}

export interface TripRequest extends BaseRequest {
    type: 'trip';
    dailyAllowance: number;
    destination: string;
}

export type AppRequest = VacationRequest | TripRequest;

export interface AbsenceMonthStat {
    month: string;
    days: number;
}

export interface RequestAnalytics {
    absenceStats: AbsenceMonthStat[];
    importancePercent: number;
    canBeReleased: boolean;
    recommendationText: string;
}

export type RequestWithAnalytics = AppRequest & {
    analytics?: RequestAnalytics;
};

export interface CreateRequestDto {
    type: RequestType;
    dateFrom: string;
    dateTo: string;
    reason: string;
    dailyAllowance?: number;
    destination?: string;
}

export type DecisionAction = 'approved' | 'revision' | 'rejected';

export interface DecisionDto {
    decision: DecisionAction;
    comment: string;
}

export interface DictionariesResponse {
    departments: string[];
    positions: string[];
}