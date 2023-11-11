import style from './Navbar.module.css';

import { NavLink } from 'react-router-dom';

const Navbar = ()=>{

    return(

        <nav className={style.nav}>
            
            <div className={style.logo}>
                <NavLink to="/">
                   WW2C
                </NavLink>
            </div>
            <ul className={style.menu}>
                <li className={style.menuBtn}>
                    <NavLink to="./Home" className={({isActive}) => (isActive ? style.ativa : "")}>
                        Home
                    </NavLink>
                </li>
                <li className={style.menuBtn}>
                    <NavLink to="./Login" className={({isActive}) => (isActive ? style.ativa : "")}>
                        Login
                    </NavLink>
                </li>
                <li className={style.menuBtn}>
                    <NavLink to="./Cadastro" className={({isActive}) => (isActive ? style.ativa : "")}>
                        Cadastro
                    </NavLink>
                </li>
                <li className={style.menuBtn}>
                <NavLink to="./Campeoes" className={({isActive}) => (isActive ? style.ativa : "")}>
                        Campeões
                    </NavLink>
                </li>
                <li className={style.menuBtn}>
                <NavLink to="./Sobre" className={({isActive}) => (isActive ? style.ativa : "")}>
                        Sobre
                    </NavLink>
                </li>
            </ul>

        </nav>
        

    )

}

export default Navbar;