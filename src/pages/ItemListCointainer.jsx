
import { useState, useEffect } from "react";
import ItemList from ".././components/ItemList";
import getData from ".././services/getData";
import { Stack } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData
      .then((response) => setProducts(response))
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <>
      <h2>{greeting}</h2>
      <br />
      <Stack direction="horizontal" gap={3}>
      <div className="bg-light border ms-auto"></div>
      <ItemList products={products} />
      <div className="bg-light border ms-auto"></div>
      </Stack>
    </>
  );
};
export default ItemListContainer;