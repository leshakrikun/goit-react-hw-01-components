import PropTypes from 'prop-types';
import s from './friends.module.css';
export default function Friend({ avatar, isOnline, name }) {
  let type;
  if (isOnline) {
    type = 'online';
  }
  if (!isOnline) {
    type = 'offline';
  }
  return (
    <>
      <span className={`${s[type]}`}></span>
      <img className={s.avatar} src={avatar} alt="avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}
Friend.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
