import React from 'react';

const Contact = () => {
    return (
        <div className="grid md:block">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-72 flex justify-center w-full">
                <div className="mt-10 text-white text-4xl font-bold">GET IN TOUCH</div>
            </div>
            <div className="bg-white h-auto flex justify-center">
                <div className="bg-white shadow-lg -mt-40 md:w-1/2 grid lg:flex justify-center">
                    <div className="w-3/4 lg:w-2/3">
                        <div className="text-lg font-medium text-blue-600 m-6">Drop a Message</div>
                        <div className="flex lg:flex-row flex-col">
                            <div className="m-6">
                                <p className="text-sm text-stone-400">Full Name</p>
                                <input className="border-b-2 border-stone-400 text-stone-400 w-36" />
                                <p className="text-sm text-stone-400 mt-6">E-mail</p>
                                <input className="border-b-2 border-stone-400 text-stone-400 w-36" />
                            </div>
                            <div className="m-6">
                                <p className="text-sm text-stone-400">Phone</p>
                                <input className="border-b-2 border-stone-400 text-stone-400 w-36" />
                                <p className="text-sm text-stone-400 mt-6">Subject</p>
                                <input className="border-b-2 border-stone-400 text-stone-400 w-36" />
                            </div>
                        </div>
                        <div className="m-6">
                            <p className="text-sm text-stone-400 mt-6">Message</p>
                            <input className="border-b-2 border-stone-400 text-stone-400 w-36" />
                            <div className="m-4 mt-6 pl-4 pt-1 pb-1 pr-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl text-white font-medium w-36">
                                Send Message
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 bg-green-500">
                        <div className="text-white m-6 font-medium">Contact Information</div>
                        <div className="text-white m-6 text-sm flex">
                            <ion-icon name="location-sharp" className="m-2"></ion-icon>
                            <div>4329 Travis Street, Red Fort L.A., 34950</div>
                        </div>
                        <div className="text-white m-6 text-sm flex">
                            <ion-icon name="call-outline" className="m-2"></ion-icon>
                            <div>+1 987-6543-210</div>
                        </div>
                        <div className="text-white m-6 text-sm flex">
                            <ion-icon name="mail-outline" className="m-2"></ion-icon>
                            <div>admin@tailwind.org</div>
                        </div>
                        <div className="text-white m-6 text-sm flex">
                            <ion-icon name="globe-outline" className="m-2"></ion-icon>
                            <div>www.tailwind.org</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;