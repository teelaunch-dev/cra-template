import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../containers/home/Home";
import Personalization from "../containers/personalization/Personalization";



const Navigator =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/personalization"} element={<Personalization/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator
