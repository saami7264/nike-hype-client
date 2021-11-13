import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';

const AddProduct = () => {

    const [productData, setProductData] = useState();
    const history = useHistory();

    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;

        const newProductData = { ...productData }
        newProductData[field] = value;
        setProductData(newProductData)
    }

    const handleSubmit = e => {
        const newProduct = { ...productData }

        fetch('https://fast-ridge-83327.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                alert("Product Submitted Successfully");
                history.push('/')
            })

        e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>

            <form onSubmit={handleSubmit} style={{ minHeight: '100vh' }} className="pt-5">
                <input className="w-75 mb-3 field" type="text" name="name" onChange={handleOnChange} label="Email" placeholder="Product Name" />
                <input className="w-75 mb-3 field" type="text" name="img" onChange={handleOnChange} label="Email" placeholder="Product Image" />
                <input className="w-75 mb-3 field" type="text" name="details" onChange={handleOnChange} label="Email" placeholder="Product Short Details" />
                <input className="w-75 mb-3 field" type="text" name="description" onChange={handleOnChange} label="Email" placeholder="Product Lengthy Description" />
                <input className="w-75 mb-3 field" type="number" name="price" onChange={handleOnChange} label="Email" placeholder="Price" />
                <br />
                <button type="submit" className="purchase-btn mb-3">Add Product</button>
            </form>

            <Footer></Footer>
        </div>
    );
};

export default AddProduct;