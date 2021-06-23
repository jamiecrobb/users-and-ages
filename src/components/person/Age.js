import React from 'react';
import './Age.css';

const Age = (props) => {
    return (
        <div className="age">
            <p>Age</p>
            <p>{props.age}</p>
        </div>
    )
};

export default Age;