import React from "react";
import s from "./UserInfo.module.css"
export const UserInfo = ({user}) => {

    const {streetAddress, city, state, zip } = user.address ?? {}
    const {firstName,lastName,description } = user

    return (<div className={s.description__container}>
       <div className={s.description__item}>  Выбран пользователь: <b>{firstName + " " +  lastName}</b></div>
        { description ? <div className={s.description__item}> Описание:
            <textarea className={s.description__item__info}>
              {description}
        </textarea></div> : null}

        { streetAddress ? <div className={s.description__item}>Адрес проживания: <b>{streetAddress}</b></div> : null}
        { city ? <div className={s.description__item}> Город: <b>{city}</b></div> : null}
        { state ? <div className={s.description__item}>Провинция/штат: <b>{state}</b></div> : null}
        {zip ? <div className={s.description__item}>Индекс: <b>{zip}</b></div> : null}

    </div>)
}




