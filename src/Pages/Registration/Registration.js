import React, { useContext } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaGooglePlus, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Registration = () => {

    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        const from = location?.state?.from?.pathname || '/';

        createUser(email, password)
            .then(result => {
                profileUpdate(name, photoURL)
                    .then(res => {
                        toast.success("User Created Successfully!");
                        form.reset();
                        navigate(from)
                    })
                    .catch(error => toast.error(error.message))
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className="flex justify-center">
            <Toaster></Toaster>
            <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl md:w-[50%] m-2">
                <div className="w-full md:w-3/4">
                    <div className="text-xl flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
                        <h1 className="font-semibold text-xl md:text-3xl text-gray-600 m-2">Login to your account</h1>
                    </div>
                    <form onSubmit={handleRegister} className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                        <div className="">
                            <div className="m-1 text-lg text-gray-500 text-semibold">Full Name</div>
                            <input type="text" name='name' className="border-b border-gray-500 focus:outline-none text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div className="">
                            <div className="m-1 text-lg text-gray-500 text-semibold">Photo URL</div>
                            <input type="text" name='photourl' className="border-b border-gray-500 focus:outline-none text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div className="">
                            <div className="m-1 text-lg text-gray-500 text-semibold">Email Addres</div>
                            <input type="text" name='email' className="border-b border-gray-500 focus:outline-none text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div className="">
                            <div className="m-1 text-lg text-gray-500 text-semibold">Password</div>
                            <input type="password" name='password' className="border-b border-gray-500 focus:outline-none text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div className="text-center mt-7">
                            <button className="px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-stone-600 hover:bg-stone-500 font-medium m-2 mb-6">Sign Up</button>
                        </div>
                    </form>
                    <div className='m-3'>
                        <p>Already have an account ? <Link to='/login' className='text-blue-500'>Sign In</Link></p>
                    </div>
                </div>
                <div className="h-[100%] w-full md:w-2/3 items-center flex justify-center">
                    <div className="text-stone-700 text-base font-semibold text-center my-10 space-y-2 m-2 cursor-pointer">
                        <div className="flex justify-between items-center border-2 border-stone-700 px-6 py-2">
                            <FaGooglePlus className='text-2xl mr-1'></FaGooglePlus>
                            <div className="m-1 text-lg">Continue with Google</div>
                        </div>
                        <div className="flex justify-between items-center border-2 border-stone-700 px-6 py-2">
                            <FaGithub className='text-2xl mr-1'></FaGithub>
                            <div className="m-1 text-lg">Continue with Github</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;