import type { AbsenceMonthStat } from '../types/interface';
import type { PreparedBarItem } from '../modules/BarChart/BarChart.props';

const SHORT_MONTHS: Record<string, string> = {
  Январь: 'Янв',
  Февраль: 'Фев',
  Март: 'Мар',
  Апрель: 'Апр',
  Май: 'Май',
  Июнь: 'Июн',
  Июль: 'Июл',
  Август: 'Авг',
  Сентябрь: 'Сен',
  Октябрь: 'Окт',
  Ноябрь: 'Ноя',
  Декабрь: 'Дек',
};

export const prepareBarChartData = (data: AbsenceMonthStat[]): PreparedBarItem[] => {
  const maxDays = Math.max(...data.map((d) => d.days), 1);

  return data.map((item) => {
    const isEmpty = item.days === 0;
    const heightPercent = isEmpty
      ? 3
      : Math.max(Math.round((item.days / maxDays) * 100), 8);

    return {
      month: item.month,
      shortMonth: SHORT_MONTHS[item.month] || item.month.slice(0, 3),
      days: item.days,
      heightPercent,
      isEmpty,
    };
  });
};
