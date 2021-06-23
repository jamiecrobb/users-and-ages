import React, { useState } from "react";

import PersonList from "./components/person/PersonList";
import NewPerson from "./components/New Person or Search/NewPerson";
import Search from "./components/New Person or Search/Search";
import PersonOrSearch from './components/New Person or Search/PersonOrSearch';

const dummyPeople = [
  { name: "Jeff Bezos", age: "57", id: 1},
];

function App() {
  const [people, setPeople] = useState(dummyPeople);

  const addPersonHandler = (person) => {
    setPeople((prevPeople) => {
      return [person, ...prevPeople];
    });
    console.log(people)
  };

  return (
    <div>
      <h1>People & Ages</h1>
      <PersonOrSearch addPerson={addPersonHandler}/>
      <PersonList people={people} />
    </div>
  );
}

export default App;
