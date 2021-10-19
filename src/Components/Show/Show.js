
import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Show.css'


const Show = (props) => {
    const{img, name, description, id}=props.cards;
   
    return (
      
        <div>
    <Col>
      <Card className="size">
        <Card.Img className="card" variant="top" src={img} />
        <Card.Body>
          <Card.Title>Service Name: {name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={`/details/${id}`}>
        <button className="btn btn-warning size">Details</button>
       
        </Link>
        </Card.Body>
        
      </Card>
      
    </Col>
        </div>
    );
};

export default Show;