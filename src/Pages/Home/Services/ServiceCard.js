import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title,description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p>{
                  description.length > 100? <>{description.slice(0,100)+ '.......'}<Link to={`/service/${_id}`}><b className='text-blue'>Read more</b></Link></> :
                   description}</p>
                <div className="card-actions justify-end">
                <Link to={`/service/${_id}`}><button className="btn border-2 ">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;