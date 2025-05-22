import '../ReceitaItemList/ReceitaItemList.css'


export default function ReceitaItemList({foto, titulo, descricao}){
    return(
            <div className='receitaItem'>
                <div className='receitaImagem' style={{backgroundImage: `url(${foto})`}}>
                </div>
                <div className='receitaDesc'>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                    <button>Ver Receita</button>
                </div>
            </div>
    )
}