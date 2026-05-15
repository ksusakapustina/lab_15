import {Link} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="header_nav">
                <ul className="header_nav-list">
                    <li className="header_nav-link">
                        <Link
                            to="/"
                            className="header_nav-link-item"
                        >
                            News
                        </Link>
                    </li>
                    <li className="header_nav-link">
                        <Link
                            to="/about"
                            className="header_nav-link-item"
                        >
                            About Project
                        </Link>
                    </li>
                                        <li className="header_nav-link">
                        <Link
                            to="/contacts"
                            className="header_nav-link-item"
                        >
                            Contacts
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
