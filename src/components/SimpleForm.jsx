import {useState} from 'react'

export default function SimpleForm(){
    const [name,setName] = useState('')

    function handleChange(e){
         setName(e.target.value)
    }


    return (
        <>
            <form>
                <input
                value={name}
                onChange={handleChange}
                placeholder='Enter Name'
                />
            </form>
            <p>Entered Name is {name}</p>
        
        </>
    )
}