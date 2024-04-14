import { useState } from "react";
import { Dodaj } from "./Dodaj";

export const GetPersonInfo = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (<>
        <h2>{props.person.name}</h2>
        <button onClick={() => { setIsExpanded(!isExpanded);}}>
            {!isExpanded ? "Pokaz" : "Schowaj"}
        </button>
        {isExpanded && <>
            <h3>Wiek: {props.person.age}</h3>
            {props.person.city !== undefined ? <h3>Miasto: {props.person.city}</h3> : null}
            <h3>Liczby: <Dodaj a={props.person.number1} b={props.person.number2}/></h3>
        </>}        
        <hr/>
    </>);
};