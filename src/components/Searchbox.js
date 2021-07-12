import {React,useState} from 'react'

export const Searchbox = ({onSearch}) => {
    const [value,setValue] = useState("")    
    return (
        <div>
            <input type={"text"} placeholder={"Universo Deseado (1-108)"} value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => { onSearch(value) }} ></button>
        </div>
    )
}
