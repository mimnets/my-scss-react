import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    // const [count, setCount] = useState(0)
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is Header : {category}</h1>
            <button onClick={() => setCategory(category + 1)}>Increment</button>
            <button onClick={() => setCategory(category - 1)}>Decrment</button>
        </div>
    );
};

export default Header;