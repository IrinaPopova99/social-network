import logo from './../../static/logo.png';

const HeaderLogo = () => (
    <div className='logo-block'>
        <div className='logo-block__image'><img alt="{logo}" src={logo} /></div>
        <div className='logo-block__text'><span>My Network</span></div>
    </div>
)

export default HeaderLogo;