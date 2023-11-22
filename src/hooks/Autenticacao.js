import {db} from '../firebase/config.js';

import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState, useEffect } from "react";

export const Autenticacao = ()=>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled(){
        if (cancelled){
            return;
        }
    }

    const createUser = async (data) =>{
        checkIfIsCancelled()
        setLoading(true)
        setError(null)
        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.senha
            )

            await updateProfile(user, {
                nickname: data.nickname
            })
            return user

        } catch (error){
            console.log(error.message)
            console.log(typeof error.message)
        
            let systemErrorMessage;

            // if (error.message.includes("Password")){
            //     systemErrorMessage = "A senha precisa ter pelos menos 6 caracteres."
            // } else if (error.message.includes("email-already")){
            //     systemErrorMessage = "E-mail já cadastrado"
            // } else {
            //     systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
            // }
            // setError(systemErrorMessage)

        }
        setLoading(false);
    }

    useEffect(()=>{
        return () => setCancelled(true);
    }, []);

    return{
        auth, 
        createUser, 
        error,
        loading
    }

};