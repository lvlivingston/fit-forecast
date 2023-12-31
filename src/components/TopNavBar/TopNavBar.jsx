// TOP NAV BAR FOR MOBILE VIEW

import { Link } from 'react-router-dom';
import Logo from '../../images/Logo/Logo.png';
import IconProfile from '../../images/icons/IconProfile/IconProfile.png';

export default function TopNavBar({ user, setUser }) {
    
    return (
        <nav className="top-nav">
            <Link to="/home">
                <img src={Logo} alt="Logo" className="icon-style" />
            </Link>
            <Link to="/profile"><img src={IconProfile} alt="Profile" className="icon-style"/></Link>
        </nav>
    );
}