import React, { useState } from "react";

import PersonList from "./components/person/PersonList";
import NewPerson from "./components/New Person/NewPerson";

const dummyPeople = [
  { name: "Jamie Robb", age: "17", id: 1},
  { name: "Matthew Robb", age: "13", id: 2 },
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
      <NewPerson onAddPerson={addPersonHandler} />
      <PersonList people={people} />
    </div>
  );
}

export default App;
