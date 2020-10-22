import React, {useEffect, useState} from 'react';
import Table from "./Components/Table/Table";
import * as axios from "axios";
import {Preloader} from "./Components/Preloader/Preloader";



function App() {


  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    setIsLoading(true)
    axios.get("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
        .then((response)=> {

          setData({data: response.data})
        })
        .then(()=> {  setIsLoading(false)})
  }, [])


    console.log(data)

  return (
    <div className="container">
        {!isLoading ? <Table data={data.data}/> : <Preloader/> }



    </div>
  );
}

export default App;
