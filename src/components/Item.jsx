import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({ image, title, price , id}) => {
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
              <ItemCount stock={5} initial={1}/>
            </Card.Body>
          </Card>     
      </>
    );
  };
  export default Item;