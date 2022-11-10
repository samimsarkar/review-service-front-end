import React from 'react';
import { Link } from 'react-router-dom';

const Feedback = () => {
    return (
        <div className="flex justify-center  p-4">
            <div className="flex flex-col justify-center items-center ">
                <div className=" text-2xl md:text-5xl font-medium flex my-6">
                    <div>Testimonials By </div>
                    <div className="text-cyan-400 mx-1"> Trusted</div>
                </div>
                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">

                    <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-cyan-400">

                        <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                            <div className="  items-center justify-center flex py-2">
                                <div className="flex flex-col  items-center justify-center ">
                                    <div className="flex items-center">
                                        <div className="p-1 bg-white rounded-full">

                                            <img src="https://source.unsplash.com/100x100/?man,boy" alt=""
                                                className="rounded-full" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-stone-500 mx-4">John Doe</div>
                                            <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4"><Link
                                                href="#">Board Director of Tailblocks</Link></div>
                                        </div>
                                    </div>
                                    <div className="text-stone-400  m-2 px-8"> Tailblocks provides best Tailwind CSS Components and
                                        Blocks to create an unique websites within minutes. It has upto 60+ free components for
                                        front-end Web Development.</div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-cyan-400">

                        <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                            <div className="  items-center justify-center flex py-2">
                                <div className="flex flex-col  items-center justify-center ">
                                    <div className="flex items-center">
                                        <div className="p-1 bg-white rounded-full">

                                            <img src="https://source.unsplash.com/100x100/?girl" alt="" className="rounded-full" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-stone-500 mx-4">Elina Gilbert</div>
                                            <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4"><Link
                                                href="#">ShareHolder, Tailblocks</Link></div>
                                        </div>
                                    </div>
                                    <div className="text-stone-400  m-2 px-8"> Tailblocks provides best Tailwind CSS Components and
                                        Blocks to create an unique websites within minutes. It has upto 60+ free components for
                                        front-end Web Development.</div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-cyan-400">

                        <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                            <div className="  items-center justify-center flex py-2">
                                <div className="flex flex-col  items-center justify-center ">
                                    <div className="flex items-center">
                                        <div className="p-1 bg-white rounded-full">

                                            <img src="https://source.unsplash.com/100x100/?boy" alt="" className="rounded-full" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-stone-500 mx-4">Josh Reacher</div>
                                            <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4"><Link
                                                href="#">CEO, Tailblocks</Link></div>
                                        </div>
                                    </div>
                                    <div className="text-stone-400  m-2 px-8"> Tailblocks provides best Tailwind CSS Components and
                                        Blocks to create an unique websites within minutes. It has upto 60+ free components for
                                        front-end Web Development.</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;