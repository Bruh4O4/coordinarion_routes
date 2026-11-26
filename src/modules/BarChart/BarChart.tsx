import cn from 'classnames';
import type { BarChartProps } from './BarChart.props';
import { prepareBarChartData } from '../../helpers/chartHelpers';
import styles from './BarChart.module.css';

export const BarChart = ({ data }: BarChartProps) => {
  const bars = prepareBarChartData(data);

  return (
    <div className={styles.chart}>
      {bars.map((item) => (
        <div key={item.month} className={styles.column}>
          <span className={cn(styles.value, { [styles.valueEmpty]: item.isEmpty })}>
            {item.days}
          </span>

          <div
            className={cn(styles.bar, { [styles.barEmpty]: item.isEmpty })}
            style={{ height: `${item.heightPercent}%` }}
            title={`${item.month}: ${item.days} дн.`}
          />

          <span className={styles.label}>{item.shortMonth}</span>
        </div>
      ))}
    </div>
  );
};
