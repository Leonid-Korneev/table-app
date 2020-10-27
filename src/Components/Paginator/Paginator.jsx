import React, {useState} from "react";
import s from "../Table/Table.module.css";


export const Paginator = ({currentPage, onPageChangeClick, portionSize = 10, setCurrentPage, usersPerPage, totalUsersCount}) => {

    let [currentPortion, setCurrentPortion] = useState(1)
    let totalPages = Math.ceil(totalUsersCount / usersPerPage)
    let lastPortion = Math.ceil(totalPages / portionSize)
    let firstItemInPortion = ((currentPortion - 1) * portionSize)
    let lastItemInPortion = (currentPortion * portionSize)


    const onPreviousBtnClick = () => {
        setCurrentPortion(currentPortion - 1)
        setCurrentPage((currentPortion - 1) * portionSize)
    }
    const onNextBtnClick = () => {
        setCurrentPortion(currentPortion + 1)
        setCurrentPage(currentPortion * portionSize + 1)


    }

    let pagesArr = []
    for (let i = 1; i <= totalPages; i++) {
        pagesArr.push(<label className={s.item + " " + ((currentPage === i) ? s.selected : null)}
                             onClick={onPageChangeClick.bind(null, i)} key={i}>{i}</label>)
    }


    return (
        <>
            {currentPortion > 1 ? <button type="button" className={s.item + s.button + " " + "btn btn-primary"}
                                          onClick={onPreviousBtnClick}> Prev </button> : null}
            <div>  {pagesArr.slice(firstItemInPortion, lastItemInPortion)}</div>
            {currentPortion === lastPortion ? null : <button className={s.item + s.button + " " + "btn btn-primary"}
                                                             onClick={onNextBtnClick}> Next </button>}

        </>

    )
}