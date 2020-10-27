import React, {useEffect, useState} from 'react';
import Table from "./Components/Table/Table";
import * as axios from "axios";
import {Preloader} from "./Components/Preloader/Preloader";
import {UserInfo} from "./Components/UserInfo/UserInfo";


function App() {


    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const [totalUsersCount, setTotalUsersCount] = useState(0)
    const usersPerPage = 5
    let totalPages = Math.ceil(totalUsersCount/usersPerPage)

    useEffect(() => {
        setIsLoading(true)
        axios.get("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
            .then((response) => {
                setTotalUsersCount(response.data.length)
                setData({data: response.data})
            })
            .then(() => {
                setIsLoading(false)

            })
    }, [])

    const onRowClick = (user) => {
        console.log(user)
        setSelectedUser(user)

    }


    return (
        <div className="container">
            {!isLoading ? <Table data={data.data} onRowClick={onRowClick} totalPages={totalPages} usersPerPage={usersPerPage}  /> : <Preloader/>}
            {selectedUser ? <UserInfo user={selectedUser}/> : null}


        </div>
    );
}

export default App;
