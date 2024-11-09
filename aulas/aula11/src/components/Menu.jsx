import {userContext} from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Menu(){
    const {usuario} = userContext(AuthContext);

    return(
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/perfil">Perfil</NavLink>
                    </li>
                    {usuario.perfil === "admin" && (
                        <li>
                            <NavLink to="/admin">Administração</NavLink>
                        </li>
                    )}
                    <li>
                        <NavLink to="/" onClick={()=>{}}>Sair</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;