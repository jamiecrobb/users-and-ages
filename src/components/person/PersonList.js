import React from 'react';
import Person from './Person';
import './PersonList.css';

const PersonList = (props) => {
return(
    <div className="list">
        {props.people.map((person) => (
            <Person name={person.name} age={person.age} key={person.id} />
        ))}
    </div>
)
};

export default PersonList;