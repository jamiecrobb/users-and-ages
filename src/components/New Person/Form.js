import React, { useState } from "react";

import '../UI/Button.css';
import './Form.css';

const Form = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    }
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const [isEmpty, setIsEmpty] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if (enteredAge === '' || enteredName === '') {
            setIsEmpty(true);
        };
        if (enteredAge !== '' && enteredName !== '') {
            const personData = {
                name: enteredName,
                age: +enteredAge
            };
            props.onSavePersonData(personData);
            setEnteredName('');
            setEnteredAge('');
        }
    };

    if (isEmpty === true) {
        return (
            <form className="form">
                <h2>You must enter values!</h2>
                <div className="form-item">
                    <label>Name</label>
                    <input type="text" onChange={nameChangeHandler} value={enteredName}></input>
                </div>
                <div className="form-item">
                    <label>Age</label>
                    <input type="number" onChange={ageChangeHandler} value={enteredAge}></input>
                </div>    
                <div className="form-btns">  
                    <button type="button" onClick={props.onCancel} className="btn">Cancel</button>
                    <button type="submit" onClick={submitHandler} className="btn">Submit</button>
                </div>  
            </form>
        )
    }

    if (isEmpty === false) {
        return (
            <form className="form">
                <div className="form-item">
                    <label>Name</label>
                    <input type="text" onChange={nameChangeHandler} value={enteredName}></input>
                </div>
                <div className="form-item">
                    <label>Age</label>
                    <input type="number" onChange={ageChangeHandler} value={enteredAge}></input>
                </div>    
                <div className="form-btns">  
                    <button type="button" onClick={props.onCancel} className="btn">Cancel</button>
                    <button type="submit" onClick={submitHandler} className="btn">Submit</button>
                </div>  
            </form>
        )
    }

};

export default Form;