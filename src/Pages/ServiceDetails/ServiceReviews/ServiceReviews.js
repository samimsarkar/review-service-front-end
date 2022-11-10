import React from 'react';
import Review from '../Review/Review';

const ServiceReviews = ({ reviews }) => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {
                reviews?.map(review => <Review key={review._id} review={review}></Review>)
            }
        </ol>
    );
};

export default ServiceReviews;