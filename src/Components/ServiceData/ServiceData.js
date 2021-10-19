import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Show from '../Show/Show';

const ServiceData = () => {
    const[cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[]);
    return (
        <div className="mt-6">
           
             <Container>
             <h4>Our services</h4>
            <Row xs={1} md={3} className="g-4">
              {
              cards.map(card=> <Show key={card.id} cards={card}></Show>)
              }
           </Row>
            </Container>
        </div>
    );
};

export default ServiceData;