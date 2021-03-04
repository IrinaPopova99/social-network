import { NavLink } from 'react-router-dom';
import SmallRoundPhoto from '../Common/SmallRoundPhoto/SmallRoundPhoto';
import './Header.css';
import HeaderLogo from './HeaderLogo';

const Header = (props) => {
    return (
        <header className="header">
            <HeaderLogo />
            <div className='header-login'>
                {props.isAuth 
                    ? <div className="header-login__is-auth">
                        <SmallRoundPhoto photo={props.photo} login={props.login} />
                        <span className="header-login__slash"> | </span>
                        <div className="header-login__logout" onClick={props.onLogoutUser}>Выйти</div>
                    </div>
                    : <NavLink className="header__logout" to="/login">Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;