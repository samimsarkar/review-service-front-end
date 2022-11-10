import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { name, image, price, _id, description } = service;
    return (

        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <PhotoProvider>
                <PhotoView src={image}>
                    <img className="p-8 rounded-t-lg cursor-pointer" src={image} alt="product" />
                </PhotoView>
            </PhotoProvider>

            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <div>
                    <p>
                        {description.slice(0, 99)}...
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
                    <Link to={`/services/${_id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;