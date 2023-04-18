import logo from '../../images/personal-logo.png';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <img className='website-logo' src={logo} alt="logo" />
            <button className='nav-button'> Resume </button>
        </nav>
    );
};

export default Navbar;