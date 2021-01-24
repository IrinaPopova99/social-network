import { Route } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

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
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} />} />
        </div>
        <Sidebar state={props.state.sidebar} />
      </div>
    </div>
  );
}

export default App;
