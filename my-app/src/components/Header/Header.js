import { NavLink } from 'react-router-dom';
import logo from './../../static/logo.png';
import userPhoto from './../../assets/images/user.jpeg';
import './Header.css';

const Header = (props) => {
    return (
        <header className="header">
            <div className='logo-block'>
                <div className='logo-block__image'><img alt="{logo}" src={logo} /></div>
                <div className='logo-block__text'><span>My Network</span></div>
            </div>
            <div className='header-search'>
                <i className="fas fa-search"></i>
                <input type='search' placeholder="Search..."></input>
            </div>
            <div className='header-login'>
                { props.isAuth ? <div className="photo-mini">
                                    <img alt="" src={props.photo || userPhoto} alt={props.login} title={props.login}></img>
                                </div> : <NavLink to="/login">Login</NavLink> }
                {/* <div><i class="fas fa-chevron-down"></i></div> */}
                {/* <div className="header-settings__icons"><i className="fas fa-question-circle"></i></div>
                <div className="header-settings__icons"><i className="fas fa-bell"></i></div>
                <div className="header-settings__icons"><i className="fas fa-globe"></i></div> */}
            </div>
        </header>
    );
}

export default Header;