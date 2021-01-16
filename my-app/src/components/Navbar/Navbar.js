import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav main">
        <h3>MENU</h3>
        <NavLink to="/profile">
          <div className='nav__item'>
            <div className="nav__icons">
              <i className="fas fa-home"></i>
            </div>
            Profile
          </div>
        </NavLink>
        <NavLink to="/dialogs">
        <div className='nav__item'>
          <div className="nav__icons">
            <i className="fas fa-envelope"></i>
          </div>
          Messages
        </div>
        </NavLink>
        <NavLink to="/news">
          <div className='nav__item'>
            <div className="nav__icons">
              <i className="fas fa-users"></i>
            </div>
            News
          </div>
        </NavLink>
        <NavLink to="/music">
          <div className='nav__item'>
            <div className="nav__icons">
              <i className="fas fa-calendar-alt"></i>
            </div>
            Music
          </div>
        </NavLink>
        <NavLink to="/settings">
          <div className='nav__item'>
            <div className="nav__icons">
            <i className="fas fa-cog"></i>
            </div>
            Settings
          </div>
      </NavLink>
    </nav>
  );
}

export default Navbar;