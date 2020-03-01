import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

const Navbar = () => {

    const location = useLocation();

    let navLink

    location.pathname === '/'
        ? navLink = <Link to="/chart"><FontAwesomeIcon className="Navbar__icon" icon={faChartLine} size="2x" /></Link>
        : navLink = <Link to="/"><FontAwesomeIcon className="Navbar__icon" icon={faUtensils} size="2x" /></Link>

    return (
        <nav className="Navbar__container">
            {navLink}
        </nav>
    )

};

export default Navbar