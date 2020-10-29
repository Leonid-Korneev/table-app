import React, {useEffect, useState} from "react";
import s from "./Table.module.css"
import {AddForm} from "../AddForm/AddForm";
import {Paginator} from "../Paginator/Paginator";
import {SearchForm} from "../SearchForm/SearchForm";

const Table = ({data, onRowClick, totalPages, totalUsersCount, setTotalUsersCount, usersPerPage = 15}) => {

    const [dataClone, setData] = useState(data)
    const [isAscSorting, setSorting] = useState(false)
    const [filteredData, setFilteredData] = useState(dataClone)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setTotalUsersCount(filteredData.length)
    }, [filteredData])


    function onPageChangeClick(page) {
        setCurrentPage(page)
    }


    const addUser = (user) => {
        setData([{...user}, ...dataClone])
    }


    const sortData = (sortProperty) => {
        if (isAscSorting) {
            setFilteredData([...filteredData.sort((a, b) => {
                return a[`${sortProperty}`] > b[`${sortProperty}`] ? -1 : 1
            })])
        } else {
            setFilteredData([...filteredData.sort((a, b) => {
                return a[`${sortProperty}`] > b[`${sortProperty}`] ? 1 : -1
            })])
        }


        setSorting(!isAscSorting)

    }

    const getFilteredData = (subStr) => {
        setFilteredData(
            [...dataClone].filter(user => {

                return user['firstName'].toString().toLowerCase().includes(subStr.toLowerCase()) ||
                    user['lastName'].toString().toLowerCase().includes(subStr.toLowerCase()) ||
                    user['id'].toString().toLowerCase().includes(subStr.toLowerCase()) ||
                    user['email'].toString().toLowerCase().includes(subStr.toLowerCase())


            })
        )


    }

    return (

        <div>
            <div className={s.addForm}>
                <AddForm addUser={addUser} dataLength={data ? dataClone.length : 0}/>
            </div>

            <SearchForm getFilteredData={getFilteredData}/>


            <table className="table">
                <thead>
                <tr>
                    <th className={s.table_header} onClick={sortData.bind(null, "id")}>ID {}</th>
                    <th className={s.table_header} onClick={sortData.bind(null, "firstName")}>First Name</th>
                    <th className={s.table_header} onClick={sortData.bind(null, "lastName")}>Last Name</th>
                    <th className={s.table_header} onClick={sortData.bind(null, "email")}>Email</th>
                    <th className={s.table_header} onClick={sortData.bind(null, "phone")}>Phone</th>
                </tr>

                {data ? (filteredData.map(user => (
                    <tr className={s.tableRow} key={user.id + user.phone} onClick={onRowClick.bind(null, user)}>
                        <th>{user.id}</th>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>

                    </tr>))).slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage) : null}
                </thead>
                <tbody>

                </tbody>
            </table>


            <div className={s.pagination}>
                {totalUsersCount ?
                    <Paginator usersPerPage={usersPerPage} currentPage={currentPage} totalPages={totalPages}
                               totalUsersCount={totalUsersCount}
                               setCurrentPage={setCurrentPage} onPageChangeClick={onPageChangeClick}/> : null}

            </div>
        </div>
    )
}

export default Table