import React from 'react';

function Menu(props){
    return (
        <ul className='menu'>
            <li onClick={ () => props.setPage('CalcMortgage') }>Ипотека</li>
            <li onClick={ () => props.setPage('CarLoan') }>Автокредит</li>
            <li onClick={ () => props.setPage('ConsumerCredit') }>Потребительский</li>

            <li onClick={ () => props.setPage('Login') }>Войти</li>
        </ul>
    );
}

export default Menu;