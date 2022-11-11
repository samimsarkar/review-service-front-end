import React, { useState, useEffect } from 'react';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useTitle('Services')
    useEffect(() => {
        fetch('https://travel-agency-neon.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className='min-h-screen relative bg-white'>
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
            </div>
        </div>
    }

    return (
        <div className='mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;