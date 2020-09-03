import React, { useEffect } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { useContext } from 'react';
import { CategoryContext } from '../../../App';
import { useState } from 'react';

const allProducts = [
    {name:'Lenovo', category:'Laptop'}, {name:'Dell', category:'Laptop'},
    {name:'Samsung', category:'Mobile'}, {name:'Asus', category:'Laptop'},
    {name:'iPhone', category:'Mobile'}, {name:'Toshiba', category:'Laptop'},
    {name:'Nikon', category:'Camera'}, {name:'Kodak', category:'Camera'}
] 

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() ===  category.toLowerCase());
        setProducts(matchedProducts);
    },[category])
    return (
        <div>
            <h1>Select your category : {category}</h1>
            {
                products.map(pd => <CategoryDetail product ={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;