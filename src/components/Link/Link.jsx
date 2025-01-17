import React from 'react';
import PropTypes from 'prop-types';
import { IoMdMenu } from "react-icons/io";
const Link = ({route}) => {
    return (
        <div>
            <li className='ml-10'><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    
};

export default Link;