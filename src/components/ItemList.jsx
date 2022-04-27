import Item from "./Item";

const ItemList = ({ products }) => {
  console.log("products en ItemLIst", products);
  return (
    <>
      <h3>Productos:</h3>
      {products.map((product) => {
        return (
          <Item key={product.id} image={product.image} title={product.title} price={product.price} />
        );
      })}
    </>
  );
};
export default ItemList;