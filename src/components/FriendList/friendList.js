import PropTypes from 'prop-types';
import Friend from './friends';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friends => (
        <li key={friends.id} className="item">
          <Friend
            isOnline={friends.isOnline}
            avatar={friends.avatar}
            name={friends.name}
          />
        </li>
      ))}
    </ul>
  );
}
/*   FriendList.propTypes = {
    title: PropTypes.string
}   */
