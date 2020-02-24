import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

const Navbar = () => {

    return (
        <nav className="Navbar__container">
            <Link to="/chart"><FontAwesomeIcon className="Navbar__icon" icon={faChartLine} size="2x" /></Link>
        </nav>
    )

};

export default Navbar