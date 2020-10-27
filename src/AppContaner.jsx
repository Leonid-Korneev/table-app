import React, {useState} from "react";
import {DataChooser} from "./Components/DataChooser/DataChooser";
import App from "./Components/App/App";


export const AppContainer = () => {
    const [dataSize, setDataSize] = useState(null)
    return !dataSize ? <DataChooser setDataSize={setDataSize}/> : <App dataSize={dataSize}/>

}