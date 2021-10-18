
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Show = (props) => {
    const{img, name, description, id}=props.cards
    return (
        <div>
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Link to={`/details/${id}`}>
        <button className="btn btn-warning">Details</button>
        </Link>
      </Card>
    </Col>
        </div>
    );
};

export default Show;