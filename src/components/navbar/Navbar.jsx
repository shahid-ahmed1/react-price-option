import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';

const Navbar = props => {

    const routes = [
        { id: 1, path: "/", name: "Home", content: "Welcome to the Home Page!" },
        { id: 2, path: "/about", name: "About", content: "About Us: Learn more about us here." },
        { id: 3, path: "/services", name: "Services", content: "Services: We offer web and app development." },
        { id: 4, path: "/contact", name: "Contact", content: "Contact Us: Reach us at contact@example.com." },
        { id: 5, path: "*", name: "Error", content: JSON.stringify({ code: 404, message: "Page Not Found." }) },
      ];
      
    return (
        
        <nav>
            <ul className='md:flex'>
            {
                routes.map(route=>
                    <Link key={route.id} route={route}></Link>
                )
            }
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;