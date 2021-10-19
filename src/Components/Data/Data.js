import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Show from '../Show/Show';
import service from '../images/nurse1.jpg'
import './Data.css'

const Data = () => {
    const[cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[]);
    return (
        <div>
            <Container>
                <h3 className="demo">SERVICE DEMO ITEM:</h3>
            <Row xs={1} md={3} className="g-4">
              {
              cards.map(card=> <Show cards={card}></Show>)
              }
           </Row>
            </Container>
            
            <Container>
            <h4 className="space">Our Service Syestem:</h4>
            <Row>
             
             <img className="w-75" src={service} alt="" />
             <h5 className="center">The Service System is another element in the general queuing structure, that talks about two aspects: Structure of the service system and speed of service. The queuing system refers to the process wherein the customer enters into the queue, wait to avail the service and finally leaves the system after getting the service.</h5>        
             
          </Row>
            </Container>
        </div>
    );
};

export default Data;