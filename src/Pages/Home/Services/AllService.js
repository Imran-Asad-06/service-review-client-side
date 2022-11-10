import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';
import './services.css'

const AllService = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/allServices')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);


    return (
        <div>
        <div className='text-center mb-4'>
            <p className="text-2xl font-bold text-orange-600">Services</p>
            <h2 className="text-5xl font-semibold">Our Service Area</h2>
            <p>Our in-house photography services team made up of professional photographers can add value to your website with high-resolution team photos, corporate event ...</p>
        </div>
        <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }

           
        </div>
        <div  className='mt-5 seeAll'> 
        <Link to='/addServices' ><button className="btn btn-success">Add Service</button></Link>
        </div>
    </div>
    );
};

export default AllService;