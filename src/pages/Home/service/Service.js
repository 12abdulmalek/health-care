import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const {name,image,description,id} = service;
   
    return (
        <div className="col d-flex justify-content-center">
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img className='cards-img' src={image} alt="Avatar" />
    </div>
    <div class="flip-card-back">
      <h1>{name}</h1> 
      <p>{description.slice(0,33)}</p> 
      <Link className='detail-link' to={`detail/${id}`}>Detail</Link>
    </div>
  </div>
</div>
      </div>
    );
};

export default Service;