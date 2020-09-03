import React from 'react';
import Categories from './Categories/Categories';

const Home = (props) => {
    const {count} = props;
    return (
        <div style={{border: '1px solid gray'}}>
            <h1>This is  home : {count}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;