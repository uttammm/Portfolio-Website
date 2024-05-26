import './App.css';
import { Welcome } from './components/welcome';
import Projects from './components/projects';
import ProfileCard from './components/profilecard';
import profiles from './components/profiles';

function App() {
  return (
    <div className='background-container'>
      <div className="profile-grid">
      {profiles.map(profile => (
        <ProfileCard key={profile.name} profile={profile} />
      ))}
    </div>
    </div>
  );
}


export default App;
