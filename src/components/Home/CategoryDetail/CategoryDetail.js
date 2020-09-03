import React, { useContext } from 'react';
import { CategoryContext } from '../../../App';

const CategoryDetail = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h4>This is category details</h4>
            <h6>Selected Category : {category}</h6>
        </div>
    );
};

export default CategoryDetail;