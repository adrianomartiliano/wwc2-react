import style from "./Cadastro.module.css";

import {useState, useEffecct} from 'react';

const Cadastro = ()=> {

    const [nickname, setNickname] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        setError("");
        const user = {
            nickname,
            email
        }

        if(senha !== confirmaSenha){
            setError("As senhas não são iguais!");
            return
        }
    }

    return (
        <div >
            <h2>Cadastro</h2>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.nick}>
                    <label htmlFor="nickname">
                        <span className={style.descrinput}>NickName </span>
                        <input 
                            type="text" 
                            name="nickname"
                            value={nickname}
                            onChange={(e)=>setNickname(e.target.value)}
                        />
                    </label>
                    
                </div>
                <div className={style.id}>
                    <label htmlFor="id">
                        <span className={style.descrinput}>ID </span>
                        <input type="text" name="id"/>
                    </label>
                </div>

                <div className={style.telefone}>
                    <label htmlFor="telefone">
                        <span className={style.descrinput}>WhatsApp </span>
                        <input type="email" name="telefone"/>
                    </label>
                </div>
                <div className={style.email}>
                    <label htmlFor="email">
                        <span className={style.descrinput}>E-mail </span>
                        <input type="email" name="email"/>
                    </label>
                </div>
                <div className={style.senha}>
                    <label htmlFor="senha">
                        <span className={style.descrinput}>Senha </span>
                        <input type="password" name="senha"/>
                    </label>
                </div>
                <div className={style.confirmaSenha}>
                    <label htmlFor="confirmaSenha">
                        <span className={style.descrinput}>Confirme a senha</span>
                        <input type="password" name="confirmaSenha"/>
                    </label>
                </div>


                <div className={style.btnCadastro}>
                    <button>Cadastrar</button>
                </div>
                <div>
                    {error && <p>{error}</p>}
                </div>
                
            </form>
        </div>
    )

}

export default Cadastro;