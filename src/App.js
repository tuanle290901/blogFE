import React from "react";
import {Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import BlogDetail from "./component/blog/BlogDetail";


import {ToastContainer} from "react-toastify";
import HomeComponent from "./component/page/HomeComponent";
import PageComponent from "./component/page/PageComponent";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PageComponent/>}>
                    <Route path="/blog" element={<BlogDetail/>}/>
                </Route>
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
