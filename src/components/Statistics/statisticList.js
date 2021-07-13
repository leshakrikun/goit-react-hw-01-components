import PropTypes from 'prop-types';
import Statistics from './statistics';
import s from './statistic.module.css';

export default function StatisticList({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(stats => (
          <li key={stats.id} className={s.item}>
            <Statistics label={stats.label} percentage={stats.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
StatisticList.propTypes = {
  title: PropTypes.string,
};
