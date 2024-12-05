import React, { useState, useEffect } from 'react';

const Carrossel = ({ categoria, children }:any) => {
    const [cardsPorItem, setCardsPorItem] = useState(4);

    const atualizarCardsPorItem = () => {
        if (window.innerWidth < 768) {
            setCardsPorItem(2);
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
        <div className="carrossel">
            <h2>{categoria}</h2>
            <div className="carrossel-conteudo">
                {carrosselItems.map((grupo, index) => (
                    <CarrosselItem key={index}>
                        {grupo}
                    </CarrosselItem>
                ))}
            </div>
        </div>
    );
};

const CarrosselItem = ({ children }:any) => (
    <div className="carrossel-item">
        {children}
    </div>
);

const Card = ({ titulo, descricao }:any) => (
    <div className="card">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
    </div>
);

export default Carrossel;
