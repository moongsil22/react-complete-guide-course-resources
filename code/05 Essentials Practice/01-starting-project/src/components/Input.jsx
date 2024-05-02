import { useState } from "react";

export default function Input({initialName, label,keyName, onChangeName, value}){

    // const [value, setValue] = useState(initialName);
    // //
    // function handleChange(event){
    //     setValue(event.target.value);
    //         onChangeName(keyName, event.target.value);
    // }
    


    return (
        <p>
            <label>{label}</label>
            <input type="number" required value={value} onChange={(event) => onChangeName(keyName, event.target.value)} onClick={(event) => onChangeName(keyName, event.target.value)}></input>
        </p>
    );
}

