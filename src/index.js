import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./components/screens/Home/Home";
import Layout from "./components/layout/Layout";
import NavMenu from "./components/NavMenu/NavMenu";
import Counter from "./components/CountersWrapper/CountersWrapper";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>

                <Routes>
                    <Route path="*" element={<NavMenu/>}/>
                </Routes>
                <Routes>
                    <Route path="/todo" element={<Home/>}/>
                </Routes>>

                <Routes>
                    <Route path="/counter" element={<Counter/>}/>
                </Routes>

            </Layout>
        </BrowserRouter>
    </React.StrictMode>
);

