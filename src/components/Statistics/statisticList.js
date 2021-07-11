import PropTypes from 'prop-types';
import Statistics from './statistics';

export default function StatisticList({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(stats => (
          <li key={stats.id} className="item">
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
