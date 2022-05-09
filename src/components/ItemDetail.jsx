import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import { Button } from "react-bootstrap";

function ItemDetail ({ item }) {
    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
    function addHandler (quantityToAdd) {
        setCantidadDeProductos(quantityToAdd);
    }
    return (
        <div className="item-detail">
            <div className="left">
                <div className="img-detail-container">
                    <img className="img-detail-container-img" src={ item?.image } alt="imagen-del-producto"/>
                </div>
            </div>
            <div>
                <div className="right">
                    <div className="info-container">
                        <h2> {item?.title} </h2>
                        <p>{item?.price}</p>
                        <p>Item# {item?.id}</p>
                        <div className="count-container">
                        {cantidadDeProductos ?
                         <Button variant="warning" ><Link to='/cart'>Comprar ({ cantidadDeProductos } unidades)</Link></Button> :
                         <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;