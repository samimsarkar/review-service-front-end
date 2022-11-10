import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateReview = () => {

    const [loading, setLoading] = useState(true);
    const [review, setReview] = useState({});
    const { id } = useParams();

    const { serviceName, displayName, photoURL } = review;

    useEffect(() => {
        fetch(`http://localhost:5000/get-review/${id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data);
                setLoading(false);
            })
    }, [id])

    const changeHandler = event => {
        const newReview = { ...review };
        newReview.review = event.target.value;
        setReview(newReview);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Updated Successfully!')
                }
            })
    }

    if (loading) {
        return <div className='min-h-screen relative bg-yellow-400'>
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
            </div>
        </div>
    }

    return (
        <div className='my-24 max-w-5xl mx-auto'>
            <Toaster></Toaster>
            <h2 className='text-4xl font-bold text-center underline text-blue-500'>Update Review</h2>
            <h2 className='text-3xl my-5'><span className='font-bold'>Service Name:</span> {serviceName}</h2>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row justify-evenly items-center gap-3'>
                    <img
                        src={photoURL}
                        className="rounded-lg w-16"
                        alt={displayName}
                    />
                    <textarea name="feedback" onChange={changeHandler} defaultValue={review?.review} className='w-full' placeholder='Your Feedback...'></textarea>
                    <button className="bg-blue-500 py-3 px-8 rounded text-white font-bold">Update Review</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;