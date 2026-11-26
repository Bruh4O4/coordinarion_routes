import type { AbsenceMonthStat } from '../../types/interface';

export interface BarChartProps {
  data: AbsenceMonthStat[];
}

export interface PreparedBarItem {
  month: string;
  shortMonth: string;
  days: number;
  heightPercent: number;
  isEmpty: boolean;
}
