import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="flex justify-center">
            <div className="flex md:flex-row flex-col px-4 py-2 my-10 gap-y-7 gap-x-7 max-w-7xl">
                <div className="bg-gradient-to-t from-gray-900 to-gray-600 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
                    <div className="flex flex-col justify-center items-center text-white p-2">
                        <div className="text-3xl">Mover</div>
                        <div className="flex justify-center my-3 font-medium md:tracking-tighter">
                            <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">£</div>
                            <div className="text-3xl md:text-5xl">6.99</div>
                            <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]">/mo</div>
                        </div>
                        <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                            <Link to="/">Order Now</Link>
                        </div>
                        <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                            <div className="m-1">All basic features</div>
                            <div className="m-1">Drip course content</div>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-orange-500 to-yellow-500 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
                    <div className="flex flex-col justify-center items-center text-white p-2">
                        <div className="text-3xl">Shaker</div>
                        <div className="flex justify-center my-3 font-medium md:tracking-tighter">
                            <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">£</div>
                            <div className="text-3xl md:text-5xl">9.99</div>
                            <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]">/mo</div>
                        </div>
                        <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                            <Link to="/">Order Now</Link>
                        </div>
                        <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                            <div className="m-1">All basic features</div>
                            <div className="m-1">Advanced tracking</div>
                            <div className="m-1">Onboarding + Migration assistance</div>
                            <div className="m-1">Drip course content</div>
                            <div className="m-1">Affiliates</div>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
                    <div className="flex flex-col justify-center items-center text-white p-2">
                        <div className="text-3xl">Earthquaker</div>
                        <div className="flex justify-center my-3 font-medium md:tracking-tighter">
                            <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">£</div>
                            <div className="text-3xl md:text-5xl">9.99</div>
                            <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]">/mo</div>
                        </div>
                        <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                            <Link to="/">Order Now</Link>
                        </div>
                        <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                            <div className="m-1">All basic features</div>
                            <div className="m-1">Advanced tracking</div>
                            <div className="m-1">Onboarding + Migration assistance</div>
                            <div className="m-1">Drip course content</div>
                            <div className="m-1">Affiliates</div>
                            <div className="m-1">Multiple Payments</div>
                            <div className="m-1">ACH payments</div>
                            <div className="m-1">Team Licenses</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;