import Friend from './friends';
import s from './friends.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={s.friendLlist}>
      {friends.map(friends => (
        <li key={friends.id} className={s.item}>
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
