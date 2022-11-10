import React from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ReviewCard = ({ review, handleDelete }) => {
    const { serviceName, serviceImage, _id } = review;
    return (
        <article className="border-2 border-gray-100 bg-white my-4 p-3 relative mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <div className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex justify-between items-center'>
                <div className="flex items-start p-6">
                    <img
                        alt={serviceName}
                        src={serviceImage}
                        className="h-28 w-28 rounded-lg object-cover"
                    />

                    <div className="ml-4">
                        <h3 className="font-medium sm:text-lg">
                            {serviceName}
                        </h3>

                        <p className="text-sm text-gray-700 mt-3">
                            <span className="font-extrabold">Your Review: </span> {review.review}
                        </p>
                    </div>
                </div>
                <div className='text-xl flex gap-2'>
                    <Link to={`/update-review/${_id}`}><FaEdit className='text-orange-500'></FaEdit></Link>
                    <button onClick={() => handleDelete(review)}><FaTrashAlt className='text-red-600'></FaTrashAlt></button>
                </div>
            </div>
        </article>
    );
};

export default ReviewCard;