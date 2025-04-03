import React from 'react';

import {addCalc} from "./../functions.js";

function Admin(props){
    return (
        <div className='admin'>
            <div className='add-form'>
                <div className="input">
                    <input type="text" placeholder="Название калькулятора " id="calcName" />
                </div>
                <div className="input">
                    <input type="text" placeholder="Годовая ставка" id="rateYear" />
                </div>
                <div className="input">
                    <button onClick={ () => addCalc() } className="button">Сохранить</button>
                </div>
            </div>

            <div className='calc-list'>

            </div>
        </div>
    );
}

export default Admin;