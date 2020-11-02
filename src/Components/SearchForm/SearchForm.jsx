import React from "react";
import {useForm} from "react-hook-form";
import s from "./SearchForm.module.css"


export const SearchForm = ({getFilteredData,setCurrentPage}) => {
    const { register, handleSubmit,  } = useForm();
    const onSubmit = data => {
        setCurrentPage(1)
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