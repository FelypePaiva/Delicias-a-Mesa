import ImgLogo from '../../imagens/logo.svg'
import './Logo.css'

function Logo(){
    return(
        <div className='logo'>
            <img src={ImgLogo} alt="Imagem logo de Delícias à Mesa"></img>
            <span className='logoTxt'>Delícias à Mesa</span>
        </div>
    );
}

export default Logo;