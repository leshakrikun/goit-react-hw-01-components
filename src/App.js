import './App.css';
import Profile from './components/Profile/profile';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import StatisticList from './components/Statistics/statisticList';
import FriendList from './components/FriendList/friendList';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />,
    </div>
  );
}
