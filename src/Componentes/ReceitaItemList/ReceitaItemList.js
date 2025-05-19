import FotoWaffles from 'imagens/foto-waffles.webp'

export default function ReceitaItemList({foto, titulo, descricao}){
    return(
            <div className='receitaItem'>
                <div className='receitaImagem'>
                    <img src={FotoWaffles} alt=''></img>
                </div>
                <div className='receitaDesc'>
                    <h2>{titulo}</h2>
                    <p>Receita bacana pra comer com os amigos de manhã.</p>
                    <button>Ver Receita</button>
                </div>
            </div>
    )
}