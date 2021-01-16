import logo from './../../static/logo.png';
import './Header.css';

const Header = () => {
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
            {/* <div className='header-settings'>
                <div><i class="fas fa-chevron-down"></i></div>
                <div className="header-settings__photo"><img alt="" src='https://pcache-06.chocoapp.ru/h2/6/24350568/0/58bcbbd0c34f31d6de3f4e4d2095a868/2/18755738_500sq.jpg'></img></div>
                <div className="header-settings__icons"><i className="fas fa-question-circle"></i></div>
                <div className="header-settings__icons"><i className="fas fa-bell"></i></div>
                <div className="header-settings__icons"><i className="fas fa-globe"></i></div>
            </div> */}
        </header>
    );
}

export default Header;