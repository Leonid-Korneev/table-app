import React, {useState} from "react";


const Table = ( {data, onRowClick,totalPages,usersPerPage })=> {

    const [dataClone, setData] = useState(data)
    const [isAscSorting, setSorting] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    debugger

    function onPageChangeClick(page) {
        setCurrentPage(page)
    }


    let pagesArr = []
    for(let i=1;i<=totalPages;i++) {
        pagesArr.push(<label onClick={onPageChangeClick.bind(null,i)} key={i}>{i}</label>)
    }




    const sort = (sortType)=> {
        if(isAscSorting) {
            setData([...dataClone.sort((a,b)=> {return a[`${sortType}`]> b[`${sortType}`] ? -1 : 1})])
        } else {
            setData([...dataClone.sort((a,b)=> {return a[`${sortType}`]> b[`${sortType}`] ? 1 : -1})])
        }


        setSorting(!isAscSorting)

    }

    return (

       <div>
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



                   <tr  key={user.id+user.phone} onClick={onRowClick.bind(null,user)}>
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