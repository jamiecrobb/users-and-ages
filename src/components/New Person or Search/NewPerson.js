import React, { useState } from "react";
import './NewPerson.css';

import Form from "./Form";
import Card from "../UI/Card";

const NewPerson = (props) => {

    const savePersonDataHandler = (enteredPersonData) => {
        console.log('Saved the data from NewPerson.js');
        const personData = {...enteredPersonData, id: Math.random().toString()};
        console.log(personData);
        props.addPerson(personData);
        props.cancelNewPerson();
    };

    return (
        <Card>        
            <Form 
                onSavePersonData={savePersonDataHandler} 
                onCancel={props.cancelNewPerson}
            />
        </Card>
    )

};

export default NewPerson;