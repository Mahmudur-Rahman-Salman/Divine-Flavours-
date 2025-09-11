import React from 'react';
import Banners from '../../components/Banners';
import Category from '../../components/Category';
import PopularMenu from '../../components/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;