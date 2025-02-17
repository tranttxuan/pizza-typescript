import React from 'react';
import "./Pizza.css";


interface Pizza {
    id:number;
    name:string;
    description:string;
    price:number;
}

interface Props{
    pizza:Pizza
}

export const Pizza:React.FC<Props> = ({pizza}) => {
    return (
        <li>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
        </li>
        
    )
}
