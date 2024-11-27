import React from 'react'
import './Card.css'
import imgCard from '../assets/20241113_01.png'

type Produto = {
  titulo: string;
  descricao: string;
};

const Card = ({titulo, descricao} : Produto) => {
  return (
    <>
        <div className="card">
            <img src={imgCard} className="card-img-top" alt="Produto Card" />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descricao}</p>
                <a href="https://amzn.to/4eV2BWv" className="botao" target="_blank">Saiba Mais</a>
            </div>
        </div>
    </>
  )
}

export default Card