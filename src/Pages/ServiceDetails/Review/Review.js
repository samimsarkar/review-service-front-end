import React from 'react';

const Review = ({ review }) => {
    const { timestamp, displayName, photoURL } = review;
    return (
        <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img className="rounded-full shadow-lg" src={photoURL} alt={displayName} />
            </span>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div className="justify-between items-center mb-3 sm:flex">
                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{new Date(timestamp).toDateString()}, {new Date(timestamp).toLocaleTimeString()}</time>
                    <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">{displayName} Reviewed</div>
                </div>
                <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">{review.review}</div>
            </div>
        </li>
    );
};

export default Review;