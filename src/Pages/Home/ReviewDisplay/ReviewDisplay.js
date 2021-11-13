import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';

const ReviewDisplay = () => {

    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch('https://fast-ridge-83327.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <Row className="my-5 g-4" xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
            {reviews?.map(review =>
                <SingleReview
                    key={review._id}
                    review={review}
                ></SingleReview>
            )}
        </Row>
    );
};

export default ReviewDisplay;