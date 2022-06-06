import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
        <div>
        <h2 className="text-dark text-center my-5 fw-bold pt-5">
            My Awesome Services
        </h2>
        <div className="container row w-75 mx-auto justify-content-around">
            {services.map((service) => (
            <SingleService key={service.id} service={service}></SingleService>
            ))}
        </div>
        </div>
    );
};

export default Services;
