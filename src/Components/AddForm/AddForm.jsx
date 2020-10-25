import {Field, Form} from "react-final-form";
import React, {useState} from "react";




export const AddForm = ({addUser})=> {

    let [addMode, setAddMode] = useState(false)

    const onSubmit = (data,form)=> {
        addUser(data)
        setTimeout(()=>{form.reset()})
        setAddMode(false)
    }



    return (!addMode) ? <button onClick={()=>{setAddMode(true)}}>Add new user</button> : <Form onSubmit={onSubmit}>
                {props => (
                    <form onSubmit={props.handleSubmit}>

                        <Field  name="id"  component="input"  type="number" placeholder="ID" />
                        <Field  name="firstName"  component="input"  type="text" placeholder="First Name " />
                        <Field  name="lastName"  component="input"  type="text" placeholder="Last Name " />
                        <Field  name="email"  component="input"  type="email" placeholder="Email" />
                        <Field  name="phone"  component="input"  type="text" placeholder="Phone" />

                        <button type="submit">Add</button>
                    </form>
                )}
            </Form>

}