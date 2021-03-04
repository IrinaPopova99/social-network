import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav main">
            <h3>MENU</h3>
            <NavLink to="/profile">
                <div className='nav__item'>
                    <div className="nav__icons">
                        <i class="fas fa-user"></i>
                    </div>
            Profile
          </div>
            </NavLink>
            <NavLink to="/dialogs">
                <div className='nav__item'>
                    <div className="nav__icons">
                        <i class="fas fa-envelope"></i>
                    </div>
          Messages
        </div>
            </NavLink>
            <NavLink to="/users">
                <div className='nav__item'>
                    <div className="nav__icons">
                        <i class="fas fa-users"></i>
                    </div>
            Users
          </div>
            </NavLink>
        </nav>
    );
}

export default Navbar;