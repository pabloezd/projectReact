import React, { useState } from 'react';
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial , onAdd }) => {
  console.log('Se renderizo ItemCount');

  //Lógica
  const [count, setCount] = useState(initial);

  const onIncrease = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };

  const onDecrease = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };

  // const agregar = () => {
  //   const message = `Agregaste ${count} producto`;
  //   count === 1 ? alert(message) : alert(`${message}s`);
  // };

  //Render
  return (
    <div className="d-flex flex-column">
      <div className="d-flex mt-3">
        <Button variant="secondary" onClick={onDecrease} className="px-3 mx-4">
          -
        </Button>{" "}
        <h3 className="px-3 mx-3">{count}</h3>
        <Button variant="secondary" onClick={onIncrease} className="px-3 mx-4">
          +
        </Button>{" "}
      </div>
      <Button variant="warning" onClick={() => (count <= stock) && onAdd(count)} className="mt-3">
        Agregar
      </Button>{" "}
    </div>
  );
};
export default React.memo(ItemCount);


