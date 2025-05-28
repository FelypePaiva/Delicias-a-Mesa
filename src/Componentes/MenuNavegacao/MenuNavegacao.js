import '../MenuNavegacao/MenuNavegacao.css'
import { NavLink } from 'react-router';

function MenuNavegacao(){
    return(
        <nav className="navList">
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/receitas' end>Receitas</NavLink></li>
                <li>Sobre Nós</li>
            </ul>
        </nav>
    );
}


export default MenuNavegacao;