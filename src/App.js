import React from "react";
import {Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import BlogDetail from "./component/blog/BlogDetail";
import SearchResult from "./component/blog/SearchResult";

import {ToastContainer} from "react-toastify";
import HomeComponent from "./component/page/HomeComponent";
import PageComponent from "./component/page/PageComponent";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PageComponent/>}>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/blog" element={<BlogDetail/>}/>
                    <Route path="/search" element={<SearchResult/>}/>
                    <Route path="/blog/create" element={<createBlog/>}/>

                </Route>
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
