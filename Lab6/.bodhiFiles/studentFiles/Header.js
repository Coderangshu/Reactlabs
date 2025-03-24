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
                    wrap the text in NavLink to make it a link to the respective page
                    Product List
                    Orders
                    Favourites
                </nav>
            </header>
        </div>
    );
}

export default Header;
