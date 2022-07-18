import React, { useEffect, useState } from 'react';
import Service from '../service/Service';

const Services = () => {
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch('./fakedb.json')
        .then(response => response.json())
        .then(data => setService(data))
    },[])
    return (
        <div className="container overflow-hidden">
            <h1 className="my-4">our services</h1>
            { 
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    {
                        service.map(service=> 
                        <Service
                        service={service}
                        key={service.id}
                        >
                        </Service>           
                           )
                    }
                </div>
            }
        </div>
    );
};

export default Services;