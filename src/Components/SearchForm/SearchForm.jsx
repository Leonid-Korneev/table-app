import React from "react";
import {useForm} from "react-hook-form";
import s from "./SearchForm.module.css"


export const SearchForm = ({getFilteredData}) => {
    const { register, handleSubmit,  } = useForm();
    const onSubmit = data => {
        getFilteredData(data.searchString)
    }


    return (

       <form onSubmit={handleSubmit(onSubmit)}>
           <div className={s.container}>
            <input className={s.searchField} name="searchString"  ref={register} type="text"  placeholder="SearchFor..."  />
            <button className={s.sumbit + " " + "btn btn-primary"} type="submit">Search</button>
           </div>
        </form>


    )
}