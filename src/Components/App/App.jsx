import React, {useEffect, useState} from 'react';
import Table from "../Table/Table";
import {Preloader} from "../Preloader/Preloader";
import {UserInfo} from "../UserInfo/UserInfo";
import {apiRequests} from "../../api/apiRequests";


function App(props) {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedUser, setSelectedUser] = useState(null)
    const [totalUsersCount, setTotalUsersCount] = useState(0)


    useEffect(() => {
        let dataRequest
        setIsLoading(true)
        if (props.dataSize === "small")
            dataRequest = apiRequests.getSmallData()
        else dataRequest = apiRequests.getBigData()

        dataRequest.then((response) => {
            setTotalUsersCount(response.data.length)
            setData({data: response.data})
            setIsLoading(false)
        })


    }, [props.dataSize])

    const onRowClick = (user) => {
        setSelectedUser(user)
    }


    return (
        <div className="container">
            {!isLoading ? <Table data={data.data} onRowClick={onRowClick} setTotalUsersCount={setTotalUsersCount}  totalUsersCount={totalUsersCount}/> :
                <Preloader/>}
            {selectedUser ? <UserInfo user={selectedUser}/> : null}
        </div>
    );
}

export default App;
