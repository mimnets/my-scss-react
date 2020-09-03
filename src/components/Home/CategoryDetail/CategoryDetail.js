import React, { useContext } from 'react';
import { CategoryContext } from '../../../App';

const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h4>This is category details</h4>
            <h6>Selected Product : {name}</h6>
        </div>
    );
};

export default CategoryDetail;