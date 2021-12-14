import React, { useState } from 'react'
import axios from 'axios';


const PersonForm = (props) => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const {people, setPeople} = props;


    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit

        e.preventDefault();
        //make a post request to create a new person

        axios.post('http://localhost:8000/api/people', {
            firstName,    // this is shortcut syntax for firstName: firstName,
            lastName      // this is shortcut syntax for lastName: lastName
        })
            .then(res=> setPeople([...people, res.data]))
            .catch(err=>console.log(err))

        setFirstName('')
        setLastName('')
    }

    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default PersonForm;
