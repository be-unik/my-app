import React from 'react';
import './styles.scss';
import Logo from './../../assets/graphics/logo.png';

const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo"></div>
                    <img src={Logo} alt="Logo" width="70px" height="50px" />
            </div>
        </header>
    )
};

export default Header;