import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const {id} = useParams();
    const [detail,setDetail]=useState({});
    useEffect(()=>{
        fetch(`/fakedb.json`)
        .then(response => response.json())
        .then(data => setDetail(data[id-1]))
    },[])
    // console.log(id);
    return (
        <div>
            <img src={detail.image} alt="" />
            <h1>{detail.name}</h1>
            <p>{detail.description}</p>
        </div>
    );
};

export default Detail;