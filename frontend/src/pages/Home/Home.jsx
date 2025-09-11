import React from 'react';
import Banners from '../../components/Banners';
import Category from '../../components/Category';
import PopularMenu from '../../components/PopularMenu';
import Featured from '../../components/Featured';


const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;