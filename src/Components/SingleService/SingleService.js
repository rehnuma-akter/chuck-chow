import React from 'react';
import { Button } from 'react-bootstrap';
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
            <Button className='px-1 py-1 fs-6' variant='primary'> Check Out</Button>        
        </div>
    );
};

export default SingleService;