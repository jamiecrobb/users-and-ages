import React, { useState } from "react";
import './NewPerson.css';
import '../UI/Button.css'

import Form from "./Form";
import Card from "../UI/Card";

const NewPerson = (props) => {

    const [showForm, setShowForm] = useState(false)

    const clickHandler = () => {
        setShowForm(true);
    };

    const savePersonDataHandler = (enteredPersonData) => {
        console.log('Saved the data from NewPerson.js');
        const personData = {...enteredPersonData, id: Math.random().toString()};
        console.log(personData);
        props.onAddPerson(personData);
        setShowForm(false);
    };

    const cancelHandler = () => {
        setShowForm(false);
    };

    if (showForm === false) {
        return (
            <Card className="add-person">
                <button onClick={clickHandler} className="btn">Add Person</button>
            </Card>
        )
    };

    return (
        <Card>        
            <Form onSavePersonData={savePersonDataHandler} onCancel={cancelHandler}/>
        </Card>
    )

};

export default NewPerson;