import React from "react";

import Card from '../UI/Card';
import Age from './Age'
import "./Person.css"

const Person = (props) => {
  return (
      <Card className="person">
        <h2>Name: {props.name}</h2>
        <Age age={props.age} />
      </Card>
  );
};

export default Person;
