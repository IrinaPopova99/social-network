import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import { Routers } from './routers/Routers';

const App = (props) => (
    <div className='wrapper'>
        <HeaderContainer />
        <div className="main-wrapper">
            <Navbar />
            <Routers />
            <SidebarContainer />
        </div>
    </div>
)

export default App;
