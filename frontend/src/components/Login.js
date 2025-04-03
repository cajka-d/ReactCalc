import React from 'react';
import {autho} from './../functions.js';


function Login(){
    return (
        <div className="login">
            <h2>Вход в админ</h2>

            <div className="input">
                <input type="text" placeholder="Логин" id="login" />
            </div>
            <div className="input">
                <input type="password" placeholder="Пароль" id="password" />
            </div>
            <div className="input">
                <button onClick={ () => autho() } className="button">Войти</button>
            </div>
        </div>
    );
}

export default Login;