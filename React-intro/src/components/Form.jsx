import { useState } from "react";

export const Form = ({ onAddPerson }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [city, setCity] = useState("");
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();

    return (<>
        <button onClick={(e) => { setIsExpanded(!isExpanded);}}>
            {!isExpanded ? "Pokaz" : "Schowaj"} formularz
        </button>
        {isExpanded && <>
            <form onSubmit={(e) =>{
                e.preventDefault();
                onAddPerson({name, age, city, number1, number2});
                setIsExpanded(false);
            }}>
                 <input defaultValue={name} onChange={(e) => { setName(e.target.value); }} type="text" name="name" placeholder="Imię"/><br/>
                 <input defaultValue={age} onChange={(e) => { setAge(e.target.value); }} type="number" name="age" placeholder="Wiek"/><br/>
                 <input defaultValue={city} onChange={(e) => { setCity(e.target.value); }} type="text" name="city" placeholder="Miasto"/><br/>
                 <input defaultValue={number1} onChange={(e) => { setNumber1(e.target.value); }} type="number" name="number1" placeholder="Liczba 1"/><br/>
                 <input defaultValue={number2} onChange={(e) => { setNumber2(e.target.value); }} type="number" name="number2" placeholder="Liczba 2"/><br/>
                 <button disabled={name.length==0}>Zapisz</button>
            </form>
        </>}
    </>)
}