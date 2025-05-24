import '../Footer/Footer.css'
import Logo from '../Logo/Logo'
import RedesSociais from 'Componentes/RedesSociais/RedesSociais'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='container'>
                <Logo />
                <RedesSociais />
            </div>
        </footer>
    )
}