import { Route } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App = (props) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="main-wrapper">
        <Navbar />
        <div className="content main">
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/music" component={Music} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <Profile />} />
        </div>
        <SidebarContainer />
      </div>
    </div>
  );
}

export default App;
