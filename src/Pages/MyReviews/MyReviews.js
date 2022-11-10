import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';
import { toast, Toaster } from 'react-hot-toast';

const MyReviews = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/${user.uid}?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('lawFarm-token')}`
            }
        })
            .then(res => res.json())
            .then(review => {
                console.log(review);
                setReviews(review);
                setLoading(false)
            })
    }, [user.uid, user.email])

    const handleDelete = review => {
        const agree = window.confirm(`Are you sure about deleting the review!`);
        if (agree) {
            fetch(`http://localhost:5000/delete-review/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Review deleted successfully!')
                        const remainingReview = reviews.filter(rev => rev._id !== review._id);
                        setReviews(remainingReview)
                    }
                })
        }
    }

    if (loading) {
        return <div className='min-h-screen relative bg-yellow-400'>
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
            </div>
        </div>
    }

    return (
        <div className='max-w-5xl mx-auto my-10'>
            <Toaster></Toaster>
            {
                reviews?.length > 0 ?
                    reviews?.map(review => <ReviewCard key={review._id} review={review} handleDelete={handleDelete}></ReviewCard>)
                    :
                    <div id="alert-border-2" className="flex p-4 text-xl mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200" role="alert">
                        <svg className="flex-shrink-0 w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                        <div className="ml-3 font-medium text-red-700">
                            No reviews have been Found!
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyReviews;