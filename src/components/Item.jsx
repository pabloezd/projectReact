import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ItemCount from "./ItemCount";
import React, { useContext } from 'react';
import CartContext from '.././store/cart-context';
import Bubble from './Bubble';
import './Item.css';
import { Button } from "react-bootstrap";

const Item = ({ item , image, title, price, id}) => {
  // function Item({ item  }) {
  const cartCtx = useContext(CartContext);
    return (
      <>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                ${price}
              </Card.Text>
              <Link to={"/item/" + id}>Ver Detalle</Link>
              <div className='bubble-add'>
              <Button variant="warning"> 
               <Bubble isButton onBubbleClick={() => cartCtx.addProduct({quantity: 1, ...item})}>+</Bubble>
               </Button>
             </div>
          {/* <ItemCount stock={5} initial={1}/> */}
             {/* <div className='footer'>${ price }</div> */}
            </Card.Body>
          </Card>     
      </>
    );
  };
  export default Item;