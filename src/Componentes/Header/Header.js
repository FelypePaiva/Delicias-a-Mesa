import './Header.css';
import Logo from 'Componentes/Logo/Logo'
import MenuNavegacao from 'Componentes/MenuNavegacao/MenuNavegacao';
import MenuPesquisa from 'Componentes/MenuPesquisa/MenuPesquisa'
import BannerPrincipal from 'Componentes/BannerPrincipal/BannerPrincipal.js';

function Header(){
    return(
        <header className='header'>
            <div className='bg-yellow'></div>
        <div className='headerNav container'>
            <Logo/>
            <MenuNavegacao/>
            <MenuPesquisa/>
        </div>
            <BannerPrincipal/>
        </header>
    );
}


export default Header;