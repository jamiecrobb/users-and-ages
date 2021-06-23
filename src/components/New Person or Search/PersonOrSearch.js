import React, { useState } from 'react';

import Card from '../UI/Card';
import NewPerson from './NewPerson';
import Search from './Search';
import '../UI/Button.css';

const PersonOrSearch = (props) => {
    const [showNewPerson, setShowNewPerson] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    
    
    const clickAddPersonHandler = () => {
        setShowNewPerson(true);
    };
    const cancelNewPersonHandler = () => {
        setShowNewPerson(false);
    };

    const clickSearchHandler = () => {
        setShowSearch(true);
    };
    const cancelSearchHandler = () => {
        setShowSearch(false);
    };

    if (showNewPerson === false && showSearch === false) {
        return (
            <Card>
                <button className="btn" onClick={clickAddPersonHandler}>Add Person</button>
                <button className="btn" onClick={clickSearchHandler}>Search</button>
            </Card>
            )
    }

    if (showNewPerson === true && showSearch === false) {
        return (
            <NewPerson addPerson={props.addPerson} cancelNewPerson={cancelNewPersonHandler}/>
        )
    }

    if (showNewPerson === false && showSearch === true) {
        return (
            <Search cancelSearch={cancelSearchHandler} />
        )
    }


}

export default PersonOrSearch;