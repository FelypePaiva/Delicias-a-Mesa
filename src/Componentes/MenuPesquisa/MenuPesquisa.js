import '../MenuPesquisa/MenuPesquisa.css'
import IconePesquisa from '../../imagens/search-icon.svg'


function MenuPesquisa(){
    return(
        <div className='pesquisarReceita'>
            <img src={IconePesquisa}></img><input placeholder="Pesquisar receita"/>
        </div>
    );
}

export default MenuPesquisa;