import React from 'react';

const Location = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-14 mb-3'>Our Location</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7497251992177!2d90.37499861429777!3d23.79192499310722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73458f06137%3A0x50dcc5d69e174edc!2sShewrapara%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1668182374765!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Travel Agency' className='w-full'></iframe>
        </div>
    );
};

export default Location;