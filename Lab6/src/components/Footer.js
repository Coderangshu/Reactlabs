import React from 'react';
import '../csses/Footer.css';

const date = new Date();
let onlyYear = date.getFullYear();

function Footer() {
    return (
        // write your code inside the <div> </div>
        // Should contain the text © <CURRENT-YEAR> E-Commerce Site
        <div data-testid="footer">
            <footer>
                <p>&copy; {onlyYear} E-Commerce Site</p>
            </footer>
        </div>
    );
}

export default Footer;
