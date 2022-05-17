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


// function ItemList({ items }) {
//   return (
//       <div className='item-list'>
//           {items.map(item => <Item id={item.id} image={item.image} title={item.title} price={item.price} />)}
//       </div>
//   )
// }

// export default ItemList