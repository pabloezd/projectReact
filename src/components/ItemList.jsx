import Item from "./Item";

const ItemList = ({ products }) => {
  console.log("products en ItemLIst", products);
  return (
    <>
      {products.map((product) => {
        return (
          <Item id={product.id} image={product.image} title={product.title} price={product.price} />
        );
      })}
    </>
  );
};
export default ItemList;