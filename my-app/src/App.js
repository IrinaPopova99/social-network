import { Route } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App = (props) => {
  return (
    <div className='wrapper'>
      <HeaderContainer />
      <div className="main-wrapper">
        <Navbar />
        <div className="content main">
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        </div>
        <SidebarContainer />
      </div>
    </div>
  );
}

export default App;
