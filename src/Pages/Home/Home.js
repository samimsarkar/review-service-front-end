import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Contact from './Contact/Contact';
import HeroSection from './HeroSection/HeroSection';
import Location from './Location/Location';
import Services from './Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            <HeroSection></HeroSection>
            <Services></Services>
            <Contact></Contact>
            <Location></Location>
        </section>
    );
};

export default Home;