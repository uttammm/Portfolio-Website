import './App.css';
import { Welcome } from './components/welcome';
import Projects from './components/projects';
import ProfileCard from './components/profilecard';
import profiles from './components/profiles';
import Header from './components/header';

function App() {
  return (
    <div className='background-container'>
      <Header></Header>
      <Welcome></Welcome>
    </div>
  );
}


export default App;
