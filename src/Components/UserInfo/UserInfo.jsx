import React from "react";

export const UserInfo = ({user}) => {
    const {streetAddress, city, state, zip } = user.address
    const {firstName,lastName,description } = user

    return (<div>
       <div>  Выбран пользователь <b>{firstName + " " +  lastName}</b></div>
      <div>   Описание:
          <textarea>
              {description}
        </textarea></div>
        <div>Адрес проживания: <b>{streetAddress}</b></div>
       <div>  Город: <b>{city}</b></div>
        <div>Провинция/штат: <b>{state}</b></div>
        <div>Индекс: <b>{zip}</b></div>
    </div>)
}




