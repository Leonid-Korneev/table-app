import React from "react";
import {useForm} from "react-hook-form";


export const SearchForm = ({getFilteredData}) => {
    const { register, handleSubmit,  } = useForm();
    const onSubmit = data => {
        getFilteredData(data.searchString)
    }


    return (


        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="searchString"  ref={register} type="text"  placeholder="SearchFor..."  />
            <button  type="submit" className="btn btn-primary">Search</button>
        </form>
    )
}