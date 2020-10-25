import React, {useState} from "react";
import s from "./Table.module.css"
import {AddForm} from "../AddForm/AddForm";

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

    let pagesArr = []
    for(let i=1;i<=totalPages;i++) {
        pagesArr.push(<label className={ s.item + " " +  ((currentPage===i)? s.selected:null)} onClick={onPageChangeClick.bind(null,i)} key={i}>{i}</label>)
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
           <div className={s.addForm}>   <AddForm addUser={addUser}  /> </div>
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

               </tr>))).filter((el,i)=>{return    ((i>=(currentPage-1)*usersPerPage)&&(i<currentPage*usersPerPage) ) } )  : null          }
               </thead>
               <tbody>

               </tbody>
           </table>
           <div className="pagination">
               {pagesArr}
           </div>
       </div>
    )
}

export default Table