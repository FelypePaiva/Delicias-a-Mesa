import './ListagemHorizontal.css'
import ReceitaItemList from 'Componentes/ReceitaItemList/ReceitaItemList.js'
import FotoWaffes from 'imagens/foto-waffles.webp'
import PanquecaImg from 'imagens/panquecaimg.webp'
import ChocolateQuente from 'imagens/chocolatequente.webp'


export default function ListagemHorizontal(){
return(
    <div className='container containerListagem'>
        <h2 className='tituloListagem'>Receitas mais procuradas</h2>
        <div className='listagemHorizontal'>
            <ReceitaItemList foto={FotoWaffes} titulo='Waffles' descricao='Receita bacana pra comer com os amigos de manhã.'/>
            <ReceitaItemList foto={PanquecaImg} titulo='Panquecas' descricao='Receita bacana pra comer com os amigos de manhã.'/>
            <ReceitaItemList foto={ChocolateQuente} titulo='Chocolate quente' descricao='Receita bacana pra comer com os amigos de manhã.'/>
        </div>
    </div>
)
}