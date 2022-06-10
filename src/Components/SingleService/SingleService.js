import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'


const SingleService = ({ service }) => {
    const {name, description, img, price} = service;
    return (
        <div className="service col-12 col-md-3 text-center border rounded py-3 my-4 px-3">
            <img className="img-fluid "
            src={img} alt=""></img>
            <div className='service-text'>
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
            <p>${price}</p>
            <Link to={'/checkout'}>
                <button className="check-out-btn rounded-0 border border-dark  btn btn-transparent text-dark px-4 py-2 custom-btn fw-bold">
                CHECKOUT
                </button>
            </Link>        
        </div>
    );
};

export default SingleService;