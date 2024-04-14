import { GetPersonInfo } from './components/GetPersonInfo';

class Person {
  constructor(name, age, city, number1, number2) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.number1 = number1;
    this.number2 = number2;
  }
}

const people = [
  new Person("John", 73, "Montana", 3, 9), 
  new Person("Sheldon", 11, "Texas", 5000, 444), 
  new Person("George", 40, "Kansas", 9, 15), 
  new Person("George Jr", 16, "Michigan", 42, 2),
  new Person("Misty", 11, "California", 52, 27)
];

function App() {
  return (
    <>
      <h1>Osoby:</h1>
      {people.map((person) => ( <GetPersonInfo person={person}/> ))}
    </>
  )
}

export default App
