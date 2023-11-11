import style from "./Cadastro.module.css";

import {useState, useEffecct} from 'react';

const Cadastro = ()=> {

    return (
        <div>
            <h2>Cadastro</h2>
            <form>
                <label htmlFor="nickname">
                    <span>NickName: </span>
                    <input type="text" name="nickname"/>
                </label>
            </form>
        </div>
    )

}

export default Cadastro;