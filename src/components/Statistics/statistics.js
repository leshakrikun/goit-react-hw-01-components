import PropTypes from 'prop-types';
import s from './statistic.module.css';
export default function Statistics({ id, label, percentage }) {
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </>
  );
}
Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
