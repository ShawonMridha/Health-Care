import React from 'react';
import { Card, Col } from 'react-bootstrap';




const NurseDetails = (props) => {
    const{name,img,description}=props.nurses
    return (
        <div>
             <Col>
      <Card className="size">
        <Card.Img className="card" variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
       
      </Card>
    </Col>
            
        </div>
    );
};

export default NurseDetails;