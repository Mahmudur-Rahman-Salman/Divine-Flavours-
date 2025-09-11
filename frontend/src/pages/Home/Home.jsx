import React from 'react';
import Banners from '../../components/Banners';
import Category from '../../components/Category';
import PopularMenu from '../../components/PopularMenu';
import Featured from '../../components/Featured';
import Testimonials from '../../components/Testimonials';


const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;