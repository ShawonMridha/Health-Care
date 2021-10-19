import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const {id} =useParams();
    const[details, setDetails] = useState([]);
    useEffect(()=>{
        fetch('/details.json')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[]);


    const ExactItem = details.filter(dt=> dt.id===id)

    // useEffect(()=>{
    //     const ExactItem = details.find(dt=> dt.id===id)
    //     console.log(ExactItem)
    // },[details])

    
    return (
        <div>
            <Container className="mt-5">
              <Row>
                <Col sm={8}>
                <img src={ExactItem[0]?.img} alt="" />
                </Col>

                <Col sm={4}>
                  <h3>{ExactItem[0]?.service}</h3>
                  <h5>{ExactItem[0]?.description}</h5>
                </Col>
              </Row>
            </Container>
        </div>
    );
};

export default Details;