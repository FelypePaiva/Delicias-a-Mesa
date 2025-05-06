import './Header.css';
import Logo from '../Logo/Logo'
import MenuNavegacao from '../MenuNavegacao/MenuNavegacao';
import MenuPesquisa from '../MenuPesquisa/MenuPesquisa'

function Header(){
    return(
        <header className='header'>
            <div className='bg-yellow'></div>
        <div className='headerNav'>
            <Logo/>
            <MenuNavegacao/>
            <MenuPesquisa/>
        </div>
        </header>
    );
}


export default Header;