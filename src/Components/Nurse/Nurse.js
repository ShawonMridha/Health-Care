import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NurseDetails from '../NurseDetails/NurseDetails';


const Nurse = () => {
    const[nurses, setNurse]= useState([]);
    useEffect(()=>{
        fetch('/nurse.json')
        .then(res=>res.json())
        .then(data=>setNurse(data))
    },[])
    return (
        <div>
            <Container>
            <Row xs={1} md={3} className="g-4">
              {
              nurses.map(nurse=> <NurseDetails key={nurses.id} nurses={nurse}></NurseDetails>)
              }
           </Row>
            </Container>
        </div>
    );
};

export default Nurse;