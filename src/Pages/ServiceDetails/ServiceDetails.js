import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import ServiceReviews from './ServiceReviews/ServiceReviews';
import { FaStar, FaUserAlt } from "react-icons/fa";

const ServiceDetails = () => {

    const [loading, setLoading] = useState(true);
    const [service, setService] = useState({});
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();
    const { author_name, author_photo, rating, name, image, price, description, _id } = service;
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(service => {
                setService(service);
            })
    }, [id])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(review => {
                setReviews(review);
                setLoading(false);
            })
    }, [id])

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const data = {
            serviceId: _id,
            serviceName: name,
            serviceImage: image,
            review: feedback,
            uid: user?.uid,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            email: user?.email,
            timestamp: new Date().getTime()
        }
        if (feedback.length > 0) {
            fetch('http://localhost:5000/add-review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(resData => {
                    if (resData.acknowledged) {
                        let newData = { ...data };
                        newData._id = resData.insertedId;
                        const newReviews = [newData, ...reviews];
                        setReviews(newReviews);
                        toast.success('Review Added Successfully!');
                        form.reset();
                    }
                })
        } else {
            toast.error('Please write something & try again!');
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
        <div>
            {/* Course Details */}
            <Toaster></Toaster>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src={image} />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full overflow-hidden inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img src={author_photo} alt="" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{author_name}</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">Service Provider</p>
                                    <p className="text-md text-yellow-500 py-1 flex gap-2 items-center"><FaStar></FaStar> {rating} Star Out Of 5.0</p>
                                    <p className="text-md py-1 flex gap-2 items-center"><FaUserAlt></FaUserAlt> Total {reviews.length} Reviews</p>
                                    <p className="text-2xl text-blue-500 py-2">Price: ${price}</p>
                                    <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 my-2 w-full">Add To Cart</button>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <h2 className="text-3xl font-bold mb-3">{name}</h2>
                                <p className="leading-relaxed text-lg mb-4">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Review */}
            <section className='p-10'>
                {
                    user?.uid ?
                        <form onSubmit={handleAddReview}>
                            <div className='flex flex-col md:flex-row justify-evenly items-center max-w-5xl mx-auto gap-3'>
                                <img
                                    src={user?.photoURL}
                                    className="rounded-lg w-16"
                                    alt="Avatar"
                                />
                                <textarea name="feedback" id="" className='w-full' placeholder='Your Feedback...'></textarea>
                                <button className="bg-blue-500 py-3 px-8 rounded text-white font-bold">Add Review</button>
                            </div>
                        </form>
                        :
                        <h2 className="text-3xl font-bold">
                            Please <Link to='/login' className="text-blue-500">Login</Link> to add your review!
                        </h2>
                }
                <div className='max-w-5xl mx-auto mt-10'>
                    <ServiceReviews reviews={reviews}></ServiceReviews>
                </div>
            </section >
        </div >
    );
};

export default ServiceDetails;