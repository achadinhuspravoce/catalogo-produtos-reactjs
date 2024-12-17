import './Card.css'
import {Produto} from '../Entities/Produto'
import logoFiliado from '../assets/$filiado$_logo.png'

const Card = ({p} : {p: Produto}) => {
  const filiado = logoFiliado.replace("$filiado$", p.filiacao.toLowerCase());
  const freteFree = { 
    visibility: (p.freteFree ? 'visible' : 'hidden') as 'visible' | 'hidden'
  }
  
  return (
    <>
      <div className="card">
        <div className='fretegratis-container'>
          <img src={p.linkImagem} className="card-img-top" alt={p.nome} />
          <span style={freteFree} className="fretegratis">Frete Grátis</span>
        </div>
        <div className="filiado">
          <img src={filiado} alt={p.filiacao} />
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