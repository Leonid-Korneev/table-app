import {Field, Form} from "react-final-form";
import React, {useState} from "react";
import {required} from "../../common/validators/validators";




export const AddForm = ({addUser, dataLength})=> {

    let [addMode, setAddMode] = useState(false)

    const onSubmit = (data,form)=> {
        addUser(data)
        setTimeout(()=>{form.reset()})
        setAddMode(false)
    }



    return (!addMode) ? <button onClick={()=>{setAddMode(true)}}>Add new user</button> : <Form  onSubmit={onSubmit}>
                {props => (
                    <form  onSubmit={props.handleSubmit}>

                        <Field  name="id"  component="input" validate={required}  type="number" min={dataLength} defaultValue={dataLength} placeholder="ID" />
                        <Field  name="firstName" validate={required} component="input"  type="text" placeholder="First Name " />
                        <Field  name="lastName" validate={required}  component="input"  type="text" placeholder="Last Name " />
                        <Field  name="email"   validate={required} component="input"  type="email" placeholder="Email" />
                        <Field  name="phone" validate={required} component="input"  type="text" placeholder="Phone" />

                        <button type="submit" >Add</button>
                    </form>
                )}
            </Form>

}