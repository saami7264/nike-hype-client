import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import './Review.css'

const Review = () => {
    const [reviewData, setReviewData] = useState();
    const history = useHistory();

    const handleSubmit = e => {
        const review = {
            ...reviewData,
        }

        fetch('https://fast-ridge-83327.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                alert("Review Posted Successfully");
                history.push('/')
            })

        e.preventDefault()
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newReviewData = { ...reviewData }
        newReviewData[field] = value;
        setReviewData(newReviewData)

        e.preventDefault()
    }

    return (
        <div style={{ height: '100vh' }}>
            <Navigation></Navigation>
            <h1 className="text">Please Leave Us A Review</h1>
            <>
                <form onSubmit={handleSubmit} className="mt-3 review-form">
                    <input className="purchase-field review-field" onBlur={handleOnBlur} name="name" type="text" placeholder="Name" />

                    <input className="purchase-field review-field" onBlur={handleOnBlur} name="email" type="email" placeholder="Email" />

                    <br />

                    <textarea className="address-field review-field-text" onBlur={handleOnBlur} name="comment" type="text" placeholder="Review" />

                    <br />
                    <button type="submit" className="purchase-btn review-field">Submit</button>
                </form>
            </>
            <Footer></Footer>
        </div>
    );
};

export default Review;