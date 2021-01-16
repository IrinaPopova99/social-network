import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <div className="main-wrapper">
          <Navbar />
          <div className="content main">
            <Route path="/news" component={News} />
            <Route path="/settings" component={Settings} />
            <Route path="/music" component={Music} />
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/profile" component={Profile} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
