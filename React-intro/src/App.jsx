import { useState } from 'react';
import { Form } from './components/Form';
import { GetPersonInfo } from './components/GetPersonInfo';

class Person {
  constructor(name, age, city, number1, number2) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.age = age;
    this.city = city;
    this.number1 = number1;
    this.number2 = number2;
  }
}

const initialPeople = [
  new Person("John", 73, "Montana", 3, 9), 
  new Person("Sheldon", 11, "Texas", 5000, 444), 
  new Person("George", 40, "Kansas", 9, 15), 
  new Person("George Jr", 16, "Michigan", 42, 2),
  new Person("Misty", 11, undefined, 52, 27)
];

function App() {
  const [people, setPeople] = useState(initialPeople);

  const addPerson = (props) => {
    const newPeople = [...people, new Person(props.name, props.age, props.city, props.number1, props.number2)];
    setPeople(newPeople);
  };

  return (
    <>
      <Form onAddPerson={addPerson}/>
      <h1>Osoby:</h1>
      {people.map((person) => ( <GetPersonInfo key={person.id} person={person}/> ))}
    </>
  )
}

export default App
