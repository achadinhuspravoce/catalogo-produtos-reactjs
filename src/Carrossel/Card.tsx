import './Card.css'
import {Produto} from '../Entities/Produto'

const Card = ({p} : {p: Produto}) => {
  const filiado = `/${p.filiacao.toLowerCase()}_logo.png`;
  
  const freteFree = { 
    visibility: (p.freteFree ? 'visible' : 'hidden') as 'visible' | 'hidden'
  }
  
  return (
    <>
      <div className="card">
        <div className='fretegratis-container'>
          <img src={p.linkImagem} className="card-img-top" loading="lazy" alt={p.nome} />
          <span style={freteFree} className="fretegratis">Frete Grátis</span>
        </div>
        <div className="filiado">
          <img src={filiado} loading="lazy" alt={p.filiacao} />
        </div>
        <div className="card-body">
            <h5 className="card-title">{p.nome}</h5>
            <p className="card-text">{p.descricao}</p>
            <a href={p.linkProduto} className="botao" target="_blank" rel="noopener noreferrer">Saiba Mais</a>
        </div>
      </div>
    </>
  )
}

export default Card