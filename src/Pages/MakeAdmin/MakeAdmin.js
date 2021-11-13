import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Navigation from '../Home/Navigation/Navigation';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const history = useHistory();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://fast-ridge-83327.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Admin Added Successfully");
                    history.push('/')
                }
            })

        e.preventDefault()
    }

    return (
        <div style={{ height: '100vh' }}>
            <Navigation></Navigation>
            <div>
                <h2 className="text">Make A New Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <input className="field" label="Email" type="email" onBlur={handleOnBlur} />
                    <button type="submit" className="purchase-btn">Make Admin</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;