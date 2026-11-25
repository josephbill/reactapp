import {useState} from 'react'
import '../styles/TeamForm.css'

function TeamForm({onAddMember}){
    // one state per field 
    const [name, setName] = useState('')
    const [role,setRole] = useState('FrontEnd Engineer')
    // state will inform user when form is being saved 
    const [saving, setSaving] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        // basic validation
        if(!name.trim()) return; 
        setSaving(true)
        // simulation of asynchronous saving via an api 
        // to see the button text change 
        await new Promise((res) => setTimeout(res, 800))

        // add new member 
        onAddMember({name: name.trim(), role})  // notify the parent component of new member
        //reset form 
        setName('')
        setRole('FrontEnd Engineer')
        setSaving(false)

    }

    return(
        <>
           <form className="team-form"  onSubmit={handleSubmit}>
            <h2>Add New Member</h2>
            <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Full Name"
            disabled={saving}
            />
            <br>
            </br>
            <select value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={saving}
            >
                <option>FrontEnd Engineer</option>
                <option>BackEnd Engineer</option>
                <option>AI applications Engineer</option>
            </select>
            <br></br>
            <button  
            type='submit'
            disabled={saving || !name.trim() }
            >
                {saving ? 'Saving.....' : 'Add Member'}
            </button>
           </form>
        
        </>
    )


}

export default TeamForm