import './ListagemHorizontal.css'
import ReceitaItemList from 'Componentes/ReceitaItemList/ReceitaItemList.js'


export default function ListagemHorizontal(){
return(
    <div className='container containerListagem'>
        <h2 className='tituloListagem'>Receitas mais procuradas</h2>
        <div className='listagemHorizontal'>
            <ReceitaItemList titulo='Waffles' descricao='Receita bacana pra comer com os amigos de manhã.'/>
            <ReceitaItemList titulo='Panquecas' descricao='Receita bacana pra comer com os amigos de manhã.'/>
            <ReceitaItemList titulo='Chocolate quente' descricao='Receita bacana pra comer com os amigos de manhã.'/>
        </div>
    </div>
)
}