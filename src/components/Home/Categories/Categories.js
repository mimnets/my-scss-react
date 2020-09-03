import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Categories = (props) => {
    const {count} = props;
    return (
        <div>
            <h1>Select your category</h1>
            <CategoryDetail count={count}></CategoryDetail>
        </div>
    );
};

export default Categories;