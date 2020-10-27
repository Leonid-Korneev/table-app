import React, {useState} from "react";
import s from "../Table/Table.module.css";


export const Paginator = ({totalPages,currentPage,onPageChangeClick, portionSize=4, setCurrentPage })=> {

    let [currentPortion, setCurrentPortion] = useState(1)
    let lastPortion = Math.ceil(totalPages/portionSize)
    let firstItemInPortion = ((currentPortion-1)*portionSize)
    let lastItemInPortion = (currentPortion*portionSize)
    const onPreviousBtnClick  = ()=> {
        setCurrentPortion(currentPortion-1)
        setCurrentPage((currentPortion-1)*portionSize)
    }
    const onNextBtnClick = ()=> {
        setCurrentPortion(currentPortion+1)
        setCurrentPage(currentPortion*portionSize+1)


    }

    let pagesArr = []
    for(let i=1;i<=totalPages;i++) {
        pagesArr.push(<label className={ s.item + " " +  ((currentPage===i)? s.selected:null)} onClick={onPageChangeClick.bind(null,i)} key={i}>{i}</label>)
    }






    return (
        <div >
            {currentPortion>1 ? <button className={s.button} onClick={onPreviousBtnClick}> Prev </button> : null }
            {pagesArr.slice(firstItemInPortion,lastItemInPortion)}
            {currentPortion===lastPortion ?  null : <button className={s.button} onClick={onNextBtnClick}> Next </button> }

        </div>

    )
}