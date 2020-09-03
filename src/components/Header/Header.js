import React from 'react';
import { useState } from 'react';

const Header = (props) => {
    // const [count, setCount] = useState(0)
    const {count, setCount} = props;
    return (
        <div>
            <h1>This is Header : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrment</button>
        </div>
    );
};

export default Header;