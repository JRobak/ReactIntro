import { useState } from "react"

export const AddTask = ({ onAddTask }) => {
    const [name, setName] = useState("")

    return (<>
        <>
            <form onSubmit={(e) =>{
                e.preventDefault()
                onAddTask({name})
                setName("")
            }}>
                 <input defaultValue={name} onChange={(e) => setName(e.target.value) } type="text" name="name" placeholder="Nazwa"/>
                 <button disabled={name.length==0}>Dodaj</button>
            </form>
        </>
    </>)
}