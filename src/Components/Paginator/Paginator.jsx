import React from "react";
import s from "../Table/Table.module.css";


export const Paginator = ({totalPages,currentPage,onPageChangeClick})=> {

    let pagesArr = []
    for(let i=1;i<=totalPages;i++) {
        pagesArr.push(<label className={ s.item + " " +  ((currentPage===i)? s.selected:null)} onClick={onPageChangeClick.bind(null,i)} key={i}>{i}</label>)
    }






    return (
        <div>{pagesArr}</div>
    )
}