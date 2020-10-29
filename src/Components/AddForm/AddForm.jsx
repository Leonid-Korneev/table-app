
import React, { useState} from "react";

import {useForm} from "react-hook-form";
import s from "./AddForm.module.css"


export const AddForm = ({addUser, dataLength}) => {

    let [addMode, setAddMode] = useState(false)
    const { register, handleSubmit, formState  } = useForm({mode:"onChange"});


    const onSubmit = (data, e) => {

         addUser(data)
        e.target.reset()
        setAddMode(false)

    }


    return (

    <div className={s.addForm}> {(!addMode) ? <button type="button" className="btn btn-primary" onClick={() => {
        setAddMode(true)
    }}> Add new user</button> : <form onSubmit={handleSubmit(onSubmit)}>
        <input    className={s.addForm__item}   ref={register({ required: true})} name="id" type="number" min={dataLength} defaultValue={dataLength} placeholder="ID"/>
        <input   className={s.addForm__item}  ref={register({ required: true})} name="firstName" type="text" placeholder="First Name "/>
        <input  className={s.addForm__item}  ref={register({ required: true})} name="lastName" type="text" placeholder="Last Name "/>
        <input   className={s.addForm__item} ref={register({ required: true})} name="email" type="email" placeholder="Email"/>
        <input  className={s.addForm__item}  ref={register({ required: true})} name="phone" type="text" placeholder="Phone"/>
        <button  className="btn btn-primary" type="submit" disabled={!formState.isValid}>Add</button>

    </form>}</div>)

}


