import React from 'react';
import { NavLink } from 'react-router-dom';
import '../csses/Header.css';

function Header() {
    return (
        // write your code inside the <div> </div>
        // Should contain the text "E-Commerce Site"
        <div data-testid="header">
            <header>
                <h1>E-Commerce Site</h1>
                <nav className="nav">
                    <NavLink to="/products" className="nav-link" activeClassName="active">
                        Product List
                    </NavLink>
                    <NavLink to="/orders" className="nav-link" activeClassName="active">
                        Orders
                    </NavLink>
                    <NavLink to="/favourites" className="nav-link" activeClassName="active">
                        Favourites
                    </NavLink>
                </nav>
            </header>
        </div>
    );
}

export default Header;
