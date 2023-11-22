import { Autenticacao } from "../../hooks/Autenticacao";
import style from "./Cadastro.module.css";

import {useState, useEffect} from 'react';

const Cadastro = ()=> {

    const [nickname, setNickname] = useState("");
    const [id, setId] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmasenha] = useState("");

    const [error, setError] = useState("");

    const {createUser, error: authError, loading} = Autenticacao();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        setError("");
        const user = {
            nickname,
            id,
            telefone,
            email,
            senha
        }

        if(senha !== confirmaSenha){
            setError("As senhas não são iguais!");
            return
        }

        const res = await createUser(user);

        console.log(user);
    }

    useEffect(()=>{
        if(authError){
            setError(authError);
        }
    }, [authError])

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
                        <input 
                            type="text" 
                            name="id"
                            value={id}
                            onChange={(e)=>setId(e.target.value)}
                            />
                    </label>
                </div>

                <div className={style.telefone}>
                    <label htmlFor="telefone">
                        <span className={style.descrinput}>WhatsApp </span>
                        <input 
                            type="text" 
                            name="telefone"
                            value={telefone}
                            onChange={(e)=>setTelefone(e.target.value)}/>
                    </label>
                </div>
                <div className={style.email}>
                    <label htmlFor="email">
                        <span className={style.descrinput}>E-mail </span>
                        <input 
                            type="email" 
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}/>
                    </label>
                </div>
                <div className={style.senha}>
                    <label htmlFor="senha">
                        <span className={style.descrinput}>Senha </span>
                        <input 
                            type="password" 
                            name="senha"
                            value={senha}
                            onChange={(e)=>setSenha(e.target.value)}/>
                    </label>
                </div>
                <div className={style.confirmaSenha}>
                    <label htmlFor="confirmaSenha">
                        <span className={style.descrinput}>Confirme a senha</span>
                        <input 
                            type="password" 
                            name="confirmaSenha"
                            value={confirmaSenha}
                            onChange={(e)=>setConfirmasenha(e.target.value)}/>
                    </label>
                </div>


                {!loading && <div className={style.btnCadastro}>
                    <button>Cadastrar</button>
                </div>}
                {loading && <div className={style.btnCadastro}>
                    <button disabled>Aguarde...</button>
                </div>}
                {error && <p className="error">{error}</p>}
                
                
            </form>
        </div>
    )

}

export default Cadastro;