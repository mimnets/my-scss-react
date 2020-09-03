import React from 'react';
import Categories from './Categories/Categories';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div style={{border: '1px solid gray'}}>
            <h1>This is  home : {category}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;