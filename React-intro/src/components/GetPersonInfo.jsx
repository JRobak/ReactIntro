import { Dodaj } from "./Dodaj";

export const GetPersonInfo = (props) => (
    <>
        <h2>{props.person.name}</h2>
        <h3>Wiek: {props.person.age}</h3>
        <h3>Miasto: {props.person.city}</h3>
        <h3>Liczby: <Dodaj a={props.person.number1} b={props.person.number2}/></h3>
        <hr></hr>
    </>
);