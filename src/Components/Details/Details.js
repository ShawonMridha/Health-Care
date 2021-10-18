import React, { useEffect, useState } from 'react';
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
            <h3>this is details{id}</h3>
            <h5>{ExactItem[0]?.service}</h5>
            <h5>{ExactItem[0]?.description}</h5>
            <img src={ExactItem[0]?.img} alt="" />
        </div>
    );
};

export default Details;