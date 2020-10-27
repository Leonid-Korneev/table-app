import React, {useState} from "react";
import s from "./Table.module.css"
import {AddForm} from "../AddForm/AddForm";
import {Paginator} from "../Paginator/Paginator";

const Table = ( {data, onRowClick,totalPages,usersPerPage })=> {

    const [dataClone, setData] = useState(data)
    const [isAscSorting, setSorting] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)


    function onPageChangeClick(page) {
        setCurrentPage(page)
    }


    const addUser = (user)=> {
        setData([{...user},...dataClone])
    }



    const sort = (sortProperty)=> {
        if(isAscSorting) {
            setData([...dataClone.sort((a,b)=> {return a[`${sortProperty}`]> b[`${sortProperty}`] ? -1 : 1})])
        } else {
            setData([...dataClone.sort((a,b)=> {return a[`${sortProperty}`]> b[`${sortProperty}`] ? 1 : -1})])
        }


        setSorting(!isAscSorting)

    }

    return (

       <div>
           <div className={s.addForm}>   <AddForm addUser={addUser} dataLength= {  data ? dataClone.length : 0}  /> </div>
           <table className="table">
               <thead>
               <tr>
                   <th onClick={sort.bind(null, "id")}>id { }</th>
                   <th onClick={sort.bind(null, "firstName")}>First Name </th>
                   <th onClick={sort.bind(null, "lastName")} >Last Name</th>
                   <th onClick={sort.bind(null, "email")}>Email </th>
                   <th onClick={sort.bind(null, "phone")}>Phone </th>
               </tr>

               {  data ?    (dataClone.map(user=>(



                   <tr className={s.tableRow} key={user.id+user.phone} onClick={onRowClick.bind(null,user)}>
                   <th >{user.id}</th>
                   <td  >{user.firstName}</td>
                   <td>{user.lastName}</td>
                   <td>{user.email}</td>
                   <td>{user.phone}</td>

               </tr>))).slice((currentPage-1)*usersPerPage, currentPage*usersPerPage)  : null          }
               </thead>
               <tbody>

               </tbody>
           </table>
           <div className={s.pagination}>
               <Paginator currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} onPageChangeClick={onPageChangeClick} />

           </div>
       </div>
    )
}

export default Table