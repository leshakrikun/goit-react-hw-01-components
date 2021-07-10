import './App.css';
import Profile from './components/Profile/profile';
import Statistics from './components/Statistics/statistics';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';

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
      ,
      {statisticalData.map(statistic => (
        <Statistics
          key={statisticalData.id}
          label={statisticalData.label}
          percentage={statisticalData.percentage}
        />
      ))}
    </div>
  );
}
