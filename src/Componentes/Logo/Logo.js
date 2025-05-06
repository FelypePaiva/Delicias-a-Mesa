import ImgLogo from '../../imagens/logo.svg'

function Logo(){
    return(
        <div>
            <img src={ImgLogo} alt="Imagem logo de Delícias à Mesa"></img>
            <span>Delícias à Mesa</span>
        </div>
    );
}

export default Logo;