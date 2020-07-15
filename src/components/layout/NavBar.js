import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const NavBar = ({icon, title}) => {
    return (
        <nav className="navbar bg-primary">
            <h3><i className={icon} aria-hidden="true" />
                {title}
            </h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

NavBar.defaultProps = {
    title: " Github Finder ",
    icon: "fa fa-github"
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default NavBar;
