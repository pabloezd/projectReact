import React from "react";
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../store/cart-context';
import ItemCount from "./ItemCount";
import { Button } from "react-bootstrap";

function ItemDetail ({ item }) {
    const cartCtx = useContext(CartContext);

    function addHandler(quantityToAdd) {
        cartCtx.addProduct({quantity: quantityToAdd, ...item});
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
                        <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                        <Button variant="warning" onClick={() => console.log(cartCtx.products)} >Imprimir carrito</Button>
                        <Button variant="warning" onClick={() => cartCtx.removeProduct(item.id)} >Remove product</Button>
                        <Button variant="warning" onClick={() => cartCtx.clear()} >Clear</Button>
                        <Button variant="warning" onClick={() => console.log(cartCtx.isInCart(item.id))} >Is in cart</Button>
                        <Button variant="warning" onClick={() => console.log(cartCtx.getCartQuantity())} >Quantity</Button>
                        {cartCtx.products.length &&
                        <button onClick={() => console.log(cartCtx)}>
                            <Link to='/cart'>
                                Terminar compra ({ cartCtx.getCartQuantity() } items)
                            </Link>
                        </button>
                    }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;