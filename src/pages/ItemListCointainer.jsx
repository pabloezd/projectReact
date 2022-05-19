
import { useState, useEffect } from "react";
import ItemList from ".././components/ItemList";
import { useParams } from 'react-router-dom';
// import getData from ".././services/getData";
import { Stack } from "react-bootstrap";
import { collection, getDocs, getFirestore, query, where, limit } from 'firebase/firestore';

function getProducts(category) {
  const db = getFirestore();

  const itemCollection = collection(db, 'items');

  const q = query(
    itemCollection
  );

  return getDocs(q)
}
function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)

    .then(snapshot => {
      setProducts(snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      }));
    })
    .catch(err => {
      console.log(err);
     alert('Ocurrio un error, revisar la consola!');
   });
}, [categoryId]);

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


// const ItemListContainer = ({ greeting }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getData
//       .then((response) => setProducts(response))
//       .catch((error) => console.log("error: ", error));
//   }, []);

//   return (
//     <>
//       <h2>{greeting}</h2>
//       <br />
//       <Stack direction="horizontal" gap={3}>
//       <div className="bg-light border ms-auto"></div>
//       <ItemList products={products} />
//       <div className="bg-light border ms-auto"></div>
//       </Stack>
//     </>
//   );
// };
// export default ItemListContainer;