import React from 'react';

import Menu from './Menu';
import logo from './logo.png';

function Header(props){
    return (
        <div className="header">
            <div className='item-left'>
                <img src={logo} className="logo" alt="logo" />
                <p>Калькулятор</p>
            </div>
            <div className='item-right'>
                <Menu setPage={ props.setPage } />
            </div>
        </div>
    );
}

export default Header;