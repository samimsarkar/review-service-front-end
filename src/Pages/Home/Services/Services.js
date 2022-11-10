import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

    const services = useLoaderData();

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-24 pb-12 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-indigo-500"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {
                        services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
            <div className='text-center'>
                <Link className='px-10 py-3 bg-blue-500 text-white font-bold rounded mx-auto' to='/services'>See All</Link>
            </div>
        </section>
    );
};

export default Services;