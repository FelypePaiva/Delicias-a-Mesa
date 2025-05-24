import '../RedesSociais/RedesSociais.css'
import YoutubeIcon from 'imagens/icons/yt-icon.svg';
import TwitterIcon from 'imagens/icons/twitter-icon.svg';
import BrowserIcon from 'imagens/icons/browser-icon.svg';
import PinterestIcon from 'imagens/icons/pinterest-icon.svg';



export default function RedesSociais(){
    return(
        <div className='redesSociais'>
            <h3>Redes sociais:</h3>
            <div className='redesSociaisList'>
                <div className='redeSocialIcon'><img src={YoutubeIcon} alt=''></img></div>
                <div className='redeSocialIcon'><img src={TwitterIcon} alt=''></img></div>
                <div className='redeSocialIcon'><img src={BrowserIcon} alt=''></img></div>
                <div className='redeSocialIcon'><img src={PinterestIcon} alt=''></img></div>
            </div>
        </div>
    )
}