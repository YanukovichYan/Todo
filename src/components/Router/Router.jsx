import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import Home from "../screens/Home/Home";
import Counter from "../CountersWrapper/CountersWrapper";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="*" element={<NavMenu/>}/>
            </Routes>
            <Routes>
                <Route path="/todo" element={<Home/>}/>
            </Routes>>

            <Routes>
                <Route path="/counter" element={<Counter/>}/>
            </Routes>
        </div>
    );
};

export default Router;