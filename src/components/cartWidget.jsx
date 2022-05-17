// import React from "react";
// import { Button } from 'react-bootstrap';


// function Carrito() {
//     return ( 
//     <>

//       <Button variant="warning"  className="px-3 mx-3"> CARRITO </Button>{" "}

//     </> );
// }

// export default Carrito;



import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Bubble from './Bubble';
import CartContext from '../store/cart-context';
// import './CartWidget.css';

function CartWidget() {
  const cartCtx = useContext(CartContext);

  return (
    <div className='cart-item-wrapper'>

<Link to='/cart'>
<Button variant="warning"  className="px-3 mx-3"> CARRITO </Button>{" "}
         </Link>
         {cartCtx.products.length !== 0 && 
           <div className='cart-bubble'>
             <Bubble>
               { cartCtx.getCartQuantity() }
             </Bubble>
           </div>
         }
     </div>
   )
 }

 export default CartWidget