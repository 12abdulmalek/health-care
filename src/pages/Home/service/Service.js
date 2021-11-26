import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const {name,image,description,id} = service;
   
    return (
        <div className="col">
            <div className="cards">
        <div className="card p-2 ">
          <img width="400px" height="300px" src={image} className="card-img-top rounded" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name.slice(0,20)}</h5>
            <p className="card-text">{description.slice(0,100)}...</p>
            <Link to={`/detail/${id}`}>
         <button className="btn btn-primary">{name}</button>
         </Link>
          </div>
        </div>
       </div>
      </div>
    );
};

export default Service;