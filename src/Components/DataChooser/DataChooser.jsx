import React from "react";

import s from "./DataChooser.module.css"


export const DataChooser = (props)=> {
    return (
        <div className={s.container}>
            <h2 className={s.title}>How much data do you want to get? </h2>
            <div className={s.buttons}>
                <button type="button" className={s.button + " " + "btn btn-primary"} onClick={()=> {props.setDataSize("big")}}>A lot of data</button>
                <button  type="button" className="btn btn-primary" onClick={()=> {props.setDataSize("small")}}>A little bit of data</button>
            </div>

        </div>

    )
}