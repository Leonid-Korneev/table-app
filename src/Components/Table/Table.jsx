import React, {useState} from "react";


const Table = ({data})=> {
    const [dataClone, setData] = useState(data)
    const [isAscSorting, setSorting] = useState(false)

    const sort = (sortType)=> {
        if(isAscSorting) {
            setData([...dataClone.sort((a,b)=> {return a[`${sortType}`]> b[`${sortType}`] ? -1 : 1})])
        } else {
            setData([...dataClone.sort((a,b)=> {return a[`${sortType}`]> b[`${sortType}`] ? 1 : -1})])
        }


        setSorting(!isAscSorting)

    }

    return (

        <table className="table">
            <thead>
            <tr>
                <th onClick={sort.bind(null, "id")}>id { }</th>
                <th >First Name</th>
                <th onClick={sort.bind(null, "lastName")} >Last Name</th>
                <th >Email</th>
                <th >Phone</th>
            </tr>

            {  data ?    (dataClone.map(el=>(<tr>
                    <th key={el.id}>{el.id}</th>
                    <td  >{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.email}</td>
                    <td>{el.phone}</td>

                </tr>))) : null          }
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}

export default Table