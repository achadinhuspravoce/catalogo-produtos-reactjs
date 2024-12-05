import React, { useState, useEffect } from 'react';
import './Carrossel.css'
import CarrosselItem from './CarrosselItem';

type Categoria = {
  categoria:string;
  
  children:any;
}

const Carrossel = ({children, categoria} : Categoria) => {
  
  const [cardsPorItem, setCardsPorItem] = useState(4);
  const id_carroseel = `carousel_${categoria}`;

  const atualizarCardsPorItem = () => {
      if (window.innerWidth < 701) {
          setCardsPorItem(1);
      } else if (window.innerWidth > 700 && window.innerWidth < 991) {
          setCardsPorItem(3);
      } else {
        setCardsPorItem(4);
      }
  };

  useEffect(() => {
      atualizarCardsPorItem();
      window.addEventListener('resize', atualizarCardsPorItem);
      return () => {
          window.removeEventListener('resize', atualizarCardsPorItem);
      };
  }, []);

  // Dividir os filhos (cards) em grupos com base em cardsPorItem
  const carrosselItems = [];
  for (let i = 0; i < React.Children.count(children); i += cardsPorItem) {
      carrosselItems.push(React.Children.toArray(children).slice(i, i + cardsPorItem));
  }
  
  return (
    <>
      <div id={id_carroseel} className="carousel slide" data-ride="carousel">
          <h2>{categoria}</h2>
          <div className="carousel-inner">
            {carrosselItems.map((grupo, index) => (
              <CarrosselItem key={index} ativo={index === 0 ? true : false}>
                {grupo}
              </CarrosselItem>
            ))}
          </div>
          <button type="button" className="carousel-control-prev" role="button" data-bs-slide="prev" data-bs-target={`#${id_carroseel}`}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only"></span>
          </button>
          <button type="button" className="carousel-control-next" role="button" data-bs-slide="next" data-bs-target={`#${id_carroseel}`}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only"></span>
          </button>
      </div>
    </>
  )
}

export default Carrossel